class Artist{
    constructor(){
     this.index = null;
     
     this.name = null;
    }
    getCount(){
        var artistCountRef = database.ref('artistCount');
        artistCountRef.on("value" , function(data){
            artistCount = data.val();

        })
    }
    updateCount(count){
        database.ref('/').update({
            artistCount: count
        });

    }
    update(name){
        var artistIndex = "artists/artist " + this.index;
        database.ref(artistIndex).set({
            name: this.name ,
           
        });
    }
    static getArtistInfo(){
        var artistInfoRef = database.ref('artists');
        artistInfoRef.on("value" , (data) => {
            allArtists = data.val();
        })
    }
}