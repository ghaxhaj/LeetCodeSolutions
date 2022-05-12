import java.util.*;

class Main {


  public static boolean isNumeric(String inp){
    try{
      Double.parseDouble(inp);
      return true;
    }catch(NumberFormatException e){
      return false;
    }
  }

  
  public static String decryption(String inp){
    
    String[] arr = inp.split(" ");
    Collections.reverse(Arrays.asList(arr));

    String res = "";

    for(int i = 0; i < arr.length; i++){
      if(i > 0){
        res += " ";
      }
      String[] temp = arr[i].split("");
      for(int j = 0; j < arr[i].length(); j++){
        if(!isNumeric(temp[j])){
          res += temp[j];
        }else{
          for(int k = 0; k < Integer.parseInt(temp[j]) - 1; k++){
            res += temp[j - 1];
          }
        }
      }
    }

    
    return res;
  }
  public static void main(String[] args) {
  System.out.println(decryption("world hel2o")); //hello world
  System.out.println(decryption("mis2is2ip2i")); //mississippi
  System.out.println(decryption("ba3")); //baaa
  }
}