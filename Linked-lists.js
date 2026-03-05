let head = null; // Begin with empty list and add nodes in order 

export function insertNodeInOrder(value) { // Pass in the value we want to add to the linked list
    const newNode = {
        value: value,
        next: null // Pointer isn't pointing towards anything currently
    };
    
    if (head === null) { // Head always points towards the first node object
        head = newNode; // If the list is empty, add the new node to the beginning 
        return; 
    }

    let current = head; // Assign head node to current

    while (current.next !== null) { // While the nodes pointer looks to another node, keep going
        current = current.next; // Keep going through the list until current.next == null (end of list)
    }
    current.next = newNode; // Once we find a next pointer that points to null, assign newNode to be next (end of list)
}

// Function to print list (console.log was giving undefined as function doesn't return anything)
export function printList() {
    let current = head; // Start at the beginning of the list
    let result = "";

    while (current !== null) { // While theres still items to be added to the list
        result += current.value; // Add the node value to the result string
        current = current.next; // Move to the next node object (as specified by next in previous object)
    }
    console.log(result)
}

console.log('insertNodeInOrder')
insertNodeInOrder('h');
insertNodeInOrder('e');
insertNodeInOrder('l');
insertNodeInOrder('l');
insertNodeInOrder('o');

printList();


export function insertAfterValue(targetValue, newValue) {
    let newNode = {
        value: newValue, // l 
        next: null // o
    };

    let current = head; // Start from the beginning of list

    while (current !== null) { // While there are still nodes in the list
        if (current.value === targetValue) { // If the current value is the value we want to insert after (in this e.g. 'l')
            newNode.next = current.next; // Make the current 'next' value (in this e.g. 'o') the next value of the newNode (as we're inserting before o)
            current.next = newNode; // Make the current node's next point towards the newNode (inserting)
            return; // Finishing looping after we have found the place we want to insert
        }
        current = current.next
    }
}

head = null;

console.log('insertAfterValue')
insertNodeInOrder('h');
insertNodeInOrder('e');
insertNodeInOrder('l'); // next: l
insertNodeInOrder('o');

printList();

insertAfterValue('l', 'l'); // next: o

printList();



head = null;

function findValue(value) {
    if (head === null) { // If list is empty, return false (value not found)
        return false;
    }

    let current = head;

    while (current !== null) {
        if (current.value === value) { // If the current value matches value we're looking for, return true
            return true;
        }
    current = current.next;
    }
    return false; 
}

console.log('findValue')
insertNodeInOrder('h');
insertNodeInOrder('e');
insertNodeInOrder('l');
insertNodeInOrder('l');
insertNodeInOrder('o');

printList();

console.log('Looking for value L:')
console.log(findValue('l'))
console.log('Looking for value A:')
console.log(findValue('a'))


head = null;

function deleteNode(node) {
    if (head === null) {
        return false; // Empty list 
    }

    // Delete the head
    if (head.value === node.value) { // If we need to delete the head
        head = head.next; // Make the head the next node along, so nothing references current head anymore
        return;
    }

    let current = head;

    while (current !== null) { // While there are still items in the list
        if (current.next === node) { // If the next node is the one we want to delete
            current.next = current.next.next; // Move the next pointer to point towards the node AFTER the one we want to delete
            return true;
        }
        current = current.next; // Iterate through linked list
    }
    return false; // Node not found 
}

console.log('Delete node')
insertNodeInOrder('h');
insertNodeInOrder('e');
insertNodeInOrder('l');
insertNodeInOrder('l');
insertNodeInOrder('o');

console.log('Deleting letter L')
let nodeToDelete = head.next.next; // First L
console.log(deleteNode(nodeToDelete))

printList()

console.log('Deleting letter H')
let deleteHead = head; // First L
console.log(deleteNode(deleteHead))

printList()