import React, {useState, useContext} from "react";
import {Ctx} from "../../App";
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
        <ul>
            {searchText ?
                arr.map(a => <li key={a._id}>{a.type}</li>) :
                animals.map(a => <li key={a._id}>{a.type}</li>)
            }
        </ul>
    </main>
}