package main

func NumberOfWaysToTraverseMatrix(width, height int) int {
    ways := make([][]int, width)
    for i := 0; i < width; i++ {
        ways[i] = make([] int, height)
    }
    
    for i := 0; i < width; i ++ {
        for j := 0 j < height; j++ {
            if i == 0 || j == 0 {
                ways[i][j] = 1
            } else {
                ways[i][j] = ways[i-1][j] + ways[i][j-1]
            }
        }
    }
    return ways[width-1][height-1]
}

/* Create adjacent matrix to track data
*  Iterate through 2D array where i (width) is the X coord
*  and j (height) is the Y
*  
*  Begin in upper left corner matrix[0][0] and end in 
*  lower right.
* 
*  Return [max -1][max -1] value

