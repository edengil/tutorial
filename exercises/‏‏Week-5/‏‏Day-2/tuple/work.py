from asyncio.windows_events import NULL
import numbers


my_tuple = ('a', 'b', 'c', 'd')
# print(my_tuple[0])  # output:﻿'a'
# print(my_tuple[3])  # output:'﻿d'
# print(my_tuple[4])  # IndexError: tuple index out of range


nested_tuple = ("shoobert", [10, 20, 30], (0, 2.0, 3.5))
# nested index
# print(nested_tuple[0][5])  # output:﻿ 'e'
# print(nested_tuple[1][1])  # output: 20


my_tuple = ('a', 'b', 'c', 'd')
# print(my_tuple[-1])  # output:'d'


my_tuple = ("aaa", "bbb", "ccc", "ddd")
# Accessing elements 2nd and 4th
# print(my_tuple[1:4])  # output: ('bbb', 'ccc', 'ddd')


my_tuple = ("aaa", "bbb", "ccc", "ddd")
# Accessing elements 2nd and 4th
# print(my_tuple[-3:-1])  # output: ('bbb', 'ccc')


my_tuple = ("aaa", "bbb", "ccc", "ddd")
# Accessing elements 2nd and 4th
# print(my_tuple[2:4:2])  # output: ('ccc',)


# So if we want to take the first 5 letters we will do:
# str[:5]

# If we want all the letters from the second letter till the end we will do:
# str[1:]


# If we want to copy the string we will do:
# str[:]


numbers1 = (1, 2, 3)
numbers2 = (4, 5, 6)

total = numbers1 + numbers2
# print(total)  # output: (1, 2, 3, 4, 5, 6)

empty_tuple = tuple()


# spot check 1

numbers = (0, 1, 2, 3, 4, 5, 6, 7, 8, 9)
# print(numbers[::2])


# ex1
my_tuple = (None, NULL, True, False, 1, 'c', 1.2, "str")


# ex2
print(my_tuple[0:4])
print(my_tuple[4:])


# ex3
days = ("Sunday", "Monday", "Tuesday", "Wednesday",
        "Thursday", "Friday", "Saturday")
days = days[:2] + days[3:]
print(days)


# ex4
numbers = (1, 2, 3, 4, 5, 6, 7, 8, 9, 10)
for i in numbers:
    print(i)


# ex5
def reversed_tuple_minus_the_first(tuple):
    return numbers[:0:-1]


print(reversed_tuple_minus_the_first(numbers))


def reversed_tuple_minus_the_last(tuple):
    return numbers[-2::-1]


print(reversed_tuple_minus_the_last(numbers))
