
class Artist:
    def __init__(self, name, income):
        self.name = name
        self.income = income

    def perform(self):
        print(self.name + " is performing now")


class Singer(Artist):
    def perform(self):
        print(self.name + " is singing now")


class Actor(Artist):
    def __init__(self, name, income, most_known):
        super().__init__(name, income)
        self.most_known = most_known


s = Singer("Ellie", 400)
a = Actor("Jerome", 450, "Leob")
ar = Artist("Arnie", 210)
print(type(s))
print(type(a))
print(type(ar))

print(isinstance(s, Singer))  # outputs: True
print(isinstance(s, Actor)) # false. 
print(isinstance(s, Artist))  # outputs: True


# spot check

class Rectangle:
    def __init__(self, width, height):
        self.width = width
        self.height = height

    def calculate_area(self):
        return self.height * self.width

    def calculate_perimeter(self):
        return (2 * self.width) + (2 * self.height)


class Square(Rectangle):
    def __init__(self, width):
        super().__init__(width, width)

    def calculate_perimeter(self):
        return 4 * self.width


s = Square(2)
# print(s.calculate_perimeter()) # outputs: 8
# print(s.calculate_area()) # outputs: 4
