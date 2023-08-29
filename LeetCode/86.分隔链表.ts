/*
 * @lc app=leetcode.cn id=86 lang=typescript
 *
 * [86] 分隔链表
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

function partition(head: ListNode | null, x: number): ListNode | null {
    const list1 = new ListNode(-1);
    const list2 = new ListNode(-1);

    let p1 = list1;
    let p2 = list2;

    let p = head;

    while (p && p.val !== null) {
        if (p.val < x) {
            p1.next = p;
            p1 = p1.next;
        } else {
            p2.next = p;
            p2 = p2.next;
        }
        let temp = p.next;
        p.next = null;
        p = temp;
    }

    p1.next = list2.next;

    return list1.next;
};
// @lc code=end

