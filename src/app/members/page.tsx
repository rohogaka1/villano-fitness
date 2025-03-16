'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Hero from '@/components/layout/Hero';
import Section from '@/components/layout/Section';

const tiers = [
  {
    name: 'Basic',
    id: 'tier-basic',
    price: '$5',
    description: 'Access to exclusive content and member-only updates.',
    features: [
      'Monthly workout plans',
      'Nutrition tips and recipes',
      'Member-only blog posts',
      'Early access to new content',
    ],
    cta: 'Join Basic',
    mostPopular: false,
  },
  {
    name: 'Premium',
    id: 'tier-premium',
    price: '$10',
    description: 'Enhanced access with additional perks and exclusive content.',
    features: [
      'All Basic features',
      'Weekly live Q&A sessions',
      'Private Facebook group access',
      'Exclusive workout videos',
      'Priority booking for classes',
      'Monthly challenges',
    ],
    cta: 'Join Premium',
    mostPopular: true,
  },
  {
    name: 'Elite',
    id: 'tier-elite',
    price: '$25',
    description: 'VIP experience with personalized attention and maximum benefits.',
    features: [
      'All Premium features',
      'Monthly 1-on-1 consultation',
      'Personalized workout plans',
      'Custom nutrition guidance',
      'Priority support',
      'Exclusive workshops access',
    ],
    cta: 'Join Elite',
    mostPopular: false,
  },
];

export default function MembersPage() {
  const [isLoggedIn] = useState(false); // TODO: Implement actual auth state

  return (
    <div className="bg-white">
      <Hero
        title="Members Area"
        description="Join our fitness community and get access to exclusive content, personalized guidance, and special perks."
      />

      <Section>
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-brand-black sm:text-4xl">
              Choose Your Membership Level
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-700">
              Select the tier that best fits your fitness journey. All memberships include access to our supportive community and exclusive content.
            </p>
          </div>
          <div className="isolate mx-auto mt-16 grid max-w-md grid-cols-1 gap-y-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {tiers.map((tier, tierIdx) => (
              <div
                key={tier.id}
                className={`flex flex-col justify-between rounded-3xl bg-white p-8 ring-1 ring-gray-200 xl:p-10 ${
                  tier.mostPopular ? 'lg:z-10 lg:rounded-b-none' : ''
                } ${tierIdx === 0 ? 'lg:rounded-r-none' : ''} ${
                  tierIdx === tiers.length - 1 ? 'lg:rounded-l-none' : ''
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-x-4">
                    <h3 className={`text-lg font-semibold leading-8 text-brand-black`}>
                      {tier.name}
                    </h3>
                    {tier.mostPopular ? (
                      <p className="rounded-full bg-brand-gold/10 px-2.5 py-1 text-xs font-semibold leading-5 text-brand-gold">
                        Most popular
                      </p>
                    ) : null}
                  </div>
                  <p className="mt-4 text-sm leading-6 text-gray-700">{tier.description}</p>
                  <p className="mt-6 flex items-baseline gap-x-1">
                    <span className="text-4xl font-bold tracking-tight text-brand-black">{tier.price}</span>
                    <span className="text-sm font-semibold leading-6 text-gray-700">/month</span>
                  </p>
                  <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-gray-700">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex gap-x-3">
                        <svg className="h-6 w-5 flex-none text-brand-gold" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                          <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <a
                  href="https://www.patreon.com/victoriafitness"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mt-8 block rounded-md px-3.5 py-2.5 text-center text-sm font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${
                    tier.mostPopular
                      ? 'bg-brand-gold text-brand-black shadow-sm hover:bg-brand-gold-light focus-visible:outline-brand-gold'
                      : 'bg-brand-black text-white shadow-sm hover:bg-brand-black/80 focus-visible:outline-brand-black'
                  }`}
                >
                  {tier.cta}
                </a>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section dark>
        <div className="relative isolate px-6 py-12 text-center sm:px-16">
          <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-brand-gold sm:text-4xl">
            Ready to Join Our Community?
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300">
            Start your membership today and get instant access to exclusive content and benefits.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="https://www.patreon.com/victoriafitness"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md bg-brand-gold px-3.5 py-2.5 text-sm font-semibold text-brand-black shadow-sm hover:bg-brand-gold-light focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Join Now
            </a>
            <Link href="/contact" className="text-sm font-semibold leading-6 text-white hover:text-brand-gold">
              Contact for Questions <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </Section>
    </div>
  );
} 