# `Memory Game`

## Background:

- Game choice: Memory Game
  There are many variations of memory game on the web. For my first project, I wanted to make this game aesthetically pleasing to make it a little more interesting.

`Wireframe`
<img src="https://i.imgur.com/SwasZxI.png" width="900">

`Pseudocode`

```JS
// Assign tile pictures class
// covered by tileback class

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

const handleUnmatchedPair = function (tile1, tile2){
    setTimeout(flipUnmatchedTile, 2000, tile1)
    setTimeout(flipUnmatchedTile, 2000, tile2)
}

// returns true or false
const checkIfTileValuesMatch = function (tile1, tile2) {
  if (tile1.style.backgroundImage === tile2.style.backgroundImage) {
    return true
  } else {
    return false
  }
}
// what to do after checking
if (checkIfTileValuesMatch === true) {
    handleMatchedPair()
} else if (checkIfTileValuesMatch === false){
    handleUnmatchedPair()
}
---------------------------------------------------
when all divs are out of class
    h2.innerText = "You win"


reset game button{
    reload page()
}

BONUS make the you win message pop up with a replay button

```
