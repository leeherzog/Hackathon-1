class petsRepository {
    constructor() {
        this.pets = [];
    }

    fetch(data) {
        return $.ajax({
          method: "GET",
          url:"/pets"
        }) 
        .then ((data)=>{
            console.log(data);
            this.pets = data;
        })
        .catch (function error (jqXHR, textStatus, errorThrown) {
            console.error(textStatus);
          });
        }

        addPet(color, age) {
            return $.ajax({
                method: "POST",
                url: "/pets",
                data: {color: color, age: age},
              })
              .then ((serverResult)=>{
                console.log(serverResult);
                this.posts.push(serverResult);
            })
            .catch (function error (jqXHR, textStatus, errorThrown) {
                console.error(textStatus);
              });
            }
 

}

export default petsRepository