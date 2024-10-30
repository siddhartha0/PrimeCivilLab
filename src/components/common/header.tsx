import { Icon } from "@iconify/react/dist/iconify.js";
import { Text } from "../units";
import { useEffect, useRef, useState } from "react";

export const HeaderData = [
  {
    id: 1,
    icon: "material-symbols:mail-outline",
    title: "prime.civil@gmail.com",
  },
  { id: 2, icon: "fluent:call-20-regular", title: "+977 9823423934" },
];

export const Header = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          setIsAnimating(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (headerRef.current) {
      observer.observe(headerRef.current);
    }

    return () => {
      if (headerRef.current) {
        observer.unobserve(headerRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isAnimating) {
      const timer = setTimeout(() => {
        setIsAnimating(false);
      }, 1000); // Match this to your animation duration

      return () => clearTimeout(timer);
    }
  }, [isAnimating]);
  return (
    <div className="relative">
      <div
        ref={headerRef}
        className={`flex w-full place-items-center bg-grey py-5 gap-8 justify-center           animate-yellow-shadow
         `}
        style={{
          clipPath:
            "polygon(0% 0%, 100% 0%, 100% 100%, 83% 100%, 31% 100%, 30% 78%, 0 78%)",
        }}
      >
        {HeaderData.map((header) => (
          <section key={header.id} className="flex place-items-center gap-2">
            <Icon icon={header.icon} />
            <Text size="body-base-default" usage="black4">
              {header.title}
            </Text>
          </section>
        ))}
      </div>
    </div>
    // <div
    //   className="flex w-full  place-items-center bg-grey py-5 gap-8 justify-center animate-clip-path-container  "
    //   style={{
    //     clipPath:
    //       "polygon(0% 0%, 100% 0%, 100% 100%, 83% 100%, 31% 100%, 30% 78%, 0 78%)",
    //   }}
    // >
    //   {HeaderData.map((header) => (
    //     <section key={header.id} className="flex place-items-center gap-2">
    //       <Icon icon={header.icon} />
    //       <Text size="body-base-default" usage="black4">
    //         {header.title}
    //       </Text>
    //     </section>
    //   ))}
    // </div>
  );
};
