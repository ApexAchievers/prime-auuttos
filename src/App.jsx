import { createBrowserRouter, RouterProvider } from "react-router";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import AddProduct from "./pages/AddProduct";
import EditProduct from "./pages/EditProduct";
import ViewProduct from "./pages/ViewProduct";
import VendorDashboard from "./pages/VendorDashboard";
import CartTest from "./pages/CartTestPage";
import CartProvider from "./context/CartContext";
import NotFound from "./pages/NotFound";

import SingleAdvert from "./pages/SingleAdvert";
import BatteryElectricity from "./pages/BatteryElectricity";
import BikeAccessories from "./pages/BikeAccessories";
import BodyExterior from "./pages/BodyExterior";
import BreakingSystem from "./pages/BreakingSystem";
import ClimateComfort from "./pages/ClimateComfort";
import CyclingEssentials from "./pages/CyclingEssentials";
import EngineMechanical from "./pages/EngineMechanical";
import FluidLubricants from "./pages/FluidLubricants";
import InteriorComponent from "./pages/InteriorComponent";
import LightIndicators from "./pages/LightIndicators";
import Services from "./pages/Services";
import SuspensionSteering from "./pages/SuspensionSteering";
import TransmissionDrivetrain from "./pages/TransmissionDrivetrain";

const primeAuttosRouter = createBrowserRouter([

  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/register", element: <Register /> },
      { path: "/login", element: <Login /> },
      { path: "/add-product", element: <AddProduct /> },
      { path: "/edit-product", element: <EditProduct /> },
      { path: "/view-product", element: <ViewProduct /> },
      { path: "/vendor-dashboard", element: <VendorDashboard /> },
      { path: "/single-advert", element: <SingleAdvert /> },
      { path: "/battery-electricity", element: <BatteryElectricity /> },
      { path: "/bike-accessories", element: <BikeAccessories /> },
      { path: "/body-exterior", element: <BodyExterior /> },
      { path: "/breaking-system", element: <BreakingSystem /> },
      { path: "/climate-comfort", element: <ClimateComfort /> },
      { path: "/cycling-essentials", element: <CyclingEssentials /> },
      { path: "/engine-mechanical", element: <EngineMechanical /> },
      { path: "/fluid-lubricants", element: <FluidLubricants /> },
      { path: "/interior-component", element: <InteriorComponent /> },
      { path: "/light-indicators", element: <LightIndicators /> },
      { path: "/services", element: <Services /> },
      { path: "/suspension-steering", element: <SuspensionSteering /> },
      { path: "/transmission-drivetrain", element: <TransmissionDrivetrain /> },
      { path: "/cart-test", element: <CartTest /> },
      { path: "*", element: <NotFound /> },

    ]
  }
]);

function App() {
  return (
    <CartProvider>
      <RouterProvider router={primeAuttosRouter} />
    </CartProvider>
  );
}
export default App;
