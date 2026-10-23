import { Github, Linkedin, Mail, Phone } from "lucide-react";

const CONTACT_LINKS = [
  {
    label: "GitHub",
    value: "@Parthiban68",
    href: "https://github.com/Parthiban68",
    icon: Github,
    external: true,
  },
  {
    label: "LinkedIn",
    value: "m-parthiban",
    href: "https://www.linkedin.com/in/m-parthiban",
    icon: Linkedin,
    external: true,
  },
  {
    label: "Email",
    value: "parthibanm1268@gmail.com",
    href: "mailto:parthibanm1268@gmail.com",
    icon: Mail,
    external: false,
  },
  {
    label: "Phone",
    value: "+91 8754131978",
    href: "tel:+918754131978",
    icon: Phone,
    external: false,
  },
];

interface ConnectLinksProps {
  className?: string;
}

export default function ConnectLinks({ className = "" }: ConnectLinksProps) {
  return (
    <section
      aria-labelledby="connect-heading"
      className={`w-full max-w-[360px] lg:max-w-[380px] ${className}`}
    >
      <h2
        id="connect-heading"
        className="mb-5 font-['JetBrains_Mono'] lg:text-[20px] lg:font-semibold text-[10px] uppercase tracking-[0.45em] text-[#8a8578] dark:text-[#8a8578] sm:text-xs sm:tracking-[0.5em]"
      >
        Let&apos;s Connect
      </h2>

      <div className="grid grid-cols-2 gap-x-5 gap-y-5 lg:flex lg:flex-col lg:gap-6">
        {CONTACT_LINKS.map(({ label, value, href, icon: Icon, external }) => (
          <a
            key={label}
            href={href}
            target={external ? "_blank" : undefined}
            rel={external ? "noopener noreferrer" : undefined}
            aria-label={`${label}: ${value}`}
            className="group flex min-w-0 items-start gap-3 rounded-sm py-0.5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#15130d] focus-visible:ring-offset-2 focus-visible:ring-offset-[#f7f5f1] dark:focus-visible:ring-[#f5f3ee] dark:focus-visible:ring-offset-[#0b0a07]"
          >
            <Icon
              size={18}
              strokeWidth={1.6}
              aria-hidden="true"
              className="mt-0.5 shrink-0 text-[#8a8578] transition-all duration-300 group-hover:-translate-y-0.5 group-hover:text-[#15130d] dark:text-[#8a8578] dark:group-hover:text-[#f5f3ee]"
            />
            <span className="min-w-0">
              <span className="block font-['Outfit'] text-[11px] font-black uppercase tracking-[0.26em] text-[#15130d] transition-colors group-hover:underline group-hover:underline-offset-4 dark:text-[#f5f3ee] sm:text-xs lg:text-sm">
                {label}
              </span>
              <span className="mt-1 block truncate font-['JetBrains_Mono'] text-[10px] tracking-[0.04em] text-[#8a8578] transition-colors group-hover:text-[#5f5a4e] dark:text-[#8a8578] dark:group-hover:text-[#d5d0c3] sm:text-[11px] lg:text-xs">
                {value}
              </span>
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}
