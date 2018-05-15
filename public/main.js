import PetsRepository from './pets-repository.js';
import PetsRenderer from './pets-renderer.js';
import EventsHandler from './events-handler.js'; 
import api from './api.js'; 



let petsRepository = new PetsRepository(api);
let petsRenderer = new PetsRenderer();
let eventsHandler = new EventsHandler(petsRepository, petsRenderer);


//postsRepository.initData().then(()=>{postsRenderer.renderPosts(postsRepository.posts)})

petsRepository.dataInit().then(()=>{petsRenderer.renderPets(petsRepository.pets)})

eventsHandler.registerAddPet();
eventsHandler.registerRemovePet();
//eventsHandler.registerToggleComments();
//eventsHandler.registerAddComment();
//eventsHandler.registerRemoveComment();
