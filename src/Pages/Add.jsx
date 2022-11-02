import React, {useEffect, useState} from "react";
import Api from "../api.js";

export default () => {
    return <main>
        <h1>Добавить информацию</h1>
        <form>
            <input type="text" name="type" placeholder="Название вида"/>
            <button type="submit">Добавить в БД</button>
        </form>
    </main>
}