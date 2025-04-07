input = [1, 2, 3, 4, 9, 8,1]

def mergeSort(input, l,  r):
    if r - l == 0:
        return [input[l]]
    mid = (r + l) // 2
    p1 = mergeSort(input, l, mid)
    p2 = mergeSort(input, mid + 1, r)
    pointerP1 = 0
    pointerP2 = 0
    res = []
    while pointerP1 < len(p1) or pointerP2 < len(p2):
        if not pointerP1 < len(p1):
            res.append(p2[pointerP2])
            pointerP2 += 1
        elif not pointerP2 < len(p2):
            res.append(p1[pointerP1])
            pointerP1 += 1
        else:
            curr1 = p1[pointerP1]
            curr2 = p2[pointerP2]
            if curr1 < curr2:
                res.append(curr1)
                pointerP1 += 1
            else:
                res.append(curr2)
                pointerP2 += 1
    return res

print(mergeSort(input, 0, len(input) - 1))