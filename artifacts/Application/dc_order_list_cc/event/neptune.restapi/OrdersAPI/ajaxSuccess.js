let orders = modelOrders.getData();

for (let i = 0; i < orders.length; i++) {
    let delivery = {
        // area: "D7672AB8-DF66-F011-8F7C-7C1E5288250D",
    };
    let customer;
    if (orders[i].deliveryID) {
        delivery = modelDeliveries.getData().find((del) => del.id == orders[i].deliveryID);
        if (!delivery) {
            delivery = {
                area: "D7672AB8-DF66-F011-8F7C-7C1E5288250D",
            };
        }
    }
    if (orders[i].customerId) {
        customer = modelCustomers.getData().find((cust) => cust.id === orders[i].customerId);
    }

    orders[i].searchStr =
        JSON.stringify(Object.values(orders[i]).join(";")) +
        ";" +
        JSON.stringify(Object.values(delivery).join(";")) +
        ";" +
        JSON.stringify(customer.companyName);

    orders[i].area = delivery.area; //Na
    orders[i].companyName = customer.companyName;
    orders[i].tourStr = delivery.tour || "5";
}
modelOrders.setData(orders);
modelOrders.refresh();
toolListFilter.fireLiveChange();
