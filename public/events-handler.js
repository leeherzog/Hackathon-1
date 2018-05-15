class EventsHandler {
    constructor(petsRepository, petsRenderer) {
        this.petsRepository = petsRepository;
        this.petsRenderer = petsRenderer;
        this.$pets = $(".pets");
    }

    registerAddPet() {
        $('#addpet').on('click', () => {
            let obj = {name: $("#name").val(), gender: $("#gender").val()};
            // xxxx add validation that form is filled!
            // if ($input.val() === "") {
            //     alert("Please enter text!"); 
            // } else {
                this.petsRepository.addPet(obj).then(()=>{this.petsRenderer.renderPets(this.petsRepository.pets)});
            })
        }
            // });        
    // }

}

export default EventsHandler