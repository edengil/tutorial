from functools import wraps


def info_func(func):
    @wraps(func)
    def info_wrapper(*args, **kwargs):
        result = func(*args, **kwargs)
        print(f"args: {args}")
        print(f"kwargs: {kwargs}")
        print(f"return value: {result}")
        print(f"return type: {type(result)}")

        return result
    return info_wrapper


@info_func
def add(num1, num2, **kwargs):

    return num1 + num2


add(1, 2, age=3, text="hello")
