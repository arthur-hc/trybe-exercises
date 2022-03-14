opening_brackets_schema = {
  "{": "}",
  "(": ")"
}

def filter_brackets(brackets):
  brackets_types = ["{", "}", "(", ")"]
  return [bracket for bracket in brackets if bracket in brackets_types]

def contain_brackets(brackets):
  return len(brackets) > 0

def is_length_pair(brackets):
  return len(brackets) % 2 == 0

def is_valid_sequence(brackets):
    valid = True
    first_half_sequence = brackets[:len(brackets) // 2]
    for i, bracket in enumerate(first_half_sequence):
      if valid:
        valid = (
          bracket in opening_brackets_schema
          and opening_brackets_schema[bracket] == brackets[-1 - i]
        )
    return valid

def is_valid_function(function):
  brackets = filter_brackets(function)
  valid = True
  validations = [contain_brackets, is_length_pair, is_valid_sequence]
  
  for i, validation in enumerate(validations):
    valid = validation(brackets)
    if not valid:
      break


  return valid

print("expected False:", is_valid_function('{(})'))
print("expected True:", is_valid_function('({()})'))
