import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin, Phone, Mail, Clock, Heart, Award, Users } from 'lucide-react';

export const About = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-accent text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-playfair font-bold mb-6 animate-fade-in">
            Our Story
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-3xl mx-auto">
            Draping Tradition with Modern Grace Since 2010
          </p>
        </div>
      </section>

      {/* About Content */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto space-y-8 text-lg text-muted-foreground">
          <p className="text-xl leading-relaxed">
            Welcome to <span className="text-primary font-semibold">SareeVastra</span>, where every saree tells a story of timeless elegance, 
            traditional craftsmanship, and contemporary style. Established in the heart of Surat, Gujarat—India's textile capital—we've been 
            celebrating the beauty of Indian sarees for over a decade.
          </p>
          
          <p className="leading-relaxed">
            Our journey began with a simple vision: to make authentic, high-quality Indian sarees accessible to women everywhere. 
            What started as a small boutique has blossomed into a trusted destination for saree enthusiasts across the country, 
            bridging the gap between heritage craftsmanship and modern shopping convenience.
          </p>

          <p className="leading-relaxed">
            At SareeVastra, we work directly with skilled weavers and artisans from across India, ensuring that every saree in our 
            collection represents genuine artistry and superior quality. From the lustrous silks of Kanchipuram to the intricate 
            weaves of Banarasi, each piece is carefully curated to bring you the finest in Indian textile tradition.
          </p>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-accent/5 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-playfair font-bold text-center mb-12">Why Choose Us</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="p-8 text-center space-y-4 hover-lift">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <Heart className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-playfair font-semibold">Authentic Quality</h3>
              <p className="text-muted-foreground">
                Every saree is handpicked and authenticated to ensure you receive only genuine, premium quality products.
              </p>
            </Card>

            <Card className="p-8 text-center space-y-4 hover-lift">
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto">
                <Award className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="text-2xl font-playfair font-semibold">Artisan Support</h3>
              <p className="text-muted-foreground">
                We work directly with skilled weavers, ensuring fair trade practices and supporting traditional craftsmanship.
              </p>
            </Card>

            <Card className="p-8 text-center space-y-4 hover-lift">
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto">
                <Users className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-2xl font-playfair font-semibold">Customer First</h3>
              <p className="text-muted-foreground">
                Your satisfaction is our priority. We offer personalized service and hassle-free returns to ensure a delightful experience.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Store Location */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-playfair font-bold mb-4">Visit Our Flagship Store</h2>
            <p className="text-xl text-muted-foreground">
              Experience the magic of sarees in person at our beautiful boutique in Surat
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Store Details */}
            <Card className="p-8 space-y-6">
              <h3 className="text-2xl font-playfair font-semibold mb-6">SareeVastra Boutique</h3>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold">Address</p>
                    <p className="text-muted-foreground">
                      Ring Road, Near Udhna Darwaja<br />
                      Surat, Gujarat 395002<br />
                      India
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Phone className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold">Phone</p>
                    <p className="text-muted-foreground">+91 98765 43210</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Mail className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold">Email</p>
                    <p className="text-muted-foreground">hello@sareevastra.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Clock className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold">Opening Hours</p>
                    <p className="text-muted-foreground">
                      Monday - Saturday: 10:00 AM - 8:00 PM<br />
                      Sunday: 11:00 AM - 6:00 PM
                    </p>
                  </div>
                </div>
              </div>

              <Button variant="luxury" size="lg" className="w-full mt-6">
                <MapPin className="w-5 h-5 mr-2" />
                Get Directions
              </Button>
            </Card>

            {/* Map Placeholder */}
            <Card className="overflow-hidden">
              <div className="w-full h-full min-h-[400px] bg-muted flex items-center justify-center">
                <div className="text-center space-y-4">
                  <MapPin className="w-16 h-16 text-primary mx-auto" />
                  <p className="text-xl font-semibold">Visit Us in Surat</p>
                  <p className="text-muted-foreground max-w-sm">
                    Our beautiful boutique showcases the finest collection of traditional and contemporary sarees
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};
