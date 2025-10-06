import ContactForm from "@/components/ContactForm";
import { Mail, PhoneCall } from "lucide-react";

export default function LifeAtHtwo() {
    return (
        <div className="min-h-screen bg-white font-poppins">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white overflow-hidden py-20 flex items-center justify-center">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-3xl md:text-5xl font-bold pb-5">
                        Get in Touch with HTwo
                    </h1>
                    <p className="text-sm md:text-base">
                        Have a question? Send us a note using the form below and someone
                        from the team will get in
                        <br />
                        touch with you soon.
                    </p>
                </div>
            </section>

            {/* Contact Form Section */}
            <div className="w-full flex justify-center items-center py-10 px-4">
                <div className="w-full md:w-2/3 lg:w-1/2 xl:w-1/3">
                    <ContactForm />
                </div>
            </div>

            <section className="flex flex-col md:flex-row justify-between items-stretch gap-6 px-6 md:px-10 py-10">
  {/* Sales */}
  <div className="flex-1 bg-white p-6 rounded-xl shadow border border-gray-200 hover:shadow-lg transition-shadow duration-300">
    <h2 className="text-xl font-semibold mb-3 text-gray-800">Sales</h2>
    <p className="flex items-center text-gray-600 mb-2">
      <Mail className="w-5 h-5 mr-2 text-gray-500" />
      <a href="mailto:sales@hostingsafari.com" className="hover:underline">
        sales@htwo.com
      </a>
    </p>
    <p className="flex items-center text-gray-600">
      <PhoneCall className="w-5 h-5 mr-2 text-gray-500" />
      <a href="tel:+919999374000" className="hover:underline">
        +91-9999374000
      </a>
    </p>
  </div>

  {/* Support */}
  <div className="flex-1 bg-white p-6 rounded-xl shadow border border-gray-200 hover:shadow-lg transition-shadow duration-300">
    <h2 className="text-xl font-semibold mb-3 text-gray-800">Support</h2>
    <p className="flex items-center text-gray-600 mb-2">
      <Mail className="w-5 h-5 mr-2 text-gray-500" />
      <a href="mailto:support@hostingsafari.com" className="hover:underline">
        support@htwo.com
      </a>
    </p>
    <p className="flex items-center text-gray-600">
      <PhoneCall className="w-5 h-5 mr-2 text-gray-500" />
      <a href="tel:01169655598" className="hover:underline">
        011-69655598
      </a>
    </p>
  </div>

  {/* Pre-Sales Questions */}
  <div className="flex-1 bg-white p-6 rounded-xl shadow border border-gray-200 hover:shadow-lg transition-shadow duration-300">
    <h2 className="text-xl font-semibold mb-3 text-gray-800">Pre-Sales Questions</h2>
    <p className="flex items-center text-gray-600 mb-2">
      <Mail className="w-5 h-5 mr-2 text-gray-500" />
      <a href="mailto:vikas@hostingsafari.com" className="hover:underline">
        vikas@htwo.com
      </a>
    </p>
    <p className="flex items-center text-gray-600">
      <PhoneCall className="w-5 h-5 mr-2 text-gray-500" />
      <a href="tel:+919268686890" className="hover:underline">
        +91-9268686890
      </a>
    </p>
  </div>
</section>

        </div>
    );
}
