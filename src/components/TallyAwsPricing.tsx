export default function TallyOnAwsPricing() {
  const plans = [
    {
      name: "Starter",
      price: "₹999",
      period: "month",
      description: "Perfect for small businesses and startups",
      features: [
        "1 Tally Prime License",
        "50GB Storage",
        "Basic Support",
        "99.5% Uptime",
        "5 User Accounts"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "₹1,999",
      period: "month",
      description: "Ideal for growing businesses",
      features: [
        "3 Tally Prime Licenses",
        "200GB Storage",
        "Priority Support",
        "99.9% Uptime",
        "15 User Accounts",
        "Automated Backups",
        "Advanced Security"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "₹3,999",
      period: "month",
      description: "For large organizations",
      features: [
        "Unlimited Tally Licenses",
        "1TB Storage",
        "24/7 Premium Support",
        "99.99% Uptime",
        "Unlimited Users",
        "Automated Backups",
        "Dedicated Server",
        "Custom Integration"
      ],
      popular: false
    }
  ];

  return (
    <div className="min-h-[750px] bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Tally on AWS Pricing</h2>
          <p className="text-gray-600 text-lg">Choose the perfect plan for your business needs</p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`relative rounded-xl p-6 transition-all duration-300 ${
                plan.popular 
                  ? 'bg-white border-2 border-blue-500 shadow-lg' 
                  : 'bg-white border border-gray-200 shadow-sm'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-blue-500 text-white px-4 py-1 rounded-full font-semibold text-sm">
                    Most Popular
                  </span>
                </div>
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
                  <li key={featureIndex} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                      <span className="text-green-600 text-sm">✓</span>
                    </div>
                    <span className="text-gray-700 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <button 
                className={`w-full py-3 rounded-lg font-semibold transition-colors duration-300 ${
                  plan.popular
                    ? 'bg-blue-500 hover:bg-blue-600 text-white'
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
                }`}
              >
                Get Started
              </button>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="text-center mt-8">
          <p className="text-gray-600 text-sm">
            All plans include AWS infrastructure, automatic updates, and 24/7 monitoring. 
            <span className="text-blue-600 font-semibold"> Annual plans save up to 20%!</span>
          </p>
        </div>
      </div>
    </div>
  );
}