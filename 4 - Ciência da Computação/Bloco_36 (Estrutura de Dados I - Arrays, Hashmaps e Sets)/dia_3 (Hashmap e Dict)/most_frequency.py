def most_frequency(nums):
    if len(nums) == 0:
        return None
    most_frequency_num = nums[0]
    frequency = {}
    for num in nums:
        if num not in frequency:
            frequency[num] = 1
        else:
            frequency[num] += 1
        if frequency[num] > frequency[most_frequency_num]:
            most_frequency_num = num

    return most_frequency_num


test1 = [0, 0, -1, 3, 5, 1, 1, 5, 2, 0, 8, 1, -2, 0, 1]
print(most_frequency(test1))
