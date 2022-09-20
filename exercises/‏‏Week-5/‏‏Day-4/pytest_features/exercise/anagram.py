def anagram(str1, str2):
    if type(str1) == str and type(str2) == str:
        return sorted(str1) == sorted(str2)
    else:
        return False


def test_anagram():
    str1 = ""
    str2 = " "
    assert anagram(str1, str2) == False, "imput not valid"
    str3 = {}
    str4 = ""
    assert anagram(str3, str4) == False, "imput in not a valid string "
