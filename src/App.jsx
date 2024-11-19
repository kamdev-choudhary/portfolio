import React, { Suspense } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
const DefaultLayout = React.lazy(() => import("./layout/DefaultLayout"));
import Loader from "./components/Loader";

function App() {
  return (
    <Suspense fallback={<Loader open={true} />}>
      <Router basename="/portfolio">
        <Routes>
          {/* Default route */}
          <Route path="/" element={<DefaultLayout />} />

          {/* Catch-all route */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
    </Suspense>
  );
}

export default App;
