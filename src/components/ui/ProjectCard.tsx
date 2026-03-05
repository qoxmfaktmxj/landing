"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { type Project } from "@/data/projects";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const isComingSoon = project.status === "coming_soon";

  const handleClick = () => {
    if (!isComingSoon && project.url !== "#") {
      window.open(project.url, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      whileHover={
        !isComingSoon
          ? { y: -4, boxShadow: "0 12px 40px rgba(0,0,0,0.10)" }
          : {}
      }
      onClick={handleClick}
      className={cn(
        "bg-white border border-[#E5E5E5] rounded-2xl overflow-hidden flex flex-col",
        "transition-shadow duration-200",
        !isComingSoon && "cursor-pointer",
        isComingSoon && "opacity-60 grayscale"
      )}
    >
      {/* Thumbnail */}
      <div className="relative w-full aspect-video bg-[#F5F5F5] overflow-hidden">
        {isComingSoon ? (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
            <span className="text-3xl">🔜</span>
            <span className="text-sm text-[#888888] font-medium">
              Coming Soon
            </span>
          </div>
        ) : project.thumbnail ? (
          <Image
            src={project.thumbnail}
            alt={project.title}
            fill
            className="object-cover"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-5xl text-[#D5D5D5]">📦</span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col gap-3 flex-1">
        <div className="flex items-start justify-between gap-2">
          <div>
            <h3 className="text-lg font-semibold text-[#111111]">
              {project.title}
            </h3>
            <p className="text-sm text-[#888888] mt-0.5">
              {project.description}
            </p>
          </div>
          {!isComingSoon && (
            <ExternalLink className="w-4 h-4 text-[#AAAAAA] shrink-0 mt-0.5" />
          )}
        </div>

        {project.longDescription && (
          <p className="text-sm text-[#555555] leading-relaxed line-clamp-2">
            {project.longDescription}
          </p>
        )}

        {project.tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mt-auto pt-3">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-2.5 py-1 bg-[#F5F5F5] text-[#555555] rounded-full"
              >
                #{tag}
              </span>
            ))}
          </div>
        )}

        {!isComingSoon && (
          <span className="mt-3 text-sm font-medium text-[#0066FF] flex items-center gap-1 self-start">
            바로가기 →
          </span>
        )}
      </div>
    </motion.div>
  );
}
