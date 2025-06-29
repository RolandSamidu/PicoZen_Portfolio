import { HeroSection } from "../components/home/HeroSection";

export const HomePage = () => (
  <div className="min-h-screen">
    <HeroSection />

    {/* Features Section */}
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose TechFlow?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We combine creativity with technology to deliver solutions that
            drive results
          </p>
        </div>
      </div>
    </section>
  </div>
);
