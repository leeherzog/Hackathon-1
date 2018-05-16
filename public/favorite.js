class Favorites {
    constructor() {
        this.favArray = [];
        this.$favTemplate = $('#favorites-template').html();
        this.$fav = $(".favorites");
    }

    addFavorite(id) {
        return $.ajax({
          method: "GET",
          url:"/likes/"+id
        }) 
        .then((pet)=>{
            console.log("whats going on");
            console.log(pet);
            this.favArray.push(pet);
            console.log(this.favorites);
        })
        .catch (function error (jqXHR, textStatus, errorThrown) {
            console.error(textStatus);
          });
        }
        
    renderFavorite(){
        this.$fav.empty();
        var template = Handlebars.compile(this.$favTemplate);
        for (var i =0; i < this.favArray.length; i++){
          var newHTML = template(this.favArray[i]);
          this.$fav.append(newHTML);
        }
    }
    }

export default Favorites