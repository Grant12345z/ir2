scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile1`, function (sprite, location) {
    info.changeScoreBy(1000)
    Key = 2
    tiles.setTileAt(location, assets.tile`myTile7`)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile6`, function (sprite, location) {
    if (Key == 1) {
        tiles.setTilemap(tilemap`level5`)
        info.changeScoreBy(500)
        effects.confetti.startScreenEffect(1500)
        tiles.placeOnRandomTile(mySprite, assets.tile`myTile2`)
        list = [sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . 8 8 8 8 8 8 . . . . . 
            . . . . 8 8 1 1 1 1 8 8 . . . . 
            . . . . 8 8 1 8 8 8 8 8 . . . . 
            . . . . 8 8 1 1 1 1 8 8 . . . . 
            . . . . 8 8 1 8 8 1 8 8 . . . . 
            . . . . 8 8 1 8 8 1 8 8 . . . . 
            . . . . 8 8 1 1 1 1 8 8 . . . . 
            . . . . . 8 8 8 8 8 8 . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Enemy), sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . 8 8 8 8 8 8 . . . . . 
            . . . . 8 8 1 1 1 1 8 8 . . . . 
            . . . . 8 8 1 8 8 8 8 8 . . . . 
            . . . . 8 8 1 1 1 1 8 8 . . . . 
            . . . . 8 8 1 8 8 1 8 8 . . . . 
            . . . . 8 8 1 8 8 1 8 8 . . . . 
            . . . . 8 8 1 1 1 1 8 8 . . . . 
            . . . . . 8 8 8 8 8 8 . . . . . 
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
        info.changeScoreBy(500)
        effects.confetti.startScreenEffect(1500)
        tiles.placeOnRandomTile(mySprite, assets.tile`myTile2`)
        list = [sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . 8 8 8 8 8 8 . . . . . 
            . . . . 8 8 1 1 1 1 8 8 . . . . 
            . . . . 8 8 1 8 8 8 8 8 . . . . 
            . . . . 8 8 1 1 1 1 8 8 . . . . 
            . . . . 8 8 1 8 8 1 8 8 . . . . 
            . . . . 8 8 1 8 8 1 8 8 . . . . 
            . . . . 8 8 1 1 1 1 8 8 . . . . 
            . . . . . 8 8 8 8 8 8 . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Enemy), sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . 8 8 8 8 8 8 . . . . . 
            . . . . 8 8 1 1 1 1 8 8 . . . . 
            . . . . 8 8 1 8 8 8 8 8 . . . . 
            . . . . 8 8 1 1 1 1 8 8 . . . . 
            . . . . 8 8 1 8 8 1 8 8 . . . . 
            . . . . 8 8 1 8 8 1 8 8 . . . . 
            . . . . 8 8 1 1 1 1 8 8 . . . . 
            . . . . . 8 8 8 8 8 8 . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Enemy), sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . 8 8 8 8 8 8 . . . . . 
            . . . . 8 8 1 1 1 1 8 8 . . . . 
            . . . . 8 8 1 8 8 8 8 8 . . . . 
            . . . . 8 8 1 1 1 1 8 8 . . . . 
            . . . . 8 8 1 8 8 1 8 8 . . . . 
            . . . . 8 8 1 8 8 1 8 8 . . . . 
            . . . . 8 8 1 1 1 1 8 8 . . . . 
            . . . . . 8 8 8 8 8 8 . . . . . 
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
    info.changeScoreBy(1000)
    Key = 3
    tiles.setTileAt(location, assets.tile`myTile7`)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile5`, function (sprite, location) {
    info.changeScoreBy(1000)
    Key = 1
    tiles.setTileAt(location, assets.tile`myTile7`)
})
info.onLifeZero(function () {
    tiles.placeOnRandomTile(mySprite, assets.tile`myTile2`)
    info.setLife(2)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile10`, function (sprite, location) {
    if (Key == 3) {
        tiles.setTilemap(tilemap`level13`)
        info.changeScoreBy(500)
        effects.confetti.startScreenEffect(1500)
        tiles.placeOnRandomTile(mySprite, assets.tile`myTile2`)
        list = [
        sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . 8 8 8 8 8 8 . . . . . 
            . . . . 8 8 1 1 1 1 8 8 . . . . 
            . . . . 8 8 1 8 8 8 8 8 . . . . 
            . . . . 8 8 1 1 1 1 8 8 . . . . 
            . . . . 8 8 1 8 8 1 8 8 . . . . 
            . . . . 8 8 1 8 8 1 8 8 . . . . 
            . . . . 8 8 1 1 1 1 8 8 . . . . 
            . . . . . 8 8 8 8 8 8 . . . . . 
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
            . . . . . 8 8 8 8 8 8 . . . . . 
            . . . . 8 8 1 1 1 1 8 8 . . . . 
            . . . . 8 8 1 8 8 8 8 8 . . . . 
            . . . . 8 8 1 1 1 1 8 8 . . . . 
            . . . . 8 8 1 8 8 1 8 8 . . . . 
            . . . . 8 8 1 8 8 1 8 8 . . . . 
            . . . . 8 8 1 1 1 1 8 8 . . . . 
            . . . . . 8 8 8 8 8 8 . . . . . 
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
            . . . . . 8 8 8 8 8 8 . . . . . 
            . . . . 8 8 1 1 1 1 8 8 . . . . 
            . . . . 8 8 1 8 8 8 8 8 . . . . 
            . . . . 8 8 1 1 1 1 8 8 . . . . 
            . . . . 8 8 1 8 8 1 8 8 . . . . 
            . . . . 8 8 1 8 8 1 8 8 . . . . 
            . . . . 8 8 1 1 1 1 8 8 . . . . 
            . . . . . 8 8 8 8 8 8 . . . . . 
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
            . . . . . 8 8 8 8 8 8 . . . . . 
            . . . . 8 8 1 1 1 1 8 8 . . . . 
            . . . . 8 8 1 8 8 8 8 8 . . . . 
            . . . . 8 8 1 1 1 1 8 8 . . . . 
            . . . . 8 8 1 8 8 1 8 8 . . . . 
            . . . . 8 8 1 8 8 1 8 8 . . . . 
            . . . . 8 8 1 1 1 1 8 8 . . . . 
            . . . . . 8 8 8 8 8 8 . . . . . 
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
        info.changeScoreBy(100)
        otherSprite.destroy()
    } else {
        info.changeLifeBy(-1)
        info.changeScoreBy(-200)
        otherSprite.destroy()
    }
})
let Key = 0
let Spots1: number[][] = []
let list: Sprite[] = []
let mySprite: Sprite = null
let SixerVar = 0
tiles.setTilemap(tilemap`level29`)
game.splash("press the spacebar or the ", "A button to continue")
game.splash("Ready player One", "Independent Reading Project Two")
game.splash("Collect the key hidden ", "in the maze ")
game.splash("Use the key to open the", " gate to the next level")
let value2 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . 8 8 8 8 8 8 . . . . . 
    . . . . 8 8 1 1 1 1 8 8 . . . . 
    . . . . 8 8 1 8 8 8 8 8 . . . . 
    . . . . 8 8 1 1 1 1 8 8 . . . . 
    . . . . 8 8 1 8 8 1 8 8 . . . . 
    . . . . 8 8 1 8 8 1 8 8 . . . . 
    . . . . 8 8 1 1 1 1 8 8 . . . . 
    . . . . . 8 8 8 8 8 8 . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Enemy)
