interface Props {
    title?: string;
    img?: string;
    value?: string;
}

const CardHome = ({ title, img, value }: Props) => {
  return (
    <div className="w-full rounded-lg shadow-lg bg-white p-4 border border-gray-200 overflow-hidden transition-transform transform hover:scale-105">
      <div className="flex items-center justify-between">
        <p className="font-['Roboto'] font-semibold text-black">
          {title}
        </p>
        <a href="" className="pl-4">
          <img src={img} alt="arrow right" />
        </a>
      </div>
      <div className="font-semibold font['Roboto'] text-2xl pt-7">{value}</div>
    </div>
  );
};

export default CardHome;
