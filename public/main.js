import PetsRepository from './pets-repository.js';
import PetsRenderer from './pets-renderer.js';
import EventsHandler from './events-handler.js'; 



let petsRepository = new PetsRepository();
let petsRenderer = new PetsRenderer();
let eventsHandler = new EventsHandler(petsRepository, petsRenderer);

petsRepository.fetch().then(()=>{
    console.log('finished with the get and inside the main 1')
    petsRenderer.renderPets(petsRepository.pets)
})

// petsRenderer.renderPets(petsRepository.pets)

eventsHandler.registerAddPet();
// eventsHandler.registerRemovePet();
eventsHandler.registerLikePet();
eventsHandler.registerUnlikePet();
eventsHandler.registerToggleForm();

$('.pet-form').on('click', function(e) {e.preventDefault(); return true;});