tiles.placeOnTile(value2, tiles.getTileLocation(4, 5))
value2.x += 10
game.splash("Avoid Sixers")
game.splash("Deafest a Sixers by touching", "them when they are not moving")
value2.destroy()
game.splash("There are four levels")
game.splash("In the fourth level ", "you only need to find the egg")
game.splash("Use the arrow keys or ", "W,A,S, and D to move")
game.splash("Game by ", "Grant Snow")
info.setLife(2)
info.setScore(0)
tiles.setTilemap(tilemap`level4`)
SixerVar = 1
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . 2 2 2 2 2 2 . . . . . 
    . . . . 2 2 2 2 2 2 2 2 . . . . 
    . . . . 2 2 2 2 2 2 2 2 . . . . 
    . . . . 2 2 2 2 2 2 2 2 . . . . 
    . . . . 2 2 2 2 2 2 2 2 . . . . 
    . . . . 2 2 2 2 2 2 2 2 . . . . 
    . . . . 2 2 2 2 2 2 2 2 . . . . 
    . . . . . 2 2 2 2 2 2 . . . . . 
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
    . . . . . 8 8 8 8 8 8 . . . . . 
    . . . . 8 8 1 1 1 1 8 8 . . . . 
    . . . . 8 8 1 8 8 8 8 8 . . . . 
    . . . . 8 8 1 1 1 1 8 8 . . . . 
    . . . . 8 8 1 8 8 1 8 8 . . . . 
    . . . . 8 8 1 8 8 1 8 8 . . . . 
    . . . . 8 8 1 1 1 1 8 8 . . . . 
    . . . . . 8 8 8 8 8 8 . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Enemy)]
Spots1 = [[1, 8]]
for (let index = 0; index <= list.length - 1; index++) {
    tiles.placeOnTile(list[index], tiles.getTileLocation(Spots1[index][0], Spots1[index][1]))
}
value2.destroy()
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
