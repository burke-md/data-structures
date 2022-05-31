// INPUT:

// OUTPUT:

// TIME COMPLEXITY:

// SPACE COMPLEXITY:
package main

import "sort"

type AirportNode struct {
	Airport string
	Connections []string
	IsReachable bool
	UnreachableConnection []string
}

func NewAirportNode(airport string)*AirportNode {
	return &AirportNode{
		Airport: airport,
		Connections: []string{},
		IsReachable: true,
		UnreachableConnection: []string{},
	}
}

func AirportConnections(
	airports []string, 
	routes [][]string, 
	startingAirport string) 
	int {
	
}

func createAirportGraph(
	airports[]string, 
	routes[][]string) 
	map[string]*AirportNode {

}

func getUnreachableAirportNodes(
	airportGraph map[string]*AirportNode, 
	airports []string, 
	strartingAirport string)
	[]*AirportNode {

}

func deptFirstTraverseAirports(
	airportGraph map[string]*AirportNode,
	airport string,
	visitedAirports map[string]bool) {

}

func markUnreachableConnections(
	airportGraph map[string]*AirportNode,
	unreachableAirportNodes []*AirportNode) {

}

func depthFirstAddUnreachableConnections(
	airportGraph map[string]*AirportNode,
	airport string,
	unreachableConnections *[]string,
	visitedAirports map[string]bool) {

}

func getMinNumberOfNewConnections(
	airportGraph map[string] *AirportNode,
	unreachableAirportNodes []*AirportNode)
	int {

}
