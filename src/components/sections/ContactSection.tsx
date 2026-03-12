import ScrollReveal from "@/components/ui/ScrollReveal";
import { Mail, Github, BookOpen } from "lucide-react";

const contacts = [
  {
    icon: Mail,
    label: "Email",
    href: "mailto:qoxmfaktmxj@naver.com",
    external: false,
  },
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/qoxmfaktmxj",
    external: true,
  },
  {
    icon: BookOpen,
    label: "Blog",
    href: "https://qoxmfaktmxj.github.io",
    external: true,
  },
];

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 md:py-[120px] bg-white">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Section header */}
        <ScrollReveal>
          <h2 className="text-2xl md:text-3xl font-semibold text-[#111111] mb-16 flex items-center gap-4">
            Contact
            <span className="flex-1 h-px bg-[#E5E5E5]" />
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="text-center max-w-sm mx-auto">
            <p className="text-lg text-[#555555] mb-1">
              함께 일하고 싶으시다면
            </p>
            <p className="text-lg text-[#555555] mb-12">편하게 연락주세요.</p>

            <div className="flex items-center justify-center gap-8 flex-wrap">
              {contacts.map(({ icon: Icon, label, href, external }) => (
                <a
                  key={label}
                  href={href}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noopener noreferrer" : undefined}
                  className="flex flex-col items-center gap-2.5 group"
                >
                  <div className="w-14 h-14 rounded-2xl border border-[#E5E5E5] bg-white flex items-center justify-center group-hover:border-[#0066FF] group-hover:bg-[#F0F6FF] transition-all duration-200">
                    <Icon className="w-5 h-5 text-[#888888] group-hover:text-[#0066FF] transition-colors duration-200" />
                  </div>
                  <span className="text-sm text-[#888888] group-hover:text-[#0066FF] transition-colors duration-200">
                    {label}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
