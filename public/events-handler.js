class EventsHandler {
    constructor(petsRepository, petsRenderer, favorites) {
        this.petsRepository = petsRepository;
        this.petsRenderer = petsRenderer;
        this.$pets = $(".pets");
        this.$addaptForm =$(".pet-form");
        this.favorites = favorites;
    }

    registerAddPet() {
        $('#addpet').on('click', () => {
            let obj = {name: $("#name").val(), gender: $("#gender").val(),breed: $("#breed").val(),color: $("#color").val(),size: $("#size").val(),age: $("#age").val(),mail: $("#mail").val(),img: $("#img").val(),addpet : "no"};
            this.petsRepository.addPet(obj).then(()=>{this.petsRenderer.renderPets(this.petsRepository.pets)});
            })
        }
       

        registerLikePet() {
            
            $('.pets').on('click',  '#like',() => {
                    console.log('like');
                
                var id = $(".pets").find(".show-pet").attr("data-id");
                this.favorites.addFavorite(id).then(()=>{this.favorites.renderFavorite(this.favorites.favorites)});
                this.petsRenderer.renderPets(this.petsRepository.pets);  
                })
            }
            registerUnlikePet() {
                

                $('.pets').on('click','#unlike', () => {
                    console.log('unlike');
                    //function do not show

                    //function show next
                    // this.petsRepository.counter++;
                    this.petsRenderer.renderPets(this.petsRepository.pets)  
                    
                    })
                } 
                
                registerAdopt() {
                    

                    $('.pets').on('click','#adopt', () => {
                        console.log('adopted');
                        //function send a mail to the person + tag as adopted
    
                        })
                    }

            // makes the form toggle
            registerToggleForm() {
<<<<<<< HEAD
               

=======
>>>>>>> 70866fa513af0c73e7ad3f63477da2dd5e114a23
                $('#addNewPet').on('click', (event) => {
                    $('.pet-form').toggleClass('show');
                  });
            }
            
}

export default EventsHandler