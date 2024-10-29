import { Icon } from "@iconify/react/dist/iconify.js";
import bg from "../../../assets/images/aim.jpg";
import { Text } from "../../units";
import { Button } from "../../units/Button";
import sia from "../../../assets/images/sia.png";
import vcmla from "../../../assets/images/vcmla.png";
import nata from "../../../assets/images/nata.jpg";
import alma from "../../../assets/images/alma.png";

export const Members = [
  {
    id: 1,
    title: "sia",
    image: sia,
  },
  {
    id: 2,
    title: "vcmla",
    image: vcmla,
  },
  {
    id: 3,
    title: "nata",
    image: nata,
  },
  {
    id: 4,
    title: "alma",
    image: alma,
  },
];

export const Membership = () => {
  return (
    <div className="flex flex-col gap-6 ">
      <section
        className="relative flex  bg-cover bg-center px-36 py-16"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className="absolute  inset-0 bg-fadish-blue opacity-60 " />
        <div className="flex flex-col z-10 gap-8 w-[495px]">
          <Text usage="click" size="heading-lg-default">
            Primary Aim
          </Text>
          <Text usage="click" size="body-base-default">
            Geotechnical Laboratories primary aim when testing for its clients
            is to issue compaction results quickly to enable continuous site
            production. As a result Geolab strives to give verbal results
            on-site and NATA endorsed reports within 24 hours of testing. Geolab
            also works closely with the Quality Assurance Officers of its
            clients to ensure appropriate procedures are in place for
            co-ordination of testing and traceability of lots/samples.
          </Text>
          <Button usage="click" className="w-[20%]">
            <Text usage="info" size="body-base-default">
              Projects
            </Text>
            <Icon
              icon="iconamoon:arrow-right-2-duotone"
              fontSize={20}
              className="text-fade-blue"
            />
          </Button>
        </div>
        <div></div>
      </section>
      <section className="flex flex-col px-36 py-16 gap-16">
        <div className="flex flex-col gap-3 text-center">
          <Text size="body-md-default" usage="info">
            OUR
          </Text>
          <Text usage="brand" size="heading-lg-default" className="uppercase">
            Affiliation & Membership
          </Text>
        </div>
        <div className="grid grid-cols-4 gap-8">
          {Members.map((member) => (
            <section
              key={member.id}
              className="flex flex-col gap-6 text-center px-4 pt-4 pb-20 shadow-md"
            >
              <img src={member.image} alt="image" className="h-52" />
              <Text className="uppercase" usage="info">
                {member.title}
              </Text>
            </section>
          ))}
        </div>
      </section>
    </div>
  );
};
