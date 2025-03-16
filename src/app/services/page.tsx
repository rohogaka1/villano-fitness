import Image from 'next/image';
import Link from 'next/link';
import Hero from '@/components/layout/Hero';
import Section from '@/components/layout/Section';

const services = [
  {
    name: 'Private Training Sessions',
    description: 'One-on-one personalized training sessions tailored to your specific goals and fitness level.',
    price: 'From $75/session',
    features: [
      'Personalized workout plans',
      'Form correction and technique guidance',
      'Progress tracking',
      'Nutrition advice',
      'Flexible scheduling',
    ],
    cta: 'Book a Session',
    href: '/book',
    image: 'https://placehold.co/800x600/D4AF37/000000/png?text=Private+Training',
  },
  {
    name: 'Zumba Classes',
    description: 'High-energy dance fitness classes that combine Latin and international music with dance moves.',
    price: 'From $15/class',
    features: [
      'Fun, energetic atmosphere',
      'All fitness levels welcome',
      'Cardio and toning',
      'Great for stress relief',
      'Community environment',
    ],
    cta: 'View Schedule',
    href: '/zumba',
    image: 'https://placehold.co/800x600/D4AF37/000000/png?text=Zumba+Classes',
  },
  {
    name: 'Group Fitness Classes',
    description: 'Small group training sessions that provide personal attention while fostering a supportive community.',
    price: 'From $20/class',
    features: [
      'Limited class size',
      'Various workout styles',
      'Supportive group environment',
      'Affordable training option',
      'Flexible scheduling',
    ],
    cta: 'Learn More',
    href: '/contact',
    image: 'https://placehold.co/800x600/D4AF37/000000/png?text=Group+Fitness',
  },
];

const specialties = [
  {
    name: 'Weight Loss',
    description: 'Customized programs combining exercise and nutrition guidance for sustainable weight loss.',
    icon: (props: any) => (
      <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0 0 12 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52 2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 0 1-2.031.352 5.988 5.988 0 0 1-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.97Zm-13.5 0L7.87 15.696c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 0 1-2.031.352 5.989 5.989 0 0 1-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.97Z" />
      </svg>
    ),
  },
  {
    name: 'Strength Training',
    description: 'Build strength, increase muscle mass, and improve overall fitness with proper form and technique.',
    icon: (props: any) => (
      <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
  },
  {
    name: 'Flexibility & Mobility',
    description: 'Enhance range of motion, prevent injuries, and improve overall movement quality.',
    icon: (props: any) => (
      <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
      </svg>
    ),
  },
];

export default function ServicesPage() {
  return (
    <div className="bg-white">
      <Hero
        title="Personalized Fitness Solutions"
        description="From one-on-one training to energetic group classes, discover programs tailored to your goals. Choose the path that best fits your journey to a healthier, stronger you."
        backgroundImage="https://images.unsplash.com/photo-1549576490-b0b4831ef60a?w=1920&h=1080&fit=crop"
        ctaText="Explore Programs"
        ctaHref="#services"
      />

      <Section>
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {services.map((service) => (
            <div key={service.name} className="flex flex-col border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="relative h-48">
                <Image
                  src={service.image}
                  alt={service.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold tracking-tight text-brand-black">{service.name}</h3>
                <p className="mt-4 text-lg text-brand-gold font-semibold">{service.price}</p>
                <p className="mt-4 text-base text-gray-700">{service.description}</p>
                <ul role="list" className="mt-8 space-y-3">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex gap-x-3 text-gray-700">
                      <svg className="h-6 w-5 flex-none text-brand-gold" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  href={service.href}
                  className="mt-8 block rounded-md bg-brand-gold px-3.5 py-2.5 text-center text-sm font-semibold text-brand-black shadow-sm hover:bg-brand-gold-light focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-gold"
                >
                  {service.cta}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-brand-black sm:text-4xl">Areas of Expertise</h2>
          <p className="mt-6 text-lg leading-8 text-gray-700">
            With over two decades of experience, I specialize in various aspects of fitness and wellness to help you achieve your goals.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {specialties.map((specialty) => (
              <div key={specialty.name} className="flex flex-col bg-white rounded-lg p-6 shadow-sm hover:shadow-lg transition-shadow">
                <dt className="text-base font-semibold leading-7 text-brand-black">
                  <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-brand-gold">
                    <specialty.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  {specialty.name}
                </dt>
                <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-700">
                  <p className="flex-auto">{specialty.description}</p>
                  <div className="relative h-40 mt-6 rounded-lg overflow-hidden">
                    <Image
                      src={`https://placehold.co/600x400/D4AF37/000000/png?text=${specialty.name.replace(/\s+/g, '+')}`}
                      alt={specialty.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </Section>

      <Section dark>
        <div className="relative isolate px-6 py-12 text-center sm:px-16">
          <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-brand-gold sm:text-4xl">
            Ready to Transform Your Fitness Journey?
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300">
            Take the first step towards achieving your fitness goals. Contact me today to discuss how we can work together.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              href="/contact"
              className="rounded-md bg-brand-gold px-3.5 py-2.5 text-sm font-semibold text-brand-black shadow-sm hover:bg-brand-gold-light focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Get Started
            </Link>
            <Link href="/book" className="text-sm font-semibold leading-6 text-white hover:text-brand-gold">
              View Schedule <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </Section>
    </div>
  );
} 