import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    content:
      "I was referred to them by my colleague and yes they manufactured and installed my aluminum windows in time and their work is top notch. Vuza Trading is a company you can trust.",
    rating: 5,
  },
  {
    content:
      "Vuza Trading is a company you can trust from CCTV, electric fencing to aluminum work. I have worked with them to secure almost most of my properties since 2020.",
    rating: 5,
  },
  {
    content:
      "Very good guy to work with... otherwise I have been working with Vuza Trading for years now.",
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section
      id="testimonials"
      className="border-b border-border bg-background py-20 lg:py-32"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
            What Customers Have Said About Us
          </h2>
          <p className="mx-auto max-w-2xl text-pretty text-lg text-muted-foreground">
            Here are some testimonials from our valued clients.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-border bg-card">
              <CardContent className="pt-6">
                <div className="mb-4 flex gap-1">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-muted-foreground italic">
                  "{testimonial.content}"
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
