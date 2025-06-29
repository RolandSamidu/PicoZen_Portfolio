export const HeroSection = () => (
  <section className="relative bg-gradient-to-br from-blue-50 via-white to-purple-50 py-20">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
          Build the{" "}
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Future
          </span>{" "}
          Today
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          We create innovative digital solutions that transform businesses and
          deliver exceptional user experiences through cutting-edge technology.
        </p>
        {/* <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg">
            Get Started
            <ChevronRight size={20} />
          </Button>
          <Button variant="outline" size="lg">
            Learn More
          </Button>
        </div> */}
      </div>
    </div>
  </section>
);
