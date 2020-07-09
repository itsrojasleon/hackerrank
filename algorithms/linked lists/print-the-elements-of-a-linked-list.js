// Print the Elements of a Linked List
// https://www.hackerrank.com/challenges/print-the-elements-of-a-linked-list/problem

/*
 * For your reference:
 *
 * SinglyLinkedListNode {
 *     int data;
 *     SinglyLinkedListNode next;
 * }
 *
 */

function printLinkedList(head) {
  let node = head;

  while (node) {
    console.log(node);
    node = node.next;
  }
}
