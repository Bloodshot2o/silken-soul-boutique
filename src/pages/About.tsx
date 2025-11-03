import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Map } from '@/components/Map';
import { MapPin, Phone, Mail, Clock, Heart, Award, Users, TrendingUp, Shield, Sparkles } from 'lucide-react';

export const About = () => {
  const milestones = [
    { year: '2010', title: 'Foundation', desc: 'Started as small boutique in Surat' },
    { year: '2015', title: 'Online Launch', desc: 'Expanded to e-commerce platform' },
    { year: '2018', title: '50K Customers', desc: 'Reached 50,000 happy customers milestone' },
    { year: '2020', title: 'Pan-India', desc: 'Shipping to every corner of India' },
    { year: '2023', title: '1000+ Artisans', desc: 'Partnered with artisans nationwide' },
    { year: '2024', title: 'Award Winning', desc: 'Best E-commerce Saree Platform' },
  ];

  const stats = [
    { icon: Users, value: '100K+', label: 'Happy Customers' },
    { icon: TrendingUp, value: '1000+', label: 'Saree Designs' },
    { icon: Award, value: '500+', label: 'Partner Artisans' },
    { icon: Sparkles, value: '4.8/5', label: 'Customer Rating' },
  ];

  const team = [
    { name: 'Priya Sharma', role: 'Founder & CEO', expertise: '15 years in textile industry' },
    { name: 'Anita Patel', role: 'Head of Design', expertise: 'Expert in traditional weaving' },
    { name: 'Rajesh Kumar', role: 'Artisan Relations', expertise: 'Connecting with craftspeople' },
    { name: 'Meera Singh', role: 'Customer Experience', expertise: 'Ensuring every customer smiles' },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-accent to-secondary opacity-95" />
        <div className="absolute inset-0 bg-pattern-mandala" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-playfair font-bold mb-6 text-primary-foreground animate-fade-in">
            Our Story
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/95 max-w-3xl mx-auto leading-relaxed">
            Weaving Dreams & Tradition Since 2010
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="container mx-auto px-4 -mt-16 relative z-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card key={index} className="p-6 text-center space-y-3 hover-lift bg-gradient-card shadow-2xl">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <stat.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-3xl font-bold text-primary">{stat.value}</h3>
              <p className="text-sm text-muted-foreground font-medium">{stat.label}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* About Content */}
      <section className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          <div className="space-y-6 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-foreground leading-tight">
              Where Tradition Meets <span className="text-gradient-gold">Modern Elegance</span>
            </h2>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              Welcome to <span className="text-primary font-semibold">SareeVastra</span>, where every saree tells a story of timeless elegance, 
              traditional craftsmanship, and contemporary style. Established in the heart of Surat, Gujarat—India's textile capital—we've been 
              celebrating the beauty of Indian sarees for over a decade.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our journey began with a simple yet powerful vision: to make authentic, high-quality Indian sarees accessible to women everywhere. 
              What started as a small boutique showcasing local artisan work has blossomed into a trusted destination for saree enthusiasts 
              across the country, bridging the gap between heritage craftsmanship and modern shopping convenience.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              At SareeVastra, we work directly with over 500 skilled weavers and artisans from across India, ensuring that every saree in our 
              collection represents genuine artistry and superior quality. From the lustrous silks of Kanchipuram to the intricate 
              weaves of Banarasi, each piece is carefully curated to bring you the finest in Indian textile tradition.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <Button variant="luxury" size="lg">
                Explore Our Collection
              </Button>
              <Button variant="outline" size="lg">
                Meet Our Artisans
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <Card className="p-6 space-y-3 hover-lift">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                <Heart className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-playfair font-semibold">Authentic Quality</h3>
              <p className="text-sm text-muted-foreground">
                Every saree is handpicked and authenticated to ensure you receive only genuine, premium quality products.
              </p>
            </Card>

            <Card className="p-6 space-y-3 hover-lift mt-8">
              <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center">
                <Award className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="text-xl font-playfair font-semibold">Artisan Support</h3>
              <p className="text-sm text-muted-foreground">
                Direct partnerships with weavers ensure fair trade and support traditional craftsmanship across India.
              </p>
            </Card>

            <Card className="p-6 space-y-3 hover-lift">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                <Shield className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-playfair font-semibold">Trusted Service</h3>
              <p className="text-sm text-muted-foreground">
                Over 100,000 happy customers trust us for authentic sarees and exceptional customer service.
              </p>
            </Card>

            <Card className="p-6 space-y-3 hover-lift mt-8">
              <div className="w-12 h-12 bg-muted/20 rounded-full flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-muted" />
              </div>
              <h3 className="text-xl font-playfair font-semibold">Curated Collection</h3>
              <p className="text-sm text-muted-foreground">
                1000+ designs ranging from traditional classics to contemporary fusion styles for every occasion.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-4">Our Journey</h2>
            <p className="text-xl text-muted-foreground">
              A decade of preserving tradition while embracing innovation
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-accent to-secondary hidden md:block" />

              <div className="space-y-12">
                {milestones.map((milestone, index) => (
                  <div key={index} className={`flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} flex-col gap-8`}>
                    <Card className="md:w-[calc(50%-2rem)] w-full p-6 hover-lift">
                      <div className="flex items-center gap-4 mb-3">
                        <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-lg">
                          {milestone.year}
                        </div>
                        <h3 className="text-2xl font-playfair font-bold">{milestone.title}</h3>
                      </div>
                      <p className="text-muted-foreground">{milestone.desc}</p>
                    </Card>
                    <div className="hidden md:block w-8 h-8 bg-secondary rounded-full border-4 border-background shadow-xl z-10" />
                    <div className="md:w-[calc(50%-2rem)]" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-4">Meet Our Team</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Passionate individuals dedicated to bringing you the finest sarees
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {team.map((member, index) => (
            <Card key={index} className="p-6 text-center space-y-4 hover-lift">
              <div className="w-24 h-24 bg-gradient-to-br from-primary to-secondary rounded-full mx-auto flex items-center justify-center text-4xl text-primary-foreground font-bold">
                {member.name.charAt(0)}
              </div>
              <div>
                <h3 className="text-xl font-playfair font-bold">{member.name}</h3>
                <p className="text-primary font-semibold text-sm">{member.role}</p>
              </div>
              <p className="text-sm text-muted-foreground">{member.expertise}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* Store Location */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-4">Visit Our Flagship Store</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Experience the magic of sarees in person at our beautiful boutique in Surat, Gujarat
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {/* Store Details Cards */}
            <Card className="p-8 space-y-4 hover-lift">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                <MapPin className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-playfair font-semibold">Location</h3>
              <p className="text-muted-foreground leading-relaxed">
                Ring Road, Near Udhna Darwaja<br />
                Surat, Gujarat 395002<br />
                India
              </p>
              <Button variant="accent" className="w-full">
                Get Directions
              </Button>
            </Card>

            <Card className="p-8 space-y-4 hover-lift">
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center">
                <Clock className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="text-2xl font-playfair font-semibold">Opening Hours</h3>
              <div className="text-muted-foreground space-y-2">
                <p><strong className="text-foreground">Mon - Sat:</strong><br />10:00 AM - 8:00 PM</p>
                <p><strong className="text-foreground">Sunday:</strong><br />11:00 AM - 6:00 PM</p>
                <p className="text-sm pt-2">Closed on major festivals</p>
              </div>
            </Card>

            <Card className="p-8 space-y-4 hover-lift">
              <div className="w-16 h-16 bg-muted/20 rounded-full flex items-center justify-center">
                <Phone className="w-8 h-8 text-muted" />
              </div>
              <h3 className="text-2xl font-playfair font-semibold">Contact Us</h3>
              <div className="text-muted-foreground space-y-3">
                <p className="flex items-center">
                  <Phone className="w-4 h-4 mr-2 text-primary" />
                  <a href="tel:+919876543210" className="hover:text-primary">+91 98765 43210</a>
                </p>
                <p className="flex items-center">
                  <Mail className="w-4 h-4 mr-2 text-primary" />
                  <a href="mailto:hello@sareevastra.com" className="hover:text-primary">hello@sareevastra.com</a>
                </p>
              </div>
              <Button variant="teal" className="w-full">
                Call Now
              </Button>
            </Card>
          </div>

          {/* Map */}
          <Map center={[72.8311, 21.1702]} zoom={15} showTokenInput={true} />
        </div>
      </section>
    </div>
  );
};
