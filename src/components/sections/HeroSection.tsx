"use client";

import { motion } from "framer-motion";

export default function HeroSection() {
  const handleScrollToProjects = () => {
    const el = document.getElementById("projects");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#FAFAFA]">
      {/* Dot grid background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, #CCCCCC 1px, transparent 1px)",
          backgroundSize: "32px 32px",
          opacity: 0.6,
        }}
      />
      {/* Gradient overlay to fade edges */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#FAFAFA]/70 via-transparent to-[#FAFAFA]/80 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#FAFAFA]/50 via-transparent to-[#FAFAFA]/50 pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 max-w-[1200px] mx-auto px-6 text-center">
        <div className="space-y-2 mb-6">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0, ease: "easeOut" }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#111111] leading-tight tracking-tight"
          >
            안녕하세요,
          </motion.h1>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#111111] leading-tight tracking-tight"
          >
            개발자 민석입니다.
          </motion.h1>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          className="space-y-1 mb-10"
        >
          <p className="text-lg md:text-xl text-[#888888] font-medium">
            9년차 백엔드 / 풀스택 엔지니어
          </p>
          <p className="text-base md:text-lg text-[#AAAAAA]">
            Enterprise 시스템을 만듭니다.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45, ease: "easeOut" }}
        >
          <button
            onClick={handleScrollToProjects}
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#0066FF] text-white text-sm font-semibold rounded-full hover:bg-[#0052CC] transition-all duration-200 shadow-sm hover:shadow-md hover:-translate-y-0.5"
          >
            프로젝트 보기
            <span className="text-base">↓</span>
          </button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
          className="w-px h-10 bg-gradient-to-b from-[#AAAAAA] to-transparent mx-auto"
        />
      </motion.div>
    </section>
  );
}
