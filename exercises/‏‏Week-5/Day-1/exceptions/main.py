import math
from pickle import EXT2
import warnings

# def recur_fibo(n):
#   warnings.warn("Soon will be removed from this module \ and moved to math package", DeprecationWarning)
#   if n <= 1:
#     return n
#   else:
#     return(recur_fibo(n-1) + recur_fibo(n-2))

# recur_fibo(10)
# warnings.warn("This is ignored", ImportWarning)

# Cause all warnings to always be triggered.
# warnings.simplefilter("always")
# warnings.warn("This is ignored NO MORE", ImportWarning)

# warnings.filterwarnings("always",r".*NO MORE", ImportWarning)
# warnings.warn("This is ignored NO MORE", ImportWarning)


# try:
#   raise ValueError("It is a common hobby to terminate Python programs!")
# except ValueError as exp:
#   print("Caught ValueError exception: ", exp.args)


# while True:
#     try:
#         y = int(input('Please enter a number\n'))
#         print(y)
#     except (ValueError, TypeError) as e:
#         print(f'Error is {e}')


# def raising_exceptions_for_fun(num):
#     if num == 1:
#         raise StopIteration(f"Just because I can {num}")
#     elif num == 2:
#         raise KeyboardInterrupt(f"Just because I can {num}")
#     elif num == 3:
#         raise OSError(f"Just because I can {num}")
#     else:  # We do not have to provide a string
#         raise FileNotFoundError

# try:
#     int(input("Please enter a number, and nothing but a number: "))
# except Exception:
#     print("Something is wrong, cannot tell exactly what...")
# except ValueError:
#     print("Bad choice, I said only numbers!")


class NoMoneyLeft(Exception):
    """That what happens when you use credit card"""
    pass


class DogAteHomework(Exception):
    """Kids use it all the time, but it happens!"""
    pass


class NothingExceptionalHappend(Exception):
    """Just a normal afternoon"""
    pass


try:
    raise NothingExceptionalHappend
    raise DogAteHomework
    # raise NothingExceptionalHappend
except NoMoneyLeft:
    print("Call mommy")
except DogAteHomework:
    print("Call daddy")
except NothingExceptionalHappend:
    print("Call the cops")

# ex1
# dividend = float(input("Enter the dividend: "))
# divisor = float(input("Enter the divisor: "))
# try:
#     quotient = dividend/divisor
#     print(math.floor(quotient))
# except ZeroDivisionError:
#     print("Divisor must be a positive number")


# EX2
# def get_list_element(my_list, index):
#     try:
#         print(my_list[index])
#     except IndexError:
#         print("Index out of range")
#         # outputs   NothingExceptionalHappend   to print_menu(operations)   for all operations indexed  by index index


# get_list_element([1, 2, 3, 4, 5], 8)


# ex3
try:
    age = int(input("How old are you? "))
except ValueError:
    print("Bad choice, I said only numbers!")
