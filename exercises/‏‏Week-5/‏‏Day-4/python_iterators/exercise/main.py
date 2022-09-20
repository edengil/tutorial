# Enumerate

def find_index(items, item):
    for index, value in enumerate(items):
        if value == item:
            return index
        return -1


# numbers = [11, 3, 64, 17, 94]
# for i, v in enumerate(numbers, 100):
#     print(i, v)


#   Iterables


# lists
# for num in [1, 2, 3]:
    # print(num)

# tuples
# for num in (1, 2, 3):
    # print(num)

# strings
# for char in "wonders":
    # print(char)

# dictionaries:
# for key in {"name": "momo", "age": 33}:
    # print(key)

string_iterator = iter("Python is great")
list_iterator = iter([2, 4, 6])

string_iterator = iter("Python")
# print(next(string_iterator))
# print(next(string_iterator))
# print(next(string_iterator))
# print(next(string_iterator))
# print(next(string_iterator))
# print(next(string_iterator))

# try:
#     print(next(string_iterator))
# except StopIteration as e:
#     print("no more items")


# print(next(string_iterator, None))


# 4. Iterator Protocol
numbers = [10, 12, 15, 18, 20]
fruits = ("apple", "pineapple", "blueberry")
message = "I love Python"
# print(iter(numbers))
# print(iter(fruits))//
# print(iter(message))

numbers = [10, 12, 15, 18, 20]
iterator = iter(numbers)
# print(next(iterator))
# print(next(iterator))
# print(next(iterator))
# print(next(iterator))
# print(next(iterator, 0))


# iter_obj = iter(numbers)
# while True:
#     try:
#         element = next(iter_obj)
#     except StopIteration:
#         break


class PrintNumbers:
    def __init__(self, size):
        self.max = size

    def __iter__(self):
        self.numbers = list(range(self.max + 1))
        self.counter = 0
        return self

    def __next__(self):
        if self.counter >= self.max:
            raise StopIteration

        self.counter += 1
        return self.numbers[self.counter]


def plus1(stop):
    for i in range(stop):
        yield i
# for x in PrintNumbers(4):
#   print(x)


def my_gen():
    n = 1
    print('This is printed in the first call')
    yield n
    n += 1
    print('This is printed second')
    yield n
    n += 1
    print('This is printed at last')
    yield n


iter_gen = my_gen()
next(iter_gen)
next(iter_gen)
next(iter_gen)
# next(iter_gen)


def reverse(iterable):
    length = len(iterable)
    for i in range(length - 1):
        yield iterable[i]    # For loop to print the reversed string


for item in reverse(["Eric", 1985, ["Dan", "James", "Anna"], "wreg"]):
    print(item)


list_comprehension = [x for x in range(20)]
# print(list_comprehension)
# print(type(list_comprehension))

gen = (x for x in range(20))
print(gen)
print(type(gen))


def all_even():
    n = 0
    while True:
        yield n
        n += 2


# ex1
def my_enumerate(container, start_idx=0):
    for i in range(len(container)):
        yield (start_idx + i, container[i])
        
        
for index, elem in my_enumerate([10, 20, 30, 40]):
  print(index, elem) 

for index, elem in my_enumerate([10, 20, 30, 40], 10):
  print(index, elem) 



# ex2
def my_accumulate(container):
    cur_sum = 0
    for elem in container:
        cur_sum += elem
        yield cur_sum

for elem in my_accumulate([1,2,3,4,5]):
    print(elem)


# ex3

def is_prime(number):

    if number > 1:
        # check for factors
        for i in range(2, number):
            if (number % i) == 0:
                # if factor is found, set flag to True
                # break out of loop
                return False
    else:
        return False
    return True

import math

def get_prime_factors_generator(number):
    i = 2
    while i * i <= number:
        if number % i != 0:
            i += 1
        else:
            number = int(number / i)
            yield i
    if number > 1:
        yield number


for x in get_prime_factors_generator(100):
    print(x) 
    
class CircleIter:
    def __init__(self, container, num_iters):
        self.container = container
        self.num_iters = num_iters
    
    def __iter__(self):
        self.cur_index = -1
        self.cur_iter = 0
        return self
    
    def __next__(self):
        length = len(self.container)

        if length == 0 or self.cur_iter >= self.num_iters:
            raise StopIteration
        
        else:
            self.cur_index = (self.cur_index + 1) % length
            self.cur_iter += 1
            return self.container[self.cur_index]

for x in CircleIter([1,2], 8):
    print(x, end=" ") 
print()

for x in CircleIter([1,2,3],4):
  print(x, end=" ")

print()
for y in CircleIter([5,6],3):
  print(y, end=" ")
