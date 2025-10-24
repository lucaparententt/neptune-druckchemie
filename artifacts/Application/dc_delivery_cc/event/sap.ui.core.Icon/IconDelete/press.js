const deliveryId = oEvent.oSource.getBindingInfo("tooltip").binding.getValue();


var options = {
    parameters: {
        "id": deliveryId
    }
};

apiDeleteDelivery(options);