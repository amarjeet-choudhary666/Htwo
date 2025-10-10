import { useState, useRef } from "react";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { Button } from "./ui/button";
import ReCaptcha from "./ReCaptcha";
import ReCAPTCHA from 'react-google-recaptcha';

const FreeDemoForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    question: "",
  });

  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
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
    <div className="w-full max-w-lg bg-white text-black p-4 sm:p-6 rounded-xl shadow-lg mx-auto font-poppins">
      <h2 className="text-lg sm:text-xl font-bold mb-4 text-center">Get Free Demo Now</h2>
      <form className="space-y-3 sm:space-y-4" onSubmit={handleSubmit}>
        <div>
          <Label htmlFor="name" className="text-sm">Name</Label>
          <Input
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            className="text-sm h-9"
            required
          />
        </div>

        <div>
          <Label htmlFor="email" className="text-sm">Email</Label>
          <Input
            id="email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            className="text-sm h-9"
            required
          />
        </div>

        <div>
          <Label htmlFor="phone" className="text-sm">Phone</Label>
          <Input
            id="phone"
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Enter your phone number"
            className="text-sm h-9"
            required
          />
        </div>

        <div>
          <Label htmlFor="service" className="text-sm">Service</Label>
          <select
            id="service"
            name="service"
            value={formData.service}
            onChange={handleSelectChange}
            className="w-full h-9 px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
            required
          >
            <option value="">Select a service</option>
            <option value="tally-cloud">Tally Cloud</option>
            <option value="erp-implementation">ERP Implementation</option>
            <option value="consultation">Consultation</option>
          </select>
        </div>

        <div>
          <Label htmlFor="question" className="text-sm">Question</Label>
          <Textarea
            id="question"
            name="question"
            value={formData.question}
            onChange={handleChange}
            placeholder="Write your question or requirements..."
            rows={3}
            className="text-sm resize-none"
          />
        </div>

        {/* reCAPTCHA Section */}
        <div className="py-3">
          <div className="text-center mb-3">
            <span className="text-sm text-gray-600 font-medium">Security Verification</span>
          </div>
          <div className="flex justify-center">
            <ReCaptcha
              ref={recaptchaRef}
              onChange={handleRecaptchaChange}
              onExpired={() => setRecaptchaToken(null)}
              size="normal"
            />
          </div>
        </div>

        <Button
          type="submit"
          className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white text-sm font-semibold py-2 h-9 rounded-md shadow-md hover:shadow-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={!recaptchaToken}
        >
          {recaptchaToken ? (
            <>
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Submit Now
            </>
          ) : (
            'Complete Verification'
          )}
        </Button>
      </form>
    </div>
  );
};

export default FreeDemoForm;