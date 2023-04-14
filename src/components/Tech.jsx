import React from "react";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { useEffect, useState } from "react";

const Tech = () => {
  const [phoneScreen, setPhoneScreen] = useState(false);

  useEffect(() => {
    if (window.innerWidth < 768) {
      setPhoneScreen(true);
    } else {
      setPhoneScreen(false);
    }
  }, []);
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {phoneScreen ? (
        <>
          {technologies.map((technology) => (
            <div
              className="w-28 h-28 bg-white rounded-full p-2"
              key={technology.name}
            >
              <img src={technology.icon} />
            </div>
          ))}
        </>
      ) : (
        <>
          {technologies.map((technology) => (
            <div className="w-28 h-28 " key={technology.name}>
              <BallCanvas icon={technology.icon} />
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default SectionWrapper(Tech, "");
