import api from './api.js';

/**
* @class Responsible for storing and manipulating Spacebook pets, in-memory
*/

class petsRepository {
    constructor(api) {
        this.pets = [];
        this.api = api;
    }

    // async dataInit() {
    //     try {
    //     this.pets = await api.fetch()
    //     }
    //     catch (e) {
    //         console.log('there was an error');
    //         console.log(e);
    //     }
    // }

    //my code
    dataInit(){
       return  api.fetch().then((data)=>{
            this.pets = data;
         });
    }

    // addpet(petText) {
    //     return  $.ajax({
    //         method: "pet",
    //         url: '/pets',
    //         data: newpetText
    //     }).then(()=>{
    //         this.pets.push({ text: petText, comments: []})
    //     });  
    // }

    async addPet(petText) {
        try {
            var newPetText = { text: petText };
            let result = await $.ajax({
                method: "post",
                url: '/pets',
                data: newPetText
            });
            this.dataInit();
            this.pets.push(result);
        }
        catch (e) {
            console.log('there was an error');
            console.log(e);
        }
    }

    async removePet(id) {
        console.log(id)
            return $.ajax({
                method: "DELETE",
                url: '/pets/' + id ,
            })
             this.dataInit();
        
       
    }

 

}

export default petsRepository