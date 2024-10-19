import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Lazy load the Home component
const Home = React.lazy(() => import("./pages/Home"));

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          {/* Define routes here */}
          <Route path="/" element={<Home />} />
          {/* Add more routes as needed */}
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
