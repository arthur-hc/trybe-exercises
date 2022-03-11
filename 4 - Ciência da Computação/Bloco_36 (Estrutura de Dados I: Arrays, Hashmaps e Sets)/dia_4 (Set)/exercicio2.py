def longestUniqueSubsttr(str):

    n = len(str)

    # Result
    res = 0

    for i in range(n):

        # Note : Default values in
        # visited are false
        visited = [0] * 256

        for j in range(i, n):

            # If current character is visited
            # Break the loop
            if visited[ord(str[j])]:
                break

            # Else update the result if
            # this window is larger, and mark
            # current character as visited.
            else:
                res = max(res, j - i + 1)
                visited[ord(str[j])] = True

        # Remove the first character of previous
        # window
        visited[ord(str[i])] = False

    return res


str = "serdevemuitolegalmasehprecisoestudarbastante"

print(longestUniqueSubsttr(str))


# Gabarito
def longer_no_repeating_substring_len(string):
    biggest = 0
    for index, _ in enumerate(string):
        substr = set()
        for letter in string[index:]:
            if letter in substr:
                break
            substr.add(letter)
        if len(substr) > biggest:
            biggest = len(substr)
    return biggest


print(longer_no_repeating_substring_len(str))
