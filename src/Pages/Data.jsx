import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";

const link = "https://fakerapi.it/api/v1/custom?_quantity=20&name=pokemon&cnt=number";
export default () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch(link)
            .then(res => res.json())
            .then(d => {
                console.log(d);
                setData([...d.data].sort((a, b) => {
                    if (a.name > b.name) {
                        return 1;
                    } else {
                        return -1;
                    }
                }));
            });
    }, []);
    return <main>
        <h1>Data</h1>
        <div className="container">
            {data.map((el, i) => <Link to={`/data/${el.name}`} className="card" key={i}>{el.name}</Link>)}
        </div>
    </main>
}