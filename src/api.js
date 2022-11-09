class Api {
    static getAll(path = "https://wwf-server.herokuapp.com/api/animals") {
        return fetch(path);
    }
    static getSingle(id, path = "https://wwf-server.herokuapp.com/api/animals") { // _id
        return fetch(path + "/" + id);
    }
    static add(body, path = "https://wwf-server.herokuapp.com/api/animals") {
        return fetch(path + "/add", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(body)
        })
    }
    static update(id, body, path = "https://wwf-server.herokuapp.com/api/animals") {
        return fetch(path + "/update/" + id, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(body)
        });
    }
}
export default Api;