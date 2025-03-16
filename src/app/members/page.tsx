'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Hero from '@/components/layout/Hero';
import Section from '@/components/layout/Section';

const benefits = [
  {
    name: 'Exclusive Content',
    description: 'Access premium workout videos, nutrition guides, and training programs.',
    icon: (props: any) => (
      <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z" />
      </svg>
    ),
  },
  {
    name: 'Progress Tracking',
    description: 'Track your workouts, measurements, and achievements with our digital tools.',
    icon: (props: any) => (
      <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
  },
  {
    name: 'Community Support',
    description: 'Connect with other members, share experiences, and stay motivated together.',
    icon: (props: any) => (
      <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
  },
];

const features = [
  {
    name: 'Workout Library',
    description: 'Access a growing library of workout videos for all fitness levels.',
    image: 'https://images.unsplash.com/photo-1594737625785-a6cbdabd333c?w=800&h=600&fit=crop',
  },
  {
    name: 'Nutrition Plans',
    description: 'Get customized meal plans and nutrition guidance to support your goals.',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&h=600&fit=crop',
  },
  {
    name: 'Live Sessions',
    description: 'Join exclusive live workout sessions with Victoria.',
    image: 'https://images.unsplash.com/photo-1599058917765-a780eda07a3e?w=800&h=600&fit=crop',
  },
];

const plans = [
  {
    name: 'Monthly',
    price: '$49',
    description: 'Perfect for getting started with online training.',
    features: [
      'Full access to workout library',
      'Basic nutrition guidance',
      'Progress tracking tools',
      'Community forum access',
    ],
  },
  {
    name: 'Quarterly',
    price: '$129',
    description: 'Our most popular online membership option.',
    features: [
      'Everything in Monthly plan',
      'Personalized workout plans',
      'Monthly live Q&A sessions',
      'Priority support',
      'Save $18 per quarter',
    ],
    featured: true,
  },
  {
    name: 'Annual',
    price: '$449',
    description: 'Best value for committed members.',
    features: [
      'Everything in Quarterly plan',
      'Two personal training sessions',
      'Custom nutrition plan',
      'Exclusive challenges',
      'Save $139 per year',
    ],
  },
];

export default function MembersPage() {
  const [isLoggedIn] = useState(false); // TODO: Implement actual auth state

  return (
    <div className="bg-white">
      <Hero
        title="Online Training Programs"
        description="Transform your fitness journey with expert-guided workouts, nutrition plans, and a supportive community - all accessible from anywhere."
        backgroundImage="https://images.unsplash.com/photo-1599058917765-a780eda07a3e?w=1920&h=1080&fit=crop"
        ctaText="Join Now"
        ctaHref="#pricing"
      />

      <Section>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-brand-gold">Member Benefits</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-brand-black sm:text-4xl">
              Everything You Need to Succeed
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-700">
              Get access to premium content, expert guidance, and a supportive community to help you achieve your fitness goals.
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
          <div className="mx-auto max-w-2xl sm:text-center">
            <h2 className="text-base font-semibold leading-7 text-brand-gold">Program Features</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-brand-black sm:text-4xl">
              What's Included
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-700">
              Our online programs provide everything you need to transform your fitness journey, whether you're at home or on the go.
            </p>
          </div>
        </div>
        <div className="relative pt-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
              {features.map((feature) => (
                <div key={feature.name} className="flex flex-col">
                  <div className="relative h-52 w-full overflow-hidden rounded-2xl">
                    <Image
                      src={feature.image}
                      alt={feature.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="mt-6 text-lg font-semibold leading-8 tracking-tight text-brand-black">
                    {feature.name}
                  </h3>
                  <p className="mt-2 text-base leading-7 text-gray-700">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section id="pricing">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-base font-semibold leading-7 text-brand-gold">Membership Plans</h2>
            <p className="mt-2 text-4xl font-bold tracking-tight text-brand-black sm:text-5xl">
              Choose Your Plan
            </p>
          </div>
          <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-gray-700">
            Select the membership plan that best fits your goals and commitment level.
          </p>
          <div className="isolate mx-auto mt-16 grid max-w-md grid-cols-1 gap-y-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`${
                  plan.featured
                    ? 'lg:z-10 lg:rounded-b-none bg-gray-900 ring-2 ring-brand-gold'
                    : 'lg:mt-8 bg-white ring-1 ring-gray-200'
                } rounded-3xl p-8 xl:p-10`}
              >
                <div className="flex items-center justify-between gap-x-4">
                  <h3 className={`text-lg font-semibold leading-8 ${plan.featured ? 'text-white' : 'text-brand-black'}`}>
                    {plan.name}
                  </h3>
                </div>
                <p className="mt-4 text-sm leading-6 text-gray-400">{plan.description}</p>
                <p className={`mt-6 flex items-baseline gap-x-1 ${plan.featured ? 'text-white' : 'text-brand-black'}`}>
                  <span className="text-4xl font-bold tracking-tight">{plan.price}</span>
                </p>
                <ul
                  role="list"
                  className={`mt-8 space-y-3 text-sm leading-6 ${plan.featured ? 'text-gray-300' : 'text-gray-700'}`}
                >
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex gap-x-3">
                      <svg className="h-6 w-5 flex-none text-brand-gold" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className={`mt-8 block rounded-md px-3.5 py-2.5 text-center text-sm font-semibold shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${
                    plan.featured
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
            Start Your Online Training Journey
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300">
            Join our community of dedicated members and transform your fitness journey with expert guidance and support.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              href="/contact"
              className="rounded-md bg-brand-gold px-3.5 py-2.5 text-sm font-semibold text-brand-black shadow-sm hover:bg-brand-gold-light focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Get Started
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