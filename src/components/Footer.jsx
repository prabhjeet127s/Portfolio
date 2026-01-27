import { FaRegArrowAltCircleUp } from "react-icons/fa";
import { useLocation } from "react-router-dom";

const Footer = ({handleScroll,scroll}) => {
const location=useLocation()

  
  return (
    <footer className="bg-slate-900 text-white text-center py-6">
        {location.pathname === "/" && (
              <div className=" position absolute top-1265 right-10 flex flex-col items-center group">
                <span className="mb-2.5 text-3xl text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Go To Top
                </span>
                <button
                  onClick={()=>handleScroll(scroll)}
                  className=" text-white p-3 rounded-full "
                >
                  <FaRegArrowAltCircleUp className="size-12" />
                </button>

              </div>
            )}
      Created By @Prabhjeet Singh | All Rights Reserved!

    </footer>
  );
};

export default Footer;
