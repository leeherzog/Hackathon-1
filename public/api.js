
class Api {
    constructor (){
    }
    fetch () {
      return   $.ajax({
            method: "GET",
            url: "/pet"});
    };
}

const api = new Api() ; 
export default  api  ;