# Exceptions
def divide(num1, num2):
    if num2 == 0:
        raise ZeroDivisionError("Cannot divide by zero")
    if not isinstance(num1, int) or not isinstance(num2, int):
        raise TypeError("Invalid type")
    
    # Catching errors
    return num1 / num2

def catch_divide(num1, num2):
    try:
        return divide(num1, num2)
    except Exception as err:
        return err

print(catch_divide(1, 0)) # Cannot divide by zero
print(catch_divide(1, 'a')) # Invalid type
print(catch_divide(1, 2)) # 0.5