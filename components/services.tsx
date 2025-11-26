import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Shield, Video, Zap, Bell, Radio, Wrench } from "lucide-react";

const services = [
  {
    icon: Wrench,
    title: "Custom Aluminum Manufacturing",
    description:
      "Design, manufacture, and install high-quality aluminum garage doors, gates, stable doors, patios, and shopfronts.",
    features: [
      "Garage Doors",
      "Gates & Fencing",
      "Stable Doors",
      "Patios & Shopfronts",
    ],
  },
  {
    icon: Video,
    title: "CCTV Installations",
    description:
      "State-of-the-art surveillance systems with HD cameras, remote monitoring, and professional installation.",
    features: [
      "HD Cameras",
      "Remote Monitoring",
      "Cloud Storage",
      "Installation & Repair",
    ],
  },
  {
    icon: Zap,
    title: "Electric Fencing",
    description:
      "High-voltage perimeter security with intelligent monitoring and energizer systems.",
    features: [
      "Perimeter Security",
      "Smart Monitoring",
      "Energizer Systems",
      "Safety Compliance",
    ],
  },
  {
    icon: Bell,
    title: "Alarm Systems",
    description:
      "Advanced alarms with motion detection, smartphone alerts, and 24/7 monitoring capabilities.",
    features: [
      "Motion Detection",
      "Mobile Alerts",
      "24/7 Monitoring",
      "Quick Response",
    ],
  },

  {
    icon: Shield,
    title: "Gate & Door Automation",
    description:
      "Advanced automation for gates and garage doors with remote control and smart integration.",
    features: [
      "Automated Gates",
      "Garage Doors",
      "Remote Control",
      "Smart Integration",
    ],
  },
];

export function Services() {
  return (
    <section
      id="services"
      className="border-b border-border bg-background py-20 lg:py-32"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Our Services */}
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold uppercase text-foreground sm:text-4xl md:text-5xl">
            Our Services
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Comprehensive security and aluminum fabrication solutions tailored
            to your needs
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Card
              key={index}
              className="border-border transition-shadow hover:shadow-lg"
            >
              <CardHeader>
                <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-full bg-accent/10">
                  <service.icon className="h-7 w-7 text-accent" />
                </div>
                <CardTitle className="text-foreground">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-2 text-sm text-muted-foreground"
                    >
                      <div className="h-1.5 w-1.5 rounded-full bg-accent" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
