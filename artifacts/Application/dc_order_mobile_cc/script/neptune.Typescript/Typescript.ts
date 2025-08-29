namespace CustomComponent {
    export function foo() {};
    
    export function setOrder(orderId:string) {
        // initOrder(orderId)
        modelAppCtrl.getData().editMode = false;
        modelAppCtrl.refresh();
        modelParams.getData().orderId = orderId;
        modelParams.refresh();
        const data = {
            parameters: {
                orderId: orderId,
            },
        };
        apiGetOrderDetails(data);
    }
    export function setMasterData(masterData) {
        modelMasterData.setData(masterData);
        modelMasterData.refresh();
    }
}
