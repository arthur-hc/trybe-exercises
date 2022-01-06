# Exercício 4 Baseado no exercício anterior, escreva uma função que, dado uma
# lista de emails, deve retornar somente os emails válidos. Caso uma exceção
# ocorra, apenas a escreva na tela.
from exercicio3 import email_validation


def get_valid_emails(email_list):
    valid_emails = []
    for email in email_list:
        try:
            email_validation(email)
            valid_emails.append(email)
        except Exception as e:
            print(e)
    print(valid_emails)
