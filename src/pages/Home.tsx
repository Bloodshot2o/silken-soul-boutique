import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowRight, Sparkles, Star } from 'lucide-react';
import heroImage from '@/assets/hero-saree-1.jpg';
import sareeBlue from '@/assets/saree-silk-blue.jpg';
import sareeGreen from '@/assets/saree-handloom-green.jpg';
import sareePink from '@/assets/saree-bridal-pink.jpg';
import sareeRed from '@/assets/saree-banarasi-red.jpg';

export const Home = () => {
  const categories = [
    { name: 'Silk Sarees', image: sareeBlue, count: '150+ Designs' },
    { name: 'Cotton Sarees', image: sareeGreen, count: '200+ Designs' },
    { name: 'Designer Sarees', image: sareePink, count: '80+ Designs' },
    { name: 'Banarasi Sarees', image: sareeRed, count: '120+ Designs' },
  ];

  const featured = [
    { id: 1, name: 'Royal Blue Silk Saree', price: '₹12,999', image: sareeBlue, rating: 4.8 },
    { id: 2, name: 'Emerald Handloom Saree', price: '₹8,499', image: sareeGreen, rating: 4.9 },
    { id: 3, name: 'Bridal Pink Designer', price: '₹24,999', image: sareePink, rating: 5.0 },
    { id: 4, name: 'Classic Red Banarasi', price: '₹15,999', image: sareeRed, rating: 4.7 },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px] md:h-[700px] overflow-hidden bg-pattern-mandala">
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt="Elegant Saree Collection" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-accent/70" />
        </div>
        
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl text-primary-foreground space-y-6 animate-fade-in">
            <div className="flex items-center space-x-2 text-secondary">
              <Sparkles className="w-6 h-6" />
              <span className="text-lg font-medium">Premium Indian Sarees</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-playfair font-bold leading-tight">
              Grace in Every <span className="text-gradient-gold">Drape</span>
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 font-light">
              Discover Timeless Indian Sarees
            </p>
            <p className="text-lg text-primary-foreground/80">
              Handpicked collection of Silk, Cotton, Designer & Bridal Sarees
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Link to="/shop">
                <Button variant="gold" size="lg" className="group">
                  Explore Collection
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/about">
                <Button variant="outline" size="lg" className="bg-transparent border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                  Visit Our Store
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-foreground">
            Shop by Category
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our curated collection of traditional and contemporary sarees
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <Link to="/shop" key={index}>
              <Card className="group overflow-hidden border-2 hover:border-primary transition-all duration-300 hover-lift cursor-pointer">
                <div className="relative aspect-square overflow-hidden">
                  <img 
                    src={category.image} 
                    alt={category.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-6 text-center space-y-2">
                  <h3 className="text-xl font-playfair font-semibold text-foreground group-hover:text-primary transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">{category.count}</p>
                  <Button variant="ghost" size="sm" className="mt-2 group-hover:text-primary">
                    Shop Now <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="container mx-auto px-4 py-20 bg-accent/5 -mx-4">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-foreground">
            Featured Collection
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Handpicked bestsellers loved by our customers
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featured.map((product) => (
            <Link to={`/product/${product.id}`} key={product.id}>
              <Card className="group overflow-hidden hover-lift cursor-pointer border-2 hover:border-secondary transition-all duration-300">
                <div className="relative aspect-square overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm font-semibold flex items-center space-x-1">
                    <Star className="w-4 h-4 fill-current" />
                    <span>{product.rating}</span>
                  </div>
                </div>
                <div className="p-5 space-y-3">
                  <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                    {product.name}
                  </h3>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-primary">{product.price}</span>
                    <Button variant="luxury" size="sm">
                      View Details
                    </Button>
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/shop">
            <Button variant="luxury" size="lg">
              View All Products
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Testimonials */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-foreground">
            What Our Customers Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real experiences from real saree lovers
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { name: 'Priya Sharma', review: 'Absolutely stunning quality! The silk saree I ordered exceeded my expectations. Beautiful craftsmanship.', rating: 5 },
            { name: 'Anita Patel', review: 'Best online saree shopping experience. Fast delivery and the colors were exactly as shown in pictures!', rating: 5 },
            { name: 'Meera Singh', review: 'Bought a bridal saree for my wedding. It was perfect! Thank you SareeVastra for making my day special.', rating: 5 },
          ].map((testimonial, index) => (
            <Card key={index} className="p-6 space-y-4 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center space-x-1 text-secondary">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <p className="text-muted-foreground italic">"{testimonial.review}"</p>
              <p className="font-semibold text-foreground">— {testimonial.name}</p>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
};
