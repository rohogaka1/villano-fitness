import Image from 'next/image';
import Link from 'next/link';
import Hero from '@/components/layout/Hero';
import Section from '@/components/layout/Section';

const benefits = [
  {
    name: 'Full Body Workout',
    description: 'Zumba combines cardio, muscle conditioning, balance, and flexibility for a complete fitness routine.',
  },
  {
    name: 'Fun & Energetic',
    description: 'Dance to great music, meet new people, and enjoy a workout that feels more like a party.',
  },
  {
    name: 'All Fitness Levels',
    description: 'Whether you\'re just starting or an experienced dancer, classes are designed to be accessible to everyone.',
  },
  {
    name: 'Stress Relief',
    description: 'Release tension, boost your mood, and improve mental well-being through dance and movement.',
  },
  {
    name: 'Calorie Burning',
    description: 'Burn up to 500-800 calories per class while having fun and learning new dance moves.',
  },
  {
    name: 'Community',
    description: 'Join a supportive community of people working towards their fitness goals together.',
  },
];

const schedule = [
  {
    day: 'Monday',
    times: ['9:00 AM - 10:00 AM', '6:00 PM - 7:00 PM'],
  },
  {
    day: 'Wednesday',
    times: ['9:00 AM - 10:00 AM', '6:00 PM - 7:00 PM'],
  },
  {
    day: 'Friday',
    times: ['9:00 AM - 10:00 AM'],
  },
  {
    day: 'Saturday',
    times: ['10:00 AM - 11:00 AM'],
  },
];

export default function ZumbaPage() {
  return (
    <div className="bg-white">
      <Hero
        title="Zumba Classes"
        description="Join the party and dance your way to fitness with high-energy Zumba classes that combine Latin rhythms with easy-to-follow moves."
      />

      <Section>
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-brand-black mb-6">Class Schedule</h2>
              <div className="space-y-8">
                {schedule.map((day) => (
                  <div key={day.day} className="border-b border-gray-200 pb-6 last:border-b-0">
                    <h3 className="text-lg font-semibold text-brand-black mb-3">{day.day}</h3>
                    <ul className="space-y-2">
                      {day.times.map((time) => (
                        <li key={time} className="text-gray-700">{time}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <Link
                  href="/contact"
                  className="inline-block rounded-md bg-brand-gold px-4 py-2.5 text-sm font-semibold text-brand-black hover:bg-brand-gold-light"
                >
                  Register for a Class
                </Link>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold tracking-tight text-brand-black mb-6">Class Information</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  Each class is designed to be fun and accessible for all fitness levels. You'll dance to a mix of Latin and international music while getting a full-body workout.
                </p>
                <p>
                  Classes are held at our Palm Coast location. Please arrive 10-15 minutes early for your first class to complete registration.
                </p>
                <div className="mt-6">
                  <h3 className="text-lg font-semibold text-brand-black mb-2">What to Bring:</h3>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Water bottle</li>
                    <li>Comfortable workout clothes</li>
                    <li>Athletic shoes</li>
                    <li>Small towel (optional)</li>
                  </ul>
                </div>
                <div className="mt-6">
                  <h3 className="text-lg font-semibold text-brand-black mb-2">Pricing:</h3>
                  <ul className="space-y-2">
                    <li>Single Class: $15</li>
                    <li>5-Class Pack: $65 ($13/class)</li>
                    <li>10-Class Pack: $120 ($12/class)</li>
                    <li>Monthly Unlimited: $99</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-brand-black">Benefits of Zumba</h2>
          <p className="mt-6 text-lg leading-8 text-gray-700">
            Experience the many benefits of Zumba, a fun and effective workout that combines dance and fitness.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {benefits.map((benefit) => (
              <div key={benefit.name} className="flex flex-col">
                <dt className="text-lg font-semibold leading-7 text-brand-black">{benefit.name}</dt>
                <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-700">
                  <p className="flex-auto">{benefit.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </Section>

      <Section dark>
        <div className="relative isolate px-6 py-12 text-center sm:px-16">
          <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-brand-gold sm:text-4xl">
            Ready to Join the Party?
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300">
            Start your Zumba journey today and experience the joy of dance fitness.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              href="/contact"
              className="rounded-md bg-brand-gold px-3.5 py-2.5 text-sm font-semibold text-brand-black shadow-sm hover:bg-brand-gold-light focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Register Now
            </Link>
            <Link href="/contact" className="text-sm font-semibold leading-6 text-white hover:text-brand-gold">
              Contact for Questions <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </Section>
    </div>
  );
} 