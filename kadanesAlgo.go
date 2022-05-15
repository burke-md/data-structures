package main


//Return the sum of the greatest sub array. 
// 0(n) Time | O(1) Space
func kadanesAlgorithm(array []int) int {
    maxEndingHere := array[0]
    maxSoFar := array[0]

    for i := 1; i < len(array); i++ {
        num := array[i]
        maxEndingHere = max(num, maxEndingHere + num)
        maxSoFar = max(maxSoFar, maxEndingHere)
    }
    return maxSoFar
}

func max(a, b int) int {
    if a > b {
        return a
    }
    return b
}
