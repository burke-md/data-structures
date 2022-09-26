package main

type BST struct {
    Value int
    Left *BST
    Right *BST
}

func (tree *BST) ValidateBST() bool {
    max := 1 << 63 -1
    min := -(1 << 63 -1)
    return isValid(tree, min, max)
}

func isValid(tree *BST, min, max int) bool {
    if tree == nil {
        return true
    }

    if tree.Value < min || tree.Value >= max {
        return false
    }

    return isValid(tree.Left, min, tree.Value) && isValid(
        tree.Right, tree.Value, max)
}
