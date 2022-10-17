/*----- constants -----*/
// declare function
// ASK TA how to add image on click. size and border
// add if else logics
const clickTile = function (tile) {
    console.log(tile.img, '😀')
    if (tile.id === 'a1') {
        // contain > contains the image within the size of the tile
        tile.style.backgroundImage = "url('./images/cat.png')"
        tile.style.backgroundSize = 'contain'
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

const removeBackgroundImg = function (tile) {
    tile.style.background = 'none'
}
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