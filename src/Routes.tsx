// ルーティングコンポーネント
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./Home";
import Detail from "./Detail";
import { FC } from "react";
import NotFound from "./NotFound";

const Router: FC = () => {

    return (
        <BrowserRouter> 
            <Routes> 
                <Route path="/" element={<Home />} /> 
                <Route path="/detail" element={<Detail />} /> 
                <Route path="*" element={<NotFound />} /> 
            </Routes> 
        </BrowserRouter>
    )
};


export default Router;