"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Text } from "../units";
import { Icon } from "@iconify/react/dist/iconify.js";

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
        className=" flex justify-between items-center cursor-pointer bg-background"
        onClick={() => setIsOpen(!isOpen)}
        initial={false}
      >
        {/* Your header content */}

        <Text secondaryFont size="body-md-mid" usage="black">
          {title}
        </Text>

        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <Icon icon="iconamoon:arrow-down-2" />
        </motion.div>
      </motion.header>

      <motion.div
        className=" h-[.1px] w-full bg-brand origin-left"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />

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
            <Text size="body-base-default" usage="black4">
              {content}
            </Text>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
