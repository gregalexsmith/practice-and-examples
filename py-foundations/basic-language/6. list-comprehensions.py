# --- List Comprehensions ---

oneToFive = range(1, 6)

# "run ___ for x in ___"
squares = [x**2 for x in oneToFive]
print(squares) # [1, 4, 9, 16, 25]

# "run __ for x in ___ if ___"
evenSquares = [x**2 for x in oneToFive if x % 2 == 0]
print(evenSquares) # [4, 16]

# Nested
# "run ___ for x in ___ for y in ___"
oneToTwo = range(1, 3)
allPairs = [(x, y) for x in oneToTwo for y in oneToTwo]
print(allPairs) # [(1, 1), (1, 2), (2, 1), (2, 2)]

# --- Example: complex expressions ---
import math
sqrt_list = [math.sqrt(x) for x in range(1, 3)]
print(sqrt_list) # [1.0, 1.4142135623730951]

# --- Example: conditional assignment ---
# "run ___ if ___ else ___ for x in ___"
evenOrOdd = ["even" if x % 2 == 0 else "odd" for x in oneToFive]
print(evenOrOdd) # ['odd', 'even', 'odd', 'even', 'odd']

# --- Example: with strings ---
animals = ["cat", "dog", "bird"]
firstLetters = [x[0] for x in animals]
print(firstLetters) # ['c', 'd', 'b']

# --- Example: with multiple conditions ---
nums = [x for x in range(50) if x % 5 == 0 if x % 3 == 0]
print(nums) # [0, 15, 30, 45]

# --- Example: combining with zip ---
animals = ["cat", "dog", "bird"]
sounds = ["meow", "woof", "tweet"]
animalSounds = [f"{animal} says {sound}" for animal, sound in zip(animals, sounds)]
print(animalSounds) # ['cat says meow', 'dog says woof', 'bird says tweet']