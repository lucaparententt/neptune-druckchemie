// Use MessageToast
debugger;
if (!modelUser.getData().customer) {
    // Use MessageToast
    sap.m.MessageToast.show("Client Id is not correct. Please, try again!");
} else {
    orderList.initOrderListByCustomerId(modelUser.getData().customer.id);
    sap.m.MessageToast.show("User Authenticated");
    App.to(PageOrderList);
}
