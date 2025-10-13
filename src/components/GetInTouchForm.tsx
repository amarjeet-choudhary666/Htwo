import { useState } from "react";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { Button } from "./ui/button";
import { Select } from "./ui/select"; // Ensure this forwards name, value, onChange
import emailjs from "@emailjs/browser";
import SuccessPopup from "./SuccessPopup";

export const GetinTouch = () => {
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

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    
    if (name === "phone") {
      // Only allow digits for phone number
      const phoneDigits = value.replace(/\D/g, '');
      setFormData((prev) => ({ ...prev, [name]: phoneDigits }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
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
        import.meta.env.VITE_EMAILJS_GET_IN_TOUCH_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          phone: getFormattedPhone(),
          country: formData.country,
          service: formData.service,
          message: formData.question,
          to_name: "Htwo Team",
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_API
      );

      setShowSuccessPopup(true);
      setFormData({ name: "", email: "", phone: "", country: "", service: "", question: "" });
    } catch (error) {
      console.error("EmailJS error:", error);
      alert("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <div className="bg-white text-black p-8 rounded-2xl shadow-2xl mx-auto font-poppins border border-gray-200">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Get In Touch</h2>
        <p className="text-center text-gray-500 mb-8 text-sm md:text-base">
          We would love to hear from you! Fill out the form below and our team will reach out shortly.
        </p>

        <form className="space-y-5" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="name">Full Name</Label>
              <Input id="name" name="name" value={formData.name} onChange={handleChange} placeholder="John Doe" required />
            </div>

            <div>
              <Label htmlFor="email">Email Address</Label>
              <Input id="email" type="email" name="email" value={formData.email} onChange={handleChange} placeholder="john@example.com" required />
            </div>
          </div>

          <div>
            <Label htmlFor="phone">Phone Number</Label>
            <div className="flex">
              <select
                id="country"
                name="country"
                value={formData.country}
                onChange={handleChange}
                className="w-24 px-2 py-2 text-sm border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white border-r-0"
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
              <Input id="phone" type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="Enter phone number" className="rounded-l-none border-l-0" maxLength={12} required />
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
            <Label htmlFor="service">Select Service</Label>
            <Select id="service" name="service" value={formData.service} onChange={handleChange} required>
              <option value="">Choose an option</option>
              <option value="tally-cloud">Tally Cloud</option>
              <option value="erp-implementation">ERP Implementation</option>
              <option value="consultation">Consultation</option>
            </Select>
          </div>

          <div>
            <Label htmlFor="question">Message / Question</Label>
            <Textarea id="question" name="question" value={formData.question} onChange={handleChange} placeholder="Tell us how we can help..." rows={4} />
          </div>

          <Button type="submit" disabled={isSubmitting} className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg shadow-md disabled:opacity-50">
            {isSubmitting ? "Sending..." : "Submit Message"}
          </Button>
        </form>
      </div>

      <SuccessPopup isOpen={showSuccessPopup} onClose={() => setShowSuccessPopup(false)} title="Thank You for Your Submission!" message="We will reach out to you within 24 hours." type="contact" />
    </>
  );
};
