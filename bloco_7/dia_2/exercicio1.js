const order = {
    name: 'Rafael Andrade',
    phoneNumber: '11-98763-1416',
    address: {
      street: 'Rua das Flores',
      number: '389',
      apartment: '701',
    },
    order: {
      pizza: {
        margherita: {
          amount: 1,
          price: 25,
        },
        pepperoni: {
          amount: 1,
          price: 20,
        }
      },
      drinks: {
        coke: {
          type: 'Coca-Cola Zero',
          price: 10,
          amount: 1,
        }
      },
      delivery: {
        deliveryPerson: 'Ana Silveira',
        price: 5,
      }
    },
    payment: {
      total: 60,
    },
  };
  
  const customerInfo = (order) => {
    // Adicione abaixo as informações necessárias.
    const deliveryMessage = `Olá ${order.order.delivery.deliveryPerson}, entrega para: ${order.name}, Telefone: ${order.phoneNumber}, ${order.address.street}, Nº:${order.address.number}, AP: ${order.address.apartment}.`
    console.log(deliveryMessage)
    // console.log(customerMessage)
  }
  
  customerInfo(order);
  
  const orderModifier = (order) => {
    // Adicione abaixo as informações necessárias.
    const newOrder = {
      name: 'Luiz Silva',
      order: {
        pizza: 'muzzarella, calabresa',
        drinks: 'Coca-Cola Zero',
      },
      payment: {
        total: 50
      }
    }
    const customerMessage = `Olá ${newOrder.name}, o total do seu pedido de ${newOrder.order.pizza} e ${newOrder.order.drinks} é R$${newOrder.payment.total}`
    console.log(customerMessage)
  }
  
  orderModifier(order);