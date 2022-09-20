evens = {2, 44, 24, 62, 78}
s = set()

s = {3, "Yossi", False, (1,), None}
s = set([4, 3, 2, 1])

s = set("Tomorrow never dies")


s = {3, 6, 'bibi', ('Simon', 'Garfunkel')}
s.add(5)

# s.update([11, 22], (55,), ('mimi',))

s = {'Avi', 'Itzik', 'Kobi'}

s.discard('Avi')
s.remove('Itzik')


s = {5, 6, 7, 8, 9}

s.pop()
s.pop()
s.pop()
s.clear()


s1 = {1, 3, 5}
s2 = {2, 4, 22}


s = s1.union(s2)  # {1,3,5,2,4}

ss = s1 | s2  # bitwise operation => {1,3,5,2,4}

s1 = {1, 2, 5}
s2 = {2, 4, 1}

print(s1.intersection(s2))  # {1,2}

print(s1 & s2)


s1 = {1, 2, 5}
s2 = {2, 4, 1}
s1 - s2  # {5}
s1.difference(s2)  # {5}
s1.difference([6, 7, 5])


s1 = {1, 2, 5}
s2 = {2, 4, 1}
print(s1 ^ s2)  # {4,5}
s1.symmetric_difference(s2)
(s1 | s2 - (s1 & s2))


s1 = {1, 2, 3, 4}
s2 = {1, 5, 6, 7}
s3 = {5, 6, 7, 8}

# print(s1.isdisjoint(s2))
# print(s1.isdisjoint(s3))
# print(s2.isdisjoint(s3))


s1 = {'a', 'b', 'c', 'd'}
s2 = {'a', 'b', 'c'}
s3 = {'a', 'b', 'e'}
s4 = {'a', 'b', 'c', 'd'}
s5 = set()

print(s1.issuperset(s2))
print(s1.issuperset(s3))
print(s1.issuperset(s4))
print(s1.issuperset(s5))



lst = [1, 1, 2, 2, 3, 3, 4, 4, 5, 6, 7, 8, 9, 10]

print(set(lst))


s1 = [1, 2, 3, 4, 5, 6]
s2 = [4, 5, 6, 7, 8, 9]

print(set(s1) & set(s2))



fs = frozenset((1, 2, 3, 4))
print(fs)
print(type(fs))

fs = frozenset([1, 2, 3, 4])
print(fs)