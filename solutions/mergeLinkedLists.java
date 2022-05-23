/*
You are given the heads of two sorted linked lists list1 and list2.

Merge the two lists in a one sorted list. The list should be made by 
splicing together the nodes of the first two lists.

Return the head of the merged linked list.

Input: list1 = [1,2,4], list2 = [1,3,4]
Output: [1,1,2,3,4,4]

*/

import java.util.*;

class Main {



  static class ListNode{
       int val;
      ListNode next;
      ListNode() {}
      ListNode(int val) { this.val = val; }
      ListNode(int val, ListNode next) { this.val = val; this.next = next; }

    public void setNext(ListNode next){
      this.next = next;
    }

    public void setVal(int val){
      this.val = val;
    }

    public void print(){
    List<Integer> arrayList = new ArrayList<Integer>();

    boolean temp1 = true;
    ListNode value = this;
    
    do{
      
      arrayList.add(value.val);
  
      value = value.next;
      if(value == null){
        temp1 = false;
      }
      
    }while(temp1);

      System.out.println(arrayList);
      
    }
  }

  public static ListNode mergeList(ListNode list1, ListNode list2){

    ListNode mergedNode = new ListNode();
    List<Integer> values = new ArrayList<Integer>();
    
    boolean temp1 = true;
    ListNode value = list1;
    
    do{
      
      values.add(value.val);
  
      value = value.next;
      if(value == null){
        temp1 = false;
      }
      
    }while(temp1);
    
    value = list2;
    boolean temp2 = true;
     do{
      
      //ListNode value = list2;
      values.add(value.val);
  
      value = value.next;
      if(value == null){
        temp2 = false;
      }
      
    }while(temp2);

    
    for(int i = 0; i < values.size(); i++){
      for(int j = i + 1; j < values.size(); j++){
        if(values.get(j) < values.get(i)){
          int temp = values.get(i);
          values.set(i, values.get(j));
          values.set(j, temp);
        }
      }
    }

    mergedNode.setVal(values.get(0));
    ListNode temp = new ListNode(values.get(1));
    mergedNode.setNext(temp);

    if(values.size() >= 2){
    for(int i = 2; i < values.size(); i++){
      
      ListNode temp5 = new ListNode(values.get(i));
      temp.setNext(temp5);
      temp = temp5;
    }
  }

    return mergedNode;
    
  }


  
  public static void main(String[] args) {
    
    ListNode head1 = new ListNode(1);
    ListNode next1 = new ListNode(2);
    head1.setNext(next1);
    ListNode next2 = new ListNode(4);
    next1.setNext(next2);
    // ListNode next5 = new ListNode(7);
    // next2.setNext(next5);

     ListNode head2 = new ListNode(1);
    ListNode next3 = new ListNode(3);
    head2.setNext(next3);
    ListNode next4 = new ListNode(4);
    next3.setNext(next4);

    ListNode result = mergeList(head1, head2);

    result.print();

  }
}