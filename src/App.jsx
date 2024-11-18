import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
const DefaultLayout = React.lazy(() => import("./layout/DefaultLayout"));

const Home = React.lazy(() => import("./pages/Home"));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Router basename="/portfolio">
        <Routes>
          {/* Define routes here */}
          <Route path="/*" element={<DefaultLayout />} />
          {/* Add more routes as needed */}
        </Routes>
      </Router>
    </Suspense>
  );
}

export default App;
