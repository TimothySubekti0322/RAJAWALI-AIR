interface Props {
  title?: string;
  img?: string;
  value?: string;
}

const CardHome = ({ title, img, value }: Props) => {
  return (
    <div className="w-full rounded-lg shadow-lg bg-[#1E90FF] p-4 border border-gray-200 overflow-hidden transition-transform transform hover:scale-105 text-white">
      <div className="flex items-center justify-between">
        <p className="font-['Roboto'] font-semibold text-white">{title}</p>
        <div className="p-2 bg-blue-100">
          <img src={img} alt="arrow right" />
        </div>
      </div>
      <div className="font-semibold font['Roboto'] text-2xl pt-7">{value}</div>
    </div>
  );
};

export default CardHome;
