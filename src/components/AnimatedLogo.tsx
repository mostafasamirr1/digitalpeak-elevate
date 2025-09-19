import digitalPeakLogo from "@/assets/digital-peak-logo.png";

const AnimatedLogo = ({ size = "large", className = "" }: { size?: "small" | "medium" | "large", className?: string }) => {
  const sizeClasses = {
    small: "h-20 w-20",
    medium: "h-32 w-32", 
    large: "h-70 w-70"
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