"use client";

import { cn } from "@/lib/utils";
import { motion, stagger, useAnimate, useInView } from "motion/react";
import { useEffect, useState } from "react";

export const TypewriterEffectSmooth = ({
  words,
  className,
  cursorClassName,
}: {
  words: {
    text: string;
    className?: string;
  }[];
  className?: string;
  cursorClassName?: string;
}) => {
  const [scope, animate] = useAnimate();
  const isInView = useInView(scope);
  const [hasStarted, setHasStarted] = useState(false);

  const wordsArray = words.map((word) => ({
    ...word,
    text: word.text.split(""),
  }));

  useEffect(() => {
    if (isInView && !hasStarted) {
      setHasStarted(true);
      animate(
        "span.char",
        {
          opacity: 1,
          display: "inline",
        },
        {
          delay: stagger(0.05),
          duration: 0.3,
          ease: "easeInOut",
        }
      );
    }
  }, [isInView]);

  const renderWords = () => (
    <div
      ref={scope}
      className="flex flex-wrap justify-center gap-x-1 text-center"
    >
      {wordsArray.map((word, wordIdx) => (
        <div key={`word-${wordIdx}`} className="flex flex-wrap">
          {word.text.map((char, charIdx) => {
            const isLastChar =
              wordIdx === wordsArray.length - 1 &&
              charIdx === word.text.length - 1;

            return (
              <motion.span
                key={`char-${wordIdx}-${charIdx}`}
                className={cn(
                  "char dark:text-white text-black opacity-0",
                  word.className
                )}
              >
                {char}
                {isLastChar && (
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                      duration: 0.8,
                      repeat: Infinity,
                      repeatType: "reverse",
                    }}
                    className={cn(
                      "inline-block md:w-[4px] h-6 mt-1 w-[3px] xl:h-12 bg-blue-500 ml-0.5 md:align-bottom rounded-full",
                      cursorClassName
                    )}
                  />
                )}
              </motion.span>
            );
          })}
          &nbsp;
        </div>
      ))}
    </div>
  );

  return (
    <div className={cn("flex justify-center text-center my-6", className)}>
      <div
        className={cn(
          "text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold relative"
        )}
        style={{
          whiteSpace: "normal",
          wordBreak: "break-word",
        }}
      >
        {/* Centered cursor BEFORE typing */}
        {!hasStarted && (
          <motion.span
            initial={{ opacity: 1 }}
            animate={{ opacity: [1, 0] }}
            transition={{
              duration: 0.8,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            className={cn(
              "absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 inline-block md:w-[4px] h-5 w-[3px] xl:h-12 bg-blue-500 rounded-full",
              cursorClassName
            )}
          />
        )}

        {/* Typewriter content with cursor after last char */}
        {renderWords()}
      </div>
    </div>
  );
};
