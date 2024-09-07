import { RouterProvider } from "react-router-dom";
import "./App.css";
import Header from "./components/header/Header";
import Home from "./page/home/Home";
import router from "./routes";

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
