import Layout from "../../../components/admin/layout/Layout";

const HomeDash = () => {
  return (
    <Layout>
      <div className="flex flex-col w-full px-5 pt-5 mb-4">
        <h1 className="text-2xl font-bold font-['Roboto'] text-[#1E90FF]">
          Welcome Back
        </h1>
        <p className="text-black font-['Roboto'] ">Rajawali Air Report</p>
      </div>
      <div className="flex bg-red-500 mb-5">
        <div className="w-1/2">kolom satu</div>
        <div className="w-1/2">
          <div className="grid grid-cols-2 grid-rows-2 gap-4 pt-2 pb-2">
            <div className="bg-gray-200">Kolom 2.1</div>
            <div className="bg-gray-300">Kolom 2.2</div>
            <div className="bg-gray-400">Kolom 2.3</div>
            <div className="bg-gray-500">Kolom 2.4</div>
          </div>
        </div>
      </div>
      <div className="w-full">untuk table</div>
    </Layout>
  );
};

export default HomeDash;
