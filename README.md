# `Memory Game`
## Background:
- Game choice: Memory Game
There are many variations of memory game on the web. For my first project, I wanted to make this game aesthetically pleasing to make it a little more interesting.

`Wireframe`
<img src="https://i.imgur.com/SwasZxI.png" width="900">

`Pseudocode`
```
Assign card pictures class
covered by cardback class

flip card ()
if number of picks is 2:
    check to see if tile 1 === tile 2{
        make disappear ()
    }

else if card 1 !== 2
flip card 1 & 2 back{
    remove class ()
}

when all li's are out of class{
    push message ()"You win"
    stop game()
}

reset game button{
    reload page()
}

BONUS make the you win message pop up with a replay button

```