import { FooterData } from "../../utils/constants/FooterData";
import { Text } from "../units";
import { Icon } from "@iconify/react";

export const Footer = () => {
  return (
    <div className="flex flex-col bg-black-700 justify-around  py-10 px-36 gap-20 bg-fadish-grey relative">
      <div
        className="w-full h-14 bg-black absolute bottom-0 left-0"
        style={{
          transform: "flip(360deg)",
          imageOrientation: "flip",
          clipPath:
            "polygon(0% 0%, 100% 0%, 100% 88%, 80% 90%, 32% 88%, 31% 100%, 0 100%)",
        }}
      />
      <section className="flex gap-10  ">
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
      </section>
      <section className="flex justify-between">
        <Text size="body-base-default" usage="info-primary">
          © 2024 Geotechnical Laboratories. All Rights Reserved.
        </Text>
        <div className="flex place-items-center gap-5">
          <Icon icon="mage:facebook" className="text-dark-blue" />
          <div className="bg-white p-4">
            <Icon icon="iconamoon:arrow-up-2" className="text-black-700" />
          </div>
        </div>
      </section>
    </div>
  );
};
