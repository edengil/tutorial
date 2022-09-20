from functools import wraps


def call_counter(func):
    cache = {}

    @wraps(func)
    def call_counter_wrapper(*args, **kwargs):
        if args in cache:
            # print("I was in cache")
            return cache[args]
        else:
            # print("NOT NOT NOT in cache")
            result = func(*args, **kwargs)
            cache[args] = result
            return result
    return call_counter_wrapper


@call_counter
def fibonacci(num):
    print("calculating: ", num)
    if num in {0, 1}:  # Base case
        return num
    return fibonacci(num - 1) + fibonacci(num - 2)  # Recursive case


print(fibonacci(2))
print(fibonacci(4))

@call_counter
def add(x, *, addition=0, more=0):
    print("running  add")
    return x + 1 + addition + more


add(1, addition=0, more=0)
add(2, more=0, addition=0)
add(3, more=0)
add(1)
