import { BusyOnCloudPricing } from "@/components/BusyOnCloudPricing";
import FreeDemoForm from "@/components/FreeDemoForm";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function BusyOnCloud() {
    return (
        <div className="relative overflow-hidden font-poppins">

            {/* Hero Section */}
            <section
                className="w-full min-h-[600px] bg-cover bg-center flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12 relative"
                style={{
                    backgroundImage:
                        "url('https://www.n-tec.eu/wp-content/uploads/2021/02/server.jpg')",
                }}
            >
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-blue-800/60 to-purple-900/70"></div>

                <div className="container max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 relative z-10">
                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                        className="text-white text-center lg:text-left max-w-2xl space-y-6"
                    >
                        {/* Main Heading */}
                        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold leading-tight">
                            <span className="bg-gradient-to-r from-blue-400 via-white to-purple-300 bg-clip-text text-transparent">
                                Busy On Cloud
                            </span>
                        </h1>


                        {/* Starting Price */}
                        <p className="text-lg sm:text-xl text-blue-200 bg-white/10 px-5 py-2 rounded-xl inline-block font-semibold">
                            Starting at <span className="text-white font-bold">Rs.290/-*</span>
                        </p>

                        {/* Description */}
                        <p className="text-sm sm:text-base text-gray-100 leading-relaxed">
                            Experience seamless Busy Remote Access, full Browser Compatibility,
                            efficient Remote Printing & advanced Security Features.
                        </p>

                        <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg shadow-lg">
                            Get Started Now
                        </Button>
                    </motion.div>

                    {/* Right Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                        className="w-full max-w-md"
                    >
                        <div className="bg-white/20 backdrop-blur-md rounded-2xl border border-white/30 shadow-2xl p-6">
                            <FreeDemoForm />
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Pricing Section */}
            <section className="w-full bg-gray-50 ">
                <BusyOnCloudPricing />
            </section>

            {/* Features Section */}
            <section className="py-16 bg-white">
                <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">
                        Our Features
                    </h2>

                    <p className="text-base text-gray-600 max-w-2xl mx-auto leading-relaxed">
                        Busy on Cloud exclusive features enable the user to maintain inventory and accounting data without being
                        constrained by time or place. The Busy accounting software on the cloud simplifies life.
                    </p>

                    <p className="text-base text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        A cloud-based accounting and inventory management service, Busy on Cloud, is one of our best SaaS offerings.
                        Users can maintain inventory and accounting data at any time and from anywhere. Cloud computing offers an easy
                        way for firms to manage transactions & purchases remotely. Accounts can be settled without staying late at the
                        office. This is how Busy accounting software on the cloud facilitates life. Setting it up on a cloud server is all it takes.
                    </p>
                </div>
            </section>
        </div>
    );
}
