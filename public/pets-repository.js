class petsRepository {
    constructor() {
        this.pets = [];
    }

    fetch() {
        return $.ajax({
          method: "GET",
          url:"/pet"
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
                this.pets.push(pets);
            })
            .catch (function error (jqXHR, textStatus, errorThrown) {
                console.error(textStatus);
              });
            }


}

export default petsRepository