/*
Given an m x n grid of characters board and a string word, return true if word exists in the grid.

The word can be constructed from letters of sequentially adjacent cells, where adjacent cells are 
horizontally or vertically neighboring. The same letter cell may not be used more than once.

EX: 
Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"
Output: true
*/

import java.lang.StringBuilder;

class Main {

   public static boolean exist(String[][] board, String word) {
        
        
        boolean result = false;
        char[] wordArr = word.toCharArray();
        int currIndex = 0;
        char temp = wordArr[currIndex];

        StringBuilder sb = new StringBuilder(); 
        
        for(int i = 0; i < board.length; i++){
          for(int j = 0; j < board[i].length; j++){
            if(board[i][j].charAt(0) == temp){
              sb.append(temp);
              currIndex++;
              temp = wordArr[currIndex];
              
              try{
                
              boolean temp2 = true;
                
              do{

        
                //System.out.println(sb);
                char left = board[i][j - 1].charAt(0);
                System.out.println("Left : " + left);
                  if(left == temp){
                  j -= 1; 
                  sb.append(temp);
                  currIndex++;
                  temp = wordArr[currIndex];
                  
                }

                
                char right = board[i][j + 1].charAt(0);
                System.out.println("Right: " + right);
                 if(right == temp){
                  j += 1;
                  sb.append(temp);
                  currIndex++;
                  temp = wordArr[currIndex];
                 
                }



                
                char up = board[i - 1][j].charAt(0);
                System.out.println("Up : " + up);
                     if(up == temp){
                  i -= 1;
                  sb.append(temp);
                  currIndex++;
                  temp = wordArr[currIndex];
                }



                
                char down = board[i + 1][j].charAt(0);
                System.out.println("Down " + down);
                if(down == temp){
                  i += 1;
                  sb.append(temp);
                  currIndex++;
                  temp = wordArr[currIndex];
                }    
                else{
                  temp2 = false;
                }
                
                }while(temp2);
                
              }catch(Exception e){
              }
            }
            // if(sb.length() != word.length()){
            //     currIndex = 0;
            //     sb.setLength(0);
            //     temp = wordArr[currIndex];
            // }
          }
        }


     // System.out.println("StringBuilder: " + sb + " String: " + word);

     if(sb.length() == word.length()){
         System.out.println(sb);
       result = true;
     }

     return result;
    }

  
  public static void main(String[] args) {



    String[] arr1 = {"A","B","C","E"};
    String[] arr2 = {"S","F","C","S"};
    String[] arr3 = {"A","D","E","E"};
    String[][] arr = {arr1, arr2, arr3};

   // System.out.println(exist(arr,"ABCCED"));
    //System.out.println(exist(arr,"ABCC"));
    System.out.println(exist(arr,"ACCED"));

    

    
  }
}