import java.util.*;

class Main {


public static boolean isNum(String inp){
  try{
    Double.parseDouble(inp);
    return true;
  }catch(NumberFormatException e){
    return false;
  }
}



public static int returnSumOfNums(String inp){
  
  char[] arr = inp.toCharArray();
  List<String> resArr = new ArrayList<String>();


  String temp = "";
  
  for(int i = 0; i < arr.length; i++){
    if(isNum(Character.toString(arr[i]))){
      temp += Character.toString(arr[i]);
    }else{
      if(temp.length() > 0){
        resArr.add(temp);
        temp = "";
      }
    }
  }

  int result = 0;

  for(int i = 0; i < resArr.size(); i++){
    result += Integer.parseInt(resArr.get(i));
  }

  
  return result;
}

  
  public static void main(String[] args) {
    System.out.println(returnSumOfNums("Gl123a45ssd908oo6r")); //1082
    
  }
}