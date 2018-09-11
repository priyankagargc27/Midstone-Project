const remoteURL = "http://localhost:5002"

export default Object.create(null, {
    get: {
        value: function (object, id) {
            return fetch(`${remoteURL}/${object}/${id}`).then(e => e.json())
        }
    },
    getAll: {
        value: function (object) {
            return fetch(`${remoteURL}/${object}`).then(e => e.json())
        }
    },
    getAllOfId: {
        value: function (object, id) {
            return fetch(`${remoteURL}/${object}?userId=${id}`).then(e => e.json())
        }
    },
    getUser:{
        value: function (object){
            return fetch(`${remoteURL}/${object}`).then(e => e.json());
        }
    },
    delete: {
        value: (object, id) => {
            return fetch(`${remoteURL}/${object}/${id}`, {
            method: "DELETE"
        })
        .then(()=>{return fetch(`${remoteURL}/${object}`).then(e => e.json()) })
        }
    },
    post: {
        value: function (object, newElement) {
            return fetch(`${remoteURL}/${object}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(newElement)
            }).then(e => e.json())
        }
    },
    edit: {
        value: function (object, id, editElement) {
            return fetch(`${remoteURL}/${object}/${id}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(editElement)
            }).then(e => e.json())
        }
    }
})