"use client";

const SectionTitle = ({ children }: Readonly<{ children: string }>) => {
  return (
    <div className="text-center mx-auto mb-8">
      <h2 
        className="pt-6 text-3xl/normal md:text-4xl/normal font-bold bg-gradient-to-r from-[var(--primaryColor)] to-[var(--secondaryColor)] bg-clip-text text-transparent animate-fade-in leading-tight"
      >
        {children}
      </h2>
      
      {/* Automation-themed underline */}
      <div className="w-24 h-1 bg-gradient-to-r from-[var(--primaryColor)] to-[var(--secondaryColor)] mx-auto mt-6 mb-2 rounded-full animate-scale-x" />
      
      {/* Decorative elements */}
      <div className="flex justify-center items-center mt-2 gap-2">
        <div className="w-2 h-2 bg-[var(--primaryColor)] rounded-full animate-pulse" />
        <div className="w-1 h-1 bg-[var(--secondaryColor)] rounded-full animate-pulse" style={{animationDelay: '0.5s'}} />
        <div className="w-2 h-2 bg-[var(--primaryColor)] rounded-full animate-pulse" style={{animationDelay: '1s'}} />
      </div>
    </div>
  );
};

export default SectionTitle;
