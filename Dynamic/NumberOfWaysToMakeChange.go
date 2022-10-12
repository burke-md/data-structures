package main

/* O(nd) where d is number of denoms | O(n) space
*  d = [1, 2, 5, 10, 25]
*  n = $10 => 10
*
* 5                       2   2   2   2   2    3
* 2       1   1   1   1   1   1   1   1   1    1
* 1   1   0   0   0   0   0   0   0   0   0    0 
* idx 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10
*
* ways[10] += ways[amount - denom]
* ways[10] += ways[10 - 5]
*           = 1 + ways[5] 
*           = 1 + 2
*/

func NumberOfWaysToMakeChange(n int, denoms []int) int {
    ways := make([]int, n+1)
    ways[0] = 1
    for _, denom:= range denoms {
        for amount := 1; amount <n+1; amount++ {
            if denom <= amount {
                ways[amount] += ways[amount-denom]
            }
        }
    }
    return ways[n]
}
