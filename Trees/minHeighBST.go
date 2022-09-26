package main

// This challenge require that the given array is sorted AND has distinct items

import "math"

func MinHeightBST(array []int) *BST {
    midIndex := int(math.Round(float64(len(array)/2)))
    root := *BST{Value: array[midIndex]}
    root.add(array[:midIndex])
    root.add(array[midIndex+1:])
    return root
}

func (tree *BST) add(array []int) {
    if len(array) == 0 {
        return
    }

    midIndex := int(math.Round(float64(len(array)/2)))
    tree.Insert(array[midIndex])
    tree.add(array[:midIndex])
    tree.add(array[midIndex+1:])
}

type BST struct {
    Value int

    Left *BST
    Right *BST
}

func (tree *BST) Insert(value int) *BST {
    if value < tree.Value {
        if tree.Left == nil {
            tree.Left = &BST{Value: value}
        } else {
            tree.Left.Inster(value)
        }
    } else {
        if tree.Right == nil {
            tree.Right = &BST{Value: value}
        } else {
            tree.Right.Instert(value)
        }
    }
    return tree
}
