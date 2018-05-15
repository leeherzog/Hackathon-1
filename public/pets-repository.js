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

        addPet(obj) {
            return $.ajax({
                method: "POST",
                url: "/pets",
                data: obj,
              })
              .then ((pets)=>{
                console.log(pets);
                this.posts.push(pets);
            })
            .catch (function error (jqXHR, textStatus, errorThrown) {
                console.error(textStatus);
              });
            }
 

}

export default petsRepository