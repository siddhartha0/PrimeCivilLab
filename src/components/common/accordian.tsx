"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Text } from "../units";

interface AccordionProps {
  title: string;
  content: string;
  originalState?: boolean;
}

export const Accordion = ({
  title,
  content,
  originalState = false,
}: AccordionProps) => {
  const [isOpen, setIsOpen] = useState(originalState);

  return (
    <div className="  flex flex-col gap-2">
      <motion.header
        className="flex justify-between items-center  cursor-pointer bg-background "
        onClick={() => setIsOpen(!isOpen)}
        initial={false}
        animate={{
          backgroundColor: isOpen ? "var(--background)" : "var(--muted)",
        }}
      >
        <Text secondaryFont size="body-md-mid">
          {title}
        </Text>
      </motion.header>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: "auto" },
              collapsed: { opacity: 0, height: 0 },
            }}
            transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
          >
            <Text size="body-base-default">{content}</Text>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
