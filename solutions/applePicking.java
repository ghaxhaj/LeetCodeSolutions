import java.util.*;

class Main {

  /*

Imagine you have an array, and each element in the array represents the number of apples that can be picked from that tree. Now let us say Amy and Bill are picking apples. Amy can pick from L number of consecutive trees, while Bill can pick from K number of consecutive trees. 

Find the max number of apples that can be picked between Amy and Bill. We will assume that Bill is a gentleman and Amy will always pick first. 

Ex 

[6,4,2,1,7,4], L = 3, K = 2: //Amy can pick 12 apples (6 + 4 + 2) and Bill can pick a max of 11 apples (7 + 4), so the answer is 23. 

*/ 


  public static int maxApples(int[] arr, int L, int K){

  int maxForAmy = 0; 
  int maxForBill = 0;
  ArrayList<Integer> arrayToList =  new ArrayList<Integer>();

  for(int i = 0; i < arr.length; i++){
    arrayToList.add(arr[i]);
  }


  int indexForAmy = 0; 

  //Find Max For Amy
  for(int i = 0; i <= arrayToList.size() - L; i++){
    int temp = 0; 

    for(int j = i; j < L + i; j++){
      
      temp += arrayToList.get(j);
    }

    if(temp > maxForAmy){
      indexForAmy = i;
      maxForAmy = temp;
    }
  }


    //Removes trees that Amy selected
      arrayToList.subList(indexForAmy, indexForAmy + L ).clear();


  //Find Max For Bill
  for(int i = 0; i <= arrayToList.size() - K; i++){
    int temp = 0;

    for(int j = i; j < K + i; j++){
      temp += arrayToList.get(j);
    }
    
    if(temp > maxForBill){
      maxForBill = temp;
    }
  }

  

  return maxForAmy + maxForBill;
  
  
  }

  
  public static void main(String[] args) {
    int[] arr = {1,4,2,6,7,4};
    int[] arr2 = {6,4,2,1,7,4};
    int[] arr3 = {1,10,12,1,7,6,5,4,3,7}; //36 + 
    
    // System.out.println(maxApples(arr, 3, 2)); //23
    // System.out.println(maxApples(arr2, 3, 2)); //23
    // System.out.println(maxApples(arr3, 5, 3)); //50
  }
}