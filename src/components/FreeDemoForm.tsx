import { useState } from "react";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { Button } from "./ui/button";
import ReCAPTCHA from "react-google-recaptcha";

const FreeDemoForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    question: "",
    recaptchaToken: "",
  });

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
    console.log(formData);
  };

  return (
    <div className="w-full max-w-md bg-white text-black p-4 sm:p-6 rounded-xl shadow-lg mx-auto font-poppins">
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

        <div className="flex justify-center">
          <ReCAPTCHA
            sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI" // Test site key
            onChange={(token) => setFormData((prev) => ({ ...prev, recaptchaToken: token || "" }))}
            onExpired={() => setFormData((prev) => ({ ...prev, recaptchaToken: "" }))}
          />
        </div>

        <Button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold py-2 h-9 rounded-md"
          disabled={!formData.recaptchaToken}
        >
          Submit Now
        </Button>
      </form>
    </div>
  );
};

export default FreeDemoForm;