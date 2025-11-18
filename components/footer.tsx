import Link from "next/link";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Facebook,
  Twitter,
  Rss,
  Linkedin,
  Instagram,
} from "lucide-react";

export function Footer() {
  return (
    <footer id="contact" className="bg-[#3a3a3a] text-white">
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              About Vuza Trading
            </h3>
            <p className="mb-4 text-sm leading-relaxed text-white/80">
              Your comprehensive partner for automated security and custom
              aluminum solutions. Professional services for residential and
              commercial properties across South Africa.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.facebook.com/vuzatrading"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-accent"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href="https://x.com/TradingVuza"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-accent"
              >
                <Twitter className="h-4 w-4" />
              </a>

              <a
                href="https://www.instagram.com/vuzatrading/"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-accent"
              >
                <Instagram className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="#services"
                  className="text-white/80 transition-colors hover:text-accent"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="#portfolio"
                  className="text-white/80 transition-colors hover:text-accent"
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  href="#testimonials"
                  className="text-white/80 transition-colors hover:text-accent"
                >
                  Testimonials
                </Link>
              </li>
              <li>
                <Link
                  href="#quote"
                  className="text-white/80 transition-colors hover:text-accent"
                >
                  Get Quote
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Our Services
            </h3>
            <ul className="space-y-2 text-sm">
              <li className="text-white/80">Custom Aluminum Manufacturing</li>
              <li className="text-white/80">Gate & Door Automation</li>
              <li className="text-white/80">CCTV Installations</li>
              <li className="text-white/80">Electric Fencing</li>
              <li className="text-white/80">Alarm & Intercom Systems</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Contact
            </h3>
            <div className="space-y-4 text-sm">
              <div>
                <p className="mb-1 font-semibold text-accent">
                  For a Free Consultation Call:
                </p>
                <p className="text-xl font-bold text-white">068 149 4588</p>
              </div>
              <div className="text-white/80">
                <p className="font-semibold text-white">
                  President Park AH, Midrand
                </p>
                <p>South Africa, 1685</p>
                <p>Mon – Sat: 09:30 – 18:00 </p>
                <p>Sun: Closed</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/20 pt-8">
          <h3 className="mb-4 text-center text-sm font-semibold uppercase tracking-wider text-white">
            Our Location
          </h3>
          <div className="mx-auto max-w-4xl overflow-hidden rounded-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3159.234567!2d28.15254!3d-26.00647!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e956e5bXXXXXXXX%3A0xYYYYYYYYYYYYY!2sPresident%20Park%20AH%2C%20Midrand%2C%201685%2C%20South%20Africa!5e0!3m2!1sen!2za!4v0000000000000!5m2!1sen!2za"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full"
            />
          </div>
        </div>

        <div className="mt-8 border-t border-white/20 pt-8 text-center text-sm text-white/60">
          <p>Vuza Trading © 2025. Privacy Policy</p>
        </div>
      </div>
    </footer>
  );
}
