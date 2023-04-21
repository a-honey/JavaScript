import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Today from "./Today";
import Week from "./Week";
import New from "./New";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="today" element={<Today />} />
          <Route path="week" element={<Week />} />
          <Route path="new" element={<New />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
