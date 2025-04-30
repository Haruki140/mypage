// ルーティングコンポーネント
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./Home";
import Detail from "./Detail";
import { FC } from "react";
import Header from "./Header";
import Footer from "./Footer";

const Router: FC = () => {
    return (
        <BrowserRouter>
            <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/detail" element={<Detail />} />
                </Routes>
            <Footer />
        </BrowserRouter>
    )
};

export default Router;