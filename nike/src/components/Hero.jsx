import shoe from "../assets/shoe_image.png";
import amazon from "../assets/amazon.png";
import flipkart from "../assets/flipkart.png";
export function Hero() {
  return (
    <div className=" flex items-start">
      <div className="flex h-5/6  w-fit items-start m-10">
        <div className="w-auto">
          <h1 className=" ml-32 text-8xl pb-6 font-extrabold text-balance">
            YOUR FEET DESERVE THE BEST
          </h1>
          <p className="ml-32 text-xl pb-6 pr-80 text-gray-500 font-medium">
            YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR
            SHOES.YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR
            SHOES.
          </p>
          <div className="ml-32 h-12 w-80 flex justify-start items-center gap-10">
            <button className=" p-2 h-10 font-bold text-center  bg-red-700 text-white hover:bg-red-900">
              Shop Now
            </button>
            <button className="p-2 h-10 font-bold text-center bg-white  text-red-700 border border-red-700 hover:bg-red-800 hover:text-white">
              Category
            </button>
          </div>
          <div className="ml-32 py-2">
            <p>Also Available On</p>
          </div>
          <div className="ml-32 flex justify-start items-center gap-6 ">
            <img src={flipkart} alt="" />
            <img src={amazon} alt="" />
          </div>
        </div>
        <img src={shoe} alt="" />
      </div>
    </div>
  );
}
