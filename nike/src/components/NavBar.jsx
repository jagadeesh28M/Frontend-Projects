import logo from "../assets/brand_logo.png";

export function NavBar() {
  return (
    <div className="w-full h-20 flex justify-between items-center">
      <img className="h-10 w-20 ml-20 mt-15" src={logo} alt="" />
      <ul className=" font-semibold text-lg w-96 h-6 flex justify-between hover:cursor-pointer ">
        <li className="hover:text-red-600 ">MENU</li>
        <li className="hover:text-red-600">LOCATION</li>
        <li className="hover:text-red-600">ABOUT</li>
        <li className="hover:text-red-600">CONTACT</li>
      </ul>
      <div>
        <button className="bg-red-700 w-20 h-8 mr-20 rounded text-white hover:bg-red-900">
          Login
        </button>
      </div>
    </div>
  );
}
