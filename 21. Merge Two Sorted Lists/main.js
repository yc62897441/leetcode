// 2024/06/21
function mergeTwoLists(l1, l2) {
    let currentNode = new ListNode()
    const head = currentNode
    while (l1 && l2) {
        if (l1.val > l2.val) {
            currentNode.next = l2
            l2 = l2.next
        } else {
            currentNode.next = l1
            l1 = l1.next
        }
        currentNode = currentNode.next
    }
    currentNode.next = l1 || l2
    return head.next
}

// old
var mergeTwoLists = function (l1, l2) {
    let list = new ListNode()
    let head = list

    while (l1 && l2) {
        if (l1.val < l2.val) {
            list.next = l1
            l1 = l1.next
        } else {
            list.next = l2
            l2 = l2.next
        }
        list = list.next
    }

    list.next = l1 || l2
    return head.next
}
