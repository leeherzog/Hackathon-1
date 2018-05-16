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
        //for (var i = 0; i < pets.length; i++) {
          var newHTML = template(pets);
         // console.log(newHTML);
          this.$pets.append(newHTML);
         // this.renderComments(pets, i);
        //}
    }
}

export default PetsRenderer