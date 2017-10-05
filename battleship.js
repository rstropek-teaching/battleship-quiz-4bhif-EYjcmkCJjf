const ships = [5,4,3,3,2];

// Prefer initializing the battleground using a `for` loop
const battleground = [
    [false, false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false, false]


];

for(var i = 0; i < ships.length; i++){
    var pos_x = Math.floor((Math.random()*8)+1);
    var pos_y = Math.floor((Math.random()*8)+1);
    var isfree = true;
    if(pos_x - ships[i] >= 1){
        for(var j = 0; j<=ships[j] && isfree; j++){
            if(j == 0){
                if(battleground[pos_x+1][pos_y]==true){
                    isfree=false;
                }
            }
            if(battleground[pos_x-1][pos_y]==true||battleground[pos_x-1][pos_y+1]==true||battleground[pos_x-1][pos_y-1]==true){
                isfree=false;
            }

        }
        for(var x = 0; x < ships[i]&&isfree; x++){
            battleground[pos_x][pos_y] = true;
            pos_x = pos_x - 1;
        }
    }else if(pos_x + ships[i] <= 8){
        for(var j = 0; j<=ships[j] && isfree; j++){
            if(j == 0){
                // Avoid `== true`, just write `if(battleground[pos_x-1][pos_y])`
                if(battleground[pos_x-1][pos_y]==true){
                    isfree=false;
                }
            }
            if(battleground[pos_x+1][pos_y]==true||battleground[pos_x+1][pos_y+1]==true||battleground[pos_x+1][pos_y-1]==true){
                isfree=false;
            }
    
        }
        for(var x = 0; x < ships[i]&&isfree; x++){
            battleground[pos_x][pos_y] = true;
            pos_x = pos_x + 1;
        }
    }else if(pos_y - ships[i] >= 1){
        for(var j = 0; j<=ships[j] && isfree; j++){
            if(j == 0){
                if(battleground[pos_x][pos_y+1]==true){
                    isfree=false;
                }
            }
            if(battleground[pos_x][pos_y-1]==true||battleground[pos_x+1][pos_y-1]==true||battleground[pos_x-1][pos_y-1]==true){
                isfree=false;
            }
            
        }
        for(var x = 0; x < ships[i]&&isfree; x++){
            battleground[pos_x][pos_y] = true;
            pos_y = pos_y - 1;
        }
    }else if(pos_y + ships[i] <= 8){
        for(var j = 0; j<=ships[j] && isfree; j++){
            if(j == 0){
                if(battleground[pos_x][pos_y-1]==true){
                    isfree=false;
                }
            }
            if(battleground[pos_x][pos_y+1]==true||battleground[pos_x+1][pos_y+1]==true||battleground[pos_x-1][pos_y+1]==true){
                isfree=false;
            }
           
        }
        for(var x = 0; x < ships[i] && isfree; x++){
            battleground[pos_x][pos_y] = true;
            pos_y = pos_y + 1;
        }
    }
    if(isfree==false){
        // Prefer i--
        i = i-1;
    }
}
console.log(battleground);
