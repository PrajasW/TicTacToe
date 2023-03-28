console.log("hi world")
// let 1 
let table = [['','',''],['','',''],['','','']]
let move = 0
let win = false

function check_win(){
    // check diagonals
    if(table[0][0] != '' && table[0][0] == table[1][1] && table[0][0] == table[2][2])
    {
        win = true
        return
    }
    if(table[0][2] != '' && table[0][2] == table[1][1] && table[0][2] == table[2][0])
    {
        win = true
        return
    }
    // checking cols
    for(let i=0;i<3;i++)
    {
        if(table[0][i] != '' && table[0][i] == table[1][i] && table[0][i] == table[2][i])
        {
            win = true
            return
        }
    }
    // checking rows
    for(let i=0;i<3;i++)
    {
        if(table[i][0] != '' && table[i][0] == table[i][1] && table[i][0] == table[i][2])
        {
            win = true
            return
        }
    }
}

function change_button() {
    for (let i = 0; i < 3; i++) {
        for(let j =0;j < 3;j++){
            const elem = document.getElementById("pos-"+i+""+j)
            elem.innerHTML = table[i][j]
        }
    }
}
function change_table(a,b){
    if(table[a][b] != '' || win)
    {
        return
    }
    if(move%2 == 0)
    {
        table[a][b] = "x"
        document.getElementById("plays").innerHTML = "player 2 plays"
    }
    else
    {
        table[a][b] = "o"
        document.getElementById("plays").innerHTML = "player 1 plays"
    }
    change_button()
    check_win()
    if(win)
    {
        document.getElementById("plays").innerHTML = " "
        if(table[a][b] == "x")
            document.getElementById("win-statement").innerHTML = "player 1 wins"
        else
            document.getElementById("win-statement").innerHTML = "player 2 wins"
        return
    }
    move++
    if(move == 9)
    {
        document.getElementById("win-statement").innerHTML = "gameover tie"
    }
}
function reset() {
    table = [['','',''],['','',''],['','','']]
    move = 0
    win = false
    document.getElementById("win-statement").innerHTML = " "
    document.getElementById("plays").innerHTML = "player 1 plays"

    change_button()
}