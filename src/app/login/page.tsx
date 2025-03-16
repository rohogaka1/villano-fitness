import Hero from "@/components/layout/Hero";
import Section from "@/components/layout/Section";
import AuthButtons from "./AuthButtons";

export default function LoginPage() {
  return (
    <>
      <Hero
        title="Welcome Back"
        description="Sign in to access your personalized fitness journey"
      />
      <Section>
        <div className="mx-auto max-w-md">
          <AuthButtons />
          <p className="mt-10 text-center text-sm text-gray-500">
            By signing in, you agree to our{" "}
            <a href="/terms" className="font-semibold leading-6 text-brand-gold hover:text-brand-gold-dark">
              Terms of Service
            </a>{" "}
            and{" "}
            <a href="/privacy" className="font-semibold leading-6 text-brand-gold hover:text-brand-gold-dark">
              Privacy Policy
            </a>
          </p>
        </div>
      </Section>
    </>
  );
} 