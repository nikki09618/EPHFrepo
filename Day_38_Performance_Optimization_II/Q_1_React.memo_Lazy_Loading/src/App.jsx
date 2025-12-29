import React, { useState, lazy, Suspense } from "react";

const HeavyComponent = lazy(() => import("./HeavyComponent"));

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div style={{ padding: "30px" }}>
      <h1>React.memo & Lazy Loading Demo</h1>

      <h2>Counter: {count}</h2>
      <button onClick={() => setCount(count + 1)}>
        Increment Counter
      </button>

      <Suspense fallback={<h3>Loading Heavy Component...</h3>}>
        <HeavyComponent />
      </Suspense>
    </div>
  );
};

export default App;
