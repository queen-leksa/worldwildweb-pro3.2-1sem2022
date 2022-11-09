import React from "react";
import {useNavigate} from "react-router-dom";
import "./style.css";

export default ({data}) => {
    const st = {
        backgroundImage: data.image ? `url(${data.image})` : "url(https://upload.wikimedia.org/wikipedia/ru/2/24/WWF_logo.svg)",
        backgroundSize: data.image ? "cover" : "contain"
    }
    const navigate = useNavigate();

    const showPage = id => {
        navigate(`/data/${id}`);
    }
    return <div className="card" style={st} onClick={() => {showPage(data._id)}}>
        {data.type}
    </div>
}