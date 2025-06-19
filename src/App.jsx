import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./pages/Home";
import Register from "./pages/Register";
import AddProduct from "./pages/AddProduct";
import EditProduct from "./pages/EditProduct";
import ViewProduct from "./pages/ViewProduct";
import VendorDashboard from "./pages/VendorDashboard";


const primeAuttosRouter = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/register', element: <Register /> },
  { path: '/add-product', element: <AddProduct /> },
  { path: '/edit-product', element: <EditProduct /> },
  { path: '/view-product', element: <ViewProduct /> },
  { path: '/vendor-dashboard', element: <VendorDashboard /> },
]);

function App() {
  return (
    <>
      <RouterProvider router={primeAuttosRouter} />
    </>
  );
}

export default App