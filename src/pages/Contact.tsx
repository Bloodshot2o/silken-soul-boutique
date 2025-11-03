import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, Send, MessageCircle } from 'lucide-react';
import { toast } from 'sonner';

export const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Mock form submission
    setTimeout(() => {
      toast.success('Message sent successfully!', {
        description: "We'll get back to you within 24 hours.",
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-accent text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-playfair font-bold mb-6">
            Get in Touch
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-2xl mx-auto">
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Contact Info Cards */}
          <div className="space-y-6">
            <Card className="p-6 space-y-4 hover-lift">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                <Phone className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-playfair font-semibold">Call Us</h3>
              <p className="text-muted-foreground">Mon-Sat from 10am to 8pm</p>
              <a href="tel:+919876543210" className="text-primary font-semibold hover:underline block">
                +91 98765 43210
              </a>
            </Card>

            <Card className="p-6 space-y-4 hover-lift">
              <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center">
                <Mail className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="text-xl font-playfair font-semibold">Email Us</h3>
              <p className="text-muted-foreground">We'll respond within 24 hours</p>
              <a href="mailto:hello@sareevastra.com" className="text-primary font-semibold hover:underline block">
                hello@sareevastra.com
              </a>
            </Card>

            <Card className="p-6 space-y-4 hover-lift">
              <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center">
                <MapPin className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-playfair font-semibold">Visit Store</h3>
              <p className="text-muted-foreground">
                Ring Road, Surat<br />
                Gujarat 395002, India
              </p>
              <Button variant="outline" size="sm">
                Get Directions
              </Button>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="p-8">
              <div className="mb-8">
                <h2 className="text-3xl font-playfair font-bold mb-2">Send us a Message</h2>
                <p className="text-muted-foreground">
                  Fill out the form below and our team will get back to you shortly.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name *</Label>
                    <Input id="firstName" placeholder="Enter your first name" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name *</Label>
                    <Input id="lastName" placeholder="Enter your last name" required />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input id="email" type="email" placeholder="your@email.com" required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" type="tel" placeholder="+91 98765 43210" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Subject *</Label>
                  <Input id="subject" placeholder="How can we help you?" required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message *</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Tell us more about your inquiry..." 
                    rows={6}
                    required
                  />
                </div>

                <Button 
                  type="submit" 
                  variant="luxury" 
                  size="lg" 
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    'Sending...'
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </Card>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-20 max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-playfair font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-muted-foreground">
              Find quick answers to common questions
            </p>
          </div>

          <div className="space-y-4">
            {[
              { q: 'What are your shipping options?', a: 'We offer free shipping on all orders across India. Delivery typically takes 5-7 business days.' },
              { q: 'Do you accept returns?', a: 'Yes! We have a 7-day return policy for unworn, undamaged sarees in original packaging.' },
              { q: 'Are all your sarees authentic?', a: 'Absolutely! We work directly with certified weavers and artisans to ensure 100% authenticity.' },
              { q: 'Can I customize a saree?', a: 'Yes, we offer customization services. Please contact us with your requirements and we\'ll be happy to help.' },
            ].map((faq, index) => (
              <Card key={index} className="p-6">
                <h3 className="text-lg font-semibold mb-2 flex items-start">
                  <MessageCircle className="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                  {faq.q}
                </h3>
                <p className="text-muted-foreground ml-7">{faq.a}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
