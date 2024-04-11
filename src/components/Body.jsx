import right from "../assets/right.png";

const Body = () => {
  return (
    <div className="flex flex-col md:flex-row justify-around items-center p-4">
      <div className="left py-8 md:py-32 text-xl text-white text-center">
        <h1 className="eid text-8xl sm:text-8xl md:text-8xl m-4 text-yellow-300 font-bold printers ">
          Eid Al Fitr <br /> Mubarak
        </h1>
        <p className="text-lg sm:text-xl m-4 font-semibold">
          Happy Eid! The day is all about love and peace. I wish you all every
          bit <br /> of happiness, good health and peace of mind.
        </p>
        <div className="btn m-4">
          <button className="bg-yellow-300 text-white hover:text-neutral-900 px-4 py-2 rounded font-semibold mr-4">
            Know More
          </button>
          <button className=" shadow-xl hover:text-neutral-900 px-4 py-2 rounded font-semibold mr-4 ">
            About Sadaqah{" "}
            <i className="fa-solid fa-arrow-up-right-from-square"></i>
          </button>
        </div>
      </div>
      <div className="right flex justify-center">
        <img src={right} alt="" className="w-1/2 md:w-2/3 lg:w-auto" />
      </div>
    </div>
  );
};

export default Body;
