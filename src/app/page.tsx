import Image from "next/image";
import Link from "next/link";

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
      {/* Hero section */}
      <div className="relative">
        <div className="mx-auto max-w-7xl">
          <div className="relative z-10 pt-14 lg:w-full lg:max-w-2xl">
            <div className="relative px-6 py-32 sm:py-40 lg:px-8 lg:py-56 lg:pr-0">
              <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl">
                <h1 className="text-4xl font-bold tracking-tight text-brand-black sm:text-6xl">
                  Transform Your Life with Victoria Villano
                </h1>
                <p className="mt-6 text-lg leading-8 text-gray-700">
                  Expert fitness training, energetic Zumba classes, and personalized wellness programs designed to help you achieve your health and fitness goals.
                </p>
                <div className="mt-10 flex items-center gap-x-6">
                  <Link
                    href="/book"
                    className="rounded-md bg-brand-gold px-3.5 py-2.5 text-sm font-semibold text-brand-black shadow-sm hover:bg-brand-gold-light focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-gold"
                  >
                    Book a Session
                  </Link>
                  <Link href="/about" className="text-sm font-semibold leading-6 text-brand-black hover:text-brand-gold">
                    Learn more <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-50 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <div className="relative h-full">
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            <img
              className="aspect-[3/2] w-full bg-gray-50 object-cover lg:absolute lg:inset-0 lg:aspect-auto lg:h-full"
              src="https://images.unsplash.com/photo-1571388208497-71bedc66e932?w=1920&h=1080&fit=crop"
              alt="Fitness Training"
            />
          </div>
        </div>
      </div>

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
