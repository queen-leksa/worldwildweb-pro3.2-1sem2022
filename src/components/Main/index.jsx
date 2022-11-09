import React, {useState, useContext} from "react";
import {Ctx} from "../../App";
import Card from "../Card";
import "./style.css";

export default () => {
    const {animals, searchText} = useContext(Ctx);
    let arr = animals.filter(animal => {
        if (animal.type.toLowerCase().search(searchText.toLowerCase()) !== -1)
            return animal;
    });
    return  <main>
        <h1>Wild World</h1>
        {searchText && <div>Поиск: {searchText}</div>}
        <ul className="cards">
            {searchText ?
                arr.map(a => <Card key={a._id} data={a}/>) :
                animals.map(a => <Card key={a._id} data={a}/>)
            }
        </ul>
    </main>
}