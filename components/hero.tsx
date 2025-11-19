import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex h-[100dvh] items-center overflow-hidden"
    >
      {/* Mobile Background Image - Upload your cropped mobile version to public/mobile-hero.jpg */}
      <div
        className="absolute inset-0 z-0 md:hidden"
        style={{
          backgroundImage: "url('/gm.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />

      {/* Desktop Background Image */}
      <div
        className="absolute inset-0 z-0 hidden md:block"
        style={{
          backgroundImage: "url('/g.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />

      <div className="absolute inset-0 bg-black/30" />

      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl pt-16 sm:pt-0">
          <h1 className="mb-4 text-balance text-3xl font-black uppercase leading-tight tracking-tight text-white drop-shadow-2xl sm:mb-6 sm:text-5xl md:text-6xl lg:text-7xl">
            Your Comprehensive Partner
            <br />
            <span className="text-accent">
              For Automated Security & Custom Aluminum Solutions
            </span>
          </h1>

          <p className="mb-6 text-base leading-relaxed text-white/95 drop-shadow-lg sm:mb-10 sm:text-xl">
            Professional CCTV installation, electric fencing, alarm systems,
            intercom solutions, and custom aluminum fabrication across South
            Africa.
          </p>

          <div className="flex flex-col gap-3 pb-12 sm:flex-row sm:gap-4 sm:pb-0">
            <Button
              size="lg"
              className="bg-accent text-accent-foreground shadow-lg hover:bg-accent/90"
              asChild
            >
              <a href="#quote">Get A Free Quote</a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/80 bg-white/10 text-white backdrop-blur-sm hover:bg-white/20"
              asChild
            >
              <a href="#services">View Services</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
