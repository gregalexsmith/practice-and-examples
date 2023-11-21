# --- basic function --- 
def say_hello():
    print("Hello World!")

say_hello() # Hello World!

# --- args and returns ---
def add(a, b):
    return a + b

print(add(1, 2)) # 3

# --- default args ---
def say(message, times = 1):
    print(message * times)  

say("Hello") # Hello
say("World", 5) # WorldWorldWorldWorldWorld
say(times = 3, message = "Python") # PythonPythonPython

# --- variable args ---
def total(*args):
    sum = 0
    for i in args:
        sum += i
    return sum

print(total(1, 2, 3)) # 6
print(total(1, 2, 3, 4, 5)) # 15

# --- keyword args ---
def print_kwargs(**kwargs):
    print(kwargs)

print_kwargs(a = 1) # {'a': 1}
print_kwargs(name = "John", age = 25) # {'name': 'John', 'age': 25}

# --- lambda ---
sum = lambda a, b: a + b

print(sum(1, 2)) # 3


# --- function as object ---
say = say_hello
say() # Hello World!

# --- function as argument ---
def say_twice(func):
    func()
    func()

say_twice(say_hello) # Hello World! (x2)

# --- function as return ---
def get_say_twice():
    return say_twice

get_say_twice()(say_hello) # Hello World! (x2)
