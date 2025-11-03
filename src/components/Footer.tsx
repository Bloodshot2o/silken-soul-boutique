import { Link } from 'react-router-dom';
import { Facebook, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* About Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-playfair font-bold text-secondary">SareeVastra</h3>
            <p className="text-sm text-primary-foreground/80">
              Grace in Every Drape. Discover timeless Indian sarees that blend tradition with modern elegance.
            </p>
            <div className="flex space-x-3">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" 
                className="p-2 bg-primary-foreground/10 hover:bg-secondary hover:text-secondary-foreground rounded-full transition-all duration-300 hover:scale-110">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"
                className="p-2 bg-primary-foreground/10 hover:bg-secondary hover:text-secondary-foreground rounded-full transition-all duration-300 hover:scale-110">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer"
                className="p-2 bg-primary-foreground/10 hover:bg-secondary hover:text-secondary-foreground rounded-full transition-all duration-300 hover:scale-110">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-playfair font-semibold mb-4 text-secondary">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm hover:text-secondary transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/shop" className="text-sm hover:text-secondary transition-colors">Shop</Link>
              </li>
              <li>
                <Link to="/about" className="text-sm hover:text-secondary transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm hover:text-secondary transition-colors">Contact</Link>
              </li>
              <li>
                <Link to="/wishlist" className="text-sm hover:text-secondary transition-colors">Wishlist</Link>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="text-lg font-playfair font-semibold mb-4 text-secondary">Customer Service</h4>
            <ul className="space-y-2">
              <li className="text-sm hover:text-secondary transition-colors cursor-pointer">FAQ</li>
              <li className="text-sm hover:text-secondary transition-colors cursor-pointer">Shipping & Returns</li>
              <li className="text-sm hover:text-secondary transition-colors cursor-pointer">Size Guide</li>
              <li className="text-sm hover:text-secondary transition-colors cursor-pointer">Privacy Policy</li>
              <li className="text-sm hover:text-secondary transition-colors cursor-pointer">Terms & Conditions</li>
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div>
            <h4 className="text-lg font-playfair font-semibold mb-4 text-secondary">Stay Connected</h4>
            <div className="space-y-3 mb-4">
              <div className="flex items-start space-x-2 text-sm">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                <span>Ring Road, Surat, Gujarat 395002</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <Phone className="w-4 h-4" />
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <Mail className="w-4 h-4" />
                <span>hello@sareevastra.com</span>
              </div>
            </div>
            <div className="space-y-2">
              <p className="text-sm font-medium">Subscribe to our newsletter</p>
              <div className="flex space-x-2">
                <Input 
                  type="email" 
                  placeholder="Your email" 
                  className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50"
                />
                <Button variant="gold" size="sm">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 pt-6 text-center">
          <p className="text-sm text-primary-foreground/70">
            © 2024 SareeVastra. All rights reserved. Crafted with ❤️ in India.
          </p>
        </div>
      </div>
    </footer>
  );
};
