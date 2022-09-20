import primes


def test_is_three_prime():
    assert primes.is_prime(3) == True


def test_five_six_seven():
    assert primes.are_prime_numbers(5, 6, 7) == True, "Test failed! Wrong "


def test_one():
    assert not primes.is_prime(0) == True
