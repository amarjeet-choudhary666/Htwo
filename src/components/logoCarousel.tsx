import { motion } from 'framer-motion';
import { useRef, useState } from 'react';

const LogoCarousel = () => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  const companies = [
    { 
      name: "Microsoft", 
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Microsoft_logo_%282012%29.svg/1024px-Microsoft_logo_%282012%29.svg.png" 
    },
    { 
      name: "Google", 
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeIGRKN1Izucf9KHN9ZCQc1ReE5A879XFpFl-u4VYeeg&s" 
    },
    { 
      name: "Amazon", 
      logo: "https://logos-world.net/wp-content/uploads/2020/06/Amazon-Logo.png" 
    },
    { 
      name: "Netflix", 
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyHkOTEGgATfSwHpt7krYtpZaUFNaAWDET-g&usqp=CAU" 
    },
    { 
      name: "Spotify", 
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDzzI-J8loA4Nw5ZXFmbdGuINL4BSLBrARbA&s" 
    },
    { 
      name: "Airbnb", 
      logo: "https://images.squarespace-cdn.com/content/v1/63e136d0d1e824494e969fe5/012c5434-bcf4-4f2c-899e-8d12743f484e/30D9906E-A836-4253-95AE-12B23F5F6C63-removebg-preview.png" 
    },
  ];

  // Duplicate for seamless loop
  const carouselItems = [...companies, ...companies, ...companies];

  return (
    <section className="py-16 bg-slate-50 border-b">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-800 mb-4">
            Trusted by industry leaders worldwide
          </h2>
          <p className="text-slate-600 font-medium">
            Our solutions power the world's most innovative companies
          </p>
        </div>

        <div 
          className="relative overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <motion.div
            ref={carouselRef}
            className="flex"
            animate={{
              x: [0, -1680], // Adjust based on your content width
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 40,
                ease: "linear",
              },
            }}
            style={{ animationPlayState: isPaused ? 'paused' : 'running' }}
          >
            {carouselItems.map((company, index) => (
              <motion.div
                key={`${company.name}-${index}`}
                className="flex-shrink-0 px-4"
                whileHover={{ scale: 1.08 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <div className="flex justify-center items-center cursor-pointer bg-white rounded-xl shadow-sm p-2  transition-all duration-300 hover:shadow-md min-w-[160px]">
                  <img
                    src={company.logo}
                    alt={company.name}
                    className="h-10 w-18 object-contain filter grayscale hover:grayscale-0 transition-all duration-300 mix-blend-multiply"
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Gradient overlays for smooth edges */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-slate-50 to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-slate-50 to-transparent z-10" />
        </div>
      </div>
    </section>
  );
};

export default LogoCarousel;