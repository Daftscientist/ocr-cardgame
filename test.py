cards = {
    ["red", "black"]: ["red"],
}

## write function 
def get_card_color(card):
    for key, value in cards.items():
        if card in value:
            return key[0]