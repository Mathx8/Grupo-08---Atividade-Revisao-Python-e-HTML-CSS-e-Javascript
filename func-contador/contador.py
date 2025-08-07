import string

def contator(frase):
  
    frase = frase.lower()
    frase = frase.translate(str.maketrans('', '', string.punctuation))

    palavras = frase.split()

    contagem = {}
    for palavra in palavras:
        contagem[palavra] = contagem.get(palavra, 0) + 1

    return contagem


resultado = contator("Esse exercício é um exercício fácil ou difícil")
print(resultado)
