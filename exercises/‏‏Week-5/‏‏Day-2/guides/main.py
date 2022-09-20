
# import math
# from math import sqrt, factorial, isqrt
# from math import factorial as fact
# # from <module> import <function> as <alias>


# # If we want to import all the functions in a module we can use the *:
# # from math import *


# # abs(-1)  # 1


# # # factorial(5)
# # print(math.factorial(5))
# # print(math.ceil(1.2))
# # print(math.sqrt(25))


# # print(sqrt(250))
# # print(fact(6))

# # Spot Check 1

# print(math.floor(-5.3))
# print(math.ceil(math.tan(16.8)))


# def area(n, l):
#     return (n * math.pow(l, 2))/(4 * math.tan(math.pi/n))


# 4
# In this case we will say that the url_utils module is inside the utils package.
# from utils.math import fractions
# from utils import get_fraction
# from utils import url_utils

# # Assuming parse_url is a function inside the url_utils module.
# url_utils.parse_url("https://translate.google.com/")


# #{
# #Another option would be:
# from utils.url_utils import parse_url

# parse_url("https://translate.google.com/")
# #}
# main.py

import sys
from data.users import admin
from config import password
from utils.string_utils import first_character
print(password)
print(admin)
print(first_character("import"))


# print(sys.builtin_module_names)
print(sys.path)
# sys.path.append("kuku/cookie/kushkush")
# some_file.py
# ​if __name__ == "__main__":
#   print("This is the main script")
