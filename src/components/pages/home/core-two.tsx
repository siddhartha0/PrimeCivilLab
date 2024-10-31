import { Text } from "../../units";

export const BottomCore = () => {
  return (
    <div className="flex flex-col gap-8 px-32 py-16">
      <section className="flex flex-col gap-4">
        <div className="flex place-items-center gap-4">
          <Text size="body-lg-mid" secondaryFont>
            Recent New
          </Text>
          <div className="h-[.5px] w-[30%] bg-grey" />
        </div>
      </section>
    </div>
  );
};
