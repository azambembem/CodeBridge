// import { CarouselItem } from "@/components/ui/carousel";

// const Apple = () => {
//   return (
//     <CarouselItem className="h-[688px] bg-black flex items-center justify-center">
//       <div>
//         <img
//           className="w-[1428px] h-[690px] object-cover inset-0"
//           src="https://static.wixstatic.com/media/3a360e_c94b7781bbb94afe9ba063ae24bef8b8~mv2.jpg/v1/fill/w_974,h_510,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/full-stack-developer-training-course.jpg"
//           alt=""
//         />
//       </div>
//     </CarouselItem>
//   );
// };

// export default Apple;


import { CarouselItem } from "@/components/ui/carousel";
import { motion } from "framer-motion";
import {
  FaPython,
  FaJsSquare,
  FaPhp,
  FaJava,
  FaCss3Alt,
  FaHtml5
} from "react-icons/fa";
import { SiMysql, SiRuby, SiCplusplus, SiPerl } from "react-icons/si";

const Apple = () => {
  return (
    <CarouselItem className="h-[688px] bg-gradient-to-r from-[#e0eafc] to-[#cfdef3] flex items-center justify-center">
      <div className="max-w-6xl w-full p-4 flex flex-col md:flex-row items-center md:justify-between gap-8">
        {/* Text Section */}
        <motion.div
          className="flex-1 text-center md:text-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h1 className="text-3xl md:text-5xl font-bold text-[#4b2e83] mb-4">
            Full Stack
          </h1>
          <p className="text-lg md:text-xl text-gray-700">
            Developer Training & Certification
          </p>
        </motion.div>

        {/* Icons Section */}
        <motion.div
          className="flex-1 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-3 gap-6 justify-items-center"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="flex flex-col items-center">
            <FaPython className="text-4xl md:text-5xl text-[#3776AB]" />
            <span className="mt-2 text-sm md:text-base">Python</span>
          </div>
          <div className="flex flex-col items-center">
            <FaJsSquare className="text-4xl md:text-5xl text-[#F7DF1E]" />
            <span className="mt-2 text-sm md:text-base">JS</span>
          </div>
          <div className="flex flex-col items-center">
            <FaPhp className="text-4xl md:text-5xl text-[#777BB4]" />
            <span className="mt-2 text-sm md:text-base">PHP</span>
          </div>
          <div className="flex flex-col items-center">
            <FaJava className="text-4xl md:text-5xl text-[#007396]" />
            <span className="mt-2 text-sm md:text-base">Java</span>
          </div>
          <div className="flex flex-col items-center">
            <FaCss3Alt className="text-4xl md:text-5xl text-[#264de4]" />
            <span className="mt-2 text-sm md:text-base">CSS</span>
          </div>
          <div className="flex flex-col items-center">
            <FaHtml5 className="text-4xl md:text-5xl text-[#E44D26]" />
            <span className="mt-2 text-sm md:text-base">HTML</span>
          </div>
          <div className="flex flex-col items-center">
            <SiMysql className="text-4xl md:text-5xl text-[#00758F]" />
            <span className="mt-2 text-sm md:text-base">MySQL</span>
          </div>
          <div className="flex flex-col items-center">
            <SiRuby className="text-4xl md:text-5xl text-[#CC342D]" />
            <span className="mt-2 text-sm md:text-base">Ruby</span>
          </div>
          <div className="flex flex-col items-center">
            <SiCplusplus className="text-4xl md:text-5xl text-[#00599C]" />
            <span className="mt-2 text-sm md:text-base">C++</span>
          </div>
          <div className="flex flex-col items-center">
            <SiPerl className="text-4xl md:text-5xl text-[#39457E]" />
            <span className="mt-2 text-sm md:text-base">Perl</span>
          </div>
        </motion.div>
      </div>
    </CarouselItem>
  );
};

export default Apple;
