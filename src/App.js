import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Home/home";
import Detail from "./ProductDetail/detail";
import Search from "./Search/search";
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "react-query";
import NavBar from "./Navbar/navbar";
import Item from "./Item/item";
import MyCart from "./MyCart/mycart";



const queryClient = new QueryClient()

function App() {
  return (
    <>
     <QueryClientProvider client={queryClient}>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" index element={<Home />} />
          <Route path="/detail/:productId" index element={<Detail />} />
          <Route path="/search" index element={<Search />} />
          <Route path="/item" index element={<Item />} />
          <Route path="/myCart" index element={<MyCart />} />
          
        </Routes>
      </Router>
      </QueryClientProvider>
    </>
  );
}

export default App;
