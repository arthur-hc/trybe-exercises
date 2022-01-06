import pytest
from exercicio1 import get_num_or_fizzbuzz


def test_returns_correct_phrase_list_according_with_input():
    "Para a lista [1, 2, 3, 5, 15, 45] deve retornar:"
    "[1, 2, 'Fizz', 'Buzz', 'FizzBuzz', 'FizzBuzz]"
    assert get_num_or_fizzbuzz([1, 2, 3, 5, 15, 45]) == [
        1,
        2,
        "Fizz",
        "Buzz",
        "FizzBuzz",
        "FizzBuzz",
    ]


def test_returns_typeerror_with_empty_input():
    "Sem parâmetros, retorna um TypeError com a mensagem indicando"
    with pytest.raises(
        TypeError,
        match="missing 1 required positional argument: 'numbers'",
    ):
        get_num_or_fizzbuzz()


def test_returns_typeerror_when_insert_strings_in_input():
    "Inserir strings no input, retorna um TypeError com a mensagem indicando"
    with pytest.raises(
        TypeError,
        match="not all arguments converted during string formatting",
    ):
        get_num_or_fizzbuzz(["XABLAU"])


def test_returns_typeerror_when_insert_int_in_input():
    "Não passar uma lista, retorna um TypeError com a mensagem indicando"
    with pytest.raises(
        TypeError,
        match="'int' object is not iterable",
    ):
        get_num_or_fizzbuzz(5)
