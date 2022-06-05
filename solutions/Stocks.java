/*
The cost of stock on each day is given in an array A[] of size N. 
Find all the days on which you buy and sell the stock so that in 
between those days your profit is maximum.
Note: There may be multiple possible solutions.
 Return any one of them. Any correct solution will result in an 
 output of 1, whereas wrong solutions will result in an output of 0.


 EX: 
 Input:
N = 7
A[] = {100,180,260,310,40,535,695}
Output:
1
Explanation:
One possible solution is (0 3) (4 6)
We can buy stock on day 0,
and sell it on 3rd day, which will 
give us maximum profit. Now, we buy 
stock on day 4 and sell it on day 6.

Input:
N = 5
A[] = {4,2,2,2,4}
Output:
1
Explanation:
There are multiple possible solutions.
one of them is (3 4)
We can buy stock on day 3,
and sell it on 4th day, which will 
give us maximum profit.
*/



class Main{


    public static int maxProfit(int[] arr, int N_){
        
    }


    public static void main(String[] args){

        int[] arr1 = {100,180,260,310,40,535,695};
        int[] arr2 = {4,2,2,2,4};

        System.out.println(maxProfit(arr1,7));
        System.out.println(maxProfit(arr2,5));


    }
}