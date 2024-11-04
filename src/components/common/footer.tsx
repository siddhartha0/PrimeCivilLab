import { Link } from "react-router-dom";
import companylogo from "../../assets/images/logo.png";
import { Text } from "../units";
import { Icon } from "@iconify/react";

export const FooterInformationData = [
  {
    id: 1,
    title: "contact us",
    path: "",
  },
  {
    id: 2,
    title: "projects",
    path: "",
  },
  {
    id: 3,
    title: "our services",
    path: "",
  },
  {
    id: 4,
    title: "About us",
    path: "",
  },
  {
    id: 5,
    title: "gallery",
    path: "",
  },
  {
    id: 6,
    title: "blogs & articles",
    path: "",
  },
];

export const Footer = () => {
  return (
    <div className="flex flex-col bg-black-700 justify-around  py-10 px-36 gap-20 bg-black-3 relative">
      <div
        className="w-full h-36 bg-black-2 absolute bottom-0 left-0 "
        style={{
          clipPath:
            "polygon(0 36%, 40% 35%, 42% 17%, 100% 17%, 100% 100%, 0 100%)",
        }}
      />
      <section className="grid grid-cols-3 gap-10">
        <div className="flex flex-col gap-4" id="logo-content-icon">
          <img src={companylogo} alt="logo" id="logo" className="w-48" />
          <p className="text-fadish-white" id="content">
            Our expertise spans soil analysis, foundation engineering, and
            ground improvement, helping our clients build with confidence in
            complex terrains. Committed to innovation and precision.
          </p>
          <section className="flex place-items-center gap-3" id="icon">
            <Icon icon="lineicons:facebook" color="#ccc" />
            <Icon icon="mdi:linkedin" color="#ccc" />
            <Icon icon="ic:baseline-tiktok" color="#ccc" />
          </section>
        </div>

        <div id="information" className="flex flex-col gap-4 py-2">
          <section className="flex place-items-center gap-4">
            <Text usage="click" secondaryFont>
              Information
            </Text>
            <div className="w-full h-[.1px] bg-black-2" />
          </section>
          <section className="grid grid-cols-2 gap-4 py-6">
            {FooterInformationData.map((info) => (
              <div
                key={info.id}
                className="flex place-items-center gap-2 text-fadish-white capitalize"
              >
                <Icon icon="weui:arrow-filled" />
                <Link to={info.path}>{info.title}</Link>
              </div>
            ))}
          </section>
        </div>
      </section>
      {/* <section className="flex gap-10  ">
        {FooterData.map((footer) => (
          <section key={footer.id} className="flex flex-col w-[275px] gap-8">
            <Text
              usage="click"
              size="heading-base-default"
              className="capitalize"
            >
              {footer.title}
            </Text>
            <section className={footer.classname ?? `flex flex-col gap-2`}>
              {footer?.children?.map((child) => (
                <div
                  className={
                    child.classname ?? "flex place-items-center  gap-2 "
                  }
                  key={child.id}
                >
                  {child.icon && (
                    <Icon
                      icon={child.icon}
                      fontSize={24}
                      className="text-dark-blue"
                    />
                  )}
                  <Text
                    size={child.size}
                    usage={child.usage}
                    className="capitalize"
                  >
                    {child.title}
                  </Text>
                </div>
              ))}
            </section>
          </section>
        ))}
      </section> */}
      <section className="flex w-full z-20  place-content-center ">
        <Text size="body-base-default" usage="info-primary" className="pt-2">
          © 2024 Prime Civil Lab. All Rights Reserved.
        </Text>
      </section>
    </div>
  );
};
