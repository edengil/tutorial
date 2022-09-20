
import decimal
from math import expm1
import os
# print(ord('C'))  # 67


res = ""

for c in "abc":
    code = ord(c)
    incremented_code = code + 1
    incremented_char = chr(incremented_code)
    res += incremented_char

# print(chr(ord("M")))
#
# print(ord("4"))

# or

# print("".join([chr(ord(c)+1) for c in "abc"]))


def print_unicode_table(start, end):
    for i in range(start, end+1):
        print(f"{i}:{chr(i)}")


# print_unicode_table(90000, 100000)
# print("This is a new\n dawn")
# print(r"This is a new\n dawn")
byte_string = b'ABC'
# print(b'ABC')
byte_string = b'ABC'
# for x in byte_string:

#     print(x)
print(bytes([65, 66, 67]))  # ABC

print(b'ABC'.hex())  # 414243

# print("ABC".encode('ascii'))
# print("ABC".encode('utf-8'))


# for b in "ABC😂".encode("ascii"):
#   print(b)
# UnicodeEncodeError: 'ascii' codec can't encode character '\U0001f602' in position 3: ordinal not in range(128)


# for b in "ABC😂".encode("utf-8"):
#     print(b)
print("ABC😂".encode('utf-8'))


# ex1
def to_upper(c):
    if (ord(c) <= 122 and ord(c) >= 97):
        return chr(ord(c)-32)
    return c


print(to_upper("c"))


def upper(str):
    return ("".join(to_upper(c) for c in str))


print(upper("I love Python!"))    # "I LOVE PYTHON!"


def encode(str):
    return ("".join("%s" % (ord(c)) + " " for c in str))


print(encode("Hello"))    # "72 101 108 108 111"


def decode(str):
    return ("".join("%s" % chr(int(c)) for c in str.split()))


print(decode("72 101 108 108 111"))   # "Hello"
print(decode(encode("Hello")))        # "Hello"


def get_word_value(word):
    i = 0
    for c in word:
        i += ord(c)-96
    return i


print(get_word_value("day"))    # 4 + 1 + 25 = 30


def encode(msg, n):
    i = ""
    for c in msg:
        if (ord(c) <= 90 and ord(c) >= 65):
            if (ord(c)+n > 90):
                i += chr(ord(c)+n - 25)
            else:
                i += chr(ord(c)+n)
        else:
            i += c
    return i


print(encode("ABXYZ", 3))   # "DEABC"


def decode(msg, n):
    i = ""
    for c in msg:
        if (ord(c) <= 90 and ord(c) >= 65):
            if (ord(c)-n < 65):
                i += chr(ord(c)-n + 25)
            else:
                i += chr(ord(c)-n)
        else:
            i += c
    return i


print(decode("DEABC", 3))    # "ABXYZ"


def string_number_to_int(str_number):
    i = 0
    for c in str_number:
        if ord(c) <= 58 and ord(c) >= 48:
            i = i*10
            i += ord(c) - 48
        else:
            return
    return i


print(string_number_to_int("10"))       # output: 10
print(string_number_to_int("123"))      # output: 123
print(string_number_to_int("99"))       # output: 99
print(string_number_to_int("ABC"))


print("01")

print(bin(5))
