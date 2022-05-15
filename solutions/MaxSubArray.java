class Main {



    /*
  Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.
  
  A subarray is a contiguous part of an array.
  */
  
  
  
     public static int maxSubArray(int[] nums) {
          int sum = nums[0];
  
        
        for(int i = 0; i < nums.length; i++){
          
          int temp = nums[i];
          if(temp > sum){
            sum = temp;
          }
  
          for(int j = i + 1; j < nums.length; j++){
            temp += nums[j];
            if(temp > sum){
              sum = temp;
            }
          }
  
          
        }
  
  
  
  
  
       
       return sum;
      }
    
    public static void main(String[] args) {
  
      int[] arr1 = {-2,1,-3,4,-1,2,1,-5,4};
      int[] arr2 = {1};
      int[] arr3 = {5,4,-1,7,8};
      System.out.println(maxSubArray(arr1)); //6
      System.out.println(maxSubArray(arr2)); //1
      System.out.println(maxSubArray(arr3)); //23
    }
  }