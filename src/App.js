// >> Modules
import { useEffect, useState } from "react";

// >> Components
import Home from "./components/js/home/home";



//>> =============================================================>>
// >>                           CSS 
//>> =============================================================>>
// >> Aos
import "aos/dist/aos.css"

// >> bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

// >> Glightbox
import "glightbox/dist/css/glightbox.css";

// >> Swiper 
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// >> Default custome
import "./components/style/style.css";
import Loading from "./components/js/loading/loading";


function App() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
      setTimeout(() => {
        setLoading(false);
      }, 1500);
  },[])

  return (
    <div className="App">
      {loading ? (
          <Loading />
        ) : (
          <Home />
      )}
    </div>
  );
}

export default App;
