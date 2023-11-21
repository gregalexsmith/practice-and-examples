# Decorators
def basic_decorator(func):
    def wrapper():
        print("Before")
        func()
        print("After")
    return wrapper

@basic_decorator
def say_hello():
    print("Hello World!")

say_hello() # Before, Hello World!, After

# A few more examples:
# --- Example: Timing a function ---

import time

def timing_decorator(func):
    def wrapper(*args, **kwargs):
        start = time.time()
        result = func(*args, **kwargs)
        end = time.time()
        print(f"{func.__name__} ran in: {end - start} sec")
        return result
    return wrapper

@timing_decorator
def some_function():
    time.sleep(1)

some_function()  # This will print the execution time.

# --- Example: Debugging a function ---
def debug_decorator(func):
    def wrapper(*args, **kwargs):
        print(f"Arguments: {args}, {kwargs}")
        return func(*args, **kwargs)
    return wrapper

@debug_decorator
def some_function(a, b, c):
    return a + b + c

some_function(1, 2, 3) # Arguments: (1, 2, 3), {}, 6

# --- Example: Checking permissions ---
def admin_required(func):
    def wrapper(user, *args, **kwargs):
        if not user.get('is_admin'):
            raise Exception("User must be an admin to access this function")
        return func(*args, **kwargs)
    return wrapper

@admin_required
def delete_user(user):
    print(f"Deleted user {user}")

user = {"username": "john", "is_admin": False}
try:
    delete_user(user)
except Exception as err:
    print(err) # User must be an admin to access this function

# --- Example: Decorator with Arguments ---
def repeat_decorator(times):
    def actual_decorator(func):
        def wrapper(*args, **kwargs):
            for _ in range(times):
                result = func(*args, **kwargs)
            return result
        return wrapper
    return actual_decorator

@repeat_decorator(times=3)
def say_hello():
    print("Hello!")

say_hello() # Hello! (x3)
