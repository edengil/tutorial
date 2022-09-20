from asyncore import ExitNow
from this import d


user = {
    "name": "Karolin",
    "username": "ksmart3",
    "age": 27,
    "has_purchased": False
}
# print(user["name"] + " is " + str(user["age"]) + " years old.")
# outputs: Karolin is 27 years old.

student = {
    "name": "koko",
    "age": 42
}


# print(student.get("name"))
# print(student.get("address")) # None
# print(student["address"]) # throws KeyError: 'address'



score = student.get("score", 234789234)
# score = 0


# print(score)


fridge ={
    "milk": 1,
    "bananas":4,
     "juice":2 
}


num_of_milk_bottles = fridge.get("milk")
# if num_of_milk_bottles == 1:
#     print("There is one bottle of milk left")
# else:
#     print("There are " + str(num_of_milk_bottles) + " bottles of milk left")\


exam_scores = {}
exam_scores["Nick"] = 82
exam_scores["Andrew"] = 85
exam_scores["Jessi"] = 91
exam_scores["Missy"] = 96

# print(exam_scores)

exam_scores["Andrew"] = 87
exam_scores["Missy"] += 3

# print(exam_scores)


values_to_add = {"1": 'complete number', "0.5": 'half', "0.25": 'quarter'}
numbers = {'pi': 3.14159265359, 'phi': 1.6180339887, "1": 'complete'}


numbers.update(values_to_add)
# print(numbers)



metrics = {
    "ram": {
        "size": 4,
        "status": "OK"
    },
    "disk": {
        "size": 512,
        "type": "SSD"
    }
}

# print(metrics["ram"]["status"]) # outputs: OK

ram = metrics["ram"]
# now `ram` is a dict with two keys: size and status

# print(ram["status"]) # accessing a dict's key normally



closet = {
    "shirts": {
        "blue": 4,
        "black": 1,
        "white": 13,
        "flamingo-pink": 2
    },
    "pants": {
        "shorts": {
            "purple": 1,
            "red": 2,
            "flamingo-pink": 3
        },
        "jeans": {
            "denim": 8,
            "organic": 1
        }
    },
    "jackets": {}
}
closet_pants = closet["pants"]

closet_pants_shorts =closet_pants["shorts"]
closet_pants_jeans = closet_pants["jeans"]

# print(closet["shirts"]["white"])
# print(closet_pants_shorts["flamingo-pink"])
closet_pants_jeans["organic"] = 7
closet_pants_jeans["denim"] -= 4

# if closet_pants_shorts["flamingo-pink"] > closet["shirts"]["flamingo-pink"]:
#     print("Top")
# else:
#     print("Bottom")


data = {
    "a": 1,
    "b": 2,
    "c": 3
}

other_data = data
other_data["d"] = 4

# print(data) # outputs a dict with keys a, b, c, and d
# print(other_data) # outputs the same dict!


student = {
    "name": "koko",
    "age": 42,
    "level": "A"
}

deleted = student.pop("level")
# print(deleted)

student = {
    "name": "koko",
    "age": 42,
    "level": "A"
}


del student["level"]

# print(student)
person = {
    "name": "koko",
    "age": 17,
    "is vegan": True
}


# for key in person:
#     print(key)

# If we need both keys and values we can use the items() method that returns a key, value pair

# for key,value in person.items():
#     print(key, value)


nums = [2,4,6]
numbers = { str(value): value for value in nums }
print(numbers)

names = ["koko", "momo", "bobo"]


result = {"name" + str(i): v for i,v in enumerate(names)}
print(result)

def get_squares_dictionary(n):
    return {str(i): i**2 for i in range(1,n+1) }





# print(get_squares_dictionary(5) )
# ex1

state = "France"

heads_of_states = {
    "Italy": {
        "president": "Sergio Mattarella",
        "prime minister": "Giuseppe Conte"
    },
    "India": {
        "president": "Ram Nath Kovind",
        "prime minister": "Narendra Modi"
    },
    "France": {
        "president": "Emmanuel Macron",
        "prime minister": "Edouard Philippe"
    }
}

print("The president of",state,"is",heads_of_states[state]["president"],"and the prime minister is",heads_of_states[state]["prime minister"])

# ex2
user_id = 3058
bonus_months = 3

user_months = {
    1552: 18,
    7021: 2,
    532: 12,
    3058: 9,
    1102: 4
}



user_months[user_id] += bonus_months
# print(user_months[user_id])
# print("Giving user " + str(user_id) + " an extra " + str(bonus_months) + " month bonus")



country_populations = {}
country_populations["Ghana"] = 28
country_populations["Brazil"] = 209
country_populations["Mongolia"] = 3
country = ["Ghana","Brazil","Mongolia"]

for key,value in country_populations.items():
    if value >= 50:
        print(key,"is a big country")
    else:
        print(key,"is a small country")





tomato = "Tomato Soup"
onion = "Onion Soup"
carrot = "Carrot Soup"

user_preferences = {
    "Sarah": tomato,
    "Sheila": carrot,
    "Fernando": tomato,
    "Jovan": onion,
    "Simona": carrot
}

soup_recipes = {
    tomato: "Get a bunch of tomatoes, cut them up, and throw them in boiling water",
    onion: "Be prepared to cry",
    carrot: "Find a rabbit, ask him how to make a carrot soup"
}

user = "Simona"

print(soup_recipes[user_preferences[user]])



from collections import Counter

def five_high_freq(text):
    line = text.split()
    return Counter(line).most_common(5)
  

line = "wee wee goo koo goo doo doo so go go yo yo yo yo fo zo"
# print(five_high_freq(line))

longest_length = 15

def is_palindrome(word):
    return word == word[::-1]

def is_lowercase(word):
    return word == word.lower()

def is_digits(word):
    return word.isnumeric()

def is_longer_15(word):
    return len(word) > longest_length

def is_empty(word):
    return word == ""

def exit_program(text=None):
    print("Exit successfully")
    exit(0)


operations = {
    "1": {
        "text": "Palindrome: Check if the input is palindrome",
        "func": is_palindrome
    },
    "2": {
        "text": "Lower: Check if all characters in the input are lowercase",
        "func": is_lowercase
    },
    "3": {
        "text": "Digit: Check if all characters in the input are digits",
        "func": is_digits
    },
    "4": {
        "text": f"Long: Check if the input length is longer than {longest_length}",
        "func": is_longer_15
    },
    "5": {
        "text": "Empty: Check if the input is empty",
        "func": is_empty
    },
    "6": {
        "text": "Exit: Exit successfully from the application",
        "func": exit_program
    }
}
def print_menu(operations):
    print("The available operations are:")
    for operation_id, operation in operations.items():
        operation_text = operation.get("text")
        print(operation_id, "-", operation_text)


def start_app():
    while True:
        print_menu(operations)
        user_operation = input(
            "Please enter the number of the operation you choose: ")
        user_input = input("Enter an input: ")
        operation_object = operations.get(user_operation)
        if operation_object:
            operation_func = operation_object.get("func")
            result = operation_func(user_input)
            print("The answer is: ", result)
        else:
            print("Wrong operation, try again")


# start_app()


print (is_digits("12234"))

class Test:
  def __init__(self):
    self.foo = 11
    self.__baz = 23

  def add(self):
    self.__baz += 1
    print(self.__baz)

instance = Test()
instance.add() 

# print(instance.__baz) 

print(instance._Test__baz) 