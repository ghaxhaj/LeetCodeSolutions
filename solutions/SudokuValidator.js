// Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:

// Each row must contain the digits 1-9 without repetition.
// Each column must contain the digits 1-9 without repetition.
// Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.
// Note:

// A Sudoku board (partially filled) could be valid but is not necessarily solvable.
// Only the filled cells need to be validated according to the mentioned rules.


function sudokoCheck(board){

    let result = true;
  
  
    for(let i = 0; i < board.length; i++){
      
      let temp = board[i];
  
    if(temp.length != 9){
      result = false; 
      break;
    }

   //checks for duplicates horizontally
      for(let j = 0; j < temp.length; j++){
        for(let k = j + 1; k < temp.length; k++){
          if(temp[j] != "." && temp[j] == temp[k]){
            result = false;
            break;
          }
        }
      }
  
    //checks verticals for duplicates
    for(let j = i + 1; j < board.length; j++){
        let comparator = board[j];
  
        for(let k = 0; k < temp.length; k++){
          if(temp[k] != "." && temp[k] == comparator[k]){
            result = false; 
            break;
          }
        }
      }
  }
  
      //check inner squares for duplicates
  
    for(let i = 0; i < board.length; i += 3){
      
      let temp = board[i];
    
  
      for(let j = 0; j < temp.length; j += 3){
        let arr = [];
        for(let k = j; k < j + 3; k++){
          arr.push(temp[k])
          arr.push(board[i + 1][k])
          arr.push(board[i + 2][k])
          }
  
  
        for(let k = 0; k < arr.length; k++){
          for(let b = k + 1; b < arr.length; b++){
            if(arr[k] != "." && arr[k] == arr[b]){
              result = false;
              break;
            }
          }
        }
        }
      }
      
  return result;
    
  }
  
  console.log(sudokoCheck(
   [["5","3",".",".","7",".",".",".","."]
  ,["6",".",".","1","9","5",".",".","."]
  ,[".","9","8",".",".",".",".","6","."]
  ,["8",".",".",".","6",".",".",".","3"]
  ,["4",".",".","8",".","3",".",".","1"]
  ,["7",".",".",".","2",".",".",".","6"]
  ,[".","6",".",".",".",".","2","8","."]
  ,[".",".",".","4","1","9",".",".","5"]
  ,[".",".",".",".","8",".",".","7","9"]]))