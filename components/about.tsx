import { Shield, Award, Users, CheckCircle } from "lucide-react";

export function About() {
  return (
    <section
      id="about"
      className="border-b border-border bg-muted py-20 lg:py-32"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold uppercase text-foreground sm:text-4xl md:text-5xl">
            About <span className="text-accent">Vuza Trading</span>
          </h2>
          <p className="mx-auto max-w-3xl text-lg text-muted-foreground">
            Your comprehensive partner for automated security and custom
            aluminum solutions
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Column - Company Description */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-primary">Who We Are</h3>
            <p className="text-muted-foreground leading-relaxed">
              Vuza Trading specializes in comprehensive security and aluminum
              fabrication solutions for residential and commercial properties
              across South Africa. With over 15 years of experience, we deliver
              professional installations that combine technical expertise with
              quality craftsmanship.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              From state-of-the-art CCTV systems to custom aluminum work, we
              provide end-to-end solutions that enhance security, convenience,
              and property value. Our team is committed to delivering reliable
              service backed by ongoing support.
            </p>

            <div className="rounded-lg border border-border bg-card p-6">
              <h4 className="mb-4 font-bold text-primary">Our Commitment</h4>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 flex-shrink-0 text-accent" />
                  Professional installation and repair services
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 flex-shrink-0 text-accent" />
                  Quality materials and workmanship guaranteed
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 flex-shrink-0 text-accent" />
                  Competitive pricing and free consultations
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 flex-shrink-0 text-accent" />
                  Ongoing maintenance and 24/7 support
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column - Stats & Features */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-primary">Why Choose Us?</h3>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              <div className="rounded-lg border border-border bg-card p-6 text-center">
                <Shield className="mx-auto mb-3 h-10 w-10 text-accent" />
                <div className="text-3xl font-bold text-primary">500+</div>
                <div className="text-sm text-muted-foreground">
                  Projects Completed
                </div>
              </div>
              <div className="rounded-lg border border-border bg-card p-6 text-center">
                <Award className="mx-auto mb-3 h-10 w-10 text-accent" />
                <div className="text-3xl font-bold text-primary">15+</div>
                <div className="text-sm text-muted-foreground">
                  Years Experience
                </div>
              </div>
              <div className="rounded-lg border border-border bg-card p-6 text-center">
                <Users className="mx-auto mb-3 h-10 w-10 text-accent" />
                <div className="text-3xl font-bold text-primary">100%</div>
                <div className="text-sm text-muted-foreground">
                  Client Satisfaction
                </div>
              </div>
              <div className="rounded-lg border border-border bg-card p-6 text-center">
                <CheckCircle className="mx-auto mb-3 h-10 w-10 text-accent" />
                <div className="text-3xl font-bold text-primary">24/7</div>
                <div className="text-sm text-muted-foreground">
                  Support Available
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
