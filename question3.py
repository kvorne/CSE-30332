#!/usr/bin/env python3
from collections import deque

def tree_to_text(tree, root_node):
    # your implementation here
    string = ''
    if tree[root_node]:
        # Get left and parent branches
        string = string + tree_to_text(tree, tree[root_node][0]) + root_node.split('_')[1]
        # Get right branch
        if len(tree[root_node]) > 1:
            string = string + tree_to_text(tree, tree[root_node][1])
        # your function will return a string!
        return string 
    else:
        return root_node.split('_')[1]

