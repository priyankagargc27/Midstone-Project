const remoteURL = "https://priyanka-frontend-server.herokuapp.com"

export default Object.create(null, {
    getUser:{
        value: function (object){
            return fetch(`${remoteURL}/${object}`).then(e => e.json());
        }
    },
    
    getOneRecipe: {
        value: function (recipeId) {
            return fetch(`https://priyanka-frontend-server.herokuapp.com/recipes/${recipeId}`).then(e => e.json())
        }
    },
    getAllData: {
        value: function (object) {
            console.log(`${remoteURL}/${object}`)
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
    },

    postrating:{
    value: function (id, body)  {
        console.log(body)
      return fetch(`https://priyanka-frontend-server.herokuapp.com/recipes/${id}`, {
          method: "PATCH",
          headers: {
              "Content-Type": "application/json"
          },
          body: JSON.stringify(body)
      });
  }
},
reviewRecipe:{
    value: function( id, body){
    return fetch(`https://priyanka-frontend-server.herokuapp.com/recipes/${id}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(body)
    });
}
},
getAllFav: {
    value: function (object) {
        return fetch(`${remoteURL}/${object}`).then(e => e.json())
    }
}
})