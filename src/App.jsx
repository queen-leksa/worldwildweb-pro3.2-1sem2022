import React, {useState, useEffect} from "react";
import {Routes, Route} from "react-router-dom";
import Header from "./components/Header";
import Main from "./components/Main";
import Data from "./Pages/Data";
import Single from "./Pages/Single";
import Add from "./Pages/Add";
import Footer from "./components/Footer";
import Api from "./api";

// const animals = ["Амурский тигр", "Преднезиатский леопард", "Ирбис", "Белый медведь", "Горбатый кит"];
const Ctx = React.createContext();


const App = () => {
    const [searchText, search] = useState("");
    const [animals, setAnimals] = useState([]);
    useEffect(() => {
        Api.getAll()
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setAnimals(data.data);
            });
    }, []);
    return <Ctx.Provider value={{
        animals: animals,
        searchText: searchText,
        setAnimals: setAnimals,
        updateSerchText: search
    }}>
        <Header/>
        <Routes>
            <Route path="/" element={<Main/>}/>
            <Route path="/data" element={<Data/>}/>
            <Route path="/add" element={<Add/>}/>
            <Route path="/data/:name" element={<Single/>}/>
        </Routes>
        <Footer/>
    </Ctx.Provider>
}

export {App, Ctx};