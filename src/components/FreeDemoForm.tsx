import { useState } from "react";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { Button } from "./ui/button";
import emailjs from '@emailjs/browser';
import SuccessPopup from './SuccessPopup';

const FreeDemoForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    country: "",
    service: "",
    question: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    
    if (name === "phone") {
      // Only allow digits for phone number
      const phoneDigits = value.replace(/\D/g, '');
      setFormData((prev) => ({
        ...prev,
        [name]: phoneDigits,
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: type === "checkbox" ? checked : value,
      }));
    }
  };


  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Get formatted phone number with country code
  const getFormattedPhone = () => {
    if (!formData.country || !formData.phone) return '';
    const countryCode = formData.country.replace('+', '');
    return `+${countryCode}${formData.phone}`;
  };

  // Validate phone number length (country code + phone should be 12 digits total)
  const isValidPhone = () => {
    if (!formData.country || !formData.phone) return false;
    const countryCode = formData.country.replace('+', '');
    const totalLength = countryCode.length + formData.phone.length;
    return totalLength === 12;
  };


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_DEMO_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          phone: getFormattedPhone(),
          country: formData.country,
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
        country: "",
        service: "",
        question: "",
      });
    } catch (error) {
      console.error('EmailJS error:', error);
      alert('Failed to send demo request. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
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
            <Label htmlFor="phone" className="text-sm">Phone Number</Label>
            <div className="flex">
              <select
                id="country"
                name="country"
                value={formData.country}
                onChange={handleSelectChange}
                className="w-24 h-9 px-2 py-2 text-sm border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white border-r-0"
                required
              >
                <option value="">Code</option>
                <option value="+91">+91</option>
                <option value="+1">+1</option>
                <option value="+44">+44</option>
                <option value="+61">+61</option>
                <option value="+49">+49</option>
                <option value="+33">+33</option>
                <option value="+81">+81</option>
                <option value="+65">+65</option>
                <option value="+971">+971</option>
                <option value="+86">+86</option>
                <option value="+55">+55</option>
                <option value="+7">+7</option>
                <option value="+39">+39</option>
                <option value="+34">+34</option>
                <option value="+31">+31</option>
                <option value="+46">+46</option>
                <option value="+47">+47</option>
                <option value="+45">+45</option>
                <option value="+41">+41</option>
                <option value="+43">+43</option>
                <option value="+32">+32</option>
                <option value="+48">+48</option>
                <option value="+420">+420</option>
                <option value="+36">+36</option>
                <option value="+40">+40</option>
                <option value="+359">+359</option>
                <option value="+385">+385</option>
                <option value="+386">+386</option>
                <option value="+421">+421</option>
                <option value="+370">+370</option>
                <option value="+371">+371</option>
                <option value="+372">+372</option>
                <option value="+353">+353</option>
                <option value="+351">+351</option>
                <option value="+30">+30</option>
                <option value="+90">+90</option>
                <option value="+20">+20</option>
                <option value="+27">+27</option>
                <option value="+234">+234</option>
                <option value="+254">+254</option>
                <option value="+966">+966</option>
                <option value="+974">+974</option>
                <option value="+973">+973</option>
                <option value="+965">+965</option>
                <option value="+968">+968</option>
                <option value="+962">+962</option>
                <option value="+961">+961</option>
                <option value="+972">+972</option>
                <option value="+60">+60</option>
                <option value="+66">+66</option>
                <option value="+63">+63</option>
                <option value="+62">+62</option>
                <option value="+84">+84</option>
                <option value="+82">+82</option>
                <option value="+886">+886</option>
                <option value="+852">+852</option>
                <option value="+853">+853</option>
                <option value="+64">+64</option>
                <option value="+52">+52</option>
                <option value="+54">+54</option>
                <option value="+56">+56</option>
                <option value="+57">+57</option>
                <option value="+58">+58</option>
                <option value="+51">+51</option>
                <option value="+593">+593</option>
                <option value="+591">+591</option>
                <option value="+598">+598</option>
                <option value="+595">+595</option>
              </select>
              <Input
                id="phone"
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter phone number"
                className="text-sm h-9 rounded-l-none border-l-0"
                maxLength={12}
                required
              />
            </div>
            {formData.country && formData.phone && !isValidPhone() && (
              <p className="text-xs text-red-500 mt-1">
                Phone number must be exactly 12 digits total (including country code)
              </p>
            )}
            {formData.country && formData.phone && isValidPhone() && (
              <p className="text-xs text-green-500 mt-1">
                Complete number: {getFormattedPhone()}
              </p>
            )}
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



          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white text-sm font-semibold py-2 h-9 rounded-md shadow-md hover:shadow-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? 'Sending...' : 'Submit Now'}
          </Button>
        </form>
      </div>

      <SuccessPopup
        isOpen={showSuccessPopup}
        onClose={() => setShowSuccessPopup(false)}
        title="Thank You for Your Submission!"
        message="We will reach out to you within 24 hours."
        type="demo"
      />
    </>);
};

export default FreeDemoForm;