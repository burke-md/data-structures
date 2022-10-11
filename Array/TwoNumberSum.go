package main

import "sort"

/* O(n^2) time O(1) space
func TwoNumberSum(array []int, target int) []int {
    for i := 0; i < len(array); i++ {
        for j := 0; j < len(array); j++ {
            if i != j {
                if array[i] + array[j] == target {
                    return []int{array[i], array[j]}
                }
            }
        }
    }
    return []int{}
}
*/

// O(nlog(n)) time O(1) space
func TwoNumberSum(array []int, target int) []int {
    sort.Ints(array)
    left, right := 0, len(array)-1

    for left < right {
        currentSum := array[left] + array[right]
        if currentSum == target {
            return []int{array[left], array[right]}
        } else if currentSum < target {
            left += 1
        } else {
            right -= 1
        }
    }
    return []int{}
}