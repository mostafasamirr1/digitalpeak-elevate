import digitalPeakLogo from "@/assets/digital-peak-logo.png";

const AnimatedLogo = ({ size = "large", className = "" }: { size?: "small" | "medium" | "large", className?: string }) => {
  const sizeClasses = {
    small: "h-16 w-16 sm:h-20 sm:w-20",
    medium: "h-24 w-24 sm:h-32 sm:w-32", 
    large: "h-48 w-48 sm:h-56 sm:w-56 md:h-70 md:w-70"
  };

  return (
    <img 
      src={digitalPeakLogo} 
      alt="Digital Peak Logo" 
      className={`${sizeClasses[size]} object-contain ${className}`}
    />
  );
};

export default AnimatedLogo;