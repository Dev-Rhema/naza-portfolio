import { useState } from "react";
import Loader from "./loader";
import { Home } from "./Pages/Home";
import { About } from "./Pages/About";
import { CaseStudy } from "./Pages/CaseStudy";
import { caseStudies } from "./data";

function App() {
  const [loading, setLoading] = useState(true);
  const path = window.location.pathname.replace(/\/$/, "");
  const study = caseStudies[path.replace("/works/", "")];

  return (
    <>
      {loading && <Loader onComplete={() => setLoading(false)} />}
      {path === "/about" ? (
        <About loaded={!loading} />
      ) : study?.overview ? (
        <CaseStudy study={study} loaded={!loading} />
      ) : (
        <Home loaded={!loading} />
      )}
    </>
  );
}

export default App;
