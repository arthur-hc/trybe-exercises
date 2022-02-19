def binary(n):
    result, remainder = divmod(n, 2)
    if n > 1:
        binary(result)
    print(remainder, end="")


binary(10)
print("\n")
