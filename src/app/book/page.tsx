'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Hero from '@/components/layout/Hero';
import Section from '@/components/layout/Section';

const benefits = [
  {
    name: 'Personalized Attention',
    description: 'Get a workout program tailored specifically to your goals and fitness level.',
    icon: (props: any) => (
      <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
      </svg>
    ),
  },
  {
    name: 'Flexible Scheduling',
    description: 'Book sessions at times that work best for your schedule.',
    icon: (props: any) => (
      <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
      </svg>
    ),
  },
  {
    name: 'Progress Tracking',
    description: 'Monitor your improvements with detailed progress tracking and regular assessments.',
    icon: (props: any) => (
      <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
  },
];

const packages = [
  {
    name: 'Single Session',
    price: '$75',
    description: 'Perfect for trying out personal training or occasional guidance.',
    features: [
      '60-minute session',
      'Personalized workout plan',
      'Form correction',
      'Progress tracking',
    ],
  },
  {
    name: '5 Session Package',
    price: '$350',
    description: 'Our most popular option for consistent progress.',
    features: [
      '5 x 60-minute sessions',
      'Personalized workout plan',
      'Nutrition guidance',
      'Progress tracking',
      'Flexible scheduling',
      '$70 per session',
    ],
    featured: true,
  },
  {
    name: '10 Session Package',
    price: '$650',
    description: 'Best value for committed individuals.',
    features: [
      '10 x 60-minute sessions',
      'Comprehensive fitness assessment',
      'Customized workout plan',
      'Nutrition consultation',
      'Progress tracking',
      'Priority scheduling',
      '$65 per session',
    ],
  },
];

export default function BookPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    sessionType: '',
    preferredDate: '',
    preferredTime: '',
    message: '',
  });

  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');

    try {
      const response = await fetch('/api/book', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormStatus('success');
        setFormData({
          name: '',
          email: '',
          phone: '',
          sessionType: '',
          preferredDate: '',
          preferredTime: '',
          message: '',
        });
      } else {
        setFormStatus('error');
      }
    } catch (error) {
      setFormStatus('error');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="bg-white">
      <Hero
        title="Private Training Sessions"
        description="Experience personalized fitness coaching tailored to your goals. Whether you're just starting or looking to break through plateaus, we'll create a program that works for you."
        backgroundImage="https://images.unsplash.com/photo-1571388208497-71bedc66e932?w=1920&h=1080&fit=crop"
        ctaText="Book Now"
        ctaHref="#pricing"
      />

      <Section>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-brand-gold">Why Choose Private Training</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-brand-black sm:text-4xl">
              Transform Your Fitness Journey
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-700">
              Get the personalized attention you deserve with one-on-one training sessions designed to help you achieve your fitness goals faster and more effectively.
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

      <Section id="pricing">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-base font-semibold leading-7 text-brand-gold">Pricing</h2>
            <p className="mt-2 text-4xl font-bold tracking-tight text-brand-black sm:text-5xl">
              Choose Your Package
            </p>
          </div>
          <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-gray-700">
            Select the package that best fits your goals and commitment level. All packages include personalized attention and expert guidance.
          </p>
          <div className="isolate mx-auto mt-16 grid max-w-md grid-cols-1 gap-y-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {packages.map((pkg, pkgIdx) => (
              <div
                key={pkg.name}
                className={`${
                  pkg.featured
                    ? 'lg:z-10 lg:rounded-b-none bg-gray-900 ring-2 ring-brand-gold'
                    : 'lg:mt-8 bg-white ring-1 ring-gray-200'
                } rounded-3xl p-8 xl:p-10`}
              >
                <div className="flex items-center justify-between gap-x-4">
                  <h3
                    className={`text-lg font-semibold leading-8 ${
                      pkg.featured ? 'text-white' : 'text-brand-black'
                    }`}
                  >
                    {pkg.name}
                  </h3>
                </div>
                <p className="mt-4 text-sm leading-6 text-gray-400">{pkg.description}</p>
                <p className={`mt-6 flex items-baseline gap-x-1 ${pkg.featured ? 'text-white' : 'text-brand-black'}`}>
                  <span className="text-4xl font-bold tracking-tight">{pkg.price}</span>
                </p>
                <ul
                  role="list"
                  className={`mt-8 space-y-3 text-sm leading-6 ${pkg.featured ? 'text-gray-300' : 'text-gray-700'}`}
                >
                  {pkg.features.map((feature) => (
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
                    pkg.featured
                      ? 'bg-brand-gold text-brand-black hover:bg-brand-gold-light focus-visible:outline-brand-gold'
                      : 'bg-brand-black text-white hover:bg-gray-900 focus-visible:outline-brand-black'
                  }`}
                >
                  Book Now
                </Link>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section dark>
        <div className="relative isolate px-6 py-12 text-center sm:px-16">
          <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-brand-gold sm:text-4xl">
            Ready to Start Your Transformation?
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300">
            Book your first session today and take the first step towards achieving your fitness goals.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              href="/contact"
              className="rounded-md bg-brand-gold px-3.5 py-2.5 text-sm font-semibold text-brand-black shadow-sm hover:bg-brand-gold-light focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Book Now
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