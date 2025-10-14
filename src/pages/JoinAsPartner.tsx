import FreeDemoForm from "@/components/FreeDemoForm";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { WhoCanPartner } from "@/components/WhoCanPartner";
import { motion } from 'framer-motion';
import { BookOpen, Cloud, Gift, Lightbulb } from "lucide-react";
import { useNavigate } from "react-router-dom";
import joinAsPartner from "../assets/cloudpartnter.jpg"
import joinWithUs from "../assets/Partner-With-Us.webp"

export function JoinAsPartner() {
  const navigate = useNavigate();

  const benefits = [
    {
      title: "Inspire your clients",
      description:
        "The whole motive of the partner program is to impress your clients and leave a remarkable impact. Hosting Safari not only provides high performance but also a professional and certified team available 24/7 to ensure client satisfaction.",
      icon: <Lightbulb className="w-6 h-6 text-blue-600" />,
    },
    {
      title: "Include Cloud services to your portfolio",
      description:
        "By adding cloud to your service set, you not only add value to your clients, but also open easy ways for mutual business growth.",
      icon: <Cloud className="w-6 h-6 text-green-600" />,
    },
    {
      title: "Rewards",
      description:
        "To build strong partnerships, we reward loyal clients with residual commissions for referrals. Every referral earns you credits every month until the customer remains active.",
      icon: <Gift className="w-6 h-6 text-purple-600" />,
    },
    {
      title: "Dedicated Training and Resources",
      description:
        "Hosting Safari provides marketing materials, case studies, product training, and a dedicated partnership manager available 24/7 to support you.",
      icon: <BookOpen className="w-6 h-6 text-red-600" />,
    },
  ];

  return (
    <div className="font-poppins">

      {/* hero */}
      <section className="bg-white py-16 px-6 relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10">

          {/* Left Column */}
          <div className="lg:w-1/2 text-white space-y-6">
            <h2 className="text-4xl lg:text-5xl font-bold leading-snug">
              Join As a Partner
            </h2>

            <p className="text-gray-300 text-base leading-relaxed">
              We understand that our clients are searching for services that can add value to their work. We invite you to partner with us, as our partnership can enhance the way we work.
            </p>
            <button
              className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-md font-medium transition shadow-md"
              onClick={() => navigate('/get-in-touch')}
            >
              Get Started Now
            </button>
          </div>
          {/* Right Column */}
          <div className="lg:w-1/2 w-full  p-8 rounded-xl">
            <FreeDemoForm />
          </div>
        </div>
      </section>

      <section className="relative bg-gradient-to-r from-blue-50 min-h-[600px] to-white flex flex-col lg:flex-row items-center lg:justify-between px-6 lg:px-20 py-16 gap-12">
        {/* Left */}
        <motion.div
          className="lg:w-1/2 space-y-6"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 leading-tight">
            Why Partner With Us?
          </h1>
          <p className="text-gray-700 text-lg leading-relaxed">
            With the innovative technology of Tally on Cloud, you can access your Tally account anytime, anywhere,
            and from any device with maximum security, safety, accuracy, and reliability. Hosting Safari believes
            in collaborations based on trust. Our partnership can enhance the way you work and deliver value
            to your clients.
          </p>

        </motion.div>

        {/* Right */}
        <motion.div
          className="lg:w-1/2 flex justify-center"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <img
            src={joinWithUs}
            alt="Partner With Us"
            className="w-full max-w-md object-cover rounded-xl shadow-2xl hover:scale-105 transition-transform duration-500"
          />
        </motion.div>
      </section>

      {/* who can join as partner */}
      <WhoCanPartner />
    </div>
  )
}
