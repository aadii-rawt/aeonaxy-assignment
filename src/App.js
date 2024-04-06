import { BrowserRouter,Routes,Route } from "react-router-dom";
import Layout from "./Components/Layout";
import Home from './Pages/Home'
import Form from "./Pages/Form";
import Schedule from './Pages/Schedule'

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/form" element={<Form />} />
        <Route path="/schedule" element={<Schedule />} />
      </Route>      
    </Routes>
  </BrowserRouter>
  );
}

export default App;
