import ScrollReveal from "@/components/ui/ScrollReveal";
import TechTag from "@/components/ui/TechTag";

const techStack = [
  "Java",
  "Spring",
  "Python",
  "FastAPI",
  "Node.js",
  "Next.js",
  "React",
  "Tailwind CSS",
  "Oracle",
  "PostgreSQL",
  "Tibero",
  "Linux",
  "Docker",
  "Nginx",
  "Claude API",
  "RAG",
];

export default function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-[120px] bg-white">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Section header */}
        <ScrollReveal>
          <h2 className="text-2xl md:text-3xl font-semibold text-[#111111] mb-16 flex items-center gap-4">
            About
            <span className="flex-1 h-px bg-[#E5E5E5]" />
          </h2>
        </ScrollReveal>

        {/* 2-column layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 mb-16">
          {/* Left: Profile */}
          <ScrollReveal direction="left">
            <div className="flex flex-col items-center md:items-start gap-6">
              {/* Minimal avatar */}
              <div className="w-44 h-44 rounded-2xl bg-[#F5F5F5] border border-[#E5E5E5] flex items-center justify-center overflow-hidden">
                <svg
                  viewBox="0 0 120 120"
                  className="w-28 h-28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="60" cy="42" r="22" fill="#D5D5D5" />
                  <ellipse cx="60" cy="102" rx="38" ry="26" fill="#D5D5D5" />
                </svg>
              </div>
              <div className="text-center md:text-left">
                <p className="text-xl font-semibold text-[#111111]">민석</p>
                <p
                  className="text-sm text-[#888888] mt-1"
                  style={{
                    fontFamily:
                      "var(--font-jetbrains-mono), JetBrains Mono, monospace",
                  }}
                >
                  Backend / Fullstack Engineer
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Right: Bio */}
          <ScrollReveal direction="right" delay={0.1}>
            <div className="space-y-5 text-[#444444] leading-relaxed">
              <p className="text-base">
                9년간 엔터프라이즈 시스템을 개발해 왔습니다.
              </p>
              <p className="text-base">
                HR/ERP 시스템 구축부터 Oracle DB 아키텍처 설계, RESTful API
                개발까지 백엔드 전반을 다룹니다. 최근에는 AI 기술을 접목한
                시스템 고도화에 관심을 갖고 있습니다.
              </p>
              <p className="text-base">
                안정적인 운영과 확장 가능한 설계를 중시하며, 실제 서비스에서
                가치를 만드는 개발을 추구합니다.
              </p>
            </div>
          </ScrollReveal>
        </div>

        {/* Tech Stack */}
        <ScrollReveal delay={0.15}>
          <div>
            <p className="text-xs font-medium text-[#AAAAAA] mb-4 tracking-widest uppercase">
              기술 스택
            </p>
            <div className="flex flex-wrap gap-2">
              {techStack.map((tech, i) => (
                <TechTag key={tech} label={tech} index={i} />
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
