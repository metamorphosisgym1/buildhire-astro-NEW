import { useState } from "react";
import { Facebook, Instagram, Linkedin, ArrowRight, Shield } from "lucide-react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const accreditations = [
    { name: "SafeWork NSW", icon: Shield, subtitle: "Safety Certified" },
  ];

  return (
    <footer id="contact" className="bg-emerald border-t border-emerald-foreground/10">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10">
          {/* Logo + description */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xl font-bold text-white">BuildHire</span>
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-4">
              Sydney's most trusted excavator hire and construction equipment rental. Reliable dry hire with next-day delivery & collection across NSW.
            </p>
            {/* Accreditation */}
            <div className="flex flex-wrap items-center gap-3 mt-2">
              {accreditations.map((acc) => (
                <div
                  key={acc.name}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-white/10 bg-white/5"
                >
                  <acc.icon size={14} className="text-white/30" />
                  <div>
                    <span className="text-white/40 text-xs font-bold block">{acc.name}</span>
                    <span className="text-white/20 text-[10px]">{acc.subtitle}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Equipment Directory */}
          <div>
            <h4 className="label-text text-xs text-primary mb-4">Equipment</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/equipment/08t-mini-excavator-hire-sydney/" className="text-white/70 hover:text-white transition-colors">0.8T Mini Excavator</a></li>
              <li><a href="/equipment/1t-mini-excavator-hire-sydney/" className="text-white/70 hover:text-white transition-colors">1T Mini Excavator</a></li>
              <li><a href="/equipment/17t-mini-excavator-hire-sydney/" className="text-white/70 hover:text-white transition-colors">1.7T Mini Excavator</a></li>
              <li><a href="/equipment/35t-excavator-hire-sydney/" className="text-white/70 hover:text-white transition-colors">3.5T Excavator</a></li>
              <li><a href="/equipment/55t-excavator-hire-sydney/" className="text-white/70 hover:text-white transition-colors">5.5T Excavator</a></li>
              <li><a href="/equipment/8t-excavator-hire-sydney/" className="text-white/70 hover:text-white transition-colors">8T Excavator</a></li>
              <li><a href="/equipment/145t-excavator-hire-sydney/" className="text-white/70 hover:text-white transition-colors">14.5T Excavator</a></li>
              <li><a href="/equipment/23t-excavator-hire-sydney/" className="text-white/70 hover:text-white transition-colors">23T Excavator</a></li>
              <li><a href="/equipment/tipper-truck-hire-sydney/" className="text-white/70 hover:text-white transition-colors">Tipper Truck</a></li>
            </ul>
          </div>

          {/* Industries Directory */}
          <div>
            <h4 className="label-text text-xs text-primary mb-4">Industries</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/industries/pool-builders/" className="text-white/70 hover:text-white transition-colors">Pool Builders</a></li>
              <li><a href="/industries/landscapers/" className="text-white/70 hover:text-white transition-colors">Landscapers</a></li>
              <li><a href="/industries/builders/" className="text-white/70 hover:text-white transition-colors">Builders & Concreters</a></li>
              <li><a href="/industries/plumbers/" className="text-white/70 hover:text-white transition-colors">Plumbers & Drainage</a></li>
              <li><a href="/industries/civil-contractors/" className="text-white/70 hover:text-white transition-colors">Civil Contractors</a></li>
              <li><a href="/industries/demolition-contractors/" className="text-white/70 hover:text-white transition-colors">Demolition Contractors</a></li>
              <li><a href="/industries/property-developers/" className="text-white/70 hover:text-white transition-colors">Property Developers</a></li>
              <li><a href="/industries/drainage-contractors/" className="text-white/70 hover:text-white transition-colors">Drainage Contractors</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="label-text text-xs text-primary mb-4">Contact</h4>
            <ul className="space-y-3 text-sm text-white/70">
              <li><a href="mailto:info@buildhire.com.au" className="hover:text-white transition-colors">info@buildhire.com.au</a></li>
              <li><a href="tel:1300157882" className="hover:text-white transition-colors">1300 157 882</a></li>
              <li>
                <a
                  href="https://wa.me/61435421324?text=Hi%20BuildHire%2C%20I%27d%20like%20to%20enquire%20about%20equipment%20hire."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors inline-flex items-center gap-1.5"
                >
                  <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                  WhatsApp Us
                </a>
              </li>
              <li>Sydney, NSW</li>
              <li className="pt-2 border-t border-white/10">
                <a href="/blog/" className="hover:text-white transition-colors">Blog</a>
              </li>
              <li><a href="#booking" className="hover:text-white transition-colors">Book Now</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="label-text text-xs text-primary mb-4">Get Exclusive Offers & Fleet Updates</h4>
            <div className="flex gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your work email"
                className="flex-1 bg-transparent border-b border-white/30 pb-2 text-white text-sm focus:border-primary focus:outline-none transition-colors placeholder:text-white/40"
                aria-label="Email address for fleet updates"
              />
              <a
                href={`mailto:info@buildhire.com.au?subject=Fleet Updates&body=Hi, I'd like to receive exclusive offers and fleet updates. My email is: ${email}`}
                className="bg-primary text-foreground p-2 rounded-md hover:scale-110 transition-transform"
                aria-label="Subscribe to fleet updates"
              >
                <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-xs">
            © 2026 BuildHire. All rights reserved.
          </p>
          <div className="flex gap-4">
            {[
              { Icon: Facebook, href: "https://www.facebook.com/people/Build-Hire/61586999393373/", label: "Facebook" },
              { Icon: Instagram, href: "https://www.instagram.com/buildhiresydney/", label: "Instagram" },
              { Icon: Linkedin, href: "#", label: "LinkedIn" },
            ].map(({ Icon, href, label }, i) => (
              <a
                key={i}
                href={href}
                target={href !== "#" ? "_blank" : undefined}
                rel={href !== "#" ? "noopener noreferrer" : undefined}
                className="text-white/40 hover:text-primary transition-colors"
                aria-label={label}
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-6 pt-4 border-t border-white/10 text-center">
        <p className="text-xs text-white/30">Powered by <a href="https://www.presciaiq.com.au" target="_blank" rel="noopener" className="text-white/50 hover:text-white transition-colors">PresciaIQ</a></p>
      </div>
    </footer>
  );
}
