class Form{
    constructor(){
    }
    display(){
        var title=createElement('h2')
        title.html("multiplayer car racing game")
        title.position(130,0)
        var input=createInput("name")
        var button =createButton("play")
        input.position(130,160)
        button.position(250,200)
        var greeting=createElement('h3')
       button.mousePressed(function(){
           input.hide()
           button.hide()
           var name=input.value()
           playerCount=playerCount+1
           greeting.html("hello"+name)
           greeting.position(130,160)
           player.update(name)
           player.updateCount(playerCount)
       })
    }
}