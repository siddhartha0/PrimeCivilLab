import { Link, useNavigate } from "react-router-dom";
import { Text } from "../units";
import logo from "../../assets/images/logo.png";
import { NavbarData } from "../../utils/constants/NavbarData";
import { memo, useEffect, useState } from "react";

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
      className={`flex px-5 py-5 justify-between place-items-center sticky   top-0 z-20 ${
        isScrolled ? "bg-white" : ""
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
          className="w-52 cursor-pointer "
          onClick={() => nav("/")}
        />
      </section>
      <section className="flex place-items-center gap-14">
        {NavbarData.map((header) => (
          <Link to={header.path} key={header.id}>
            <Text
              size="body-sm-default"
              className="capitalize hover:text-fade-blue hover:border-b  p-1"
              usage="brand"
            >
              {header.title}
            </Text>
          </Link>
        ))}
      </section>
    </div>
  );
});
