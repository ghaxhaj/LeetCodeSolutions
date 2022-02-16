/*Given two sorted arrays nums1 and nums2 of size m and n 
respectively, return the median of the two sorted arrays.

The overall run time complexity should be O(log (m+n)).

Example 1:

Input: nums1 = [1,3], nums2 = [2]
Output: 2.00000
Explanation: merged array = [1,2,3] and median is 2.
Example 2:

Input: nums1 = [1,2], nums2 = [3,4]
Output: 2.50000
Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.
*/ 

 function sortNumber(a, b) {
    return a - b;
 }
 
 var findMedianSortedArrays = function(nums1, nums2) {
     let joinedArray = nums1.concat(nums2).sort(sortNumber);
     let median; 
 
     if(joinedArray.length % 2 == 0){
       
       median = (joinedArray[(joinedArray.length/2)-1] + joinedArray[joinedArray.length / 2]) / 2;
 
     }else{
       median = joinedArray[joinedArray.length / 2 - .5];
     }
      median = parseFloat(median.toFixed(5));
      console.log(median);
 };

findMedianSortedArrays([1,3],[2]);
findMedianSortedArrays([1,3],[2,5,4]);
findMedianSortedArrays([1,2],[3,4]);
findMedianSortedArrays([3], [-2,-1]); 