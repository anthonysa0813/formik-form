import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import RegisterPage from "./pages/RegisterPage";
import RegisterPageWithYup from "./pages/RegisterWithYup";
import RegisterPageComponents from "./pages/registerWithComponents";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      {/* <RegisterPage /> */}
      <RegisterPageWithYup />
      {/* <RegisterPageComponents /> */}
    </div>
  );
}

export default App;
