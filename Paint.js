class Paint{
    constructor(){

    }
    getState(){
        var drawStateRef = database.ref('drawState');
        drawStateRef.on("value" , function(data) {
            drawState = data.val();
        })
    }
    update(state){
        database.ref('/').update({
            drawState: state
        });
    }
    async start(){
        if(drawState === 0){
            stroke("WHITE");
            artist = new Artist();
            var artistCountRef = await database.ref('artistCount').once("value");
            if(artistCountRef.exists()){
                artistCount = artistCountRef.val();
                artist.getCount();
            }
            
            form = new Form();
            form.display();
        }
    }
    play(){
        form.hide();
        Artist.getArtistInfo();
    
}
}