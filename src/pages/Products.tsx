import { useState, useMemo, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Search, Filter, Package, ChevronDown } from 'lucide-react';

interface ProductData {
  [category: string]: string[];
}

export default function Products() {
  const { t } = useTranslation();
  const [productsData, setProductsData] = useState<ProductData>({});
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [visibleCount, setVisibleCount] = useState(48);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/nonfoodgroup-website/data/products.json')
      .then((res) => res.json())
      .then((data: ProductData) => {
        setProductsData(data);
        setLoading(false);
      })
      .catch(() => {
        fetch('/data/products.json')
          .then((res) => res.json())
          .then((data: ProductData) => {
            setProductsData(data);
            setLoading(false);
          })
          .catch(() => setLoading(false));
      });
  }, []);

  const allProducts = useMemo(() => {
    return Object.entries(productsData).flatMap(([category, names]) =>
      (names as string[]).map((name) => ({ name, category }))
    );
  }, [productsData]);

  const categories = useMemo(() => Object.keys(productsData), [productsData]);

  const filteredProducts = useMemo(() => {
    let result = allProducts;
    if (selectedCategory !== 'all') {
      result = result.filter((p) => p.category === selectedCategory);
    }
    if (search.trim()) {
      const q = search.toLowerCase();
      result = result.filter((p) => p.name.toLowerCase().includes(q));
    }
    return result;
  }, [allProducts, selectedCategory, search]);

  const visibleProducts = filteredProducts.slice(0, visibleCount);
  const hasMore = visibleCount < filteredProducts.length;

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 48);
  };

  useEffect(() => {
    setVisibleCount(48);
  }, [search, selectedCategory]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="pt-20 lg:pt-24">
      <section className="bg-light border-b">
        <div className="container-narrow px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">{t('products.title')}</h1>
          <p className="text-gray-600 text-lg max-w-2xl">{t('products.subtitle')}</p>
        </div>
      </section>

      <section className="sticky top-16 lg:top-20 z-40 bg-white border-b shadow-sm">
        <div className="container-narrow px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder={t('products.search')}
                className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
              />
            </div>
            <div className="flex items-center gap-2 overflow-x-auto pb-1 md:pb-0">
              <Filter className="w-5 h-5 text-gray-400 shrink-0" />
              <button
                onClick={() => setSelectedCategory('all')}
                className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-colors ${
                  selectedCategory === 'all'
                    ? 'bg-primary text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {t('products.all_categories')}
              </button>
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-colors ${
                    selectedCategory === cat
                      ? 'bg-primary text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
          <div className="mt-3 text-sm text-gray-500">
            {t('products.showing')} {filteredProducts.length} {t('products.of')} {allProducts.length} {t('products.products')}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-narrow px-4 sm:px-6 lg:px-8">
          {filteredProducts.length === 0 ? (
            <div className="text-center py-20">
              <Package className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-medium text-gray-600 mb-2">{t('products.no_results')}</h3>
              <p className="text-gray-400">{t('products.try_different')}</p>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {visibleProducts.map((product, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-lg p-4 border border-gray-100 hover:shadow-md transition-shadow flex flex-col"
                  >
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-3 shrink-0">
                      <Package className="w-5 h-5 text-primary" />
                    </div>
                    <span className="text-xs font-medium text-primary mb-1 uppercase tracking-wide">
                      {product.category}
                    </span>
                    <h3 className="text-sm font-medium text-gray-800 leading-snug line-clamp-3">
                      {product.name}
                    </h3>
                  </div>
                ))}
              </div>

              {hasMore && (
                <div className="mt-10 text-center">
                  <button
                    onClick={handleLoadMore}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors"
                  >
                    <ChevronDown className="w-5 h-5" />
                    {t('products.load_more')}
                    <span className="text-white/80 text-sm">
                      ({visibleProducts.length} / {filteredProducts.length})
                    </span>
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </section>
    </div>
  );
}
