class EventsHandler {
    constructor(petsRepository, petsRenderer) {
        this.petsRepository = petsRepository;
        this.petsRenderer = petsRenderer;
        this.$pets = $(".pets");
        this.$addaptForm =$(".pet-form")
    }

    registerAddPet() {
        $('#addpet').on('click', () => {
            

            let obj = {name: $("#name").val(), gender: $("#gender").val(),breed: $("#breed").val(),color: $("#color").val(),size: $("#size").val(),age: $("#age").val(),mail: $("#mail").val(),img: $("#img").val(),addpet : "no"};
            // xxxx add validation that form is filled!
            // if ($input.val() === "") {
            //     alert("Please enter text!"); 
            // } else {
                this.petsRepository.addPet(obj).then(()=>{this.petsRenderer.renderPets(this.petsRepository.pets)});
            })
        }
       

        registerLikePet() {
            
            $('.pets').on('click',  '#like',() => {
                    console.log('like');
                //function add to favorit

                //function show next
                this.petsRenderer.renderPets(this.petsRepository.pets[this.petsRepository.counter])  
                this.petsRepository.counter++;
                })
            }
            registerUnlikePet() {
                

                $('.pets').on('click','#unlike', () => {
                    console.log('unlike');
                    //function do not show

                    //function show next
                    this.petsRenderer.renderPets(this.petsRepository.pets[this.petsRepository.counter])  
                    this.petsRepository.counter++;
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
                alert('working')

                $('#addNewPet').on('click', (event) => {
                    $('.pet-form').toggleClass('show');
                  });
            }
            
}

export default EventsHandler