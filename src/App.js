import { Routes, Route } from "react-router-dom";


// importing pages and components
import Home from "./pages/Home"
import NavBar from "./component/NavBar";
import Store from "./pages/Store";
import Error from './pages/Error'
import Cart from './component/cart/Cart'
import Detail from "./pages/Detail";


//importing css
import "./index.css"

const App = () => {
  return (<>
    <NavBar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/store" element={<Store />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/store/:id" element={<Detail />} />
      <Route path="*" element={<Error />} />
    </Routes>
  </>
  )
}



export default App;