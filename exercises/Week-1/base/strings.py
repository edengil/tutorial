begin = "Just an innocent"
end = " sentence"

print(begin.replace("innocent", "awesome") + end)


usual_morning_sleep = "Mother: Wake up, you'll be late to Python lesson!"

# In University
if usual_morning_sleep.startswith("Mother"):
    print("Me: Mom, I don't feel so well today.")


if "Python" in "I love Python":
    print("Yay!")


"Want more?".endswith("?")


inp = "That keeps me searching for a heart of gold... And I'm getting old."
print(inp.find("gold"))  # 39
print(inp.find("Silver"))  # Returns -1 if absent


i = "Have a cookie, cookie.".index("cookie")
print(i)

# j = "Have a cookie, cookie.".index("chuky")
# print(j) # throws error


print("i have small expectations".upper())
print("PEOPLE TELL ME THAT I'M TOO DRAMATIC".lower())


print("ten reasons why i love python".title())
# Ten Reasons Why I Love Python


adjective = "sweet"
another_adjective = "wonderful"
noun = "world"


greeting = "Hello to my {} and {} {}".format(
    adjective, another_adjective, noun)


greeting = f"Hello to my {adjective} and {another_adjective} {noun}"
