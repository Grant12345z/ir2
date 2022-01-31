scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile1`, function (sprite, location) {
    Key = 2
    tiles.setTileAt(location, assets.tile`myTile7`)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile6`, function (sprite, location) {
    if (Key == 1) {
        tiles.setTilemap(tilemap`level5`)
        effects.confetti.startScreenEffect(1500)
        tiles.placeOnRandomTile(mySprite, assets.tile`myTile2`)
        list = [sprites.create(img`
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
        Spots1 = [[2, 16], [31, 12]]
        for (let index = 0; index <= list.length - 1; index++) {
            tiles.placeOnTile(list[index], tiles.getTileLocation(Spots1[index][0], Spots1[index][1]))
        }
    } else {
        mySprite.sayText("I need a key", 3000, false)
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile9`, function (sprite, location) {
    if (Key == 2) {
        tiles.setTilemap(tilemap`level1`)
        effects.confetti.startScreenEffect(1500)
        tiles.placeOnRandomTile(mySprite, assets.tile`myTile2`)
        list = [sprites.create(img`
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
        Spots1 = [[23, 25], [2, 15], [41, 33]]
        for (let index = 0; index <= list.length - 1; index++) {
            tiles.placeOnTile(list[index], tiles.getTileLocation(Spots1[index][0], Spots1[index][1]))
        }
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
        list = [
        sprites.create(img`
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
            `, SpriteKind.Enemy),
        sprites.create(img`
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
            `, SpriteKind.Enemy),
        sprites.create(img`
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
            `, SpriteKind.Enemy),
        sprites.create(img`
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
            `, SpriteKind.Enemy)
        ]
        Spots1 = [
        [10, 8],
        [29, 6],
        [52, 30],
        [39, 41]
        ]
        for (let index = 0; index <= list.length - 1; index++) {
            tiles.placeOnTile(list[index], tiles.getTileLocation(Spots1[index][0], Spots1[index][1]))
        }
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
let Spots1: number[][] = []
let list: Sprite[] = []
let mySprite: Sprite = null
let SixerVar = 0
scene.setBackgroundColor(6)
game.splash("press the spacebar or the ", "A button to continue")
game.splash("Ready player One", "Independent Reading Project Two")
game.splash("Collect the key hidden ", "in the maze ")
game.splash("Use the key to open the", " gate to the next level")
game.splash("There are four levels")
game.splash("In the fourth level ", "you only need to find the egg")
game.splash("Use the arrow keys or ", "W,A,S, and D to move")
game.splash("Game by ", "Grant Snow")
tiles.setTilemap(tilemap`level4`)
SixerVar = 1
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
tiles.placeOnRandomTile(mySprite, assets.tile`myTile2`)
list = [sprites.create(img`
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
Spots1 = [[1, 8]]
for (let index = 0; index <= list.length - 1; index++) {
    tiles.placeOnTile(list[index], tiles.getTileLocation(Spots1[index][0], Spots1[index][1]))
}
game.onUpdate(function () {
    if (SixerVar == 1) {
        for (let value2 of list) {
            value2.y += 1
        }
    } else {
        if (SixerVar == 3) {
            for (let value3 of list) {
                value3.y += -1
            }
        }
    }
})
game.onUpdateInterval(1000, function () {
    SixerVar += 1
    if (SixerVar == 4) {
        SixerVar = 0
    }
})
