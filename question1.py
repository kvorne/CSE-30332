#!/usr/bin/env python3
from collections import deque

def bfs_traversal(graph, initial_node):
    # your implementation here
    visited = []
    nodes = deque()
    nodes.append(initial_node)

    # Loop until there is nothing left in the queue
    while nodes:
        curr_node = nodes.pop()
        # Loop thru each node adjacent to curr_node
        for node in graph[curr_node]:
             # Check if in visited or nodes before adding to nodes
            if (node not in visited) and (node not in nodes):
                nodes.appendleft(node)
        visited.append(curr_node)

    # your function will return a list!
    return visited
