# Exercício 3 Faça uma função que valide um e-mail nos seguintes critérios
# abaixo, lançando uma exceção quando o valor for inválido. Endereços de email
# válidos devem seguir as seguintes regras:
# Devem seguir o formato nomeusuario@nomewebsite.extensao;
# O nome de usuário deve conter somente letras, dígitos, traços e underscores ;
# O nome de usuário deve iniciar com letra;
# O nome do website deve conter somente letras e dígitos;
# O tamanho máximo da extensão é três.


import re

regex = re.compile(
    r"([-!#-'*+/-9=?A-Z^-~]+(\.[-!#-'*+/-9=?A-Z^-~]+)*|\"([]!#-[^-~ \t]"
    "|(\\[\t -~]))+\")@([-!#-'*+/-9=?A-Z^-~]+"
    "(.[-!#-'*+/-9=?A-Z^-~]+)*|[[\t -Z^-~]*])"
)


def email_validation(email):
    if re.fullmatch(regex, email) and email[0].isalpha():
        return True
    else:
        raise NameError("Invalid Email")
