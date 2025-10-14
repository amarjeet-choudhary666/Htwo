import { FeatureGrid } from "@/components/Features";
import { MargOnCloudPricingSection } from "@/components/MargOnCloudPricing";
import { TrustedByClients } from "@/components/TrustedByClient";
import { Button } from "@/components/ui/button";
import { Check, ArrowRight } from "lucide-react";
import FreeDemoForm from "@/components/FreeDemoForm";

export function MargOnCloud() {
  return (
    <div className="bg-white font-poppins">
      {/* Hero Section */}
      <section className="relative min-h-[800px] flex items-center bg-blue-900">
        {/* Background */}
        <div className="absolute inset-0 bg-blue-900">
          <img
            src="https://odatacolocation.com/wp-content/uploads/2021/12/shutterstock_1929852050-1110x390.jpg"
            alt="Cloud Background"
            className="w-full h-full object-cover opacity-40"
          />
        </div>

        {/* Content */}
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 w-full flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-8 py-8">
          {/* Left Text */}
          <div className="text-white flex-1 text-center lg:text-left max-w-xl">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 lg:mb-6">
              Marg ERP on Cloud
            </h1>
            <p className="text-sm sm:text-base lg:text-lg mb-6 text-blue-100 leading-relaxed">
              Complete accounting with GST solution. Access your business from anywhere, anytime.
            </p>
            <Button className="bg-orange-500 hover:bg-orange-600 text-white text-sm sm:text-base px-6 py-3 w-full sm:w-auto">
              Get Free Demo
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>

          {/* Right Form */}
          <div className="flex-1 w-full max-w-md lg:max-w-lg">
            <FreeDemoForm />
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
              Affordable Pricing Plans
            </h2>
            <p className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto">
              Choose the plan that fits your business needs
            </p>
          </div>
          <div className="w-full">
            <MargOnCloudPricingSection />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
              Why Choose Marg on Cloud?
            </h2>
            <p className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto">
              Access your Marg ERP from any device with enhanced security and performance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {[
              "Real-time data synchronization saves you money on Marg licenses",
              "Entire pay-as-you-go SaaS solution",
              "NFC servers ensure security of Marg Data",
              "Automatic backups on off-site and on-site servers",
              "Complete data security from hackers",
              "Access from any device (Laptop, PC, Mobile)",
              "Our team manages and installs servers",
              "GST compliant accounting solution"
            ].map((feature, index) => (
              <div 
                key={index} 
                className="flex items-start gap-3 p-4 sm:p-5 bg-gray-50 rounded-lg hover:shadow-md transition-shadow duration-200"
              >
                <Check className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700 text-sm sm:text-base leading-relaxed">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

    
          <FeatureGrid />


      {/* Trusted Section */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
              Trusted by Businesses
            </h2>
            <p className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
              Join thousands of satisfied customers using our Marg cloud services
            </p>
          </div>
          <div className="flex justify-center">
            <TrustedByClients />
          </div>
        </div>
      </section>
    </div>
  );
}