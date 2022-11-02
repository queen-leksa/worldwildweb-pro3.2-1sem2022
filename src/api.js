class Api {
    static async getAll(path = "https://wwf-server.herokuapp.com/api/animals") {
        return fetch(path).then(res => res.json()).then(data => data);
    }
    static async getSingle(id, path = "https://wwf-server.herokuapp.com/api/animals") { // _id
        return fetch(path + "/" + id).then(res => res.json()).then(data => data);
    }
    static async add(body, path = "https://wwf-server.herokuapp.com/api/animals") {
        return fetch(path + "/add", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(body)
        }).then(res => res.json()).then(data => data);
    }
    static async update(id, body, path = "https://wwf-server.herokuapp.com/api/animals") {
        return fetch(path + "/update/" + id, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(body)
        }).then(res => res.json()).then(data => data);
    }
}
export default Api;