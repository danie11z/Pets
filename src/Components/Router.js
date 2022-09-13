import React from "react"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Header from "./Header"
import Home from "../Services/Home"
import Dogs from "../Services/Dogs"
import Cats from "../Services/Cats"

export default function Router(){
    return(
        <BrowserRouter>
            <Header rotaHome="Início" rotaDogs="Cachorros" rotaCats="Gatos" />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/cachorros" element={<Dogs />} />
                <Route path="/gatos" element={<Cats />} />
            </Routes>
        </BrowserRouter>
    )
}