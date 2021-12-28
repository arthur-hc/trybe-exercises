def analize(text):

    report = ""
    counter_words = len(text.split(" "))
    report += f"Número de palavras = {counter_words}\n"

    char_counter = dict()
    for char in text:
        if char in char_counter:
            char_counter[char] += 1
        else:
            char_counter[char] = 1

    report += f"Ocorrências por caracter = {char_counter}"
    return report


text_to_analyze = (
    "Seremos a primeira escolha para quem quer alcançar profissões "
    "digitais na América Latina. No Brasil e no mundo, milhares de vagas "
    "criadas anualmente no mercado de tecnologia deixam de ser "
    "preenchidas por falta de pessoas qualificadas. Nós trabalhando duro "
    "todos os dias para que as pessoas tenham a oportunidade de trilhar "
    "essas carreiras "
)

print(analize(text_to_analyze))
