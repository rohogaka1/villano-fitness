import Image from 'next/image';
import Link from 'next/link';
import Hero from '@/components/layout/Hero';
import Section from '@/components/layout/Section';

const benefits = [
  {
    name: 'Full Body Workout',
    description: 'Burn calories and tone your entire body through dance-based cardio exercises.',
    icon: (props: any) => (
      <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" />
      </svg>
    ),
  },
  {
    name: 'Stress Relief',
    description: 'Dance away your stress with high-energy Latin music and fun choreography.',
    icon: (props: any) => (
      <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 9l10.5-3m0 6.553v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 11-.99-3.467l2.31-.66a2.25 2.25 0 001.632-2.163zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 01-.99-3.467l2.31-.66A2.25 2.25 0 009 15.553z" />
      </svg>
    ),
  },
  {
    name: 'Community',
    description: 'Join a supportive community of dance fitness enthusiasts.',
    icon: (props: any) => (
      <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
  },
];

const schedule = [
  {
    day: 'Monday',
    times: ['9:00 AM', '6:00 PM'],
    type: 'Zumba Fitness',
  },
  {
    day: 'Wednesday',
    times: ['9:00 AM', '6:00 PM'],
    type: 'Zumba Fitness',
  },
  {
    day: 'Friday',
    times: ['9:00 AM'],
    type: 'Zumba Toning',
  },
  {
    day: 'Saturday',
    times: ['10:00 AM'],
    type: 'Zumba Fitness',
  },
];

const pricing = [
  {
    name: 'Drop-in Class',
    price: '$15',
    description: 'Perfect for trying out Zumba or occasional attendance.',
  },
  {
    name: '5 Class Pack',
    price: '$65',
    description: 'Save $10 when you purchase a pack of 5 classes.',
    featured: true,
  },
  {
    name: '10 Class Pack',
    price: '$120',
    description: 'Best value! Save $30 when you purchase a pack of 10 classes.',
  },
];

export default function ZumbaPage() {
  return (
    <div className="bg-white">
      <Hero
        title="Join the Zumba Party!"
        description="Experience the joy of fitness through high-energy Latin dance workouts. No dance experience needed - just bring your energy and enthusiasm!"
        backgroundImage="https://images.unsplash.com/photo-1524594152303-9fd13543fe6e?w=1920&h=1080&fit=crop"
        ctaText="View Schedule"
        ctaHref="#schedule"
      />

      <Section>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-brand-gold">Why Choose Zumba</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-brand-black sm:text-4xl">
              Dance Your Way to Fitness
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-700">
              Zumba combines Latin and international music with dance moves, creating a dynamic, fun, and effective fitness system.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              {benefits.map((benefit) => (
                <div key={benefit.name} className="flex flex-col">
                  <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-brand-black">
                    <benefit.icon className="h-5 w-5 flex-none text-brand-gold" aria-hidden="true" />
                    {benefit.name}
                  </dt>
                  <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-700">
                    <p className="flex-auto">{benefit.description}</p>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </Section>

      <Section>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-base font-semibold leading-7 text-brand-gold">Class Schedule</h2>
            <p className="mt-2 text-4xl font-bold tracking-tight text-brand-black sm:text-5xl">
              Find Your Perfect Time
            </p>
          </div>
          <div className="mt-16 flow-root">
            <div className="isolate -mt-16 grid max-w-sm mx-auto gap-y-8 divide-y divide-gray-100 sm:mx-0 sm:max-w-none sm:grid-cols-2 sm:divide-y-0 lg:grid-cols-4">
              {schedule.map((day) => (
                <div key={day.day} className="pt-16 sm:px-6 lg:px-8">
                  <h3 className="text-2xl font-bold tracking-tight text-brand-black">{day.day}</h3>
                  <p className="mt-6 flex items-baseline gap-x-1">
                    <span className="text-lg text-gray-700">{day.type}</span>
                  </p>
                  <ul role="list" className="mt-8 space-y-3">
                    {day.times.map((time) => (
                      <li key={time} className="flex gap-x-3">
                        <svg className="h-6 w-5 flex-none text-brand-gold" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                        </svg>
                        {time}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-base font-semibold leading-7 text-brand-gold">Pricing</h2>
            <p className="mt-2 text-4xl font-bold tracking-tight text-brand-black sm:text-5xl">
              Simple, Flexible Pricing
            </p>
          </div>
          <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-gray-700">
            Choose the option that works best for you. No contracts, no commitments.
          </p>
          <div className="isolate mx-auto mt-16 grid max-w-md grid-cols-1 gap-y-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {pricing.map((price) => (
              <div
                key={price.name}
                className={`${
                  price.featured
                    ? 'lg:z-10 lg:rounded-b-none bg-gray-900 ring-2 ring-brand-gold'
                    : 'lg:mt-8 bg-white ring-1 ring-gray-200'
                } rounded-3xl p-8 xl:p-10`}
              >
                <div className="flex items-center justify-between gap-x-4">
                  <h3 className={`text-lg font-semibold leading-8 ${price.featured ? 'text-white' : 'text-brand-black'}`}>
                    {price.name}
                  </h3>
                </div>
                <p className="mt-4 text-sm leading-6 text-gray-400">{price.description}</p>
                <p className={`mt-6 flex items-baseline gap-x-1 ${price.featured ? 'text-white' : 'text-brand-black'}`}>
                  <span className="text-4xl font-bold tracking-tight">{price.price}</span>
                </p>
                <Link
                  href="/contact"
                  className={`mt-8 block rounded-md px-3.5 py-2.5 text-center text-sm font-semibold shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${
                    price.featured
                      ? 'bg-brand-gold text-brand-black hover:bg-brand-gold-light focus-visible:outline-brand-gold'
                      : 'bg-brand-black text-white hover:bg-gray-900 focus-visible:outline-brand-black'
                  }`}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section dark>
        <div className="relative isolate px-6 py-12 text-center sm:px-16">
          <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-brand-gold sm:text-4xl">
            Ready to Join the Party?
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300">
            Your first class is on us! Come experience the joy of Zumba and see why our members love it.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              href="/contact"
              className="rounded-md bg-brand-gold px-3.5 py-2.5 text-sm font-semibold text-brand-black shadow-sm hover:bg-brand-gold-light focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Claim Free Class
            </Link>
            <Link href="/contact" className="text-sm font-semibold leading-6 text-white hover:text-brand-gold">
              Contact Us <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </Section>
    </div>
  );
} 