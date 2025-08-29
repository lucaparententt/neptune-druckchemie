// The following parameters are available via oEvent.getParameter("parameterName"); 
// 
// reason - string
// actual - int
// total - int
// 
setDetailsTableHeaderText()

// var oTable = this.byId("ID_DELLA_TUA_TABELLA");

var oSwipeButton = new sap.m.Button({
    text: "Elimina",
    type: "Reject",
    press: function () {
        var swipedItem = productsTable.getSwipedItem();
        if (swipedItem) {
            // logica per eliminare
            productsTable.removeItem(swipedItem);
            productsTable.swipeOut();
        }
    }
});

productsTable.setSwipeContent(oSwipeButton);
productsTable.setSwipeDirection("BeginToEnd"); // o "Both"
