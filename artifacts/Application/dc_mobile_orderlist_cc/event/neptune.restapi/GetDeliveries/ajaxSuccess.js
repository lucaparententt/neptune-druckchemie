let options = {};
const deliveryId = modelInitParams.getData().deliveryId;
if (deliveryId) {
    options.parameters = {
        deliveryId,
    };
}

const customerId = modelInitParams.getData().customerId;
if (customerId) {
    options.parameters = {
        customerId,
    };
}
apiOrdersAPI(options);
