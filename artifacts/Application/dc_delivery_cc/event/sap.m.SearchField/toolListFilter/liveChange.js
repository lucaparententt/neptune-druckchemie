var binding = tbDeliveries.getBinding("items");
var filterArray = [];
debugger;;
filterArray.push(
    new sap.ui.model.Filter({
        filters: [
            new sap.ui.model.Filter("searchStr", "Contains", toolListFilter.getValue()),

        ],
        and: false,
    })
);

$.each(MultiComboBoxTour.getSelectedKeys(), function (i, key) {
    filterArray.push(new sap.ui.model.Filter("tour", "Contains", key));
});

$.each(MultiComboBoxArea.getSelectedKeys(), function (i, key) {
    filterArray.push(new sap.ui.model.Filter("area", "EQ", key));
});
$.each(MultiComboBoxWeeks.getSelectedKeys(), function (i, key) {
    filterArray.push(new sap.ui.model.Filter("week", "EQ", key));
});



binding.filter(filterArray);
