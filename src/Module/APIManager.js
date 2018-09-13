const remoteURL = "http://localhost:5002"

export default Object.create(null, {
    getUser:{
        value: function (object){
            return fetch(`${remoteURL}/${object}`).then(e => e.json());
        }
    },
    get: {
        value: function (object, id) {
            return fetch(`${remoteURL}/${object}/${id}`).then(e => e.json())
        }
    },
    getAllData: {
        value: function (object) {
            return fetch(`${remoteURL}/${object}`).then(e => e.json())
        }
    },
    getAllOfId: {
        value: function (object, id) {
            return fetch(`${remoteURL}/${object}?userId=${id}`).then(e => e.json())
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
        value: (key,object) => {
            return fetch(`${remoteURL}/${key}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(object)
            })
                .then(response => response.json())
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