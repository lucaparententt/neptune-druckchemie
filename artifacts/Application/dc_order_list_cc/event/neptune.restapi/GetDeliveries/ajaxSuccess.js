let options = {};
const deliveryId = modelInitParams.getData().deliveryId;
if (deliveryId) {
    options.parameters = {
        deliveryId,
    };
}
apiOrdersAPI(options);
