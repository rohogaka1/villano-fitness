interface HeroProps {
  title: string;
  description?: string;
  className?: string;
}

export default function Hero({ title, description, className = '' }: HeroProps) {
  return (
    <div className={`relative isolate overflow-hidden bg-brand-black ${className}`}>
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h1 className="text-4xl font-bold tracking-tight text-brand-gold sm:text-6xl">
              {title}
            </h1>
            {description && (
              <p className="mt-6 text-lg leading-8 text-gray-300">
                {description}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
} 