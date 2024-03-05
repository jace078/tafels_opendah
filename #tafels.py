#tafels

def print_tafel(tafel):
    for i in range(1, 11):
        print(f"{tafel} x {i} = {tafel * i}")

def controleer_tafel(tafel):
    for i in range(1, 11):
        antwoord = int(input(f"Wat is {tafel} x {i}? "))
        if antwoord == tafel * i:
            print("Correct!")
        else:
            print("Fout! Het juiste antwoord is:", tafel * i)

print("Kies een optie:")
print("1. Print de hele tafel")
print("2. Zelf antwoorden invoeren")

optie = int(input("Optie: "))

tafel = int(input("Welke tafel wil je oefenen? "))

if optie == 1:
    print_tafel(tafel)
elif optie == 2:
    controleer_tafel(tafel)
else:
    print("Ongeldige optie. Kies 1 of 2.")

