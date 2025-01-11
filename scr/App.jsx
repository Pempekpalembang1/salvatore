import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import MainLayout from "./layouts/MainLayout.jsx";
import HomePage from "./pages/HomePage.jsx";
import DimasDiajeng from "./pages/DimasDiajeng.jsx";
import ClassMeet1 from "./pages/ClassMeet1.jsx";
import MPLS from "./pages/MPLS.jsx";
import HUTRI from "./pages/HUTRI.jsx";
import HUTSMANDELA from "./pages/HUTSMANDELA.jsx";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/dimasdiajeng" element={<DimasDiajeng />} />
        <Route path="/classmeet1" element={<ClassMeet1 />} />
        <Route path="/mpls" element={<MPLS />} />
        <Route path="/hutri" element={<HUTRI />} />
        <Route path="/hutsmandela" element={<HUTSMANDELA />} />
      </Route>
    )
  );

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
