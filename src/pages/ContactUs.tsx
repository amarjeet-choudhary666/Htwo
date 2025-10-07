import FreeDemoForm from "@/components/FreeDemoForm";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaHeadset, FaRocket } from "react-icons/fa";
import { Shield, Users, Zap, MessageCircle } from "lucide-react";

const fadeInUp = { initial: { opacity: 0, y: 40 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.6 } };
const scaleIn = { initial: { opacity: 0, scale: 0.9 }, animate: { opacity: 1, scale: 1 }, transition: { duration: 0.5 } };
const staggerContainer = { animate: { transition: { staggerChildren: 0.1 } } };

export default function CloudContactUs() {
  return (
    <div className="font-poppins overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 min-h-screen text-white">

      {/* Hero Section */}
      <section className="relative py-24 text-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div className="absolute -top-40 -left-40 w-80 h-80 bg-purple-500 rounded-full opacity-20 filter blur-3xl mix-blend-multiply"
            animate={{ x: [0, 100, 0], y: [0, -100, 0] }} transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }} />
          <motion.div className="absolute -bottom-40 -right-40 w-80 h-80 bg-blue-500 rounded-full opacity-20 filter blur-3xl mix-blend-multiply"
            animate={{ x: [0, -100, 0], y: [0, 100, 0] }} transition={{ duration: 15, repeat: Infinity, repeatType: "reverse" }} />
          <motion.div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-orange-500 rounded-full opacity-10 filter blur-3xl mix-blend-multiply"
            animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }} />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div initial="initial" animate="animate" variants={staggerContainer}>
            <motion.div variants={fadeInUp} className="inline-flex items-center bg-gradient-to-r from-orange-500/20 to-pink-500/20 backdrop-blur-sm border border-orange-500/30 text-orange-300 px-6 py-3 rounded-full text-sm font-medium mb-6">
              <MessageCircle className="w-4 h-4 mr-2" />
              We&apos;re Here to Help
            </motion.div>

            <motion.h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight" variants={fadeInUp}>
              <span className="block">Contact Our</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-pink-400 to-purple-400">
                Cloud Experts
              </span>
            </motion.h1>

            <motion.p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8 leading-relaxed" variants={fadeInUp}>
              Have questions or need assistance with our cloud services? Our dedicated team is ready to provide personalized solutions and support for your business needs.
            </motion.p>

            {/* Stats */}
            <motion.div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto" variants={fadeInUp}>
              <div className="text-center">
                <Users className="w-8 h-8 text-green-400 mx-auto" />
                <div className="text-2xl font-bold text-white">25K+</div>
                <div className="text-sm text-blue-200">Happy Clients</div>
              </div>
              <div className="text-center">
                <Shield className="w-8 h-8 text-blue-400 mx-auto" />
                <div className="text-2xl font-bold text-white">99.9%</div>
                <div className="text-sm text-blue-200">Uptime SLA</div>
              </div>
              <div className="text-center">
                <FaHeadset className="w-8 h-8 text-orange-400 mx-auto" />
                <div className="text-2xl font-bold text-white">24/7</div>
                <div className="text-sm text-blue-200">Support</div>
              </div>
              <div className="text-center">
                <Zap className="w-8 h-8 text-purple-400 mx-auto" />
                <div className="text-2xl font-bold text-white">1H</div>
                <div className="text-sm text-blue-200">Response Time</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="container mx-auto px-6 pb-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Contact Info */}
          <motion.div initial="initial" whileInView="animate" viewport={{ once: true, amount: 0.3 }} variants={staggerContainer} className="space-y-8">
            <motion.div variants={fadeInUp}>
              <h2 className="text-4xl font-bold mb-4 text-white">Get in Touch</h2>
              <p className="text-blue-100 text-lg leading-relaxed">
                Whether you have questions, need support, or want to learn more about our cloud solutions, 
                our expert team is here to provide personalized assistance and guidance.
              </p>
            </motion.div>

            <motion.div className="space-y-6" variants={staggerContainer}>
              {[
                { icon: FaEnvelope, title: "Email Us", subtitle: "support@cloudcompany.com", note: "We&apos;ll respond within 1 hour", gradient: "from-orange-500 to-pink-500" },
                { icon: FaPhone, title: "Call Us", subtitle: "+91 98765 43210", note: "Mon - Sun, 24/7 Support", gradient: "from-green-500 to-blue-500" },
                { icon: FaMapMarkerAlt, title: "Visit Us", subtitle: "123 Cloud Street, Bengaluru, India", note: "Come say hello at our office", gradient: "from-purple-500 to-indigo-500" }
              ].map((item, idx) => (
                <motion.div key={idx} className="flex items-center gap-6 p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300 group" variants={scaleIn} whileHover={{ scale: 1.02, x: 10 }}>
                  <div className={`flex-shrink-0 w-14 h-14 bg-gradient-to-r ${item.gradient} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <item.icon className="text-white w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">{item.title}</h3>
                    <p className="text-blue-200">{item.subtitle}</p>
                    <p className="text-sm text-blue-300">{item.note}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div className="p-6 bg-gradient-to-r from-orange-500/10 to-pink-500/10 backdrop-blur-sm rounded-2xl border border-orange-500/20" variants={fadeInUp}>
              <div className="flex items-start gap-4">
                <FaRocket className="w-6 h-6 text-orange-400 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-white mb-2">Quick Start Available</h4>
                  <p className="text-blue-100 text-sm">
                    New customers get setup within 24 hours with our express onboarding process. Start your cloud journey today!
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Form */}
          <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.8 }} className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-pink-500 rounded-3xl blur-xl opacity-20"></div>
            <div className="relative bg-white/5 backdrop-blur-xl rounded-3xl p-1 shadow-2xl border border-white/10">
              <FreeDemoForm />
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
