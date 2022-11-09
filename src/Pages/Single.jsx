import React, {useEffect, useState} from "react";
import Api from "../api";
import {useParams} from "react-router-dom";

export default () => {
    const routerP = useParams();
    const [animal, setAnimal] = useState({});
    useEffect(() => {
        Api.getSingle(routerP.name)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setAnimal(data.data);
            })
    }, [])
    console.log(routerP);
    // const name = routerP.name;
    return <main>
        {animal.type && <h1>{animal.type}</h1>}
    </main>
}