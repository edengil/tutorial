import requests
from data import wordCounter


def is_new_word(word):
    for item in wordCounter:
        if word == item["word"]:
            item["count"] += 1
            return item
    return 1


def more_than_one(str):
    return str.split(" ")
