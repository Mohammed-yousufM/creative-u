import React, { useState } from "react";
import FirstScreen from "../first-screen/FirstScreen";
import SecondScreen from "../second-screen/SecondScreen";

const AppActing = () => {
  const [nameData, setNameData] = useState({
    firstName: "happy",
    lastName: "super",
  });

  return (
    <>
      <FirstScreen />
      <SecondScreen />
    </>
  );
};

export default AppActing;
