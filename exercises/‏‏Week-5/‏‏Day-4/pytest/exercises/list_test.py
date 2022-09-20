

from sys import flags
from tokenize import String


def num_in_list(num, list):
    return num in list


def str_in_list(*arg):
    for i in arg:
        if (i in my_list) != True:
            return False
    return True


def is_upper_str(list):
    for i in list:
        if isinstance(i, str):
            if i.lower() != i:
                return False
    return True


my_list = ['I', 2, 'Love', 4, 56, 'Coding', "Python", "in", [8, 9, 10]]


def test_number():
    assert num_in_list(3, my_list) == True, "number 3 is not in my_list"
    assert num_in_list(56, my_list), "number 56 is not in my_list"


def test_str():
    # Should assert if "I", "Love" and "Coding" are in my_list
    assert str_in_list('I', "Love", "Coding") == True


def test_upper_str():
    # Should assert if all the strings in my_list are in upper case﻿
    assert is_upper_str(
        my_list) == True, "Not all the strings in my_list are in upper case"


def test_negative():
    # Should assert if number 6 is no﻿t in﻿ my_list - result should be true
    assert not num_in_list(6, my_list)
