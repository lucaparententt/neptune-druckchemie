let deliveries = modelDeliveries.getData();
debugger;
for (let i = 0; i < deliveries.length; i++) {
   
    let customer;
    // if (deliveries[i].customerId) {
    //     customer = modelCustomers.getData().find((cust) => cust.id === deliveries[i].customerId);
    // }

    deliveries[i].searchStr =
        JSON.stringify(Object.values(deliveries[i]).join(";"));// +
        // ";" +
        // JSON.stringify(customer.companyName);

    deliveries[i].area = deliveries[i].area || "D7672AB8-DF66-F011-8F7C-7C1E5288250D"; //Na
    // deliveries[i].companyName = customer.companyName;
    deliveries[i].tourStr =  deliveries[i].tour || "5";
}
modelDeliveries.setData(deliveries);
modelDeliveries.refresh();
toolListFilter.fireLiveChange();
