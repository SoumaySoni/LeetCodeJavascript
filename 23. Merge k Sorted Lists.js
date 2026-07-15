/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {

    // Edge case: If there are no linked lists, return null.
    if (lists.length === 0) return null;

    // Continue merging until only one linked list remains.
    while (lists.length > 1) {

        // Stores the merged lists of the current round.
        let mergedLists = [];

        // Merge every two adjacent linked lists.
        // Example:
        // [L1, L2, L3, L4] -> [merge(L1,L2), merge(L3,L4)]
        for (let i = 0; i < lists.length; i += 2) {

            // First linked list of the pair.
            let l1 = lists[i];

            // Second linked list of the pair.
            // If there is no second list (odd number of lists),
            // merge the remaining list with null.
            let l2 = (i + 1 < lists.length) ? lists[i + 1] : null;

            // Merge the two sorted linked lists and store the result.
            mergedLists.push(mergeTwoLists(l1, l2));
        }

        // Replace the original list array with the newly merged lists.
        // Example:
        // Before: [L1, L2, L3, L4]
        // After : [Merged1, Merged2]
        lists = mergedLists;
    }

    // Only one fully merged linked list remains.
    return lists[0];
};

/**
 * Merge two sorted linked lists into one sorted linked list.
 * Time Complexity: O(m + n)
 */
function mergeTwoLists(l1, l2) {

    // Dummy node simplifies insertion logic.
    let dummy = new ListNode(-1);

    // 'tail' always points to the last node of the merged list.
    let tail = dummy;

    // Compare the current nodes of both lists.
    while (l1 && l2) {

        // Attach the smaller node to the merged list.
        if (l1.val <= l2.val) {
            tail.next = l1;
            l1 = l1.next;
        } else {
            tail.next = l2;
            l2 = l2.next;
        }

        // Move the tail forward.
        tail = tail.next;
    }

    // Attach the remaining nodes.
    // One of l1 or l2 is already null.
    tail.next = l1 || l2;

    // Skip the dummy node and return the actual head.
    return dummy.next;
}