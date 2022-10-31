import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";

export default () => {
    const routerP = useParams();
    console.log(routerP);
    const name = routerP.name;
    return <main>
        <h1>{name}</h1>
    </main>
}