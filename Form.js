class Form{
    constructor(){
        this.input = createInput("Name");
        this.button = createButton("Let's Draw" );
        this.greeting = createElement('h3');
   }
   hide(){
       this.greeting.hide();
       this.button.hide();
       this.input.hide();
   }
   display(){
       var title = createElement('h1' );

       title.html("PAINT APP");
       fill("BLUE");
       title.position(200 , 10);

      
       this.input.position(150,160);
       this.button.position(280,160);

       this.button.mousePressed(()=>{
           this.input.hide();
           this.button.hide();
            artist.name = this.input.value();
           artistCount+= 1;
           artist.index = artistCount;
           artist.update();
           artist.updateCount(artistCount);
           this.greeting.html("Hello " +  artist.name);
           this.greeting.position(50,10);
        var title2 = createElement('h4');
        title2.html("PRESS RIGHT/LEFT ARROW TO CHANGE STROKEWEIGHT && UP/DOWN ARROW TO CHANGE BACKGROUND");
        title2.position(430,20);
       });
   }

}