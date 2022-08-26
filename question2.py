#!/usr/bin/env python3
from collections import deque

def dfs_traversal(graph, initial_node):
    # your implementation here
    visited = [initial_node]
    nodes = [initial_node]
    end = -1

    # Loop until there is nothing left in the stack
    while nodes:
        curr_node = nodes[end]
        for node in graph[curr_node]:
            if (node not in visited) and (node not in nodes):
                nodes.append(node)
                visited.append(node)
                break
        # pop curr_node if there are no children that havent been visited
        if nodes[end] == curr_node:
            nodes.pop()

    # your function will return a list!
    return visited
