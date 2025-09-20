import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import AnimatedLogo from "@/components/AnimatedLogo";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { name: "Home", action: scrollToTop },
    { name: "About", action: () => scrollToSection('about') },
    { name: "Services", action: () => scrollToSection('services') },
    { name: "Contact", action: () => scrollToSection('contact') }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-lg shadow-medium' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <button 
            onClick={scrollToTop}
            className="flex items-center space-x-3 hover:opacity-80 transition-all duration-300 transform hover:scale-105"
          >
            <AnimatedLogo size="small" className={`${isScrolled ? 'p-1 bg-[#1f71ff]' : ''} transition-colors`} />
            <div className="text-left">
              <div className={`font-bold text-lg ${isScrolled ? 'text-primary' : 'text-white'} transition-colors duration-300`}>
                Digital Peak
              </div>
              <div className={`text-xs ${isScrolled ? 'text-muted-foreground' : 'text-white/70'} transition-colors duration-300`}>
                Creative Agency
              </div>
            </div>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
              key={item.name}
              onClick={item.action}
              className={`relative font-semibold transition-all duration-300 transform hover:scale-100 group ${
                isScrolled ? 'text-blue-500' : 'text-white'
              }`}
            >
              <span className="relative z-10">{item.name}</span>
              <span
                className={`absolute left-0 -bottom-1 h-0.5 w-0 transition-all duration-300 group-hover:w-full ${
                  isScrolled ? 'bg-blue-500' : 'bg-white'
                }`}
              ></span>
            </button>
            ))}
            <Button 
              onClick={() => scrollToSection('contact')}
              className={isScrolled ? 'btn-hero' : 'btn-outline-hero'}
            >
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors ${
              isScrolled ? 'text-foreground hover:bg-muted' : 'text-white hover:bg-white/10'
            }`}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-lg border-t border-border">
            <div className="py-4 space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={item.action}
                  className="block w-full text-left px-4 py-2 text-foreground hover:text-secondary hover:bg-muted rounded-lg transition-colors"
                >
                  {item.name}
                </button>
              ))}
              <div className="px-4">
                <Button 
                  onClick={() => scrollToSection('contact')}
                  className="w-full btn-hero"
                >
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;