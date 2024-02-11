interface TextDetailProps {
  title: string;
  value: string | string[] | number | undefined;
}

const TextDetail: React.FC<TextDetailProps> = ({ title, value }) => {
  return (
    <>
      <div className="flex flex-col">
        <div className="inline-flex gap-3 font-['Roboto'] pt-4">
          <div className="flex space-x-4">
            <div className="w-24 font-semibold">{title}</div>
            <div>:</div>
          </div>
          <div className="grid grid-cols-1">
          <p className="">{value}</p>
          </div>
        </div>
        <hr className="border-1 w-[66.5rem] mt-4 border-gray-300 h-0" />
      </div>
    </>
  );
};

export default TextDetail;
