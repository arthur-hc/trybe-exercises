def get_order(people):
    left = []
    right = []
    order_list = []
    next_person = None
    for tuple in orders:
        left.append(tuple[0])
        right.append(tuple[1])
    for person in left:
        if person not in right:
            next_person = person
            break
    initial_dict_list = dict(people)
    while len(order_list) <= len(initial_dict_list):
        if len(order_list) == 0:
            order_list.append(next_person)
        order_list.append(initial_dict_list[next_person])
        next_person = initial_dict_list[next_person]
    return order_list


orders = [
    ("fernanda", "rafa"),
    ("fran", "daniel"),
    ("mirian", "gabriel"),
    ("matheus", "yasmin"),
    ("giovanni", "fernanda"),
    ("rafa", "fran"),
    ("daniel", "mirian"),
    ("gabriel", "matheus"),
]

print(get_order(orders))


def get_order2(orders):
    if len(orders) == 0:
        return []
    orders_hash = {}
    left = []
    right = []
    for person1, person2 in orders:
        orders_hash[person1] = person2
        if person1 in right:
            right.remove(person1)
        else:
            left.append(person1)
        if person2 in left:
            left.remove(person2)
        else:
            right.append(person2)

    answer = [left[0]]
    person = left[0]
    while person in orders_hash:
        answer.append(orders_hash[person])
        person = orders_hash[person]
    return answer


print(get_order2(orders))
