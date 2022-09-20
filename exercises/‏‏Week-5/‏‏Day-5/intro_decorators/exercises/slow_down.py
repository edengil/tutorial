from functools import wraps
import time


def timeit(func):
    @wraps(func)
    def timeit_wrapper(*args, **kwargs):
        result = func(*args, **kwargs)
        time.sleep(1)
        print(result)
        return result
    return timeit_wrapper


@timeit
def sum_many(num):
    """
    Simple function that returns sum of all numbers up to the square of num.
    """
    total = sum(x for x in range(0, num))
    return total


sum1 = sum_many(10)
sum2 = sum_many(50) 
