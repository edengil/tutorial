import pytest


@pytest.fixture
def store():
    items = ("apple", "banana", "orange")
    amount = (2, 2, 1)
    return dict(zip(items, amount))


def buy_banana(store_):
    MIN_NUM_OF_BANANAS = 1
    if store_["banana"] >= MIN_NUM_OF_BANANAS:
        store_["banana"] -= 1
    else:
        print("Not enough bananas")


def buy_two_bananas(store_):
    MIN_NUM_OF_BANANAS = 2
    if store_["banana"] >= MIN_NUM_OF_BANANAS:
        store_["banana"] -= 2
    else:
        print("Not enough bananas")


def test_buy_banana(store):
    bananas = store["banana"]
    buy_banana(store)
    bananas_after = store["banana"]
    assert bananas - 1 == bananas_after, "Student did not fail"


def test_buy_two_bananas(store):
    bananas = store["banana"]
    buy_two_bananas(store)
    bananas_after = store["banana"]
    assert bananas - 2 == bananas_after, "Student did not fail"
