class Main {

    /*
  Given a string text, you want to use the characters of text to form as many instances of the word "balloon" as possible.
  
  You can use each character in text at most once. Return the maximum number of instances that can be formed
  */
  
  
    public static int balloon(String text){
  
  
      int[] countArr = {0,0,0,0,0};
      char[] textArr = text.toCharArray();
  
      for(int i = 0; i < textArr.length; i++){
        switch(Character.toLowerCase(textArr[i])){
          case 'b':
            countArr[0]++;
            break;
          case 'a':
            countArr[1]++;
            break;
          case 'l':
            countArr[2]++;
            break;
          case 'o':
            countArr[3]++;
            break;
          case 'n':
            countArr[4]++;
            break;
        }
      }
  
      int count = 0;
      boolean temp = true;
  
      do{
        if(countArr[0] >= 1){
          countArr[0]--;
          if(countArr[1] >= 1){
            countArr[1]--;
            if(countArr[2] >= 2){
              countArr[2] -= 2;
              if(countArr[3] >= 2){
                countArr[3] -= 2;
                if(countArr[4] >= 1){
                  countArr[4]--;
                  count++;
                }
              }
            }
          }
        }else{
          temp = false;
        }
      }while(temp);
  
      
     return count;
      
    }
  
  
    
    public static void main(String[] args) {
      System.out.println(balloon("nlaebolko")); //1
      System.out.println(balloon("loonxbaloballpooonn")); //2
    }
  }