import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Map } from '@/components/Map';
import { Mail, Phone, MapPin, Send, MessageCircle, Clock, Instagram, Facebook, Youtube, Twitter } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { toast } from 'sonner';

export const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    setTimeout(() => {
      toast.success('Message sent successfully!', {
        description: "We'll get back to you within 24 hours.",
      });
      setIsSubmitting(false);
    }, 1500);
  };

  const contactMethods = [
    {
      icon: Phone,
      title: 'Call Us Anytime',
      primary: '+91 98765 43210',
      secondary: '+91 98765 43211 (WhatsApp)',
      description: 'Mon-Sat: 10am-8pm, Sun: 11am-6pm',
      action: 'Call Now',
      variant: 'luxury' as const,
      link: 'tel:+919876543210'
    },
    {
      icon: Mail,
      title: 'Email Support',
      primary: 'hello@sareevastra.com',
      secondary: 'support@sareevastra.com',
      description: 'Response within 24 hours',
      action: 'Send Email',
      variant: 'gold' as const,
      link: 'mailto:hello@sareevastra.com'
    },
    {
      icon: MapPin,
      title: 'Visit Our Store',
      primary: 'Ring Road, Surat',
      secondary: 'Gujarat 395002, India',
      description: 'Free parking available',
      action: 'Get Directions',
      variant: 'accent' as const,
      link: '#map'
    },
  ];

  const departments = [
    'General Inquiry',
    'Order Status',
    'Custom Orders',
    'Bulk/Corporate Orders',
    'Returns & Exchanges',
    'Technical Support',
    'Artisan Partnerships',
    'Media & Press'
  ];

  const faqs = [
    { 
      q: 'What are your shipping options and delivery times?', 
      a: 'We offer free shipping across India. Standard delivery takes 5-7 business days. Express delivery (2-3 days) available for select pincodes at additional cost.' 
    },
    { 
      q: 'What is your return and exchange policy?', 
      a: 'We have a hassle-free 7-day return policy. Sarees must be unworn, unwashed, and in original packaging with all tags intact. Free return pickup available.' 
    },
    { 
      q: 'Are all your sarees authentic and handmade?', 
      a: 'Absolutely! We work directly with 500+ certified weavers and artisans. Every saree comes with a certificate of authenticity and information about the artisan who created it.' 
    },
    { 
      q: 'Do you offer customization services?', 
      a: 'Yes! We offer blouse customization, fall-pico services, and custom orders. Contact us with your requirements, and our design team will assist you.' 
    },
    { 
      q: 'Can I schedule a video call to see sarees?', 
      a: 'Yes! Book a personal shopping session via video call. Our style consultants will show you our collection and help you choose the perfect saree.' 
    },
    { 
      q: 'Do you have bulk order discounts for events?', 
      a: 'Yes, we offer special pricing for bulk orders (10+ sarees) for weddings, corporate gifts, or events. Contact our bulk orders team for a custom quote.' 
    },
  ];

  const socialLinks = [
    { icon: Instagram, name: 'Instagram', handle: '@sareevastra', followers: '100K', color: 'from-pink-500 to-orange-500' },
    { icon: Facebook, name: 'Facebook', handle: 'SareeVastra', followers: '75K', color: 'from-blue-600 to-blue-400' },
    { icon: Youtube, name: 'YouTube', handle: 'SareeVastra', followers: '50K', color: 'from-red-600 to-red-400' },
    { icon: Twitter, name: 'Twitter', handle: '@sareevastra', followers: '30K', color: 'from-blue-400 to-cyan-400' },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-accent to-secondary opacity-95" />
        <div className="absolute inset-0 bg-pattern-mandala" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <Badge className="mb-4 bg-secondary text-secondary-foreground px-6 py-2 text-base animate-bounce">
            💬 We're Here to Help!
          </Badge>
          <h1 className="text-5xl md:text-7xl font-playfair font-bold mb-6 text-primary-foreground animate-fade-in">
            Get in Touch
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/95 max-w-3xl mx-auto leading-relaxed">
            Have questions? We'd love to hear from you. Our team is ready to assist with all your saree needs.
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="container mx-auto px-4 -mt-16 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {contactMethods.map((method, index) => (
            <Card key={index} className="p-8 space-y-4 hover-lift shadow-2xl bg-gradient-card">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                <method.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-playfair font-bold">{method.title}</h3>
              <div className="space-y-1">
                <p className="font-semibold text-foreground text-lg">{method.primary}</p>
                <p className="text-muted-foreground">{method.secondary}</p>
                <p className="text-sm text-muted-foreground pt-2">{method.description}</p>
              </div>
              <a href={method.link}>
                <Button variant={method.variant} className="w-full">
                  {method.action}
                </Button>
              </a>
            </Card>
          ))}
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="p-8 shadow-xl">
              <div className="mb-8">
                <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-3">Send us a Message</h2>
                <p className="text-muted-foreground text-lg">
                  Fill out the form below and our team will get back to you within 24 hours.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="firstName" className="text-base">First Name *</Label>
                    <Input id="firstName" placeholder="Enter your first name" required className="h-12" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName" className="text-base">Last Name *</Label>
                    <Input id="lastName" placeholder="Enter your last name" required className="h-12" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-base">Email *</Label>
                    <Input id="email" type="email" placeholder="your@email.com" required className="h-12" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-base">Phone Number *</Label>
                    <Input id="phone" type="tel" placeholder="+91 98765 43210" required className="h-12" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="department" className="text-base">Department</Label>
                  <Select defaultValue="general">
                    <SelectTrigger className="h-12 bg-background">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="bg-popover z-50">
                      {departments.map((dept) => (
                        <SelectItem key={dept} value={dept.toLowerCase().replace(/\s+/g, '-')}>
                          {dept}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject" className="text-base">Subject *</Label>
                  <Input id="subject" placeholder="How can we help you?" required className="h-12" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-base">Message *</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Tell us more about your inquiry..." 
                    rows={6}
                    required
                    className="resize-none"
                  />
                </div>

                <div className="flex items-start space-x-2">
                  <input type="checkbox" id="newsletter" className="mt-1 rounded border-border" />
                  <label htmlFor="newsletter" className="text-sm text-muted-foreground">
                    Subscribe to our newsletter for exclusive offers, new arrivals, and saree styling tips
                  </label>
                </div>

                <Button 
                  type="submit" 
                  variant="luxury" 
                  size="lg" 
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    'Sending Message...'
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>

                <p className="text-xs text-center text-muted-foreground pt-2">
                  By submitting this form, you agree to our Privacy Policy and Terms of Service
                </p>
              </form>
            </Card>
          </div>

          {/* Sidebar Info */}
          <div className="space-y-6">
            {/* Store Hours */}
            <Card className="p-6 space-y-4 hover-lift">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-playfair font-bold">Store Hours</h3>
              </div>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between pb-2 border-b border-border">
                  <span className="font-medium">Monday - Saturday</span>
                  <span className="text-muted-foreground">10:00 AM - 8:00 PM</span>
                </div>
                <div className="flex justify-between pb-2 border-b border-border">
                  <span className="font-medium">Sunday</span>
                  <span className="text-muted-foreground">11:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Public Holidays</span>
                  <span className="text-destructive font-semibold">Closed</span>
                </div>
              </div>
              <div className="pt-4 border-t border-border">
                <p className="text-xs text-muted-foreground">
                  💡 <strong>Tip:</strong> Book an appointment for personalized styling assistance
                </p>
              </div>
            </Card>

            {/* Social Media */}
            <Card className="p-6 space-y-4 hover-lift">
              <h3 className="text-xl font-playfair font-bold">Follow Us</h3>
              <p className="text-sm text-muted-foreground">
                Join our community for daily inspiration, styling tips, and exclusive offers
              </p>
              <div className="space-y-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href="#"
                    className="flex items-center justify-between p-3 rounded-lg hover:bg-accent/5 transition-colors group"
                  >
                    <div className="flex items-center space-x-3">
                      <div className={`w-10 h-10 bg-gradient-to-r ${social.color} rounded-full flex items-center justify-center`}>
                        <social.icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="font-semibold text-sm group-hover:text-primary transition-colors">{social.name}</p>
                        <p className="text-xs text-muted-foreground">{social.handle}</p>
                      </div>
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {social.followers}
                    </Badge>
                  </a>
                ))}
              </div>
            </Card>

            {/* Quick Links */}
            <Card className="p-6 space-y-4 hover-lift bg-gradient-to-br from-primary/5 to-accent/5">
              <h3 className="text-xl font-playfair font-bold">Quick Links</h3>
              <div className="space-y-2">
                <a href="#" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                  📦 Track Your Order
                </a>
                <a href="#" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                  🔄 Initiate Return/Exchange
                </a>
                <a href="#" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                  📖 Size Guide & Care Instructions
                </a>
                <a href="#" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                  💳 Payment & Shipping Info
                </a>
                <a href="#" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                  🤝 Become an Affiliate Partner
                </a>
              </div>
            </Card>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-20 max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-muted-foreground">
              Find quick answers to common questions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="p-6 hover-lift">
                <h3 className="text-lg font-semibold mb-3 flex items-start">
                  <MessageCircle className="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                  {faq.q}
                </h3>
                <p className="text-muted-foreground ml-7">{faq.a}</p>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-4">Still have questions?</p>
            <Button variant="gold" size="lg">
              View All FAQs
            </Button>
          </div>
        </div>

        {/* Map Section */}
        <div id="map" className="mt-20 max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-4">Find Us on Map</h2>
            <p className="text-xl text-muted-foreground">
              Visit our flagship store in Surat, Gujarat
            </p>
          </div>

          <Map center={[72.8311, 21.1702]} zoom={15} showTokenInput={true} />
        </div>
      </div>
    </div>
  );
};
