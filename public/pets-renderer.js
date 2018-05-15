    /**
     * @class Responsible for rendering pets and comments in the HTML
     */
class PetsRenderer {
    constructor() {
        this.$pets = $(".pets");
        this.$petTemplate = $('#pet-template').html();
       // this.$commentTemplate = $('#comment-template').html();
    }
    renderPets(pets) {
        console.log('inside of the renderpets func 2')
        this.$pets.empty();
        var template = Handlebars.compile(this.$petTemplate);
        
        for (var i = 0; i < pets.length; i++) {
            console.log('before')
            console.log(typeof pets[i])
          var newHTML = template(pets[i]);

         
         // console.log(newHTML);
          this.$pets.append(newHTML);
          console.log('after')
         // this.renderComments(pets, i);
        }
    }
//delete it
    // renderComments(pets, petIndex) {
    //     let pet = $(".pet")[petIndex];
    //     let $commentsList = $(pet).find('.comments-list');
    //     $commentsList.empty();
    //     let template = Handlebars.compile(this.$commentTemplate);
    //     for (let i = 0; i < pets[petIndex].comments.length; i++) {
    //       let newHTML = template(pets[petIndex].comments[i]);
    //       $commentsList.append(newHTML);
    //     }
    // }
}

export default PetsRenderer