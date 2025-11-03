import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Heart } from 'lucide-react';

export const Wishlist = () => {
  return (
    <div className="min-h-screen">
      {/* Page Header */}
      <section className="bg-gradient-to-r from-primary to-accent text-primary-foreground py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-playfair font-bold mb-4">
            My Wishlist
          </h1>
          <p className="text-xl text-primary-foreground/90">
            Save your favorite sarees for later
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-20">
        <div className="text-center max-w-2xl mx-auto">
          <div className="w-32 h-32 bg-muted rounded-full flex items-center justify-center mx-auto mb-8">
            <Heart className="w-16 h-16 text-muted-foreground" />
          </div>
          <h2 className="text-3xl font-playfair font-bold mb-4">Your Wishlist is Empty</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Please log in to save your favorite sarees and access them anytime!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/auth">
              <Button variant="luxury" size="lg">
                Login to Save Favorites
              </Button>
            </Link>
            <Link to="/shop">
              <Button variant="outline" size="lg">
                Continue Shopping
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
