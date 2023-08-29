/*
 * @lc app=leetcode.cn id=23 lang=typescript
 *
 * [23] 合并 K 个升序链表
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


function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
    const dummy = new ListNode(-1);
    let p = dummy;
    let minArr: number[] = [];
    
    lists.forEach(list => {
        while (list) {
            minArr.push(list.val);
            list = list.next;
        }
    })

    minArr.sort((a, b) => a - b);

    minArr.forEach(min => {
        p.next = new ListNode(min);
        p = p.next;
    })

    return dummy.next;
};
// @lc code=end

