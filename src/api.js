class Api {
    static PATH = "https://wwf-server.herokuapp.com/api/animals";
    static getAll() {
        return fetch(this.PATH).then(res => res.json()).then(data => data);
    }
    static getSingle(id) { // _id
        return fetch(this.PATH + "/" + id).then(res => res.json()).then(data => data);
    }
    static add(body) {
        return fetch(this.PATH + "/add", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(body)
        }).then(res => res.json()).then(data => data);
    }
    static update(id, body) {
        return fetch(this.PATH + "/update/" + id, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(body)
        }).then(res => res.json()).then(data => data);
    }
}