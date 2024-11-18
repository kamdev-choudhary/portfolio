import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
const DefaultLayout = React.lazy(() => import("./layout/DefaultLayout"));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Router basename="/portfolio">
        <Routes>
          <Route path="/*" element={<DefaultLayout />} />
        </Routes>
      </Router>
    </Suspense>
  );
}

export default App;
