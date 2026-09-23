import { useEffect, useState, Suspense, lazy } from "react";

const App = () => {
  const [DynamicComponent, setDynamicComponent] = useState(null);

  useEffect(() => {
    const path = window.location.pathname;
    const name = path.split("/").pop();

    if (name) {
      const ImportedComponent = lazy(() => import(`./components/${name}`));
      setDynamicComponent(() => ImportedComponent);
    }
  }, []);

  return (
    <div>
      {/* 3. Suspense is required when using React.lazy to show a loading state */}
      <Suspense fallback={<div>Loading component...</div>}>
        {DynamicComponent ? <DynamicComponent /> : <p>No component selected</p>}
      </Suspense>
    </div>
  );
};

export default App;
