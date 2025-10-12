
import { useState } from "react";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { Button } from "./ui/button";
import { Select } from "./ui/select";
import emailjs from '@emailjs/browser';
import SuccessPopup from './SuccessPopup';

export const GetinTouch = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    question: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_GET_IN_TOUCH_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone,
          service: formData.service,
          message: formData.question,
          to_name: 'Htwo Team',
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_API
      );

      setShowSuccessPopup(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        question: "",
      });
    } catch (error) {
      console.error('EmailJS error:', error);
      alert('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <div className="bg-white text-black p-8 rounded-2xl shadow-2xl mx-auto font-poppins border border-gray-200">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
          Get In Touch
        </h2>
        <p className="text-center text-gray-500 mb-8 text-sm md:text-base">
          We would love to hear from you! Fill out the form below and our team
          will reach out shortly.
        </p>

        <form className="space-y-5" onSubmit={handleSubmit}>
          {/* Name & Email side by side on desktop */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="name" className="text-gray-700 text-sm">
                Full Name
              </Label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe"
                className="mt-1"
                required
              />
            </div>

            <div>
              <Label htmlFor="email" className="text-gray-700 text-sm">
                Email Address
              </Label>
              <Input
                id="email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="john@example.com"
                className="mt-1"
                required
              />
            </div>
          </div>

          <div>
            <Label htmlFor="phone" className="text-gray-700 text-sm">
              Phone Number
            </Label>
            <Input
              id="phone"
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+91 98765 43210"
              className="mt-1"
              required
            />
          </div>

          <div>
            <Label htmlFor="service" className="text-gray-700 text-sm">
              Select Service
            </Label>
            <Select
              id="service"
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="mt-1"
              required
            >
              <option value="">Choose an option</option>
              <option value="tally-cloud">Tally Cloud</option>
              <option value="erp-implementation">ERP Implementation</option>
              <option value="consultation">Consultation</option>
            </Select>
          </div>

          <div>
            <Label htmlFor="question" className="text-gray-700 text-sm">
              Message / Question
            </Label>
            <Textarea
              id="question"
              name="question"
              value={formData.question}
              onChange={handleChange}
              placeholder="Tell us how we can help..."
              rows={4}
              className="mt-1"
            />
          </div>



          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg shadow-md transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? 'Sending...' : 'Submit Message'}
          </Button>
        </form>
      </div>

      <SuccessPopup
        isOpen={showSuccessPopup}
        onClose={() => setShowSuccessPopup(false)}
        title="Thank You for Your Submission!"
        message="We will reach out to you within 24 hours."
        type="contact"
      />
    </>);
};

