import React, {useState} from "react";
import {Link} from "react-router-dom";
import "./style.css";

export default ({text, find}) => {
    return  <header>
        <Link to="/" className="logo">Wild World</Link>
        <nav>
            <Link to="/data">Загрузочка...</Link>
            <Link to="/add">Добавить зверушку</Link>
        </nav>
        <div className="search">
            <input type="search__inp" className="search" value={text} onChange={e => find(e.target.value)}/>
            <button className="search__btn">Найти</button>
        </div>
    </header>
}