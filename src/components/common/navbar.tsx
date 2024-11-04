import { Link, useNavigate } from "react-router-dom";
import { Text } from "../units";
import logo from "../../assets/images/logo.png";
import { NavbarData } from "../../utils/constants/NavbarData";
import { memo, useEffect, useState } from "react";
import { motion } from "framer-motion";

export const Navbar = memo(() => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const shouldBeScrolled = window.scrollY > 0;
      setIsScrolled(shouldBeScrolled);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const nav = useNavigate();

  return (
    <div
      className={`flex p-6 justify-between place-items-center sticky animate-clip-path-reveal   top-0 z-50 ${
        isScrolled ? "bg-white " : ""
      }`}
      style={{
        clipPath:
          "polygon(0% 0%, 100% 0%, 100% 88%, 80% 90%, 32% 88%, 31% 100%, 0 100%)",
      }}
    >
      <section>
        <img
          src={logo}
          alt="company logo"
          className="w-52 cursor-pointer -mt-7"
          onClick={() => nav("/")}
        />
      </section>
      <section className="flex place-items-center gap-14">
        {NavbarData.map((header) => (
          <Link to={header.path} key={header.id} className="group">
            <Text
              size="body-sm-mid"
              className="capitalize hover:scale-x-100 transition-transform duration-300 hover:text-brand p-1 text-fadish-grey"
            >
              {header.title}
            </Text>

            <motion.div
              className="h-[2px] w-full bg-brand origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
              id="bottom-border"
            />
          </Link>
        ))}
      </section>
    </div>
  );
});
