"use client";

import { AnimatePresence, scale } from "motion/react";
import * as m from "motion/react-m";

export default function StartPage({ onStart }: { onStart: () => void }) {
  return (
    <AnimatePresence mode="wait">
      <m.div className="text-center">
        <m.h1
          className="mb-8 text-4xl font-bold"
          initial={{
            opacity: 0,
            scale: 0.7,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 1,
          }}
        >
          MBTI 테스트
        </m.h1>
        <m.button
          onClick={onStart}
          className="rounded-lg bg-blue-500 px-6 py-3 text-lg text-white"
          initial={{
            opacity: 0,
            y: 30,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.5,
            delay: 0.3,
          }}
          whileHover={{
            scale: 1.1,
          }}
          //클릭했을때
          whileTap={{
            scale: 0.95,
          }}
        >
          시작하기
        </m.button>
      </m.div>
    </AnimatePresence>
  );
}
