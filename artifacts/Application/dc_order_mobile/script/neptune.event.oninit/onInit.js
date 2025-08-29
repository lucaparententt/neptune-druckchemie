console.log("DC ORDER")
if (modelUser.getData()&& modelUser.getData().customer && modelUser.getData().customer.id){

orderList.initOrderListByCustomerId(modelUser.getData().customer.id);
App.to(PageOrderList);
}
    

