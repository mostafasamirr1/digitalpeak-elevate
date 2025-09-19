import { Button } from "@/components/ui/button";
import AnimatedLogo from "@/components/AnimatedLogo";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
      {/* Enhanced Animated Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-96 h-96 bg-white rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-64 h-64 bg-primary-blue-light rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-white rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-10 right-1/4 w-48 h-48 bg-primary-blue rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }}></div>
        <div className="absolute bottom-10 left-1/4 w-72 h-72 bg-white rounded-full blur-3xl animate-float" style={{ animationDelay: '0.5s' }}></div>
      </div>

      {/* Floating Geometric Shapes */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-16 h-16 border-2 border-white rotate-45 animate-wiggle"></div>
        <div className="absolute top-3/4 right-1/4 w-12 h-12 bg-white rounded-full animate-pulse-glow" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 right-1/3 w-20 h-20 border-2 border-white animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="animate-fade-in-down">
          <AnimatedLogo size="large" className="mx-auto mb-12" />
        </div>
        
        <h1 className="text-6xl md:text-8xl font-bold text-white mb-8 animate-fade-in-up">
          Digital <span className="text-white animate-pulse-glow">Peak</span>
        </h1>
        
        <p className="text-xl md:text-3xl text-white/95 mb-16 max-w-4xl mx-auto animate-fade-in-up font-medium" style={{ animationDelay: '0.2s' }}>
          Your Creative Partner in Digital Marketing
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <Button 
            onClick={() => scrollToSection('services')}
            className="btn-hero"
            size="lg"
          >
            Explore Our Services
          </Button>
          <Button 
            onClick={() => scrollToSection('contact')}
            className="btn-outline-hero"
            variant="outline"
            size="lg"
          >
            Get In Touch
          </Button>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-8 h-12 border-2 border-white/60 rounded-full flex justify-center relative">
          <div className="w-2 h-4 bg-white/60 rounded-full mt-2 animate-pulse"></div>
          <div className="absolute -inset-2 border border-white/30 rounded-full animate-ping"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;