const LabCard = ({ item }) => {
  return (
    <div className="flex flex-row border rounded-xl p-3 w-[30%] items-center justify-between bg-cardColor text-white shadow my-3 opacity-90 hover:opacity-100">
      <div className="flex flex-row justify-start items-start w-1/3">
        <img
          className="w-24 h-24 rounded-full shadow"
          src={item.imageSrc}
          alt=""
        />
      </div>
      <div className=" flex flex-col justify-center w-2/3">
        <h3 className="text-xl font-bold text-white">{item.name}</h3>
        <p>{item.description}</p>
        <a
          className="w-1/2 ml-auto mt-2 py-2 px-3 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 "
          href={item.link}
        >
          Go to Lab
        </a>
      </div>
    </div>
  );
};

export default LabCard;
