import Image from 'next/image';
import Hero from '@/components/layout/Hero';
import Section from '@/components/layout/Section';

export default function AboutPage() {
  return (
    <div className="bg-white">
      <Hero
        title="Meet Victoria Villano"
        description="Dedicated to transforming lives through fitness for over two decades. My passion is helping you discover your strength and achieve your goals through personalized attention and expert guidance."
        backgroundImage="https://images.unsplash.com/photo-1534367610401-9f5ed68180aa?w=1920&h=1080&fit=crop"
        ctaText="Let's Connect"
        ctaHref="/contact"
      />

      <Section>
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2">
            <div className="relative">
              <div className="relative h-[600px] overflow-hidden rounded-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=1200&fit=crop"
                  alt="Personal Trainer"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="absolute -bottom-8 -right-8 bg-brand-gold rounded-full p-4 border-4 border-white shadow-lg">
                <div className="w-[150px] h-[150px] flex flex-col items-center justify-center text-brand-black">
                  <span className="text-3xl font-bold">20+</span>
                  <span className="text-sm font-semibold">Years Experience</span>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold tracking-tight text-brand-black mb-6">My Journey</h2>
              <div className="text-gray-700 space-y-4">
                <p>
                  Now based in Palm Coast, Florida, I offer personalized one-on-one training sessions and private group fitness classes, outside of a traditional gym setting. My passion is helping people discover their strength and achieve their fitness goals through personalized attention and expert guidance.
                </p>
                <div className="grid grid-cols-2 gap-4 mt-8">
                  <div className="relative h-48 rounded-lg overflow-hidden shadow-lg">
                    <Image
                      src="https://images.unsplash.com/photo-1571732154690-f6d1c3e5178a?w=600&h=400&fit=crop"
                      alt="Personal Training Session"
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="relative h-48 rounded-lg overflow-hidden shadow-lg">
                    <Image
                      src="https://images.unsplash.com/photo-1571388208497-71bedc66e932?w=600&h=400&fit=crop"
                      alt="Group Fitness Class"
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold tracking-tight text-brand-black mb-6">Credentials</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <ul className="space-y-4 text-gray-700">
                  <li className="flex items-start">
                    <svg className="h-6 w-5 flex-none mt-0.5 text-brand-gold" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                    </svg>
                    <span className="ml-3">AFAA Certified Personal Trainer</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-5 flex-none mt-0.5 text-brand-gold" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                    </svg>
                    <span className="ml-3">AFAA Certified Group Instructor</span>
                  </li>
                </ul>
                <ul className="space-y-4 text-gray-700">
                  <li className="flex items-start">
                    <svg className="h-6 w-5 flex-none mt-0.5 text-brand-gold" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                    </svg>
                    <span className="ml-3">AEA Aqua Certified Instructor</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-5 flex-none mt-0.5 text-brand-gold" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                    </svg>
                    <span className="ml-3">AFAA Certified Golf Fitness</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section dark>
        <div className="relative isolate px-6 py-12 text-center sm:px-16">
          <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-brand-gold sm:text-4xl">
            Ready to Start Your Fitness Journey?
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300">
            Let's work together to achieve your fitness goals. Contact me today to get started.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="/contact"
              className="rounded-md bg-brand-gold px-3.5 py-2.5 text-sm font-semibold text-brand-black shadow-sm hover:bg-brand-gold-light focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Get Started
            </a>
            <a href="/services" className="text-sm font-semibold leading-6 text-white hover:text-brand-gold">
              View Services <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </Section>
    </div>
  );
} 