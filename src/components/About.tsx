import { useEffect, useRef, useState } from "react";

const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="py-20 bg-gradient-subtle" ref={sectionRef}>
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className={`text-4xl md:text-6xl font-bold mb-12 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            About <span className="gradient-text-blue">Digital Peak</span>
          </h2>
          
          <div className={`space-y-8 text-lg text-muted-foreground leading-relaxed ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
            <p>
              Digital Peak is an innovative and creative digital marketing agency that stands at the forefront of the digital revolution. 
              We combine cutting-edge technology with creative excellence to deliver exceptional results for our clients.
            </p>
            
            <p>
              Our team of passionate professionals specializes in transforming businesses through strategic digital solutions. 
              From social media campaigns that engage audiences to SEO strategies that drive organic growth, we create 
              comprehensive digital experiences that elevate brands to their peak potential.
            </p>
            
            <p>
              At Digital Peak, we believe in the power of creativity, innovation, and data-driven strategies. 
              We're not just a service provider – we're your creative partner in navigating the ever-evolving digital landscape 
              and achieving sustainable growth in the digital age.
            </p>
          </div>

      
    
        </div>
      </div>
    </section>
  );
};

export default About;