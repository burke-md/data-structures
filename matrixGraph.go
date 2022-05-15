package main

//River size :

//Input: 2D array, may or may not have equal length and width

//Output: A 1D array, where each element represents the length of a 'river'.

// Land will be denoted as 0 and river 1. A river can connect through the 
//matrix up and down, or side to side. Not diagonal. 

// O(WxH) time | O(WxH) space. 

func RiverSize(matrix [][]int) []int {
    //Initiate array to be returned w/ all river lengths
    sizes := []int {}
    //Create 2d aux matrix to keep track of visited nodes.
    visited := make([][]bool, len(matrix))
    for i := range visited {
        visited[i] = make([]bool, len(matrix[i]))
    }

    //Iterate through entire input, check visited list for efficiency.
    for i := range matrix {
        for j := range matrix[i] {
            if visited[i][j] {
                continue
            }
            sizes = traverseNode(i, j, matrix, visited, sizes)
        }
    }
    return sizes
}

func traverseNode(
    i, j int, 
    matrix [][]int, 
    visited [][]bool, 
    sizes []int) 
    []int {
        currentRiverSize := 0
        //Creat array of coords where i, j == x, y
        nodesToExplore := [][]int{{i, j}}
        for len(nodesToExplore) > 0 {
            //Following two lines essentially 'pop' item of array
            currentNode := nodesToExplore[0]
            nodesToExplore = nodesToExplore[1:]
            i, j := currentNode[0], currentNode[1]
            //If visited, move on, if not set true and follow through
            if visited[i][j] {
                continue
            }
            visited[i][j] = true
            //Is water or land
            if matrix[i][j] == 0 {
                continue
            }
            currentRiverSize += 1
            unvisitedNeighbors := getUnvisitedNeighbors(i, j, matrix, visited)
            for _, neighbor := range unvisitedNeighbors {
                nodesToExplore = append(nodesToExplore, neighbor)
            }
        }
        if currentRiverSize > 0 {
            sizes = append(sizes, currentRiverSize)
        }
        return sizes
}

//Check up down, left right. Only include unvisited. 
func getUnvisitedNeighbors(i, j int, matrix [][]int, visited [][]bool) [][]int {
    unvisitedNeighbors := [][]int{}
    if i > 0 && !visited[i-1][j] {
        unvisitedNeighbors = append(unvisitedNeighbors, []int{i-1, j})
    }
    if i < len(matrix)-1 && !visited[i+][j] {
        unvisitedNeighbors = append(unvisitedNeighbors, []int{i+1, j})
    }
    if j > 0 && !visited[i][j-1] {
        unvisitedNeighbors = append(unvisitedNeighbors, []int{i, j-1})
    }
    if j < len(matrix[0])-1 && !visited[i][j+1] {
        unvisitedNeighbors = append(unvisitedNeighbors, []int{i, j+1})
    }
}


















