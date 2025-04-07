# Example 1:

# Input: nums = [1,2,3,4]
# Output: [24,12,8,6]
# Example 2:

# Input: nums = [-1,1,0,-3,3]
# Output: [0,0,9,0,0]

# from 2 to inf
# num[i] is between -30 to 30

# brute force:
# get total product of the array
# divide total product by each integer

# brute force working:
# iterate, for every interger multiply the two sides #O(N)

# Working solution:
# double edge prefix product

def getProducts(nums):
    prefProductAsc = [nums[0]]
    for i in range(1, len(nums)):
        prefProductAsc.append(nums[i] * prefProductAsc[-1])
    print(prefProductAsc)
    prefProductDesc = [nums[-1]]
    for i in range(len(nums) - 2, -1, -1):
        prefProductDesc.append(nums[i] * prefProductDesc[-1])
    prefProductDesc.reverse()
    print(prefProductDesc)
    result = []
    for i in range(len(nums)):
        result.append((prefProductAsc[i - 1] if i - 1 > -1 else 1) * (prefProductDesc[i + 1] if i + 1 < len(nums) else 1))
    print(result)
    return result

assert getProducts([1,2,3,4]) == [24,12,8,6]
  