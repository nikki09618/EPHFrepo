import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Component6 = () => {
  const { e } = useContext(AppContext);

  return (
    <div className="component-box component-6">
      <h3>Component 6</h3>
      <h4>This is prop e: {e}</h4>
    </div>
  );
};

export default Component6;
