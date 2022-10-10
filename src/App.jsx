import React, {useState} from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
const animals = ["Амурский тигр", "Преднезиатский леопард", "Ирбис", "Белый медведь", "Горбатый кит"];
export default () => {
    const [searchText, search] = useState("");
    return <>
        <Header text={searchText} find={search}/>
        <Main data={animals} sort={searchText}/>
        <Footer/>
    </>
}
