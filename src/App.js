import React, { useEffect, useState } from "react";
// components
import Flash from "./components/FlashPage/Flash";
import LogoFlash from "./components/FlashPage/LogoFlash";
import Form from "./components/Form/Form";
import Main from "./components/LandingPage/Main";
// CSS
import "./css/Main.css";

const App = () => {
  const [loading, setLoading] = useState(true);
  const [flashLogo, setFlashLogo] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
      setFlashLogo(true);
      setTimeout(() => {
        setFlashLogo(false);
      }, 1000);
    }, 4000);
  }, []);

  return (
    <div>
      {loading ? <Flash /> : <div>{flashLogo ? <LogoFlash /> : <Main />}</div>}
    </div>
  );
};

export default App;
