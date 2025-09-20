import { Facebook, Instagram, Twitter, Linkedin, Youtube } from "lucide-react";
import AnimatedLogo from "@/components/AnimatedLogo";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaYoutube, FaTiktok } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: FaFacebook, href: "https://www.facebook.com/digitalpeak.eg/", label: "Facebook" },
    { icon: FaInstagram, href: "https://www.instagram.com/digitalpeak.eg", label: "Instagram" },
    // { icon: FaTwitter, href: "#", label: "Twitter" },
    { icon: FaLinkedin, href: "https://www.linkedin.com/company/digitalpeak-eg", label: "LinkedIn" },
    //{ icon: FaYoutube, href: "#", label: "YouTube" },
    { icon: FaTiktok, href: "https://www.tiktok.com/@digitalpeak.eg", label: "Tiktok" },

  ];

  const quickLinks = [
    { name: "About Us", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Contact", href: "#contact" },
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" }
  ];

  const services = [
    "Social Media Marketing",
    "Content Writing", 
    "Copywriting",
    "SEO Optimization",
    "Production",
    "Graphic Design"
  ];

  const scrollToSection = (sectionId: string) => {
    if (sectionId === "#") return;
    const element = document.getElementById(sectionId.replace("#", ""));
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-primary text-white relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full blur-2xl animate-float"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 bg-white rounded-full blur-2xl animate-float" style={{ animationDelay: '1s' }}></div>
      </div>
      
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-8">
              <AnimatedLogo size="medium" className="mr-4" />
              <div>
                <h3 className="text-2xl font-bold">Digital Peak</h3>
                <p className="text-sm text-white/80">Creative Agency</p>
              </div>
            </div>
            <p className="text-white/90 mb-8 leading-relaxed text-lg">
              Your creative partner in digital marketing. We transform businesses through innovative 
              digital solutions and strategic marketing approaches.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                const isExternalLink = social.href.startsWith('http');
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="text-white/80 hover:text-white transition-all duration-300 transform hover:scale-125 hover:-translate-y-1"
                    {...(isExternalLink && { target: "_blank", rel: "noopener noreferrer" })}
                  >
                    <IconComponent size={24} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-white/80 hover:text-secondary transition-colors duration-300 text-left"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={service}>
                  <span className="text-white/80 hover:text-secondary transition-colors duration-300 cursor-pointer">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Info</h4>
            <div className="space-y-4">
              <div>
                <p className="text-white/60 text-sm">Phone & WhatsApp</p>
                <a href="tel:01558557331" className="text-white/80 hover:text-secondary transition-colors">
                  01558557331
                </a>
              </div>
              <div>
                <p className="text-white/60 text-sm">Email</p>
                <a href="mailto:digiitalpeakk@gmail.com" className="text-white/80 hover:text-secondary transition-colors">
                  digiitalpeakk@gmail.com
                </a>
              </div>
              <div>
                <p className="text-white/60 text-sm">Business Hours</p>
                <p className="text-white/80">Sat - Thu: 9:00 AM - 6:00 PM</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/60 text-sm mb-4 md:mb-0">
            © {currentYear} Digital Peak. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;