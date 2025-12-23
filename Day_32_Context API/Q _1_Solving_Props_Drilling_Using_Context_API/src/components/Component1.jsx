import { AppContext } from "../context/AppContext";
import Component2 from "./Component2";

const Component1 = () => {
  const contextValues = {
    a: "Apple",
    b: "Ball",
    c: "Cat",
    d: "Dog",
    e: "Elephant",
    f: "Fish",
  };

  return (
    <AppContext.Provider value={contextValues}>
      <h3>Component 1</h3>
      <Component2 />
    </AppContext.Provider>
  );
};

export default Component1;
