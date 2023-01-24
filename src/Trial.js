import React, { useContext, createContext, useState } from "react";
import Button from "@mui/material/Button";
import Example2 from "./Components/Example2";

//Step1 : declaring createContext
const Name = createContext();

function Trial() {
  let arr = ["green", "blue", "red"];
  const [name, setName] = useState(arr);
  // const [final, setFinal] = useState(arr);
  // Step2 : Declaring Context provider to show context
  return (
    <div>
      <Name.Provider value={name}>
        {/* here props are passed to show the context   */}
        <Sample />
        <Example2 />
        <div className="m-3 p-3 fs-5">Data Updation under progress !!!</div>
      </Name.Provider>
    </div>
  );
}

//Step-3: declaring a global context to return useContext();
export const useGlobalContext = () => {
  return useContext(Name);
};
// This Global Context can be passed /imported/exported to the JS file for furtherance

function Sample() {
  const data = useContext(Name);
  return (
    <div>
      <div className="fs-1 m-3 p-3 ">Trial run</div>
      <div className="d-flex flex-row m-3 p-3 justify-content-center gap-2">
        {data.map((element,index) => {
          return (
            <div className="d-flex justify-content-center">
              <div>
                <Button variant="outlined" id={index} size="large">{element}</Button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default Trial;
