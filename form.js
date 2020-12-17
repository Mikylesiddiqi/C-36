class Form {
    constructor(){}
    display(){
        var title=createElement('h2')
        title.html('car racing game')
        title.position(400,3)
        var input=createInput('Name')
        input.position(400,160)
        var button=createButton('play')
        button.position(500,200)
        var greeting=createElement('h3')
        button.mousePressed(function(){
            input.hide()
            button.hide()
            var name=input.value()
            playerCount=playerCount+1
            player.update(name)
            player.updateCount(playerCount)
            greeting.html('welcome'+ name)
            greeting.position(400,160)
        })
    }
}