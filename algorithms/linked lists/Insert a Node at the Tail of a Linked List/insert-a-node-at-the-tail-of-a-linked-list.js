// Insert a Node at the Tail of a Linked List
// https://www.hackerrank.com/challenges/insert-a-node-at-the-tail-of-a-linked-list/problem

function getLastNode(head) {
  // Zero nodes
  if (!head) {
    return null;
  }

  // One or more nodes
  let node = head;
  while (node) {
    // We are at the end of the Linked List
    if (!node.next) {
      return node;
    }
    // There are more nodes at the right
    node = node.next;
  }
}

function insertNodeAtTail(head, data) {
  // Obtain last node
  const last = getLastNode(head);

  if (last) {
    // There are some existing node in our Linked List
    // Add a new node to the chain
    last.next = new SinglyLinkedListNode(data);
  } else {
    // Let's create the first node
    head = new SinglyLinkedListNode(data);
  }

  return head;
}
