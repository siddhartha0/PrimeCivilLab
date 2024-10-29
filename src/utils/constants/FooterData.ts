import { TextSize, TextUsage } from "../../components/units/Text";

export const FooterData = [
  {
    id: 1,
    title: "contact us",
    children: [
      {
        id: 11,
        title: "(+61) 3 8361 9140",
        icon: "iconamoon:phone",
        size: "body-md-default" as TextSize,
        usage: "click" as TextUsage,
        classname: "flex gap-2 place-items-center",
      },
      {
        id: 12,
        title: "info@geolab.com.au",
        icon: "fluent:mail-12-filled",
        size: "body-md-default" as TextSize,
        usage: "click" as TextUsage,
        classname: "flex gap-2 place-items-center",
      },
    ],
  },
  {
    id: 2,
    title: "quick Links",
    classname: "bg-[#515151] p-2 flex flex-col  gap-4",
    children: [
      {
        id: 22,
        title: "home",
        icon: "fad:digital-dot",
        size: "body-base-default" as TextSize,
        usage: "click" as TextUsage,
        classname:
          "flex place-items-center gap-1 border-b border-black-800 p-1",
      },
      {
        id: 23,
        title: "projects",
        icon: "fad:digital-dot",
        size: "body-base-default" as TextSize,
        usage: "click" as TextUsage,
        classname:
          "flex place-items-center gap-1 border-b border-black-800 p-1",
      },
      {
        id: 24,
        title: "contact us",
        icon: "fad:digital-dot",
        size: "body-base-default" as TextSize,
        classname:
          "flex place-items-center gap-1 border-b border-black-800 p-1",
        usage: "click" as TextUsage,
      },
      {
        id: 25,
        title: "requeset testing",
        icon: "fad:digital-dot",
        size: "body-base-default" as TextSize,
        usage: "click" as TextUsage,
        classname:
          "flex place-items-center gap-1 border-b border-black-800 p-1",
      },
    ],
  },
  {
    id: 3,
    title: "address",
    children: [
      {
        id: 33,
        title: "Geotechnical Laboratories Pty Ltd ABN: 51 102 571 077",
        icon: "",
        size: "body-base-default" as TextSize,
        usage: "info-primary" as TextUsage,
        classname: "",
      },
      {
        id: 34,
        title: "14 Ravenhall Way Ravenhall Victoria 3023",
        icon: "",
        size: "body-base-default" as TextSize,
        usage: "info-primary" as TextUsage,
        classname: "",
      },
    ],
  },
  {
    id: 4,
    title: "about us",
    children: [
      {
        id: 44,
        title:
          "The industry leaders in compaction control and associated geotechnical testing. Delivering an unparalleled level of customer service and technical integrity.",
        icon: "",
        size: "body-base-default" as TextSize,
        usage: "info-primary" as TextUsage,
        classname: "",
      },
    ],
  },
];
