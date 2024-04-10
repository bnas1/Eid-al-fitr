import "../App.css";
import img1 from "../assets/quran.png";
import img2 from "../assets/quran2.png";
import img3 from "../assets/moon.png";
const Footer = () => {
  return (
    <div className="flex justify-around container mx-auto glass-effect bg-green-950 opacity-75 p-4 rounded-lg relative ">
      <div className=" left ">
        <p className="text-5xl text-white pt-20 flex font-semibold ">
          Continue the purity <br /> after the fasting ends.
        </p>
      </div>
      <div className="flex flex-col items-center">
        <img src={img1} style={{ height: "150px", width: "150px" }} alt="" />
        <p className="text-white font-semibold">
          Quran was revealed to Prophet Mohammad
        </p>
        <button className="text-white font-semibold">
          Know more <i className="fa-solid fa-arrow-up-right-from-square"></i>
        </button>
      </div>
      <div className="flex flex-col items-center	">
        <img src={img2} style={{ height: "150px", width: "150px" }} alt="" />
        <p className="text-white font-semibold">
          Recite least 1 ayah of Quran Everyday
        </p>
        <button className="text-white font-semibold">
          Know more <i className="fa-solid fa-arrow-up-right-from-square"></i>
        </button>
      </div>
      <img
        src={img3}
        alt=""
        style={{ height: "150px", width: "150px" }}
        className="absolute top-0 left-0 -mt-16 -ml-16 "
      />
    </div>
  );
};

export default Footer;
