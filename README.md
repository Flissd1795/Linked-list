# Linked-list

What Is a Linked List?

- A linked list is a linear data structure where each element (called a node) stores:
    A value
    A reference (pointer) to the next node

- Linked lists store data by reference
- There is no automatic shifting like in arrays
- To insert or delete, we manually rewire pointers
- Traversal always starts at head and continues until null


Algorithms

1. Insert Node (At End)
- Goal: Add a new node to the end of the list.

- Create a new node with:
    - value
    - next = null

- If head is null:
- Set head to the new node

- Otherwise:
- Start at head
- Traverse until current.next is null
- Set current.next to the new node

- Time Complexity: O(n)


2. Delete Node (By Reference)

- Goal: Remove a node from the list.

- If list is empty, return false

- If node to delete is the head:
- Set head = head.next

- Otherwise:
- Traverse the list
- If current.next is the node to delete:
- Set current.next = current.next.next
- Return true
- If node not found → return false

- Time Complexity: O(n)