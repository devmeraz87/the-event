import { useEffect, useState } from "react";
import Home from "./components/js/home/home";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./components/style/style.css";
import "aos/dist/aos.css"

function App() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
      setTimeout(() => {
        setLoading(false);
      }, 10);
  },[])

  return (
    <div className="App">
      {loading ? (
        <>Loading...</>
      ) : (
        <>
          <Home />
        </>        
      )}
    </div>
  );
}

export default App;
