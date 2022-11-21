import React from 'react';
import sql from "../assets/sql.png";
import Arduino from "../assets/Arduino.png";
import Swift from "../assets/swift.png";
import Android from "../assets/android.png";
import cplusplus from "../assets/cplusplus.png";
import github from "../assets/github.png";
import Kotlin from "../assets/kotlin.png";
import Matlab from "../assets/Matlab.png";
import Java from "../assets/java.png";
import Tilt from 'react-parallax-tilt';


const Skills = () => {

    const techs = [
        {
          id: 1,
          src: Java,
          title: "Java Programming",
          style: "shadow-[#E2454A]",
        },
        {
          id: 2,
          src: Arduino,
          title: "Arduino Programming ",
          style: "shadow-[#406B7A]",
        },
        {
          id: 3,
          src: Swift,
          title: "Swift",
          style: "shadow-[#F25C3E]",
        },
        {
          id: 4,
          src: Android,
          title: "Android Studio",
          style: "shadow-[#67EAA4]",
        },
        {
          id: 5,
          src: Kotlin,
          title: "Kotlin",
          style: "shadow-[#D7AE71]",
        },
    
    
        {
          id: 6,
          src: cplusplus,
          title: "C Programming",
          style: "shadow-blue-300",
        },
        {
          id: 7,
          src: sql,
          title: "SQL",
          style: "shadow-[#B5D567]",
        },
    
        {
          id: 8,
          src: github,
          title: "GitHub",
          style: "shadow-gray-400",
        },
    
        {
          id: 9,
          src: Matlab,
          title: "MATLAB",
          style: "shadow-[#B56555]"
        },
      ];
    
    return (

        <div
            id="skills"
            className="home3 pt-20 text-white w-full min-h-screen p-10"
        >
            <div className=" inner max-w-screen-lg mx-auto p-4 flex flex-col text-black justify-center w-full h-full ">
                <div>
                    <p className="text-4xl font-bold p-2 text-center text-white">
                        Skills
                    </p>
                    <p className="py-6 mt-6 text-center text-white">I have experience with the following technologies -:</p>
                </div>

                <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-6 md:gap-14 text-center py-8 px-3 sm:px-0">
                    {techs.map(({ id, src, title, style }) => (
                        <Tilt glareEnable={true} glareMaxOpacity={0.9} glareColor="lightblue" glarePosition="all"
                            key={id}
                            className={`shadow-xl text-white hover:scale-110 border-white border-2  bg-[#0b3c4b] cursor-pointer duration-300 py-2 rounded-lg ${style}`}
                        >
                            <img src={src} alt="" className="w-20 mx-auto" />
                            <p className="mt-4">{title}</p>
                        </Tilt >
                    ))}
                </div>
            </div>
        </div>



    )
}

export default Skills
