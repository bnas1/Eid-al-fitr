import img1 from "../assets/quran.png";
import img2 from "../assets/quran2.png";
import img3 from "../assets/moon.png";

const Footer = () => {
  return (
    <div className="footer flex flex-col md:flex-row justify-around container mx-auto bg-green-950 opacity-75 p-4 rounded-lg relative">
      <div className="left text-center md:text-left">
        <p className="text-2xl sm:text-3xl md:text-5xl text-white pt-4 md:pt-20 font-semibold">
          Continue the purity <br /> after the fasting ends.
        </p>
      </div>
      <div className="flex flex-col items-center mt-4 md:mt-0">
        <img src={img1} className="h-24 w-24 md:h-32 md:w-32" alt="" />
        <p className="text-white font-semibold">
          Quran was revealed to Prophet Mohammad
        </p>
        <button className="text-white font-semibold">
          Know more <i className="fa-solid fa-arrow-up-right-from-square"></i>
        </button>
      </div>
      <div className="flex flex-col items-center mt-4 md:mt-0">
        <img src={img2} className="h-24 w-24 md:h-32 md:w-32" alt="" />
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
        className="h-24 w-24 md:h-32 md:w-32 absolute top-0 left-0 -mt-16 -ml-16"
      />
    </div>
  );
};

export default Footer;
