import pytest
from exercicio3 import email_validation


# isValid("name.surname@gmail.com") V
# isValid("anonymous123@yahoo.co.uk") V
# isValid("anonymous123@...uk") I
# isValid("...@domain.us") I


def test_returns_true_when_insert_valid_email():
    "Com anonymous123@yahoo.co.uk, retorna True"
    assert email_validation("anonymous123@yahoo.co.uk") is True


def test_returns_false_when_insert_invalid_email():
    "Com anonymous123@...uk, retorna um NameError"
    with pytest.raises(
        NameError,
        match="Invalid Email",
    ):
        email_validation("anonymous123@...uk")


def test_returns_false_when_first_character_is_not_a_letter():
    "Com ...@domain.us, retorna um NameError"
    with pytest.raises(
        NameError,
        match="Invalid Email",
    ):
        email_validation("...@domain.us")


def test_returns_typeerror_with_empty_input():
    "Sem parâmetros, retorna um TypeError com a mensagem indicando"
    with pytest.raises(
        TypeError,
        match="missing 1 required positional argument: 'email'",
    ):
        email_validation()
