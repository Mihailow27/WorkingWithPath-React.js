import {
  createBrowserRouter,
  //createRoutesFromElements,
  RouterProvider,
  //Route
} from "react-router-dom";
import HomePage from "./pages/Home";
import ProductsPage from "./pages/Products";
import RootLayout from "./pages/Root";
import ErrorPage from "./pages/Error";
import ProductsDetailPage from "./pages/ProductDetails";
//const routeDefinitions=createRoutesFromElements(
//<Route>
// <Route path='/' element={<HomePage/>}/>
//<Route path='/products' element={<ProductsPage/>}/>
//</Route>
//)
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement:<ErrorPage/>,
    children: [
      { index:true, path: "", element: <HomePage /> },
      { path: "Products", element: <ProductsPage />, },
      {path: "products/:productId",element:<ProductsDetailPage/>}
    ],
  },

]);
//const router=createBrowserRouter(routeDefinitions)
function App() {
  return <RouterProvider router={router} />;
}

export default App;
