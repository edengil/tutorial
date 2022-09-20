import pytest


def fibonacci_of(n):
    if n in {0, 1}:  # Base case
        return n
    return fibonacci_of(n - 1) + fibonacci_of(n - 2)  # Recursive case


print(fibonacci_of(7))


@pytest.mark.parametrize("num, answerToCheck", [(7, 13), (1, 12)])
def test_fibonacci_of(num, answerToCheck):
    assert fibonacci_of(num) == answerToCheck, "Passing numbers are incorrect"
