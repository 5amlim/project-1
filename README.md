# `Memory Game`

## Background:

### Game choice: Memory Game

There are many variations of memory game on the web. For my first project, I wanted to make this game aesthetically pleasing to make it a little more interesting. Inspired by pixel art.

`Wireframe` <br>
<img src="https://i.imgur.com/SwasZxI.png" width="900">

`Pseudocode`

```JS
// assign tile pictures class
    <div class='tile'></div>

// target clicked tile
const onTileClick = function (event) {
    clickTile(event.target)
}

// matched and unmatched tiles
    matched tile
        - needs JS codes(remove background)
    unmatched tile
        - needs JS codes(flip back - remove background image)
// handle matched and unmatched pairs
    // handleMatchedPair
        // set timeout to remove the matched pair
        // remove event listener for that tile
const handleMatchedPair = function (tile1, tile2){
    tile1.classList.remove('tile')
    tile1.classList.add('matched-tile')
    setTimeout(flipMatchedTile, 1000, tile1)
    tile1.removeEventListener('click', onTileClick)

    tile2.classList.remove('tile')
    tile2.classList.add('matched-tile')
    setTimeout(flipMatchedTile, 1000, tile2)
    tile2.removeEventListener('click', onTileClick)
}
    // handleUnmatchedPair
        // set timeout to execute flipUnmatchedTile on both tiles
const handleUnmatchedPair = function (tile1, tile2){
    setTimeout(flipUnmatchedTile, 2000, tile1)
    setTimeout(flipUnmatchedTile, 2000, tile2)
}

// check if tile values match
    // checkIfTileValuesMatch: returns true or false
const checkIfTileValuesMatch = function (tile1, tile2) {
  if (tile1.style.backgroundImage === tile2.style.backgroundImage) {
    return true
  } else {
    return false
  }
}
// implement handleMatchedPair/handleUnmatchedPair funtions after checking with checkIfTileValuesMatch
if (checkIfTileValuesMatch === true) {
    handleMatchedPair()
} else if (checkIfTileValuesMatch === false){
    handleUnmatchedPair()
}

// reset button
reset game button {
    reload page()
}

## BONUS make the you win message pop up with a replay button

```
