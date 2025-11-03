import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Heart, ShoppingCart, Star } from 'lucide-react';
import { toast } from 'sonner';
import sareeBlue from '@/assets/saree-silk-blue.jpg';
import sareeGreen from '@/assets/saree-handloom-green.jpg';
import sareePink from '@/assets/saree-bridal-pink.jpg';
import sareeRed from '@/assets/saree-banarasi-red.jpg';
import sareePeach from '@/assets/saree-cotton-peach.jpg';

export const Shop = () => {
  const [sortBy, setSortBy] = useState('featured');

  const products = [
    { id: 1, name: 'Royal Blue Silk Saree', price: 12999, category: 'Silk', color: 'Blue', image: sareeBlue, rating: 4.8 },
    { id: 2, name: 'Emerald Handloom Cotton', price: 8499, category: 'Cotton', color: 'Green', image: sareeGreen, rating: 4.9 },
    { id: 3, name: 'Pink Bridal Designer Saree', price: 24999, category: 'Bridal', color: 'Pink', image: sareePink, rating: 5.0 },
    { id: 4, name: 'Classic Red Banarasi Silk', price: 15999, category: 'Silk', color: 'Red', image: sareeRed, rating: 4.7 },
    { id: 5, name: 'Peach Cotton Floral Saree', price: 6499, category: 'Cotton', color: 'Peach', image: sareePeach, rating: 4.6 },
    { id: 6, name: 'Golden Silk Festive Saree', price: 13999, category: 'Silk', color: 'Gold', image: sareeBlue, rating: 4.8 },
  ];

  const handleAddToWishlist = (productName: string) => {
    toast.info('Please log in to add items to your wishlist', {
      description: 'Create an account to save your favorite sarees',
    });
  };

  const handleAddToCart = (productName: string) => {
    toast.info('Please log in to add items to cart', {
      description: 'Sign in to start shopping',
    });
  };

  return (
    <div className="min-h-screen">
      {/* Page Header */}
      <section className="bg-gradient-to-r from-primary to-accent text-primary-foreground py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-playfair font-bold mb-4">
            Shop Our Collection
          </h1>
          <p className="text-xl text-primary-foreground/90">
            Discover timeless elegance in every drape
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        {/* Filters & Sort */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          <div className="flex flex-wrap gap-4">
            <Select defaultValue="all">
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                <SelectItem value="silk">Silk Sarees</SelectItem>
                <SelectItem value="cotton">Cotton Sarees</SelectItem>
                <SelectItem value="designer">Designer Sarees</SelectItem>
                <SelectItem value="bridal">Bridal Sarees</SelectItem>
              </SelectContent>
            </Select>

            <Select defaultValue="all">
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Color" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Colors</SelectItem>
                <SelectItem value="red">Red</SelectItem>
                <SelectItem value="blue">Blue</SelectItem>
                <SelectItem value="green">Green</SelectItem>
                <SelectItem value="pink">Pink</SelectItem>
                <SelectItem value="gold">Gold</SelectItem>
              </SelectContent>
            </Select>

            <Select defaultValue="all">
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Price Range" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Prices</SelectItem>
                <SelectItem value="under5k">Under ₹5,000</SelectItem>
                <SelectItem value="5k-10k">₹5,000 - ₹10,000</SelectItem>
                <SelectItem value="10k-20k">₹10,000 - ₹20,000</SelectItem>
                <SelectItem value="above20k">Above ₹20,000</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex items-center space-x-2">
            <span className="text-sm text-muted-foreground">Sort by:</span>
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-[180px]">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="featured">Featured</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
                <SelectItem value="rating">Highest Rated</SelectItem>
                <SelectItem value="newest">Newest First</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <Card key={product.id} className="group overflow-hidden hover-lift border-2 hover:border-primary transition-all duration-300">
              <div className="relative aspect-square overflow-hidden">
                <Link to={`/product/${product.id}`}>
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </Link>
                
                {/* Hover Actions */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6 space-x-3">
                  <Button 
                    variant="secondary" 
                    size="icon"
                    className="rounded-full"
                    onClick={() => handleAddToWishlist(product.name)}
                  >
                    <Heart className="w-5 h-5" />
                  </Button>
                  <Button 
                    variant="gold" 
                    size="icon"
                    className="rounded-full"
                    onClick={() => handleAddToCart(product.name)}
                  >
                    <ShoppingCart className="w-5 h-5" />
                  </Button>
                </div>

                {/* Rating Badge */}
                <div className="absolute top-4 right-4 bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm font-semibold flex items-center space-x-1">
                  <Star className="w-4 h-4 fill-current" />
                  <span>{product.rating}</span>
                </div>
              </div>

              <div className="p-6 space-y-3">
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <span>{product.category}</span>
                  <span>{product.color}</span>
                </div>
                
                <Link to={`/product/${product.id}`}>
                  <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                    {product.name}
                  </h3>
                </Link>

                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-primary">
                    ₹{product.price.toLocaleString()}
                  </span>
                  <Link to={`/product/${product.id}`}>
                    <Button variant="outline" size="sm">
                      View Details
                    </Button>
                  </Link>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Pagination */}
        <div className="mt-12 flex justify-center items-center space-x-2">
          <Button variant="outline" disabled>Previous</Button>
          <Button variant="luxury">1</Button>
          <Button variant="outline">2</Button>
          <Button variant="outline">3</Button>
          <Button variant="outline">Next</Button>
        </div>
      </div>
    </div>
  );
};
