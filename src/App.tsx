import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Layout from "./Layout/Layout";
import Trash from "./Pages/Trash";
import Done from "./Pages/Done";
function App(): JSX.Element {
  return (
    <>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/trash" element={<Trash/>}/>
            <Route path="/done" element={<Done/>}/>
          </Routes>
        </Layout>
      </Router>
    </>
  );
}

export default App;
