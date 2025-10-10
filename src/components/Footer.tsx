import { Link } from 'react-router-dom';
import logo from '../assets/logo1.png';

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
    {
      title: 'Support',
      links: [
        { name: '+91 8595515765', href: 'tel:+911234567890' },
      ],
    },
    {
      title: 'Sales',
      links: [
        { name: '+91 8076225440', href: 'tel:+918076225440' },
        { name: '+91 8595327337', href: 'tel:+918595327337' },
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
                  src={logo}
                  alt="HTwo Logo"
                  className="w-[240px] h-[180px] md:w-[300px] md:h-[220px] object-contain drop-shadow-xl transition-transform duration-300 hover:scale-110"
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {footerSections.map((section) => (
              <div key={section.title} className="group flex-1">
                <h3 className="font-bold text-xl text-white mb-4 relative">
                  {section.title}
                  <div className="absolute -bottom-2 left-0 w-12 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                </h3>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      {link.href.startsWith('tel:') ? (
                        <a
                          href={link.href}
                          className="text-gray-400 hover:text-white hover:translate-x-2 transition-all duration-300 inline-block text-base font-medium"
                        >
                          {link.name}
                        </a>
                      ) : (
                        <Link
                          to={link.href}
                          className="text-gray-400 hover:text-white hover:translate-x-2 transition-all duration-300 inline-block text-base font-medium"
                        >
                          {link.name}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;