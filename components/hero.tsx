import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex h-screen max-h-[900px] min-h-[600px] items-center overflow-hidden"
      style={{
        backgroundImage: "url('/g.jpeg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0 bg-black/40" />

      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-transparent" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h1 className="mb-6 text-balance text-4xl font-black uppercase leading-tight tracking-tight text-white drop-shadow-2xl sm:text-5xl md:text-6xl lg:text-7xl">
            Your Comprehensive Partner
            <br />
            <span className="text-accent">
              For Automated Security & Custom Aluminum Solutions
            </span>
          </h1>

          <p className="mb-10 text-lg leading-relaxed text-white/95 drop-shadow-lg md:text-xl">
            Professional CCTV installation, electric fencing, alarm systems,
            intercom solutions, and custom aluminum fabrication across South
            Africa.
          </p>

          <div className="flex flex-col gap-4 sm:flex-row">
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
