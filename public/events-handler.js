class EventsHandler {
    constructor(petsRepository, petsRenderer) {
        this.petsRepository = petsRepository;
        this.petsRenderer = petsRenderer;
        this.$pets = $(".pets");
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
            // });        
    // }

//    async registerRemovePet() {
//         this.$pets.on('click', '.remove-pet', (event) => {
//             let index = $(event.currentTarget).closest('.pet').index();;
//             // i chenged the argument that wil sent for femove to be an id instad of index
//             let id = $(event.currentTarget).closest('.pet').attr("data-id");
//             console.log(id);
//             this.petsRepetsitory.removePet(id).then(()=>{this.petsRenderer.renderPets(this.petsRepository.pets)});
//             // this.petsRenderer.renderPets(this.petsRepository.pets);
//           });

//     }

//     // registerToggleComments() {
//     //     this.$pets.on('click', '.toggle-comments', (event) => {
//     //         let $clickedPet = $(event.currentTarget).closest('.pet');
//     //         $clickedPet.find('.comments-container').toggleClass('show');
//     //       });
//     // }

//     // registerAddComment() {
//     //     this.$pets.on('click', '.add-comment', (event) => {
//     //         let $comment = $(event.currentTarget).siblings('.comment');
//     //         let $user = $(event.currentTarget).siblings('.name');
          
//     //         if ($comment.val() === "" || $user.val() === "") {
//     //           alert("Please enter your name and a comment!");
//     //           return;
//     //         }
//     //         let petId = $(event.currentTarget).closest('.pet').attr("data-id");
//     //         //let petIndex = $(event.currentTarget).closest('.pet').index();
//     //         let newComment = { text: $comment.val(), user: $user.val() };
          
//     //         this.petsRepository.addComment(newComment, petId).then(()=>{this.petsRenderer.renderpets(this.petsRepository.pets)});;
//     //       //  this.petsRenderer.renderComments(this.petsRepository.pets, petId);
//     //         $comment.val("");
//     //         $user.val("");
//     //       });

//     // }

//     // registerRemoveComment() {
//     //     this.$pets.on('click', '.remove-comment', (event) => {
//     //         let $commentsList = $(event.currentTarget).closest('.pet').find('.comments-list');
//     //         let petIndex = $(event.currentTarget).closest('.pet').index();
//     //         let commentIndex = $(event.currentTarget).closest('.comment').index();
//     //         this.petsRepository.deleteComment(petIndex, commentIndex);
//     //         this.petsRenderer.renderComments(this.petsRepository.pets, petIndex);
//     //     });
//     // }
}

export default EventsHandler