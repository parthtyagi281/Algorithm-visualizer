import React from "react";
import LandingNavbar from "../Components/Navbar/LandingNavbar";
import { useContext } from "react";
import Context from "../Context/Context";
import Footer from "../Components/Footer/Footer";
import { motion } from "framer-motion";
import BubbleCard from "../Components/BubbleCard/BubbleCard";
import InsertionCard from "../Components/InsertionCard/InsertionCard";
import SelectionCard from "../Components/SelectionCard/SelectionCard";
import Merge from "../Components/MergeCard/Merge";

function Landing() {
  const { algorithms } = useContext(Context);
  return (
    <div className="bg-[#111827] min-h-screen flex items-center justify-center flex-col">
      <LandingNavbar />
      <div className="w-[80%]   min-h-screen flex flex-col gap-10 justify-center items-center">
        <div className="text-white mt-[90px] mb-10">
          <motion.div
            initial={{ opacity: 0, x: -200 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5 }}
            className="text-[18px] md:text-[40px] font-bold text-center font-fav1"
          >
            Visualize Algorithms
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 200 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5 }}
            className="text-center md:text-[20px] font-bold font-fav1 mt-5"
          >
            Experience the elegance of sorting algorithms. Witness data's
            orchestration into order as our visualizer brings algorithms to
            life. Explore the intricate dance of numbers, unveiling the essence
            of efficiency and logic through captivating visualization
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 px-4 mb-5 mt-10">
  <BubbleCard/>
  <InsertionCard/>
  <SelectionCard/>
  <Merge/>
</div>

      </div>
      <Footer />
    </div>
  );
}

export default Landing;
