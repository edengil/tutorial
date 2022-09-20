

class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age

    def introduce(self):
        print("Hi there, I am " + self.name)

# output: Liam is 38 years old


person1 = Person("Liam", 38)
person2 = Person("Alex", 22)
person3 = Person("Luis", 19)
person4 = Person("Ben", 27)


imaginary_friends = [
    Person("Liam", 38),
    Person("Alex", 22),
    Person("Luis", 19),
    Person("Ben", 27)
]


p1 = Person("Jezrien", 102)
p2 = Person("Tal", 96)
p1.introduce()  # outputs: Hi there, I am Jezerien
p2.introduce()  # outputs: Hi there, I am Tal

# for buddy in imaginary_friends:

#     print(buddy.name + " is my friend. Really.")


# print(person1.name + " is " + str(person1.age) + " years old")


# spot check 1
class Restaurant:
    def __init__(self, name, ratings, is_vegetarian):
        self.name = name
        self.ratings = ratings
        self.is_vegetarian = is_vegetarian

    def get_menu(self):
        print("We have vegetables") if (
            self.is_vegetarian) else print("We have meat")


r1 = Restaurant("Zoozaazo", 4, False)
r2 = Restaurant("Top La Pompei", 3, False)
r3 = Restaurant("El Viego", 5, True)


# spot check 2
r1.get_menu()  # outputs: We have meat
r3.get_menu()  # outputs: We have vegetables
