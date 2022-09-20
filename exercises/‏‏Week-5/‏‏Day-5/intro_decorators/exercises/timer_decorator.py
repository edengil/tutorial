from functools import wraps
import time


def timeit(func):
    @wraps(func)
    def timeit_wrapper(*args, **kwargs):
        start_time = time.perf_counter()
        result = func(*args, **kwargs)
        end_time = time.perf_counter()
        total_time = end_time - start_time
        print(
            f'Function {func.__name__}{args} Took {total_time:.4f} seconds')
        return result
    return timeit_wrapper


@timeit
def sum_many(num):
    """
    Simple function that returns sum of all numbers up to the square of num.
    """
    total = sum(x for x in range(0, num))
    return total


sum1 = sum_many(10000000)
sum2 = sum_many(50000000) 
