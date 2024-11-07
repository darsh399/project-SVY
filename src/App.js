import FrontEndRoutes from "./components/Routes/FrontEndRoutes";
import { RouterProvider } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <RouterProvider router={FrontEndRoutes}/>
     </div>
  );
}

export default App;
