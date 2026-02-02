import { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Phone, MapPin, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    gender: '',
    phone: '',
    condition: '',
    message: '',
    serviceType: ''
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const data = new FormData();
      data.append('access_key', '0ff9225a-f529-44a6-9309-bd1ed425e83c');
      data.append('name', formData.name);
      data.append('age', formData.age);
      data.append('gender', formData.gender);
      data.append('phone', formData.phone);
      data.append('condition', formData.condition);
      data.append('message', formData.message);
      data.append('serviceType', formData.serviceType);

      const object = Object.fromEntries(data);
      const json = JSON.stringify(object);

      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: json
      }).then((res) => res.json());

      if (res.success) {
        toast({
          title: "Appointment request submitted!",
          description: "We will contact you soon.",
        });
        setFormData({
          name: '',
          age: '',
          gender: '',
          phone: '',
          condition: '',
          message: '',
          serviceType: ''
        });
      } else {
        toast({
          title: "Submission failed",
          description: res.message || "Something went wrong. Please try again.",
        });
      }
    } catch (error) {
      toast({
        title: "Submission failed",
        description: "Something went wrong. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section className="section-padding bg-gradient-to-br from-primary/5 to-secondary/5">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Book Your Appointment
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Take the first step towards better health. Schedule your consultation
            with our expert doctors today.
          </p>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="shadow-premium border-0 bg-white/95 backdrop-blur-sm animate-fade-in-up">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-primary mb-6">
                Appointment Request Form
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <Input
                      required
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      placeholder="Enter your full name"
                      className="rounded-lg"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Age *
                    </label>
                    <Input
                      required
                      type="number"
                      value={formData.age}
                      onChange={(e) => handleInputChange('age', e.target.value)}
                      placeholder="Enter your age"
                      className="rounded-lg"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Gender *
                    </label>
                    <Select value={formData.gender} onValueChange={(value) => handleInputChange('gender', value)}>
                      <SelectTrigger className="rounded-lg">
                        <SelectValue placeholder="Select gender" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="male">Male</SelectItem>
                        <SelectItem value="female">Female</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <Input
                      required
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      placeholder="Enter your phone number"
                      className="rounded-lg"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Service Type
                  </label>
                  <Select value={formData.serviceType} onValueChange={(value) => handleInputChange('serviceType', value)}>
                    <SelectTrigger className="rounded-lg">
                      <SelectValue placeholder="Select service type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="physiotherapy">Physiotherapy</SelectItem>
                      <SelectItem value="neurotherapy">Neurotherapy</SelectItem>
                      <SelectItem value="chiropractic">Chiropractic</SelectItem>
                      <SelectItem value="ayurvedic">Ayurvedic Treatment</SelectItem>
                      <SelectItem value="home-visit">Home Visit</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Condition/Problem
                  </label>
                  <Input
                    value={formData.condition}
                    onChange={(e) => handleInputChange('condition', e.target.value)}
                    placeholder="Brief description of your condition"
                    className="rounded-lg"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Additional Message
                  </label>
                  <Textarea
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    placeholder="Any additional information or questions..."
                    className="rounded-lg resize-none"
                    rows={4}
                  />
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    type="submit"
                    className="flex-1 bg-accent hover:bg-accent/90 text-white rounded-lg py-3"
                    disabled={loading}
                  >
                    {loading ? 'Submitting...' : 'Book Appointment'}
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    className="flex-1 border-primary text-primary hover:bg-primary hover:text-white rounded-lg py-3"
                  >
                    Request Home Visit
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8 animate-fade-in-up animation-delay-200">
            {/* Quick Contact */}
            <Card className="shadow-soft border-0 bg-white/95 backdrop-blur-sm">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-primary mb-6">
                  Get In Touch
                </h3>

                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Call Us</h4>
                      <div className="text-sm text-gray-600 space-y-1">
                        <p>Primary: 97243 85791</p>
                        <p>Secondary: 94285 61294</p>
                        <p>Alternate: 84870 94533</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center">
                      <Clock className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Working Hours</h4>
                      <div className="text-sm text-gray-600">
                        <p>Monday - Saturday</p>
                        <p>8:00 AM - 9:00 PM</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Locations</h4>
                      <div className="text-sm text-gray-600 space-y-2">
                        <div>
                          <p className="font-medium">Gotri Branch:</p>
                          <p>GF/42, Kalpvrux Complex, Gotri Road</p>
                        </div>
                        <div>
                          <p className="font-medium">Vasna Branch:</p>
                          <p>E/13, Megha Park, Vasna Road</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Emergency Contact */}
            <Card className="shadow-soft border-0 bg-gradient-accent text-white">
              <CardContent className="p-8 text-center">
                <h3 className="text-xl font-bold mb-4">Emergency Services</h3>
                <p className="mb-6">For urgent medical consultations and emergency home visits</p>
                <Button
                  variant="secondary"
                  className="w-full bg-white text-accent hover:bg-gray-100"
                  onClick={() => window.open('tel:9724385791')}
                >
                  Call Emergency Line
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};