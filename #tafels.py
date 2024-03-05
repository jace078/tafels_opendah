#tafels

def oefen_tafels(tafel):
    for i in range(1, 11):
        print(f"{tafel} x {i} = {tafel * i}")
tafel = int(input("Welke tafel wil je oefenen? "))
oefen_tafels(tafel)
