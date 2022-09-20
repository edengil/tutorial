def get_my_name():
    return "Eden"


def test_get_my_name1():
    assert get_my_name() == "eden", "Test failed! Wrong total when adding regular number with zero"


def test_get_my_name2():
    assert get_my_name() == "Eden"
