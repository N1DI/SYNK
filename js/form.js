class Form {
    constructor(){

    }
    display(){
        var title =createElement("h2");
        title.html("Car Racing Game")
        title.position(100,0);
        var input = createInput("name") ;
        input.position(100,160);
        var button = createButton("playyy");
        button.position(200,200);
        button.mousePressed(function(){
            input.hide();
            button.hide();
            var name = input.value();
          playerCount = playerCount+1 ; 
          player.update(name);
          player.updateCount(playerCount);
          var greating = createElement("h3");
          greating.html("HELLO"+name);
          greating.position(100,160);
          
        });
    }

    }