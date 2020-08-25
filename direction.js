function dirReduc(arr){
  var opposite = {
    'NORTH': 'SOUTH', 'EAST': 'WEST', 'SOUTH': 'NORTH', 'WEST': 'EAST'};
  return arr.reduce(function(dir, dirTwo){
      console.log(dir[dir.length - 1], '!!!!!!!!!')
       dir[dir.length - 1] === opposite[dirTwo] ? dir.pop(): dir.push(dirTwo);
      return dir;
    }, []);
}
