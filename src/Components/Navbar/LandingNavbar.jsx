import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

function LandingNavbar() {
  const navigate = useNavigate();
  return (
    <div className="  main shadow-md bg-[#050814] flex items-center justify-center sticky top-0 left-0 right-0 z-50  opacity-[85%] h-[50px] md:h-[70px] min-w-full border-b-[1px] border-gray-400 ">
      <div className=" w-[100%] md:w-[80%] h-[100%] pt-[10px] pb-[10px] flex justify-between items-center px-4">
        <motion.div
          initial={{ opacity: 0, x: -200 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5 }}
          onClick={() => {
            navigate("/");
          }}
          className=" text-white font-fav1 ml-[10px] text-[15px] md:text-[27px] font-bold cursor-pointer"
        >
          Algorithms Visualizer
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 200 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5 }}
          className="mr-[10px] flex gap-4 justify-center items-center"
        >
          <a
            href="https://github.com/Pushpendra9045/Algorithm-visualizer"
            className="bg-blue-600 text-white p-2 md:p-[6px] md:font-bold rounded-[5px] hover:scale-[1.03] ease-in-out duration-300 cursor-pointer"
          >
            Github Link
          </a>
        </motion.div>
      </div>
    </div>
  );
}

export default LandingNavbar;
