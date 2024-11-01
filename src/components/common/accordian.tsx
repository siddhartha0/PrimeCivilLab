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
    <div className="  flex flex-col gap-2" id="parent">
      <motion.header
        className=" flex justify-between items-center cursor-pointer bg-background"
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        initial={false}
        id="title_and_icon"
      >
        <Text secondaryFont size="body-md-mid" usage="black" id="title">
          {title}
        </Text>

        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          id="animate_icon"
        >
          <Icon icon="iconamoon:arrow-down-2" id="icon" />
        </motion.div>
      </motion.header>

      <motion.div
        className=" h-[.2px] w-full bg-brand origin-left"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        id="bottom-border"
      />

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial="collapsed"
            id="content_div"
            variants={{
              open: { opacity: 1, height: "auto" },
              collapsed: { opacity: 0, height: 0 },
            }}
            transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
            animate={{ scale: 1, opacity: 1, height: "auto" }}
            exit={{ scale: 0.8, opacity: 0, height: 0 }}
          >
            <Text size="body-base-default" id="content" usage="black4">
              {content}
            </Text>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
