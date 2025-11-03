import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Heart, ShoppingCart, Star, Check, Share2, ChevronLeft } from 'lucide-react';
import { toast } from 'sonner';
import sareeBlue from '@/assets/saree-silk-blue.jpg';
import sareeGreen from '@/assets/saree-handloom-green.jpg';
import sareePink from '@/assets/saree-bridal-pink.jpg';

export const ProductDetail = () => {
  const { id } = useParams();
  const [selectedImage, setSelectedImage] = useState(0);

  // Mock product data
  const product = {
    id: 1,
    name: 'Royal Blue Silk Saree with Golden Border',
    price: 12999,
    originalPrice: 16999,
    discount: 24,
    rating: 4.8,
    reviews: 127,
    category: 'Silk Sarees',
    fabric: 'Pure Silk',
    color: 'Royal Blue',
    occasion: 'Wedding, Festive',
    inStock: true,
    description: 'Elevate your elegance with this exquisite Royal Blue Silk Saree featuring intricate golden embroidery and traditional motifs. Crafted from premium quality silk, this saree offers a luxurious drape and lustrous finish perfect for weddings and special occasions.',
    features: [
      'Premium quality pure silk fabric',
      'Intricate golden zari work and embroidery',
      'Traditional Indian motifs',
      'Comes with unstitched blouse piece',
      'Dry clean only',
      'Length: 6.3 meters including blouse piece'
    ],
    images: [sareeBlue, sareeGreen, sareePink]
  };

  const handleAddToCart = () => {
    toast.info('Please log in to add items to cart', {
      description: 'Sign in to start shopping',
    });
  };

  const handleAddToWishlist = () => {
    toast.info('Please log in to add items to wishlist', {
      description: 'Create an account to save your favorites',
    });
  };

  return (
    <div className="min-h-screen">
      {/* Breadcrumb */}
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
          <Link to="/" className="hover:text-primary">Home</Link>
          <span>/</span>
          <Link to="/shop" className="hover:text-primary">Shop</Link>
          <span>/</span>
          <span className="text-foreground">{product.category}</span>
        </div>
        <Link to="/shop" className="inline-flex items-center mt-4 text-primary hover:underline">
          <ChevronLeft className="w-4 h-4 mr-1" />
          Back to Shop
        </Link>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="relative aspect-square overflow-hidden rounded-lg border-2 border-border">
              <img 
                src={product.images[selectedImage]} 
                alt={product.name}
                className="w-full h-full object-cover"
              />
              {product.discount > 0 && (
                <Badge className="absolute top-4 left-4 bg-destructive text-destructive-foreground text-lg px-4 py-2">
                  {product.discount}% OFF
                </Badge>
              )}
            </div>
            
            <div className="grid grid-cols-3 gap-4">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`aspect-square rounded-lg overflow-hidden border-2 transition-all ${
                    selectedImage === index ? 'border-primary scale-95' : 'border-border hover:border-primary/50'
                  }`}
                >
                  <img src={image} alt={`View ${index + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <Badge variant="secondary" className="mb-3">{product.category}</Badge>
              <h1 className="text-4xl font-playfair font-bold text-foreground mb-4">
                {product.name}
              </h1>
              
              <div className="flex items-center space-x-4 mb-4">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`w-5 h-5 ${i < Math.floor(product.rating) ? 'fill-secondary text-secondary' : 'text-gray-300'}`}
                    />
                  ))}
                  <span className="ml-2 text-lg font-semibold">{product.rating}</span>
                </div>
                <span className="text-muted-foreground">({product.reviews} reviews)</span>
              </div>

              <div className="flex items-baseline space-x-4 mb-6">
                <span className="text-4xl font-bold text-primary">₹{product.price.toLocaleString()}</span>
                {product.originalPrice > product.price && (
                  <>
                    <span className="text-2xl text-muted-foreground line-through">
                      ₹{product.originalPrice.toLocaleString()}
                    </span>
                    <Badge variant="destructive">Save ₹{(product.originalPrice - product.price).toLocaleString()}</Badge>
                  </>
                )}
              </div>

              <p className="text-lg text-muted-foreground leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Product Details */}
            <Card className="p-6 space-y-3 bg-accent/10">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <span className="text-sm text-muted-foreground">Fabric</span>
                  <p className="font-semibold">{product.fabric}</p>
                </div>
                <div>
                  <span className="text-sm text-muted-foreground">Color</span>
                  <p className="font-semibold">{product.color}</p>
                </div>
                <div>
                  <span className="text-sm text-muted-foreground">Occasion</span>
                  <p className="font-semibold">{product.occasion}</p>
                </div>
                <div>
                  <span className="text-sm text-muted-foreground">Availability</span>
                  <p className="font-semibold text-green-600 flex items-center">
                    <Check className="w-4 h-4 mr-1" /> In Stock
                  </p>
                </div>
              </div>
            </Card>

            {/* Features */}
            <div>
              <h3 className="text-xl font-playfair font-semibold mb-3">Product Features</h3>
              <ul className="space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-start space-x-2 text-muted-foreground">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Actions */}
            <div className="space-y-4 pt-4">
              <div className="flex space-x-4">
                <Button 
                  variant="luxury" 
                  size="lg" 
                  className="flex-1"
                  onClick={handleAddToCart}
                >
                  <ShoppingCart className="w-5 h-5 mr-2" />
                  Add to Cart
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  onClick={handleAddToWishlist}
                >
                  <Heart className="w-5 h-5" />
                </Button>
                <Button variant="outline" size="lg">
                  <Share2 className="w-5 h-5" />
                </Button>
              </div>
              
              <Button variant="gold" size="lg" className="w-full">
                Buy Now
              </Button>
            </div>
          </div>
        </div>

        {/* Customer Reviews Section */}
        <div className="mt-20">
          <h2 className="text-3xl font-playfair font-bold mb-8">Customer Reviews</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: 'Priya S.', rating: 5, review: 'Absolutely stunning! The quality exceeded my expectations. Perfect for my sister\'s wedding.', date: '2 weeks ago' },
              { name: 'Anjali M.', rating: 5, review: 'Beautiful saree with excellent fabric quality. The color is exactly as shown in pictures.', date: '1 month ago' },
              { name: 'Neha K.', rating: 4, review: 'Gorgeous saree! Minor delay in delivery but worth the wait. Highly recommended!', date: '1 month ago' },
            ].map((review, index) => (
              <Card key={index} className="p-6 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-semibold">{review.name}</span>
                  <span className="text-sm text-muted-foreground">{review.date}</span>
                </div>
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`w-4 h-4 ${i < review.rating ? 'fill-secondary text-secondary' : 'text-gray-300'}`}
                    />
                  ))}
                </div>
                <p className="text-muted-foreground">{review.review}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
