import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Heart, ShoppingCart, Star, Search, Filter, SlidersHorizontal } from 'lucide-react';
import { toast } from 'sonner';
import sareeBlue from '@/assets/saree-silk-blue.jpg';
import sareeGreen from '@/assets/saree-handloom-green.jpg';
import sareePink from '@/assets/saree-bridal-pink.jpg';
import sareeRed from '@/assets/saree-banarasi-red.jpg';
import sareePeach from '@/assets/saree-cotton-peach.jpg';

export const Shop = () => {
  const [sortBy, setSortBy] = useState('featured');
  const [showFilters, setShowFilters] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const categories = {
    'Silk Sarees': ['Kanchipuram Silk', 'Banarasi Silk', 'Tussar Silk', 'Mysore Silk', 'Patola Silk'],
    'Cotton Sarees': ['Handloom Cotton', 'Pure Cotton', 'Khadi Cotton', 'South Cotton', 'Printed Cotton'],
    'Designer Sarees': ['Bollywood Style', 'Contemporary', 'Indo-Western', 'Modern Embroidered', 'Fusion'],
    'Traditional Sarees': ['Banarasi', 'Kanjeevaram', 'Chanderi', 'Maheshwari', 'Paithani'],
    'Occasion Wear': ['Wedding', 'Party Wear', 'Festive', 'Casual', 'Office Wear'],
    'Special Collection': ['Bridal Exclusive', 'Heritage Collection', 'Limited Edition', 'Handwoven Artisan']
  };

  const colors = [
    'Red', 'Blue', 'Green', 'Pink', 'Yellow', 'Orange', 'Purple', 'Gold', 
    'Maroon', 'Teal', 'Peach', 'Black', 'White', 'Cream', 'Multi-Color'
  ];

  const priceRanges = [
    { label: 'Under ₹3,000', value: 'under3k' },
    { label: '₹3,000 - ₹5,000', value: '3k-5k' },
    { label: '₹5,000 - ₹10,000', value: '5k-10k' },
    { label: '₹10,000 - ₹20,000', value: '10k-20k' },
    { label: '₹20,000 - ₹40,000', value: '20k-40k' },
    { label: 'Above ₹40,000', value: 'above40k' }
  ];

  const fabrics = [
    'Pure Silk', 'Art Silk', 'Cotton', 'Georgette', 'Chiffon', 
    'Crepe', 'Net', 'Velvet', 'Satin', 'Organza', 'Tissue'
  ];

  const works = [
    'Embroidery', 'Zari Work', 'Stone Work', 'Sequins', 'Mirror Work',
    'Thread Work', 'Beads Work', 'Digital Print', 'Hand Painted', 'Bandhani'
  ];

  const products = [
    { id: 1, name: 'Royal Blue Kanchipuram Silk', price: 12999, category: 'Silk Sarees', subcategory: 'Kanchipuram Silk', color: 'Blue', fabric: 'Pure Silk', image: sareeBlue, rating: 4.8, reviews: 127, trending: true },
    { id: 2, name: 'Emerald Handloom Cotton Saree', price: 8499, category: 'Cotton Sarees', subcategory: 'Handloom Cotton', color: 'Green', fabric: 'Cotton', image: sareeGreen, rating: 4.9, reviews: 98, newArrival: true },
    { id: 3, name: 'Pink Bridal Designer Exclusive', price: 24999, category: 'Designer Sarees', subcategory: 'Bollywood Style', color: 'Pink', fabric: 'Georgette', image: sareePink, rating: 5.0, reviews: 156, exclusive: true },
    { id: 4, name: 'Classic Red Banarasi Silk Heritage', price: 15999, category: 'Traditional Sarees', subcategory: 'Banarasi', color: 'Red', fabric: 'Pure Silk', image: sareeRed, rating: 4.7, reviews: 201, trending: true },
    { id: 5, name: 'Peach Floral Cotton Party Wear', price: 6499, category: 'Cotton Sarees', subcategory: 'Printed Cotton', color: 'Peach', fabric: 'Cotton', image: sareePeach, rating: 4.6, reviews: 89 },
    { id: 6, name: 'Golden Tissue Festive Collection', price: 13999, category: 'Occasion Wear', subcategory: 'Festive', color: 'Gold', fabric: 'Tissue', image: sareeBlue, rating: 4.8, reviews: 134, newArrival: true },
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
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-accent to-secondary opacity-95" />
        <div className="absolute inset-0 bg-pattern-mandala" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <Badge className="mb-4 bg-secondary text-secondary-foreground px-6 py-2 text-base animate-bounce">
            ✨ New Collection Just Dropped!
          </Badge>
          <h1 className="text-5xl md:text-7xl font-playfair font-bold mb-6 text-primary-foreground animate-fade-in">
            Explore Our Collection
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-3xl mx-auto">
            1000+ Handpicked Sarees from Master Artisans Across India
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        {/* Search Bar */}
        <div className="mb-8 max-w-2xl mx-auto">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search for sarees by name, color, fabric, or occasion..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-12 pr-4 py-6 text-lg rounded-xl shadow-lg border-2 focus:border-primary"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Filters Sidebar */}
          <aside className={`lg:block ${showFilters ? 'block' : 'hidden'} space-y-6`}>
            <Card className="p-6 sticky top-24">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-playfair font-bold flex items-center">
                  <Filter className="w-6 h-6 mr-2 text-primary" />
                  Filters
                </h2>
                <Button variant="ghost" size="sm" className="text-primary">
                  Clear All
                </Button>
              </div>

              <Accordion type="multiple" defaultValue={['categories', 'price', 'color']} className="space-y-4">
                {/* Categories */}
                <AccordionItem value="categories" className="border-b border-border">
                  <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                    Categories
                  </AccordionTrigger>
                  <AccordionContent>
                    <Accordion type="single" collapsible className="space-y-2">
                      {Object.entries(categories).map(([category, subcategories]) => (
                        <AccordionItem key={category} value={category} className="border-none">
                          <AccordionTrigger className="text-sm font-medium py-2 hover:text-primary">
                            {category}
                          </AccordionTrigger>
                          <AccordionContent>
                            <div className="space-y-2 ml-4">
                              {subcategories.map((sub) => (
                                <label key={sub} className="flex items-center space-x-2 cursor-pointer group">
                                  <input type="checkbox" className="rounded border-border" />
                                  <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                                    {sub}
                                  </span>
                                </label>
                              ))}
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </AccordionContent>
                </AccordionItem>

                {/* Price Range */}
                <AccordionItem value="price" className="border-b border-border">
                  <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                    Price Range
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-3">
                      {priceRanges.map((range) => (
                        <label key={range.value} className="flex items-center space-x-2 cursor-pointer group">
                          <input type="radio" name="price" value={range.value} className="border-border" />
                          <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                            {range.label}
                          </span>
                        </label>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>

                {/* Colors */}
                <AccordionItem value="color" className="border-b border-border">
                  <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                    Color
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="grid grid-cols-3 gap-3">
                      {colors.map((color) => (
                        <label key={color} className="flex items-center space-x-2 cursor-pointer group">
                          <input type="checkbox" className="rounded border-border" />
                          <span className="text-xs text-muted-foreground group-hover:text-foreground transition-colors">
                            {color}
                          </span>
                        </label>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>

                {/* Fabric */}
                <AccordionItem value="fabric" className="border-b border-border">
                  <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                    Fabric Type
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-2">
                      {fabrics.map((fabric) => (
                        <label key={fabric} className="flex items-center space-x-2 cursor-pointer group">
                          <input type="checkbox" className="rounded border-border" />
                          <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                            {fabric}
                          </span>
                        </label>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>

                {/* Work Type */}
                <AccordionItem value="work" className="border-none">
                  <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                    Work & Embellishments
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-2">
                      {works.map((work) => (
                        <label key={work} className="flex items-center space-x-2 cursor-pointer group">
                          <input type="checkbox" className="rounded border-border" />
                          <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                            {work}
                          </span>
                        </label>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </Card>
          </aside>

          {/* Products Grid */}
          <div className="lg:col-span-3 space-y-6">
            {/* Toolbar */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-card p-4 rounded-xl border border-border">
              <div className="flex items-center space-x-4">
                <Button
                  variant="outline"
                  size="sm"
                  className="lg:hidden"
                  onClick={() => setShowFilters(!showFilters)}
                >
                  <SlidersHorizontal className="w-4 h-4 mr-2" />
                  Filters
                </Button>
                <span className="text-muted-foreground">
                  Showing <span className="font-semibold text-foreground">{products.length}</span> of 1000+ sarees
                </span>
              </div>

              <div className="flex items-center space-x-2">
                <span className="text-sm text-muted-foreground">Sort by:</span>
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-[200px] bg-background">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="bg-popover z-50">
                    <SelectItem value="featured">Featured</SelectItem>
                    <SelectItem value="newest">Newest First</SelectItem>
                    <SelectItem value="price-low">Price: Low to High</SelectItem>
                    <SelectItem value="price-high">Price: High to Low</SelectItem>
                    <SelectItem value="rating">Highest Rated</SelectItem>
                    <SelectItem value="popular">Most Popular</SelectItem>
                    <SelectItem value="discount">Best Discount</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {products.map((product) => (
                <Card key={product.id} className="group overflow-hidden hover-lift border-2 hover:border-primary transition-all duration-300 relative">
                  {/* Badges */}
                  <div className="absolute top-3 left-3 z-20 flex flex-col gap-2">
                    {product.trending && (
                      <Badge className="bg-accent text-accent-foreground font-semibold">
                        🔥 Trending
                      </Badge>
                    )}
                    {product.newArrival && (
                      <Badge className="bg-secondary text-secondary-foreground font-semibold">
                        ✨ New
                      </Badge>
                    )}
                    {product.exclusive && (
                      <Badge className="bg-primary text-primary-foreground font-semibold">
                        👑 Exclusive
                      </Badge>
                    )}
                  </div>

                  <div className="relative aspect-[3/4] overflow-hidden">
                    <Link to={`/product/${product.id}`}>
                      <img 
                        src={product.image} 
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </Link>
                    
                    {/* Hover Actions */}
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6 space-x-3">
                      <Button 
                        variant="secondary" 
                        size="icon"
                        className="rounded-full shadow-xl"
                        onClick={() => handleAddToWishlist(product.name)}
                      >
                        <Heart className="w-5 h-5" />
                      </Button>
                      <Button 
                        variant="gold" 
                        size="icon"
                        className="rounded-full shadow-xl"
                        onClick={() => handleAddToCart(product.name)}
                      >
                        <ShoppingCart className="w-5 h-5" />
                      </Button>
                    </div>

                    {/* Rating Badge */}
                    <div className="absolute top-3 right-3 bg-background/95 backdrop-blur-sm px-3 py-1.5 rounded-full text-sm font-bold flex items-center space-x-1 shadow-lg">
                      <Star className="w-4 h-4 fill-secondary text-secondary" />
                      <span>{product.rating}</span>
                    </div>
                  </div>

                  <div className="p-5 space-y-3">
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <Badge variant="outline" className="font-normal">{product.subcategory}</Badge>
                      <span className="flex items-center">
                        <span className="mr-1">👁</span> {product.reviews} reviews
                      </span>
                    </div>
                    
                    <Link to={`/product/${product.id}`}>
                      <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2 min-h-[3.5rem]">
                        {product.name}
                      </h3>
                    </Link>

                    <div className="flex items-center gap-2 text-xs">
                      <Badge variant="secondary" className="font-normal">{product.fabric}</Badge>
                      <Badge variant="outline" className="font-normal">{product.color}</Badge>
                    </div>

                    <div className="flex items-center justify-between pt-2 border-t border-border">
                      <div>
                        <span className="text-2xl font-bold text-primary">
                          ₹{product.price.toLocaleString()}
                        </span>
                      </div>
                      <Link to={`/product/${product.id}`}>
                        <Button variant="outline" size="sm" className="hover:bg-primary hover:text-primary-foreground">
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
              <Button variant="outline">4</Button>
              <Button variant="outline">5</Button>
              <span className="px-3">...</span>
              <Button variant="outline">50</Button>
              <Button variant="outline">Next</Button>
            </div>

            {/* Total Results */}
            <p className="text-center text-muted-foreground">
              Showing 6 of 1000+ beautiful sarees
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
