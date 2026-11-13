import { useState } from "react";
import Loader from "./loader";
import { Home } from "./Pages/Home";
import { About } from "./Pages/About";

function App() {
  const [loading, setLoading] = useState(true);
  const isAboutPage = window.location.pathname.replace(/\/$/, "") === "/about";

  return (
    <>
      {!isAboutPage && loading && <Loader onComplete={() => setLoading(false)} />}
      {isAboutPage ? <About /> : <Home loaded={!loading} />}
    </>
  );
}

export default App;
