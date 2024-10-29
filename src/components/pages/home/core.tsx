import { Text, TextUsage } from "../../units/Text";
import bg from "../../../assets/images/core-bg.jpg";
import { Button } from "../../units/Button";
import { Icon } from "@iconify/react/dist/iconify.js";
export const TestingMethods = [
  {
    id: 1,
    content:
      "Compaction control of earthworks. A number of fully trained and experienced technicians offer prompt service for any sized project. On site laboratory facilities can be provided.",
    classname:
      "bg-white border border-black-600 px-10 py-16 text-center hover:bg-fade-blue hover:cursor-pointer ",
    usage: "default" as TextUsage,
  },
  {
    id: 2,
    content:
      "Level 1 to 3 supervision, quality control of materials and construction procedures and reporting.",
    classname:
      "bg-fadding-blue border border-black-600 px-10 py-16 text-center hover:bg-fade-blue hover:cursor-pointer",
    usage: "click" as TextUsage,
  },
  {
    id: 3,
    content:
      "Material compliance testing includes the Californian Bearing Ratio, Particle Size Distribution and Atterberg Limits.",
    classname:
      "bg-white border border-black-600 px-10 py-16 text-center hover:bg-fade-blue hover:cursor-pointer ",
    usage: "default" as TextUsage,
  },
  {
    id: 4,
    content:
      "Other testing includes the 9Kg Dynamic Cone Penetrometer and Emerson Class Number.",
    classname:
      "bg-fadding-blue border border-black-600 px-10 py-16 text-center hover:bg-fade-blue hover:cursor-pointer",
    usage: "click" as TextUsage,
  },
  {
    id: 5,
    content:
      "In conjuction with our sister company, permeability and other material property testing is undertaken.",
    classname:
      "bg-white border border-black-600 px-10 py-16 text-center hover:bg-fade-blue hover:cursor-pointer",
    usage: "default" as TextUsage,
  },
  {
    id: 6,
    content:
      "Technical support and consultation provided for all matters pertaining to Geotechnical earthworks and pavement materials testing.",
    classname:
      "bg-fadding-blue border border-black-600 px-10 py-16 text-center hover:bg-fade-blue hover:cursor-pointer",
    usage: "click" as TextUsage,
  },
];

export const Core = () => {
  return (
    <div className="flex flex-col bg-white px-36 py-16 gap-24">
      <section className="flex flex-col gap-4">
        <Text size="heading-lg-default" usage="brand">
          Testing Methods
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
