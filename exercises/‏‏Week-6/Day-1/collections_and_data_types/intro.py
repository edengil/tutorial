# x = "Just a string"
# print(id(x))
x = 10
y = x
print(id(x))
print(id(y))
print(id(10))


print(id(x) == id(y))
print(id(y) == id(10))

a = [1, 2]
b = [1, 2]

print(a == b)  # True
print(a is b)  # False

s1 = "Kush"
s2 = "Kush"
print(s1 == s2)           # True
print(s1 is s2)           # True
print(id(s1), id(s2))     # same numbers

l1 = [1, 2]
l2 = [1, 2]
print(l1 == l2)           # True
print(l1 is l2)           # False
print(id(l1), id(l2))     # different numbers


list_ = [3, 4, "Bobby"]
list_str = str(list_)
print(list_str)

dict = {3: "kuku"}
dict_str = str(dict)
print(dict_str)


str_to_int = int("304")
print(str_to_int)

float_to_int = int(3.05)
print(float_to_int)

int_to_float = float(9)
print(int_to_float)


print(len({"a": 1, "b": 2}))
print(len([1, 2, 3]))


4 in [2, 4, 6, 8]    # mutable sequence
4 in {2, 4, 6}      # unordered mutable collection

if "a" in {"a": 1, "b": 2}:
    print("a")  # unordered collection

2 in {"a": 1, "b": 2}   # False


x = [1, 2, 3]
copy = x
x += [4]              # changing the list
print(x)              # [1,2,3,4]
print(copy)           # [1,2,3,4]

y = (1, 2, 3)
copy = y
y += (4,)    # changing the tuple
print(y)     # (1,2,3,4)
print(copy)  # (1,2,3)

a = "always the same"
b = "always the same"
# b += "d"
print(id(a))
print(id(b))

a = [1, 2]
b = [1, 2]
print(id(a))
print(id(b))


numbers = [1, 2, 3, 4, 5]
first_two = numbers[:2]


word = "This is so cool"
part_of_it = word[-4:]
print(part_of_it)

nums = (1, 2, 3)
more_nums = nums + (4, 5, 6)
print(more_nums)
# OR

string = "this is"
string += " not the end"


nums = (1, 2, 3)
duplicated = nums*2
print(duplicated)
