/*----- constants -----*/
const flipMatchedTile = function (tile) {
    tile.style.background = 'none'
}

const flipUnmatchedTile = function (tile) {
    tile.style.backgroundImage = 'none'
}

let choiceArray = []

// handle matched and unmatched
const handleMatchedPair = function (tile1, tile2){
    tile1.classList.remove('tile')
    tile1.classList.add('matched-tile')
    setTimeout(flipMatchedTile, 1000, tile1)
    tile1.removeEventListener('click', onTileClick)

    tile2.classList.remove('tile')
    tile2.classList.add('matched-tile')
    setTimeout(flipMatchedTile, 1000, tile2)
    tile2.removeEventListener('click', onTileClick)
    
    // ! need to review. why is motherTiles.forEach not a function?
    // let tilesLeft = false;
    // motherTiles.forEach((childTile) => {
    //     if (childTile.classList.contains('tile')){
    //         tilesLeft = true
    //     } 
    // })
    // if (tilesLeft = false){
    //     message.textContent = 'You Win!'
    // }
   
}

const handleUnmatchedPair = function (tile1, tile2){
    setTimeout(flipUnmatchedTile, 1000, tile1)
    setTimeout(flipUnmatchedTile, 1000, tile2)
}

//* check for match. returns true or false
const checkIfTileValuesMatch = function (tile1, tile2) {
    if (tile1.style.backgroundImage === tile2.style.backgroundImage) {
        console.log('tiles match')
      handleMatchedPair(tile1, tile2)
    } else {
        console.log("tiles don't match")
      handleUnmatchedPair(tile1, tile2)
    }
}

//* what to do after checking
const clickTile = function (tile) {
    if (tile.id === 'a1') {
        tile.style.backgroundImage = "url('./images/cat.png')"
        tile.style.backgroundSize = 'contain'
    } else if(tile.id === 'a2') {
        tile.style.backgroundImage = "url('./images/shiba.png')"
        tile.style.backgroundSize = 'contain'
    } else if(tile.id === 'a3') {
        tile.style.backgroundImage = "url('./images/frog.png')"
        tile.style.backgroundSize = 'contain'
    } else if(tile.id === 'a4') {
        tile.style.backgroundImage = "url('./images/corgi.png')"
        tile.style.backgroundSize = 'contain'
    } else if(tile.id === 'a5') {
        tile.style.backgroundImage = "url('./images/turtle.png')"
        tile.style.backgroundSize = 'contain'
    } else if(tile.id === 'a6') {
        tile.style.backgroundImage = "url('./images/shiba.png')"
        tile.style.backgroundSize = 'contain'
    } else if(tile.id === 'b1') {
        tile.style.backgroundImage = "url('./images/trex.png')"
        tile.style.backgroundSize = 'contain'
    } else if(tile.id === 'b2') {
        tile.style.backgroundImage = "url('./images/hamster.png')"
        tile.style.backgroundSize = 'contain'
    } else if(tile.id === 'b3') {
        tile.style.backgroundImage = "url('./images/turtle.png')"
        tile.style.backgroundSize = 'contain'
    } else if(tile.id === 'b4') {
        tile.style.backgroundImage = "url('./images/hamster.png')"
        tile.style.backgroundSize = 'contain'
    } else if(tile.id === 'b5') {
        tile.style.backgroundImage = "url('./images/trex.png')"
        tile.style.backgroundSize = 'contain'
    } else if(tile.id === 'b6') {
        tile.style.backgroundImage = "url('./images/greycat.png')"
        tile.style.backgroundSize = 'contain'
    } else if(tile.id === 'c1') {
        tile.style.backgroundImage = "url('./images/koala.png')"
        tile.style.backgroundSize = 'contain'
    } else if(tile.id === 'c2') {
        tile.style.backgroundImage = "url('./images/frog.png')"
        tile.style.backgroundSize = 'contain'
    } else if(tile.id === 'c3') {
        tile.style.backgroundImage = "url('./images/corgi.png')"
        tile.style.backgroundSize = 'contain'
    } else if(tile.id === 'c4') {
        tile.style.backgroundImage = "url('./images/greycat.png')"
        tile.style.backgroundSize = 'contain'
    } else if(tile.id === 'c5') {
        tile.style.backgroundImage = "url('./images/cat.png')"
        tile.style.backgroundSize = 'contain'
    } else if(tile.id === 'c6') {
        tile.style.backgroundImage = "url('./images/koala.png')"
        tile.style.backgroundSize = 'contain'
    }
    choiceArray.push(tile)
    console.log(choiceArray)
    if (choiceArray.length === 2){
        checkIfTileValuesMatch(choiceArray[0], choiceArray[1])
        choiceArray = []
    }

}

// execute function on targeted tile
const onTileClick = function (event) {
    clickTile(event.target)
}
// link to HTML
const tiles = document.querySelectorAll('.tile')
// add event listeners
tiles.forEach(function (tile) {
    tile.addEventListener('click', onTileClick)
})
const motherTiles = document.querySelector('.tiles')
const message = document.querySelector('.message')
/*----- app's state (variables) -----*/


/*----- cached element references -----*/

/*----- event listeners -----*/


/*----- functions -----*/


// reset button---------------------------------------
const reset = document.querySelector('.reset-button')
const onResetClicked = function (event) {
    location.reload()
}
reset.addEventListener('click', onResetClicked)