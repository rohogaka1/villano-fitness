interface SectionProps {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  dark?: boolean;
  id?: string;
}

export default function Section({ children, className = '', containerClassName = '', dark = false, id }: SectionProps) {
  return (
    <div id={id} className={`py-24 sm:py-32 ${dark ? 'bg-brand-black' : 'bg-white'} ${className}`}>
      <div className={`mx-auto max-w-7xl px-6 lg:px-8 ${containerClassName}`}>
        {children}
      </div>
    </div>
  );
} 