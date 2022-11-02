import React, {useEffect, useState} from "react";
import Api from "../api.js";

export default () => {
    const [type, setType] = useState("");
    const handler = (e) => {
        e.preventDefault();
        const body =  {
            "type": type
        }
        console.log(body);
        // const result = await Api.add(body);
        // alert(JSON.stringify(result));
    }
    return <main>
        <h1>Добавить информацию</h1>
        <form onSubmit={handler}>
            <input type="text" name="type" placeholder="Название вида" value={type} onChange={e => setType(e.target.value)}/>
            <button type="submit">Добавить в БД</button>
        </form>
    </main>
}