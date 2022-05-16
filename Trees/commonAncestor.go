package main

type AncestralTree struct {
	Name     string
	Ancestor *AncestralTree
}

func GetYoungestCommonAncestor(
	topAncestor, descendantOne, descendantTwo *AncestralTree) *AncestralTree {

	depthOne := getDescendantDepth(descendantOne, topAncestor)
	depthTwo := getDescendantDepth(descendantTwo, topAncestor)

	if depthOne > depthTwo {
		return backtrackAncestralTree(
			descendantOne, descendantTwo, depthOne-depthTwo)
	}

	return backtrackAncestralTree(
		descendantTwo, descendantOne, depthTwo-depthOne)
}

func getDescendantDepth(descendant, topAncestor *AncestralTree) int {
	depth := 0
	//Traverse up tree until @root, return depth
	for dscendant != topAncestor {
		depth++
		descendant = descendant.Ancestor
	}
	return depth
}

func backtrackAncestralTree(
	lowerDescendant, higherDescendant *AncestralTree, diff int) *AncestralTree {
	for diff > 0 {
		//Raise lower node until same 'level' as upper
		lowerDescendant = lowerDescendant.Ancestor
		diff--
	}
	//Raise both nodes until equal (have reach common point)
	for lowerDescendant != higherDescendant {
		lowerDescendant = lowerDescendant.Ancestor
		higherDescendant = higherDescendant.Ancestor
	}
	return lowerDescendant
}
