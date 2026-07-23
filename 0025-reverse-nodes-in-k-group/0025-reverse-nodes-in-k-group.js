/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val === undefined ? 0 : val)
 *     this.next = (next === undefined ? null : next)
 * }
 */

/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
    if (!head || k === 1) return head;

    const dummy = new ListNode(0);
    dummy.next = head;

    let groupPrev = dummy;

    while (true) {
        let kth = getKth(groupPrev, k);

        if (!kth) break;

        let groupNext = kth.next;

        // Reverse the current group
        let prev = groupNext;
        let curr = groupPrev.next;

        while (curr !== groupNext) {
            let next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
        }

        // Connect the reversed group
        let temp = groupPrev.next;
        groupPrev.next = kth;
        groupPrev = temp;
    }

    return dummy.next;
};

function getKth(node, k) {
    while (node && k > 0) {
        node = node.next;
        k--;
    }

    return node;
}