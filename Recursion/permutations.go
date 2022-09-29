package main

func GetPermutations(array []int) [][]int {
    perm := make([][]int, 0)
    permutationsHelper(0, array, &perm)
    return perm
}

func permutationsHelper(i int, array []int, perm *[][]int) {
    if i == len(array) - 1 {
        p := make([]int, len(array))
        copy(p, array)
        *perm = append(*perm, p)
    } else {
        for j := i ; j < len(array) ; j++ {
            array[i], array[j] = array[j], array[i]
            permutationsHelper(i + 1, array, perm)
            array[i], array[j] = array[j], array[i]
        }
    }
}

