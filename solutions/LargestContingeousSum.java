class Main {

    public static int largestContiguousSum(int[] arr) {

        int largestSum = arr[0];

        for (int i = 0; i < arr.length; i++) {

            int temp = arr[i];

            if (temp > largestSum) {
                largestSum = temp;
            }

            for (int j = i + 1; j < arr.length; j++) {
                int temp2 = temp + arr[j];

                if (temp2 > temp) {
                    temp = temp2;
                    if (temp > largestSum) {
                        largestSum = temp;
                    }
                }
            }
        }

        return largestSum;

    }

    public static void main(String[] args) {
        int[] arr1 = { 1, 2, 3, 4, 5 };
        int[] arr2 = { 1, 2, 3, 4 };
        int[] arr3 = { 2, 3, 4, 5 };

        System.out.println(largestContiguousSum(arr1)); // 15
        System.out.println(largestContiguousSum(arr2)); // 10
        System.out.println(largestContiguousSum(arr3)); // 14

    }
}