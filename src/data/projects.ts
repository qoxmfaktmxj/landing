export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  thumbnail: string;
  url: string;
  tags: string[];
  status: "live" | "coming_soon" | "in_progress";
}

export const projects: Project[] = [
  {
    id: "vibe-hr",
    title: "Vibe-HR",
    description: "인사관리 시스템",
    longDescription:
      "직원 정보, 조직 관리, 공통코드 관리 등 엔터프라이즈 HR 기능을 제공하는 풀스택 웹 애플리케이션",
    thumbnail: "/images/vibe-hr-thumb.png",
    url: "https://hr.minseok91.cloud",
    tags: ["Next.js", "PostgreSQL", "Prisma", "shadcn/ui"],
    status: "live",
  },
  {
    id: "blog",
    title: "기술 블로그",
    description: "개발 여정 기록",
    longDescription:
      "AI 학습, 인프라 구축, 개발 경험을 기록하는 기술 블로그",
    thumbnail: "/images/blog-thumb.png",
    url: "https://qoxmfaktmxj.github.io",
    tags: ["GitHub Pages", "Blog"],
    status: "live",
  },
  {
    id: "coming-soon",
    title: "새로운 프로젝트",
    description: "준비 중입니다",
    thumbnail: "",
    url: "#",
    tags: [],
    status: "coming_soon",
  },
];
