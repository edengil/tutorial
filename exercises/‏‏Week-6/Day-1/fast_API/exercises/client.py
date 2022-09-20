
from tkinter.tix import TEXT
import requests
from store import store

TEXT = "What item does you want to buy?: "
money = 1000


def price_of_furniture(furniture):

    res = requests.get(f'http://localhost:8000/name/?name={furniture}')
    return (res.json()["price"])


def buy_furniture(furniture, money):
    price = price_of_furniture(furniture)
    if (price is not None):
        int(price)
        if (price > money):
            print("You should get a job.")
        else:
            res = requests.get(f'http://localhost:8000/buy/?name={furniture}')
            money -= price
            return res.json()["inventory"]


txt = input(TEXT)
price = price_of_furniture(txt)
as_to_buy = buy_furniture(txt, money)


if (price != None):
    if as_to_buy != None:
        print(
            f"Congratulations, you've just bought {txt} for {price}. There are {as_to_buy} left now in the store.")

else:
    print(f"There is no {txt} in the store to buy")
