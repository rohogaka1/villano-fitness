import Link from 'next/link';

interface LogoProps {
  className?: string;
}

export default function Logo({ className = '' }: LogoProps) {
  return (
    <Link href="/" className={`flex items-center ${className}`}>
      <div className="relative flex items-center justify-center">
        <svg
          width="48"
          height="48"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-brand-gold hover:text-brand-gold-light transition-colors"
        >
          <path
            d="M20 4L4 36L20 28L36 36L20 4Z"
            fill="currentColor"
            className="transform origin-center"
          />
          <path
            d="M20 8L8 32L20 26L32 32L20 8Z"
            fill="currentColor"
            className="opacity-50"
          />
        </svg>
      </div>
    </Link>
  );
} 