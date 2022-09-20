def reduce():

    def count(*args):
        counter = 0
        # nonlocal counter
        for i in args:
            counter += i
        print(counter)
    return count


def max_arguments():

    def iner(*args):
        max_num = 0
        for i in args:
            if i > max_num:
                max_num = i
        print(max_num)
    return iner


func = max_arguments()
func(1)
func(1, 2, 3, 4, 5)
func()
func(1, 2)


employee = {
    "name": "Momo",
    "age": 61,
    "salary": 10000
}


def generating(key, amount=1):
    num = amount

    def iner(employee):
        nonlocal num
        employee[key] += amount
    return iner


func_age = generating("age")
func_salary = generating("salary", 1000)


while employee["age"] < 70:
    func_age(employee)
    if (employee["age"] != 70):
        func_age(employee)
        func_salary(employee)

print(employee["age"])
print(employee["salary"])
