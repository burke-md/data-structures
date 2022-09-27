package main

type BST struct {
    Value int

    Left *BST
    Right *BST
}

type infoStruct struct {
    numberToVisit int 
    currentValue int 
}

    func FindKthLargestValueInBST(tree *BST, k int) int {         
        info := infoStruct{k, -1}                                 
        reverseInOrderTraversal(tree, k, &info)       
        return info.currentValue                                  
    }                                                     

    func reverseInOrderTraversal(node *BST, k int, info *infoStruct) {
        if node == nil || info.numberToVisit == 0 {     
            return              
        }

        reverseInOrderTraversal(node.Right, k, info)              
        if info.numberToVisit > 0 {                               
        info.numberToVisit --                             
        info.currentValue = node.Value                        
        reverseInOrderTraversal(node.Left, k, info)
    }                                                           
} 
