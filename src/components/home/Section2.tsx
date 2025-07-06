import ConstrainedBox from "@/components/core/constrained-box";
import ResponsiveBox from "@/components/core/ResponsiveBox";
import SectionTitle from "@/components/common/SectionTitle";
import { HoverLayoutGrid } from "@/components/common/HoverLayoutGrid";
import services from "@/data/services";

const HomeSection2 = ({ id }: { id: string }) => {
  return (
    <ResponsiveBox
      classNames="dark:bg-[var(--dialogColor)] bg-[var(--dialogColor)] min-h-screen items-center justify-center dark:bg-dot-white/[0.15] bg-dot-white/[0.15] rounded-md relative overflow-hidden"
      id={id}
    >
      {/* Automation-themed background effects */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Circuit pattern background */}
        <div className="absolute inset-0 opacity-5">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="circuit-pattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <path d="M0 10h20M10 0v20" stroke="var(--primaryColor)" strokeWidth="0.5" fill="none"/>
                <circle cx="10" cy="10" r="1" fill="var(--primaryColor)"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#circuit-pattern)"/>
          </svg>
        </div>
        
        {/* Floating automation elements */}
        <div className="absolute top-20 left-10 w-4 h-4 bg-[var(--primaryColor)] rounded-full opacity-20 floating-icons"></div>
        <div className="absolute top-40 right-20 w-3 h-3 bg-[var(--secondaryColor)] rounded-full opacity-30 floating-icons" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-32 left-1/4 w-2 h-2 bg-[var(--primaryColor)] rounded-full opacity-25 floating-icons" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-20 right-1/3 w-5 h-5 bg-[var(--secondaryColor)] rounded-full opacity-15 floating-icons" style={{animationDelay: '0.5s'}}></div>
        
        {/* Data stream lines */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[var(--primaryColor)] to-transparent opacity-20 data-stream"></div>
        <div className="absolute bottom-0 right-0 w-full h-px bg-gradient-to-r from-transparent via-[var(--secondaryColor)] to-transparent opacity-20 data-stream" style={{animationDelay: '2s'}}></div>
      </div>
      
      <ConstrainedBox classNames="p-4 py-16 z-20 relative">
        <SectionTitle>Automation Services</SectionTitle>
        <p className="text-center text-[var(--textColorLight)] mb-8 max-w-2xl mx-auto">
          Transforming business processes through intelligent automation solutions. 
          From RPA workflows to data extraction, I build scalable automation systems that drive efficiency and innovation.
        </p>
        <HoverLayoutGrid cards={services} />
      </ConstrainedBox>
    </ResponsiveBox>
  );
};

export default HomeSection2;
