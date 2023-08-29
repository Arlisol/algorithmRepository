/*
 * @lc app=leetcode.cn id=19 lang=typescript
 *
 * [19] 删除链表的倒数第 N 个结点
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
    let dummy = new ListNode(-1);
    dummy.next = head;
    let p1 = dummy;
    let p2 = dummy;
    for (let index = 0; index < n + 1; index++) {
        if (p1) {
            p1 = p1.next;
        }
    }

    while (p1 && p2) {
        p1 = p1.next;
        p2 = p2.next;
    }

    p2.next = p2.next.next;

    return dummy.next;
};
// @lc code=end

