scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile1`, function (sprite, location) {
    Key = 2
    tiles.setTileAt(location, assets.tile`myTile7`)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile6`, function (sprite, location) {
    if (Key == 1) {
        Key = 0
        tiles.setTilemap(tilemap`level5`)
        effects.confetti.startScreenEffect(1500)
        tiles.placeOnRandomTile(mySprite, assets.tile`myTile2`)
    } else if (false) {
        if (Key == 2) {
            Key = 0
            tiles.setTilemap(tilemap`level1`)
            effects.confetti.startScreenEffect(1500)
            tiles.placeOnRandomTile(mySprite, assets.tile`myTile2`)
        }
    } else if (false) {
        if (Key == 3) {
            game.over(true)
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
let Key = 0
let mySprite: Sprite = null
scene.setBackgroundColor(6)
game.splash("IR2")
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
tiles.placeOnRandomTile(mySprite, assets.tile`myTile2`)
