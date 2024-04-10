import right from "../assets/right.png";

const Body = () => {
  return (
    <div className="flex justify-around p-4">
      <div className="left py-32 text-xl text-white">
        <h1 className="eid text-9xl m-4 text-yellow-300 font-bold">
          Happy Eid Al <br /> Fitr Mubarak
        </h1>
        <p className="text-2xl m-4 font-semibold">
          Happy Eid! The day is all about love and peace. I wish you all every
          bit <br /> of happiness, good health and peace of mind.
        </p>
        <div className="btn m-4">
          <button className="bg-yellow-300 text-white hover:text-neutral-950 px-4 py-2 rounded font-semibold mr-4">
            Know More
          </button>
          <button className="bg-transparent hover:text-neutral-950 font-semibold">
            About Sadaqah{" "}
            <i className="fa-solid fa-arrow-up-right-from-square"></i>
          </button>
        </div>
      </div>
      <div className="right">
        <img src={right} alt="" />
      </div>
    </div>
  );
};

export default Body;
