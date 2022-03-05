def contem_duplicado(nums):
    nums.sort()
    for index in range(len(nums) - 1):
        if nums[index] == nums[index + 1]:
            return True
        return False


if __name__ == "__main__":
    test1 = [1, 2, 3, 1]
    print(contem_duplicado(test1))
