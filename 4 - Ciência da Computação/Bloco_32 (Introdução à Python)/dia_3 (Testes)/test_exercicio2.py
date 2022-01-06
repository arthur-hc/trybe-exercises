import pytest
from exercicio2 import get_phone_number_by_phrase


def test_returns_correct_phone_number():
    "Com a frase 1-HOME-SWEET-HOME, retorna 1-4663-79338-4663"
    assert (
        get_phone_number_by_phrase("1-HOME-SWEET-HOME") == "1-4663-79338-4663"
    )


def test_returns_correct_phone_number_using_just_numbers():
    "Com 0123456789, retorna 0123456789"
    assert get_phone_number_by_phrase("0123456789") == "0123456789"


def test_returns_typeerror_when_insert_number_in_input():
    "Inserir numbers no input, retorna um TypeError com a mensagem indicando"
    with pytest.raises(
        TypeError,
        match="'int' object is not iterable",
    ):
        get_phone_number_by_phrase(5)


def test_returns_typeerror_with_empty_input():
    "Sem parâmetros, retorna um TypeError com a mensagem indicando"
    with pytest.raises(
        TypeError,
        match="missing 1 required positional argument: 'phrase'",
    ):
        get_phone_number_by_phrase()
