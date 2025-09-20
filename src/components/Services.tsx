import { useEffect, useRef, useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Share2, 
  PenTool, 
  Edit3, 
  Search, 
  Video, 
  Palette,
  Users,
  Target,
  Megaphone,
  Camera
} from "lucide-react";

const Services = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [language, setLanguage] = useState<"en" | "ar">("en");

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const servicesEn = [
    {
      icon: Share2,
      title: "Social Media Marketing",
      description: "Strategic campaigns, engagement strategies, and paid ads management across all major social platforms.",
      features: ["Campaign Management", "Engagement Strategies", "Paid Advertising", "Analytics & Reporting"],
      delay: "0s"
    },
    {
      icon: PenTool,
      title: "Content Writing",
      description: "Creating compelling blog posts, storytelling, and engaging articles that resonate with your audience.",
      features: ["Blog Posts", "Website Content", "Storytelling", "Editorial Content"],
      delay: "0.1s"
    },
    {
      icon: Edit3,
      title: "Copywriting",
      description: "Persuasive ad copies, marketing texts, and creative slogans that convert prospects into customers.",
      features: ["Ad Copy", "Sales Pages", "Email Marketing", "Creative Slogans"],
      delay: "0.2s"
    },
    {
      icon: Search,
      title: "SEO Optimization",
      description: "Comprehensive keyword research, on-page & off-page SEO, and technical optimization for better rankings.",
      features: ["Keyword Research", "On-Page SEO", "Technical SEO", "Link Building"],
      delay: "0.3s"
    },
    {
      icon: Video,
      title: "Production",
      description: "Professional video production, photography, and motion graphics that bring your brand to life.",
      features: ["Video Production", "Photography", "Motion Graphics", "Post-Production"],
      delay: "0.4s"
    },
    {
      icon: Palette,
      title: "Graphic Design",
      description: "Complete visual identity solutions including branding, logo design, and creative assets.",
      features: ["Brand Identity", "Logo Design", "Print Design", "Digital Assets"],
      delay: "0.5s"
    }
  ];

  const servicesAr = [
    {
      icon: Share2,
      title: "التسويق عبر وسائل التواصل",
      description: "حملات استراتيجية، استراتيجيات تفاعل، وإدارة الإعلانات المدفوعة عبر جميع المنصات.",
      features: ["إدارة الحملات", "استراتيجيات التفاعل", "إعلانات مدفوعة", "تحليلات وتقارير"],
      delay: "0s"
    },
    {
      icon: PenTool,
      title: "كتابة المحتوى",
      description: "إنشاء مقالات ومدونات وقصص جذابة تتوافق مع جمهورك.",
      features: ["مقالات المدونة", "محتوى المواقع", "سرد القصص", "محتوى تحريري"],
      delay: "0.1s"
    },
    {
      icon: Edit3,
      title: "كتابة الإعلانات",
      description: "نصوص إعلانية مقنعة وشعارات مبتكرة تحول العملاء المحتملين إلى عملاء.",
      features: ["نصوص إعلانية", "صفحات بيع", "بريد تسويقي", "شعارات إبداعية"],
      delay: "0.2s"
    },
    {
      icon: Search,
      title: "تحسين محركات البحث",
      description: "بحث شامل عن الكلمات المفتاحية، تحسين داخلي وخارجي، وتحسينات تقنية لنتائج أفضل.",
      features: ["بحث كلمات مفتاحية", "تحسين داخلي", "تحسين تقني", "بناء روابط"],
      delay: "0.3s"
    },
    {
      icon: Video,
      title: "الإنتاج",
      description: "إنتاج فيديو احترافي، تصوير فوتوغرافي، ورسوم متحركة تُبرز علامتك.",
      features: ["إنتاج فيديو", "تصوير فوتوغرافي", "موشن جرافيك", "ما بعد الإنتاج"],
      delay: "0.4s"
    },
    {
      icon: Palette,
      title: "التصميم الجرافيكي",
      description: "حلول هوية بصرية متكاملة تشمل العلامة التجارية وتصميم الشعارات والأصول الإبداعية.",
      features: ["هوية بصرية", "تصميم شعار", "تصميم مطبوعات", "أصول رقمية"],
      delay: "0.5s"
    }
  ];

  const graphicDesignSubServicesEn = [
    { icon: Users, title: "Graphic Identity", description: "Comprehensive visual identity systems" },
    { icon: Target, title: "Branding", description: "Strategic brand development and positioning" },
    { icon: Megaphone, title: "Logo Design", description: "Memorable and impactful logo creation" },
    { icon: Camera, title: "Creative Assets", description: "Custom graphics and visual elements" }
  ];

  const graphicDesignSubServicesAr = [
    { icon: Users, title: "الهوية البصرية", description: "أنظمة هوية بصرية متكاملة" },
    { icon: Target, title: "بناء العلامة", description: "تطوير وتموضع العلامة التجارية" },
    { icon: Megaphone, title: "تصميم الشعار", description: "تصميم شعارات مميزة وذات أثر" },
    { icon: Camera, title: "أصول إبداعية", description: "رسومات وعناصر بصرية مخصصة" }
  ];

  return (
    <section id="services" className="py-12 md:py-20 bg-background" ref={sectionRef}>
      <div className="container mx-auto px-4 md:px-6">
        <div dir={language === 'ar' ? 'rtl' : 'ltr'} className={language === 'ar' ? 'rtl' : ''}>
          <div className="text-center mb-16">
            <h2 className={`text-4xl md:text-6xl font-bold mb-8 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
              {language === 'ar' ? (
                <>
                  خدماتنا <span className="gradient-text-blue">المميزة</span>
                </>
              ) : (
                <>
                  Our <span className="gradient-text-blue">Services</span>
                </>
              )}
            </h2>
            <div className={`mb-8 flex items-center justify-center ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.1s' }}>
              <Tabs value={language} onValueChange={(v) => setLanguage(v as "en" | "ar")}>
                <TabsList>
                  <TabsTrigger value="en">English</TabsTrigger>
                  <TabsTrigger value="ar">العربية</TabsTrigger>
                </TabsList>
              </Tabs>
            </div>
            <p className={`text-xl text-muted-foreground max-w-3xl mx-auto ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
              {language === 'ar'
                ? 'نقدم مجموعة متكاملة من خدمات التسويق الرقمي لرفع مستوى علامتك وتحقيق النتائج.'
                : 'We offer a comprehensive suite of digital marketing services designed to elevate your brand and drive results.'}
            </p>
          </div>

          <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16 ${language === 'ar' ? 'text-right' : ''}`}>
            {(language === 'ar' ? servicesAr : servicesEn).map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div
                  key={service.title}
                  className={`service-card ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
                  style={{ animationDelay: service.delay }}
                >
                  <div className={`text-primary mb-4 md:mb-6 transform hover:scale-110 transition-transform duration-300 ${language === 'ar' ? 'ml-0 mr-auto' : ''}`}>
                    <IconComponent size={40} className="md:w-12 md:h-12" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 animated-underline">{service.title}</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className={`flex items-center text-sm text-muted-foreground hover:text-primary transition-colors duration-300 ${language === 'ar' ? 'flex-row-reverse' : ''}`}>
                        <div className={`w-3 h-3 bg-primary rounded-full animate-pulse-glow ${language === 'ar' ? 'ml-3' : 'mr-3'}`}></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>

          {/* Graphic Design Sub-services */}
          <div className={`bg-gradient-blue-fade rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-12 border border-primary/20 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.6s' }}>
            <h3 className={`text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12 ${language === 'ar' ? 'leading-relaxed' : ''}`}>
              {language === 'ar' ? (
                <>تخصصات <span className="gradient-text-blue">التصميم الجرافيكي</span></>
              ) : (
                <>Graphic Design <span className="gradient-text-blue">Specializations</span></>
              )}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {(language === 'ar' ? graphicDesignSubServicesAr : graphicDesignSubServicesEn).map((subService, index) => {
                const IconComponent = subService.icon;
                return (
                  <div key={subService.title} className="text-center group">
                    <div className="bg-white rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-soft hover:shadow-strong transition-all duration-500 transform hover:-translate-y-2 md:hover:-translate-y-3 hover:rotate-1 group-hover:scale-105">
                      <div className="text-primary mb-4 md:mb-6 mx-auto transform group-hover:scale-110 transition-transform duration-300">
                        <IconComponent size={32} className="md:w-10 md:h-10" />
                      </div>
                      <h4 className="font-bold mb-2 md:mb-3 text-base md:text-lg animated-underline">{subService.title}</h4>
                      <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">{subService.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;