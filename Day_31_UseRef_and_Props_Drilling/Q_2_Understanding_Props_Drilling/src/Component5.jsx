import Component6 from "./Component6";

function Component5({ e, f }) {
  return (
    <div className="component5">
      <h3>Component 5</h3>
      <h4>This is prop f: {f}</h4>
      {/* Component5 does NOT use prop e */}

      <Component6 e={e} />
    </div>
  );
}

export default Component5;
