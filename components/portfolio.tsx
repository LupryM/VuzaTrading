import Image from "next/image";
import { Card } from "@/components/ui/card";

const projects = [
  {
    title: "Residential Security System",
    category: "CCTV & Alarm Installation",
    image: "/i.jpeg",
  },
  {
    title: "Automated Garage Doors",
    category: "Gate & Door Automation",
    image: "/k.jpeg",
  },
   {
    title: "Residential Aluminium Windows",
    category: "Windows & Doors",
    image: "/z.jpg",
  },
  {
    title: "Commercial Electric Fencing",
    category: "Perimeter Security",
    image: "/d.jpeg",
  },
    
  {
    title: "Custom Aluminium Gates",
    category: "Fabrication",
    image: "/o.jpg",
  },
  {
    title: "Office Complex Intercom",
    category: "Intercom Systems",
    image: "/x.jpg",
  },

 
];

export function Portfolio() {
  return (
    <section
      id="portfolio"
      className="border-b border-border bg-muted py-20 lg:py-32"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
            Featured Projects
          </h2>
          <p className="mx-auto max-w-2xl text-pretty text-lg text-muted-foreground">
            Explore our portfolio of completed projects. Quality workmanship and
            attention to detail in every installation.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group overflow-hidden border-border bg-card transition-all hover:shadow-md"
            >
              <div className="relative min-h-[250px] overflow-hidden bg-muted">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              </div>
              <div className="p-6">
                <div className="mb-2 text-sm font-medium text-accent">
                  {project.category}
                </div>
                <h3 className="text-xl font-semibold text-card-foreground">
                  {project.title}
                </h3>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
