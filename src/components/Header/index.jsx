import React, {useState} from "react";
import "./style.css";

export default ({text, find}) => {
    return  <header>
        <a href="" className="logo">Wild World</a>
        <div className="search">
            <input type="search__inp" className="search" value={text} onChange={e => find(e.target.value)}/>
            <button className="search__btn">Найти</button>
        </div>
    </header>
}