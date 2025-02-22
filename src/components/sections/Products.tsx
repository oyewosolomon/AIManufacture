import React, { useState } from 'react';
import { Leaf, X, Clock } from 'lucide-react';

// Define types
type Category = {
  id: string;
  name: string;
};

type Product = {
  id: number;
  name: string;
  category: string;
  growthTime: string;
  yield: string;
  nutrition: string;
  image: string;
  description: string;
};

// Product Gallery Section
const ProductGallery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const categories: Category[] = [
    { id: 'all', name: 'All Produce' },
    { id: 'leafy', name: 'Leafy Greens' },
    { id: 'herbs', name: 'Fresh Herbs' },
    { id: 'microgreens', name: 'Microgreens' },
    { id: 'specialty', name: 'Specialty Crops' },
  ];

  const products: Product[] = [
    {
      id: 1,
      name: 'Baby Spinach',
      category: 'leafy',
      growthTime: '21-28 days',
      yield: '3.2 lbs/sq ft',
      nutrition: 'High in Iron, Vitamin K, A, C',
      image: 'https://images.unsplash.com/photo-1592417817038-d13fd7342605?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      description: 'Tender baby spinach leaves grown in optimal conditions for maximum nutrient density.',
    },
    {
      id: 2,
      name: 'Fresh Basil',
      category: 'herbs',
      growthTime: '28-35 days',
      yield: '2.8 lbs/sq ft',
      nutrition: 'Rich in Antioxidants, Vitamin K',
      image: 'https://images.pexels.com/photos/128536/pexels-photo-128536.jpeg',
      description: 'Aromatic basil grown year-round in controlled environments.',
    },
    {
      id: 3,
      name: 'Kale Mix',
      category: 'leafy',
      growthTime: '30-35 days',
      yield: '2.9 lbs/sq ft',
      nutrition: 'High in Vitamin K, C, and Fiber',
      image: 'https://images.unsplash.com/photo-1576045057995-568f588f82fb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      description: 'Mix of curly and dinosaur kale varieties, packed with nutrients.',
    },
    {
      id: 4,
      name: 'Radish Microgreens',
      category: 'microgreens',
      growthTime: '7-10 days',
      yield: '1.5 lbs/sq ft',
      nutrition: 'Concentrated Vitamins and Minerals',
      image: 'https://images.pexels.com/photos/6608543/pexels-photo-6608543.jpeg',
      description: 'Spicy and nutritious microgreens ready in just days.',
    },
    {
      id: 5,
      name: 'Edible Flowers',
      category: 'specialty',
      growthTime: '45-60 days',
      yield: '1.2 lbs/sq ft',
      nutrition: 'Rich in Antioxidants',
      image: 'https://images.unsplash.com/photo-1592415479558-4b983baf261d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      description: 'Beautiful and edible flowers for garnishing and cooking.',
    },
    {
      id: 6,
      name: 'Fresh Mint',
      category: 'herbs',
      growthTime: '21-28 days',
      yield: '2.5 lbs/sq ft',
      nutrition: 'High in Antioxidants',
      image: 'https://images.pexels.com/photos/5946087/pexels-photo-5946087.jpeg',
      description: 'Fresh mint grown in perfect conditions year-round.',
    },
  ];

  const filteredProducts: Product[] =
    activeCategory === 'all'
      ? products
      : products.filter((product) => product.category === activeCategory);

  return (
    <div className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Fresh Produce</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our variety of fresh, locally grown produce available year-round
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-2 rounded-full transition-all ${
                activeCategory === category.id
                  ? 'bg-green-600 text-white'
                  : 'bg-white text-gray-600 hover:bg-green-50'
              } shadow-sm`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105"
              onClick={() => setSelectedProduct(product)}
            >
              <div className="relative h-48">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm">
                  {categories.find((c) => c.id === product.category)?.name}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 text-green-600 mr-2" />
                    <span className="text-sm text-gray-600">{product.growthTime}</span>
                  </div>
                  <div className="flex items-center">
                    <Leaf className="w-4 h-4 text-green-600 mr-2" />
                    <span className="text-sm text-gray-600">{product.yield}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Product Modal */}
        {selectedProduct && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="relative">
                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  className="w-full h-64 object-cover rounded-t-2xl"
                />
                <button
                  onClick={() => setSelectedProduct(null)}
                  className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-lg"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{selectedProduct.name}</h3>
                <p className="text-gray-600 mb-6">{selectedProduct.description}</p>
                <div className="grid grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Growth Details</h4>
                    <div className="flex items-center mb-2">
                      <Clock className="w-4 h-4 text-green-600 mr-2" />
                      <span>Growth Time: {selectedProduct.growthTime}</span>
                    </div>
                    <div className="flex items-center">
                      <Leaf className="w-4 h-4 text-green-600 mr-2" />
                      <span>Yield: {selectedProduct.yield}</span>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Nutrition</h4>
                    <p className="text-gray-600">{selectedProduct.nutrition}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductGallery;