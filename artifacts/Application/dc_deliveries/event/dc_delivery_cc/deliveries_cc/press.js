// The following parameters are available via oEvent.getParameter("parameterName"); 
// 
// ctrlKey - boolean
// metaKey - boolean
// 
const deliveryId = oEvent.oSource.getBindingInfo("tooltip").binding.getValue();
console.log("DC ORDER")
orderList.initOrderListByDeliveryId(deliveryId);
detail.setVisible(false);
oApp.to(oPageDetail);