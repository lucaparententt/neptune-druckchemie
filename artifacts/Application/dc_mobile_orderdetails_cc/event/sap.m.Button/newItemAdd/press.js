debugger;
let productId = ProductList.getSelectedItem().getBindingInfo("tooltip").binding.getValue();

let data = {
    orderId: modelOrder.getData().order.id,
    productId: productId,
    qty: 1,
    isDefault: false,
};
addOrderItem(data);
