import { Link } from 'react-router-dom';
import tab from '../assets/tab.png';

const Footer = () => {
  const footerSections = [
    {
      title: 'Cloud Services',
      links: [
        { name: 'Tally On Cloud', href: '/tally-on-cloud' },
        { name: 'Busy On Cloud', href: '/busy-on-cloud' },
        { name: 'Marg On Cloud', href: '/marg-on-cloud' },
        { name: 'Navision On Cloud', href: '/navision-on-cloud' },
        { name: 'Cloud For SAP', href: '/sap-s4-hana-on-cloud' },
        { name: 'VPS Linux', href: '/vpslinux' },
        { name: 'VPS Window', href: '/vpswindows' },
      ],
    },
    {
      title: 'Other Services',
      links: [
        { name: 'Web Hosting', href: '/linuxhosting' },
        { name: 'Dedicated Server', href: '/dedicated-server' },
        { name: 'Email Solutions', href: '/about' },
        { name: 'Storage As A Service', href: '/storage-as-a-service' },
        { name: 'Backup & Recovery', href: '/backup-recovery' },
        { name: 'Disaster Recovery As A Service', href: '/disaster-recovery-as-a-service' },
      ],
    },
    {
      title: 'Information',
      links: [
        { name: 'Blog', href: '/blog' },
        { name: 'Join As A Partner', href: '/join-as-a-partner' },
        { name: 'Get In Touch', href: '/get-in-touch' },
      ],
    },
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white font-poppins relative overflow-hidden" style={{ backgroundBlendMode: 'multiply' }}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.15)_1px,transparent_0)] bg-[length:20px_20px]"></div>
      </div>

      <div className="container mx-auto px-6 py-16 relative z-10 ">
        <div className="   gap-12 mb-12 flex justify-center items-center">
          {/* Left Section - Logo and Paragraph */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10 text-center md:text-left">
            <div className="flex justify-center items-center flex-shrink-0">
              <Link
                to="/"
                className="flex justify-center items-center transition-transform duration-300 hover:scale-105"
              >
                <img
                  src={tab}
                  alt="HTwo Logo"
                  className="w-[160px] h-[110px] md:w-[200px] md:h-[150px] object-contain drop-shadow-xl transition-transform duration-300 hover:scale-110"
                />
              </Link>
            </div>

            {/* Paragraph Section */}
            <p className="text-gray-300 text-base md:text-lg leading-relaxed font-light max-w-xl">
              Having years of experience, we provide you with something more than server speed.
              We believe that your success is ours. At
              <span className="font-semibold text-white"> HTWO</span>, we understand your needs
              and deliver world-class services.
            </p>
          </div>

          {/* Right Section - Footer Links */}
          <div className="flex flex-col lg:flex-row gap-8">
            {footerSections.map((section) => (
              <div key={section.title} className="group flex-1">
                <h3 className="font-bold text-xl text-white mb-4 relative">
                  {section.title}
                  <div className="absolute -bottom-2 left-0 w-12 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                </h3>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <Link
                        to={link.href}
                        className="text-gray-400 hover:text-white hover:translate-x-2 transition-all duration-300 inline-block text-base font-medium"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Information */}
        <div className="border-t border-gray-700/50 pt-8">
          <div className="text-center">
            <h4 className="text-xl font-semibold text-white mb-4">Get In Touch</h4>
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-12">
              <div className="flex items-center space-x-3 bg-gray-800/50 px-6 py-3 rounded-lg hover:bg-gray-800/70 transition-colors">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-gray-300 font-medium">+91 9278686890</span>
              </div>
              <div className="flex items-center space-x-3 bg-gray-800/50 px-6 py-3 rounded-lg hover:bg-gray-800/70 transition-colors">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-gray-300 font-medium">+91 9999374000</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;