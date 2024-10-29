import { Icon } from "@iconify/react/dist/iconify.js";
import { Text } from "../units";

export const HeaderData = [
  {
    id: 1,
    icon: "material-symbols:mail-outline",
    title: "prime.civil@gmail.com",
  },
  { id: 2, icon: "fluent:call-20-regular", title: "+977 9823423934" },
];

export const Header = () => {
  return (
    <div className="flex place-items-center bg-fadding-blue p-2 gap-8">
      {HeaderData.map((header) => (
        <section key={header.id} className="flex place-items-center gap-2">
          <Icon icon={header.icon} />
          <Text size="body-base-default" usage="brand">
            {header.title}
          </Text>
        </section>
      ))}
    </div>
  );
};
