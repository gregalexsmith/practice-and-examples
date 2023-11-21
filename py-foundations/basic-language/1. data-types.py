'''
Data Types
'''

print("----- Basic Types -----")
count = 10
price = 9.99
name = 'John Doe'
is_published = True





print("----- Lists -----")
# ordered, mutable, can contain any data
animals = ['cat', 'dog', 'bird']
print(animals) # ['cat', 'dog', 'bird']
print(animals[0]) # cat
print(animals[-1]) # bird
print(animals[0:2]) # ['cat', 'dog  l']
print(animals[0:]) # ['cat', 'dog', 'bird']

animals[0] = 'cat2'
print(animals) # ['cat2', 'dog', 'bird']

# List built-in methods:
animals.append('fish')
# etc: pop(), insert(), remove(), clear(), index(), count(), sort(), reverse(), copy()


print("----- Tuples -----")
# ordered, immutable, can contain any data
point = (1, 2, 3)
print(point) # (1, 2)
print(point[0]) # 1
print(point[-1]) # 2
print(point[0:2]) # (1, 2)
print(point[0:]) # (1, 2)

# Tuple built-in methods:
print(point.count(1)) # 1
print((1, 1, 1).count(1)) # 3
print(point.index(1)) # 0



print("----- Sets -----")
# unordered, mutable, unique, can contain any data
# good for removing duplicates, membership testing, 
# and operations like union, intersection, difference, and symmetric difference
items = [1, 2, 2, 3, 3, 3, 4]
print("items", items) # [1, 2, 2, 3, 3, 3, 4]
print("set(items)", set(items)) # {1, 2, 3, 4} 

large_data = set(range(1000000))
if 999999 in large_data:
    print("Found 999999 efficiently in the set")

print({1, 2, 3} | {3, 4}) # union - {1, 2, 3, 4}
print({1, 2, 3} & {3, 4}) # intersection - {3}
print({1, 2, 3} - {3, 4}) # difference - {1, 2}
print({1, 2, 3} ^ {3, 4}) # symmetric difference - {1, 2, 4}



print("----- Dictionaries -----")
# unordered, mutable, key-value pairs, can contain any data
person = {
    'name': 'John',
    'age': 30,
    'is_married': True
}
print(person) # {'name': 'John', 'age': 30, 'is_married': True}
print(person['name']) # John
print(person.get('name')) # John
print(person.get('name2')) # None
person['name'] = 'John Doe'

# Dictionary built-in methods:
print(person.keys()) # dict_keys(['name', 'age', 'is_married'])
print(person.values()) # dict_values(['John Doe', 30, True])
print(person.items()) # dict_items([('name', 'John Doe'), ('age', 30), ('is_married', True)])
person2 = person.copy()
person.clear()
print(person) # {}
print(person2) # {'name': 'John Doe', 'age': 30, 'is_married': True}

