class Main {

    /* A pangram is a string that contains every letter of the alphabet. Given a sentence determine whether it is a pangram in the English alphabet. Ignore case. Return either pangram or not pangram as appropriate. */



    public static boolean pangrams(String s) {
      // Write your code here
      
      int[] counter = new int[26];
      for(int i = 0; i < 26; i++){
        counter[i] = 0;
      }
  
  
      char[] arr = s.toCharArray();
  
      for(int i = 0; i < arr.length; i++){
        switch(Character.toLowerCase(arr[i])){
          case 'a':
            if(counter[0] == 0){
            counter[0]++;
        }
            break;
          case 'b':
            if(counter[1] == 0){
            counter[1]++;
        }
            break;
            case 'c':
            if(counter[2] == 0){
            counter[2]++;
        }
            break;
            case 'd':
            if(counter[3] == 0){
            counter[3]++;
        }
            break;
            case 'e':
            if(counter[4] == 0){
            counter[4]++;
        }
            break;
            case 'f':
            if(counter[5] == 0){
            counter[5]++;
        }
            break;
            case 'g':
            if(counter[6] == 0){
            counter[6]++;
        }
            break;
            case 'h':
            if(counter[7] == 0){
            counter[7]++;
        }
            break;
  
            case 'i':
            if(counter[8] == 0){
            counter[8]++;
        }
            break;
  
            case 'j':
            if(counter[9] == 0){
            counter[9]++;
        }
            break;
  
            case 'k':
            if(counter[10] == 0){
            counter[10]++;
        }
            break;
            case 'l':
            if(counter[11] == 0){
            counter[11]++;
        }
            break;
            case 'm':
            if(counter[12] == 0){
            counter[12]++;
        }
            break;
            case 'n':
            if(counter[13] == 0){
            counter[13]++;
        }
            break;
            case 'o':
            if(counter[14] == 0){
            counter[14]++;
        }
            break;
            case 'p':
            if(counter[15] == 0){
            counter[15]++;
        }
            break;
            case 'q':
            if(counter[16] == 0){
            counter[16]++;
        }
            break;
            case 'r':
            if(counter[17] == 0){
            counter[17]++;
        }
            break;
            case 's':
            if(counter[18] == 0){
            counter[18]++;
        }
            break;
            case 't':
            if(counter[19] == 0){
            counter[19]++;
        }
            break;
            case 'u':
            if(counter[20] == 0){
            counter[20]++;
        }
            break;
            case 'v':
            if(counter[21] == 0){
            counter[21]++;
        }
            break;
            case 'w':
            if(counter[22] == 0){
            counter[22]++;
        }
            break;
            case 'x':
            if(counter[23] == 0){
            counter[23]++;
        }
            break;
            case 'y':
            if(counter[24] == 0){
            counter[24]++;
        }
            break;
            case 'z':
            if(counter[25] == 0){
            counter[25]++;
        }
            break;
            
      }
      }
  
      int result = 0; 
  
      for(int i = 0; i < counter.length; i++){
        if(counter[i] == 1){
          result++;
        }
      }
  
      if(result == 26){
        return true;
      }else{
        return false;
      }
  
  
  }
  
  
    
    public static void main(String[] args) {
      System.out.println(pangrams("abcdefghijklmnopqrstuvwxyz"));
  System.out.println(pangrams("We promptly judged antique ivory buckles for the next prize"));
    }
  }