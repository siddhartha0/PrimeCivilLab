import { Text, TextUsage } from "../../units/Text";
import bg from "../../../assets/images/core-bg.jpg";
import { Button } from "../../units/Button";
import { Icon } from "@iconify/react/dist/iconify.js";
export const TestingMethods = [
  {
    id: 1,
    title: "Site Assessment",
    content:
      "Comprehensive evaluations to understand site-specific soil conditions, ensuring safe and cost-effective construction planning.",
    classname:
      "bg-white border border-black-600 px-10 py-16 text-center hover:bg-fade-blue hover:cursor-pointer ",
    usage: "default" as TextUsage,
  },
  {
    id: 2,
    title: "Soil Testing",
    content:
      "Advanced soil testing services that analyze strength, stability, and composition, providing crucial data for reliable foundations",
    classname:
      "bg-fadding-blue border border-black-600 px-10 py-16 text-center hover:bg-fade-blue hover:cursor-pointer",
    usage: "click" as TextUsage,
  },
  {
    id: 3,
    title: "Project Management",
    content:
      "Comprehensive project support, from concept through construction, ensuring smooth execution and high standards.",
    classname:
      "bg-white border border-black-600 px-10 py-16 text-center hover:bg-fade-blue hover:cursor-pointer ",
    usage: "default" as TextUsage,
  },
  {
    id: 4,
    title: "Geotechnical Investigations",
    content:
      "Thorough site investigations for subsurface conditions, enabling accurate design and construction adaptations.",
    classname:
      "bg-fadding-blue border border-black-600 px-10 py-16 text-center hover:bg-fade-blue hover:cursor-pointer",
    usage: "click" as TextUsage,
  },
  {
    id: 5,
    title: "Environmental Consulting",
    content:
      "Eco-conscious engineering solutions that reduce environmental impact while meeting project goals and regulatory standards",
    classname:
      "bg-white border border-black-600 px-10 py-16 text-center hover:bg-fade-blue hover:cursor-pointer",
    usage: "default" as TextUsage,
  },
  {
    id: 6,
    title: "Foundation Engineering",
    content:
      "Expert design of foundations tailored to withstand local soil conditions, from urban high-rises to heavy industrial structures.",
    classname:
      "bg-fadding-blue border border-black-600 px-10 py-16 text-center hover:bg-fade-blue hover:cursor-pointer",
    usage: "click" as TextUsage,
  },
];

export const Core = () => {
  return (
    <div className="flex flex-col bg-white px-36 py-16 gap-24">
      <section className="flex flex-col gap-4">
        <Text size="heading-lg-default" usage="brand" secondaryFont>
          Our Services
        </Text>
        <section className="grid grid-cols-3">
          {TestingMethods.map((method) => (
            <div key={method.id} className={method.classname}>
              <Text usage={method.usage} size="body-base-default">
                {method.content}
              </Text>
            </div>
          ))}
        </section>
      </section>
      <section className="flex justify-between gap-14 place-items-center">
        <div className=" pb-10 px-3 shadow-xl rounded-xl">
          <div
            className="flex px-6 py-14  flex-col bg-cover  bg-center w-[480px] relative gap-8 rounded-xl  "
            style={{ backgroundImage: `url(${bg})` }}
          >
            <div className="absolute rounded-xl inset-0 bg-fadish-blue opacity-60 "></div>
            <Text size="heading-lg-default" usage="click" className="z-10">
              Geotechnical Laboratories
            </Text>
            <Text size="body-base-default" usage="click" className="z-10">
              The industry leaders in compaction control and associated
              geotechnical testing. Delivering an unparalleled level of customer
              service and technical integrity.
            </Text>
            <Button usage="brand" className="w-[40%] z-10">
              <Text usage="click" size="body-base-default">
                Our Capabilities
              </Text>
              <Icon icon="iconamoon:arrow-right-2-duotone" />
            </Button>
          </div>
        </div>

        <div className="flex flex-col gap-9 w-[575px]">
          <Text size="body-base-default" usage="brand">
            The industry leaders in compaction control and associated
            geotechnical testing. Delivering an unparalleled level of customer
            service and technical integrity. Our Capabilities Geotechnical
            Laboratories Pty Ltd is a NATA accredited (# 14561) construction
            materials testing facility that specialises in the area of
            compaction control and material compliance. In conjunction with its
            sister company, Geotechnical Engineering Pty Ltd, boasts an
            extensive laboratory facility accredited for a wide range of soil,
            aggregate and specialised tests. Geolabs primary laboratory is
            located in Ravenhall Victoria.
          </Text>
          <Button usage="brand" className="w-[20%]">
            <Text size="body-base-default" usage="click">
              Contact us
            </Text>
            <Icon icon="iconamoon:arrow-right-2-duotone" />
          </Button>
        </div>
      </section>
    </div>
  );
};
