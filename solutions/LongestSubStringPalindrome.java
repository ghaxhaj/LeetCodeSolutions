class Main {


    // Given a string, find the longest substring which is a palindrome. 
  
  
    public static String reverseString(String inp){
      char[] arr = inp.toCharArray();
      StringBuilder res = new StringBuilder();
  
      for(int i = arr.length - 1; i >= 0; i--){
        res.append(arr[i]);
      }
  
      return res.toString();
    }
  
    public static String longestPalindromeSubString(String inp){
      String res = "";
      char[] arr = inp.toCharArray();
  
      for(int i = 0; i < arr.length; i++){
        String temp = Character.toString(arr[i]).toLowerCase();
        for(int j = i + 1; j < arr.length; j++){
        temp += Character.toString(arr[j]).toLowerCase();
  
          if(temp.compareTo(reverseString(temp)) == 0 && temp.length() > res.length()){
            res = temp;
          }
        }
      }
  
      return res;
    }
  
    public static void main(String[] args) {
      
      System.out.println(longestPalindromeSubString("Hello world!")); //ll
  
      System.out.println(longestPalindromeSubString("forgeeksskeegfor")); //geeksskeeg
    }
  }