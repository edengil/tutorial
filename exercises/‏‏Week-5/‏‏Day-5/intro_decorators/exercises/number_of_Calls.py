from functools import wraps


def call_counter(func):
    @wraps(func)
    def call_counter_wrapper(*args, **kwargs):
        call_counter_wrapper.calls += 1
        result = func(*args, **kwargs)
        print(call_counter_wrapper.calls)
        return result
    call_counter_wrapper.calls = 0
    return call_counter_wrapper


@call_counter
def sum_many(num):
    """
    Simple function that returns sum of all numbers up to the square of num.
    """
    total = sum(x for x in range(0, num))
    return total


sum1 = sum_many(10)
sum1 = sum_many(10)
sum1 = sum_many(10)
sum1 = sum_many(10)
sum1 = sum_many(10)
sum1 = sum_many(10)
sum1 = sum_many(10)
sum1 = sum_many(10)
sum2 = sum_many(50)
