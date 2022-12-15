const moves = ['north', 'north', 'west', 'west', 'north', 'east','north']  

const finalPosition = function (moves) {
  let x = 0;
  let y = 0;
  let result = [];

  for (const move of moves) {
    if (move === 'north') {
      y++;
    } else if (move === 'south') {
      y--;
    } else if (move === 'east') {
      x++;
    } else if (move === 'west') {
      x--;
    }
  }
  result.push(x,y)
  return result;
}

console.log(finalPosition(moves));


/*
  x 방향 움직이기 -1 west
  moves[1];
  y 방향 움직이기 4 north 
  moves[2]
  return newArr.push(moves[2]);

  else if (move === 'north') */