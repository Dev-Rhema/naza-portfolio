import { lazy, Suspense, useState } from "react";
import Loader from "./loader";
import { caseStudies } from "./data";

const Home = lazy(() => import("./Pages/Home"));
const About = lazy(() => import("./Pages/About"));
const CaseStudy = lazy(() => import("./Pages/CaseStudy"));

function App() {
  const [loading, setLoading] = useState(true);
  const path = window.location.pathname.replace(/\/$/, "");
  const study = caseStudies[path.replace("/works/", "")];

  return (
    <>
      {loading && <Loader onComplete={() => setLoading(false)} />}
      <Suspense>
        {path === "/about" ? (
          <About loaded={!loading} />
        ) : study?.overview ? (
          <CaseStudy study={study} loaded={!loading} />
        ) : (
          <Home loaded={!loading} />
        )}
      </Suspense>
    </>
  );
}

export default App;
