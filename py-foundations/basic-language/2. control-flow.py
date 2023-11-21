
# Basic functions
def say_hello():
    print("Hello World!")

say_hello()

# Operators
def calculator(num1, num2, operation):
    if operation == 'add':
        return num1 + num2
    elif operation == 'subtract':
        return num1 - num2
    elif operation == 'multiply':
        return num1 * num2
    elif operation == 'divide':
        return num1 / num2
    elif operation == 'remainder':
        return num1 % num2
    elif operation == 'exponent':
        return num1 ** num2
    elif operation == 'floor_division':
        return num1 // num2
    else:
        return "Invalid operation"

print(calculator(2, 3, 'add')) # 3
print(calculator(2, 3, 'subtract')) # -1
print(calculator(2, 3, 'multiply')) # 2
print(calculator(2, 3, 'divide')) # 0.5
print(calculator(2, 3, 'remainder')) # 1
print(calculator(2, 3, 'exponent')) # 1
print(calculator(2, 3, 'invalid')) # Invalid operation

# Loops
def print_numbers(num):
    for i in range(num):
        print(i)

print_numbers(3)

