import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { Toaster } from "sonner";
import Layout from "./components/Layout";
import Quiz from "./pages/Quiz";
import Result from "./pages/Result";
import ComingSoon from "./widgets/ComingSoon";
import NotFound from "./widgets/NotFound";

function App() {
  return (
    <div>
      <Toaster position="top-center" />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/quiz/:subject" element={<Quiz />} />
          <Route path="/result/:subject/:score" element={<Result />} />
          <Route path="/coming-soon" element={<ComingSoon />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;