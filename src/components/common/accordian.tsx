interface propTypes {
  title: string;
  content: string;
}

export const Accordian = ({ title, content }: propTypes) => {
  return (
    <div className="join join-vertical w-full">
      <div className="collapse collapse-arrow join-item border-base-300 border">
        <input type="radio" name="my-accordion-4" defaultChecked />
        <div className="collapse-title text-xl font-medium">{title}</div>
        <div className="collapse-content">
          <p>{content}</p>
        </div>
      </div>
    </div>
  );
};
