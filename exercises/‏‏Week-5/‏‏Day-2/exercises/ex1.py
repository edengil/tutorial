import calendar
from re import L, S
from ssl import _PasswordType


def leap_year(year):
    return calendar.isleap(year)


def leap_years(start, emd):
    return calendar.leapdays(start, emd)


print(leap_years(2020, 2080))
print(leap_year(2020))
print(leap_year(2010))

print(calendar.day_name[calendar.weekday(2028, 2, 14)])
