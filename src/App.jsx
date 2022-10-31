import React, {useState} from "react";
import {Routes, Route} from "react-router-dom";
import Header from "./components/Header";
import Main from "./components/Main";
import Data from "./Pages/Data";
import Single from "./Pages/Single";

import Footer from "./components/Footer";
const animals = ["Амурский тигр", "Преднезиатский леопард", "Ирбис", "Белый медведь", "Горбатый кит"];
export default () => {
    const [searchText, search] = useState("");
    return <>
        <Header text={searchText} find={search}/>
        <Routes>
            <Route path="/" element={<Main data={animals} sort={searchText}/>}/>
            <Route path="/data" element={<Data/>}/>
            <Route path="/data/:name" element={<Single/>}/>
        </Routes>
        <Footer/>
    </>
}