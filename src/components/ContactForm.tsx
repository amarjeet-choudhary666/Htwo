import { useState, useRef } from "react";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { Button } from "./ui/button";
import { Select } from "./ui/select";
import ReCaptcha from "./ReCaptcha";
import ReCAPTCHA from 'react-google-recaptcha';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    question: "",
  });

  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);
  const recaptchaRef = useRef<ReCAPTCHA>(null);

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!recaptchaToken) {
      alert('Please complete the reCAPTCHA verification');
      return;
    }

    console.log({ ...formData, recaptchaToken });
    
    // Reset form after submission
    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "",
      question: "",
    });
    setRecaptchaToken(null);
    recaptchaRef.current?.reset();
  };

  const handleRecaptchaChange = (token: string | null) => {
    setRecaptchaToken(token);
  };

  return (
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

        <ReCaptcha
          ref={recaptchaRef}
          onChange={handleRecaptchaChange}
          onExpired={() => setRecaptchaToken(null)}
        />

        <Button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg shadow-md transition-all disabled:opacity-60"
          disabled={!recaptchaToken}
        >
          Submit Message
        </Button>
      </form>
    </div>
  );
};

export default ContactForm;
