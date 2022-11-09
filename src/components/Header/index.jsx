import React, {useContext} from "react";
import {Ctx} from "../../App";
import {Link} from "react-router-dom";
import "./style.css";

export default () => {
    const {searchText, updateSerchText} = useContext(Ctx);
    return  <header>
        <Link to="/" className="logo">Wild World</Link>
        <nav>
            <Link to="/data">Загрузочка...</Link>
            <Link to="/add">Добавить зверушку</Link>
        </nav>
        <div className="search">
            <input type="search__inp" className="search" value={searchText} onChange={e => updateSerchText(e.target.value)}/>
            <button className="search__btn">Найти</button>
        </div>
    </header>
}