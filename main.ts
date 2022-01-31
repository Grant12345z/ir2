scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile1`, function (sprite, location) {
    Key = 2
    tiles.setTileAt(location, assets.tile`myTile7`)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile6`, function (sprite, location) {
    if (Key == 1) {
        tiles.setTilemap(tilemap`level5`)
        effects.confetti.startScreenEffect(1500)
        tiles.placeOnRandomTile(mySprite, assets.tile`myTile2`)
    } else {
        mySprite.sayText("I need a key", 3000, false)
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile9`, function (sprite, location) {
    if (Key == 2) {
        tiles.setTilemap(tilemap`level1`)
        effects.confetti.startScreenEffect(1500)
        tiles.placeOnRandomTile(mySprite, assets.tile`myTile2`)
    } else {
        mySprite.sayText("I need a key", 3000, false)
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`key`, function (sprite, location) {
    Key = 3
    tiles.setTileAt(location, assets.tile`myTile7`)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile5`, function (sprite, location) {
    Key = 1
    tiles.setTileAt(location, assets.tile`myTile7`)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile10`, function (sprite, location) {
    if (Key == 3) {
        tiles.setTilemap(tilemap`level13`)
        effects.confetti.startScreenEffect(1500)
        tiles.placeOnRandomTile(mySprite, assets.tile`myTile2`)
    } else {
        mySprite.sayText("I need a key", 3000, false)
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile11`, function (sprite, location) {
    game.over(true)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    if (SixerVar != 1 && SixerVar != 3) {
        otherSprite.destroy()
    } else {
        tiles.placeOnRandomTile(mySprite, assets.tile`myTile2`)
    }
})
let Key = 0
let SixerVar = 0
let mySprite: Sprite = null
scene.setBackgroundColor(6)
game.splash("press the spacebar or the ", "A button to continue")
game.splash("Ready player One", "Independent Reading Project Two")
game.splash("Collect the key hidden ", "in the maze ")
game.splash("Use the key to open the", " gate to the next level")
game.splash("There are four levels")
game.splash("In the fourth level ", "you only need to find the egg")
game.splash("Use the arrow keys or ", "W,A,S, and D to move")
game.splash("Game by ", "Grant Snow")
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . 2 2 2 2 . . . . . . 
    . . . . . 2 2 2 2 2 2 . . . . . 
    . . . . . 2 2 2 2 2 2 . . . . . 
    . . . . . 2 2 2 2 2 2 . . . . . 
    . . . . . 2 2 2 2 2 2 . . . . . 
    . . . . . . 2 2 2 2 . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
scene.cameraFollowSprite(mySprite)
tiles.setTilemap(tilemap`level4`)
SixerVar = 1
let list = [sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . 8 8 8 8 . . . . . . 
    . . . . . 8 8 1 1 8 8 . . . . . 
    . . . . . 8 8 1 8 8 8 . . . . . 
    . . . . . 8 8 1 1 8 8 . . . . . 
    . . . . . 8 8 1 1 8 8 . . . . . 
    . . . . . . 8 8 8 8 . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Enemy), sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . 8 8 8 8 . . . . . . 
    . . . . . 8 8 1 1 8 8 . . . . . 
    . . . . . 8 8 1 8 8 8 . . . . . 
    . . . . . 8 8 1 1 8 8 . . . . . 
    . . . . . 8 8 1 1 8 8 . . . . . 
    . . . . . . 8 8 8 8 . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Enemy)]
for (let value of list) {
	
}
game.onUpdate(function () {
    let Sixer: Sprite = null
    if (SixerVar == 1) {
        Sixer.y += 1
    } else {
        if (SixerVar == 3) {
            Sixer.y += -1
        }
    }
})
game.onUpdateInterval(1000, function () {
    SixerVar += 1
    if (SixerVar == 4) {
        SixerVar = 0
    }
})
