
import React from "react";
import ReactDOM from "react-dom/client";

import utils from "./utils";
import {Route, Routes} from "react-router-dom";

import "./index.css";

import Index from "./pages/Index";

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
    <React.StrictMode>
        <utils.RootRouter>
            <Routes>
                <Route index element={<Index />} />
                <Route path={"/no"} element={<>NO</>} />
                <Route path={"/*"} element={<>*</>} />
            </Routes>
        </utils.RootRouter>
    </React.StrictMode>
)
