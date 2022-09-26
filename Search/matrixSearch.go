package main

// INPUT: 2D sorted matrix. ef:
//	[1, 3, 4, 6, 10]
//  [3, 5, 6, 7, 12]
//  [6, 8, 9, 10, 22]

// OUTPUT: [x, y] coords of target int or [-1, ,-1] if there is no match.

// METHOD: Begin search in upper most right corner.
//         Traverse left -> down as nessisary.

// TIME COMPLEXITY: O(n+w) where n,m are the dimmensions of matrix.
// SPACE COMPLEXITY: O(1) Constant time.
func SearchSortedMatrix(matrix [][]int, target int) []int {
	row, col := 0, len(matrix[0])-1
	for row < len(matrix) && col >= 0 {
		if matrix[row][col] > target {
			col -= 1
		} else if matrix[row][col] < target {
			row += 1
		} else {
			return []int{row, col}
		}
	}
	return []int{-1, -1}
}
