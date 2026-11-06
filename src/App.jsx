import { useState } from "react";
import Loader from "./loader";
import { Home } from "./Pages/Home";

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading && <Loader onComplete={() => setLoading(false)} />}
      <Home loaded={!loading} />
    </>
  );
}

export default App;
