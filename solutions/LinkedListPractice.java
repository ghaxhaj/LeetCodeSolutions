import java.util.*;

class Main {
//Write a function to find the nth element from the end in a linked list in one pass?


public static int findElement(LinkedList<Integer> linkedList, int n){
  
  int result = -1;

  for(int i = 0; i < linkedList.size(); i++){
    if(linkedList.get(i) == n){
      result = i;
    }
  }

  return result;
}


  public static LinkedList<Integer> reverseLinkedList(LinkedList<Integer> list){

    LinkedList<Integer> returnList = new LinkedList<Integer>();

    int temp = 0;

    for(int i = list.size() - 1; i >= 0; i--){
      returnList.add(temp, list.get(i));
      temp++;
    }

    return returnList;
    
  }

  
  public static void main(String[] args) {

    LinkedList<Integer> linkedList = new LinkedList<Integer>();

    linkedList.add(0,1);
    linkedList.add(1,2);
    linkedList.add(2,3);
    linkedList.add(3,4);

    //System.out.println(findElement(linkedList, 5));
     System.out.println(reverseLinkedList(linkedList));

    
  }
}