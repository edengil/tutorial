from re import T


def is_prime(number):

    if number > 1:
        # check for factors
        for i in range(2, number):
            if (number % i) == 0:
                # if factor is found, set flag to True
                # break out of loop
                return False
    else:
        return False
    return True


def are_prime_numbers(*args):
    if len(args) == 0:
        return False
    for i in args:
        if is_prime(i) == False:
            return False
    return True
