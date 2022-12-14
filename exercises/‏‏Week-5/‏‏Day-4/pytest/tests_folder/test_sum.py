def sum(num1, num2):
    return num1 + num2


def get_name():
    return "shoobert"


def test_sum_with_zero():
    assert sum(
        0, 1) == 2, "Test failed! Wrong total when adding regular number with zero"


def test_sum_regular():
    assert sum(
        1, 2) == 3, "Test failed! Wrong total when adding two regular numbers"


def test_get_name():
    assert get_name() == "Shoobert", "oops, i got a wrong name"
