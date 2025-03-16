import Image from "next/image";
import Link from "next/link";
import Hero from "@/components/layout/Hero";

const features = [
  {
    name: "Private Training",
    description: "Get personalized attention and achieve your fitness goals faster with one-on-one training sessions.",
    href: "/book",
    image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&h=400&fit=crop",
  },
  {
    name: "Zumba Classes",
    description: "Join the party! Experience the joy of fitness through high-energy Zumba dance workouts.",
    href: "/zumba",
    image: "https://images.unsplash.com/photo-1524594152303-9fd13543fe6e?w=600&h=400&fit=crop",
  },
  {
    name: "Online Programs",
    description: "Access premium workout content and nutrition guides from anywhere, anytime.",
    href: "/members",
    image: "https://images.unsplash.com/photo-1599058917765-a780eda07a3e?w=600&h=400&fit=crop",
  },
  {
    name: "Nutrition Guidance",
    description: "Receive expert advice on nutrition to complement your fitness journey.",
    href: "/services#nutrition",
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=600&h=400&fit=crop",
  },
];

export default function Home() {
  return (
    <div className="bg-white">
      <Hero
        title="Elevate Your Fitness Journey"
        description="Transform your life with expert fitness training, energetic Zumba classes, and personalized wellness programs. Experience the difference with Victoria Villano's signature approach."
        backgroundImage="https://images.unsplash.com/photo-1594381898411-846e7d193883?w=1920&h=1080&fit=crop"
        ctaText="Start Your Journey"
        ctaHref="/book"
      />

      {/* Features section */}
      <div className="mx-auto mt-32 max-w-7xl px-6 pb-24 sm:mt-40 sm:pb-32 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-brand-black sm:text-4xl">Everything you need to reach your fitness goals</h2>
          <p className="mt-6 text-lg leading-8 text-gray-700">
            Choose from a variety of services designed to help you achieve your desired results, whether you're just starting your fitness journey or looking to take it to the next level.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-12 gap-y-16 lg:max-w-none lg:grid-cols-4">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col bg-white rounded-lg shadow-sm hover:shadow-lg transition-shadow">
                <div className="relative h-48 w-full overflow-hidden rounded-t-lg">
                  <Image
                    src={feature.image}
                    alt={feature.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <dt className="text-xl font-semibold leading-7 text-brand-black mb-4">
                    <Link href={feature.href} className="hover:text-brand-gold transition-colors">
                      {feature.name}
                    </Link>
                  </dt>
                  <dd className="flex flex-auto flex-col text-base leading-7 text-gray-700">
                    <p className="flex-auto">{feature.description}</p>
                    <p className="mt-6">
                      <Link
                        href={feature.href}
                        className="text-sm font-semibold leading-6 text-brand-gold hover:text-brand-gold-light transition-colors"
                      >
                        Learn more <span aria-hidden="true">→</span>
                      </Link>
                    </p>
                  </dd>
                </div>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
