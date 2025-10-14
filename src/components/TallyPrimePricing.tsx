import { motion } from 'framer-motion';

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export default function TallyPrimeProductPlans() {
  const plans = [
    {
      name: "Silver",
      description: "Single user edition for Standalone PCs",
      period: "one-time",
      price: "₹18,000",
      features: [
        "Single user edition",
        "For Standalone PCs",
        "Lifetime validity",
        "Free basic support",
        "Annual maintenance optional"
      ],
      popular: false
    },
    {
      name: "Gold",
      description: "Unlimited multi-user edition for multiple PCs on LAN environment",
      period: "one-time",
      price: "₹54,000",
      features: [
        "Unlimited multi-user edition",
        "For multiple PCs on LAN environment",
        "Priority technical support",
        "Includes first year maintenance",
        "Advanced reporting features"
      ],
      popular: true
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Tally Prime Product Plans</h2>
          <p className="text-gray-600">Choose the perfect plan for your business needs</p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              className={`relative rounded-xl p-6 transition-all duration-300 ${
                plan.popular 
                  ? 'bg-white border-2 border-blue-500 shadow-lg' 
                  : 'bg-white border border-gray-200 shadow-sm'
              }`}
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              {plan.popular && (
                <motion.div
                  className="absolute -top-3 left-1/2 transform -translate-x-1/2"
                  initial={{ y: -10, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <span className="bg-blue-500 text-white px-4 py-1 rounded-full font-semibold text-sm">
                    Most Popular
                  </span>
                </motion.div>
              )}

              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <div className="flex items-baseline justify-center gap-1 mb-3">
                  <span className="text-3xl font-bold text-gray-900">{plan.price}</span>
                  <span className="text-gray-600">/{plan.period}</span>
                </div>
                <p className="text-gray-600 text-sm">{plan.description}</p>
              </div>

              <ul className="space-y-3 mb-6">
                {plan.features.map((feature, featureIndex) => (
                  <motion.li
                    key={featureIndex}
                    className="flex items-center gap-3"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: featureIndex * 0.1 }}
                  >
                    <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                      <span className="text-green-600 text-sm">✓</span>
                    </div>
                    <span className="text-gray-700 text-sm">{feature}</span>
                  </motion.li>
                ))}
              </ul>

              <motion.button
                className={`w-full py-3 rounded-lg font-semibold transition-colors duration-300 ${
                  plan.popular
                    ? 'bg-blue-500 hover:bg-blue-600 text-white'
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => window.location.href = '/get-in-touch'}
              >
                Contact Us
              </motion.button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}