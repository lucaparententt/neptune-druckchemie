const productId = this.getTooltip();

let item = modelOrder.getData().orderItems.find((item) => item.productId === productId);
let newQty = item.qty + 1;
ModelData.UpdateField(modelOrder.getData().orderItems, "productId", productId, "qty", newQty);
modelOrder.refresh();
setDetailsTableHeaderText()
