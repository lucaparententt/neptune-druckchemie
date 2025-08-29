var binding = tbOrders.getBinding("items");
if (binding) {
    var filterArray = [];

    filterArray.push(
        new sap.ui.model.Filter({
            filters: [
                new sap.ui.model.Filter("companyName", "Contains", toolListFilter.getValue()),
                new sap.ui.model.Filter("searchStr", "Contains", toolListFilter.getValue()),
                // new sap.ui.model.Filter("address", "Contains", toolListFilter.getValue()),
                // new sap.ui.model.Filter("postalCode", "Contains", toolListFilter.getValue()),
                // new sap.ui.model.Filter("city", "Contains", toolListFilter.getValue()),
                // new sap.ui.model.Filter("province", "Contains", toolListFilter.getValue()),
                // new sap.ui.model.Filter("vatNumber", "Contains", toolListFilter.getValue()),
                // new sap.ui.model.Filter("email", "Contains", toolListFilter.getValue()),
                // new sap.ui.model.Filter("phoneNumber", "Contains", toolListFilter.getValue()),
            ],
            and: false,
        })
    );

    // $.each(MultiComboBoxTour.getSelectedKeys(), function (i, key) {
    //     filterArray.push(new sap.ui.model.Filter("tourStr", "EQ", key));
    // });

    // $.each(MultiComboBoxArea.getSelectedKeys(), function (i, key) {
    //     filterArray.push(new sap.ui.model.Filter("area", "EQ", key));
    // });

    // $.each(MultiComboBoxAccount.getSelectedKeys(), function (i, key) {
    //     filterArray.push(new sap.ui.model.Filter("accountId", "EQ", key));
    // });
    filterArray.push(new sap.ui.model.Filter("isDefault", "EQ", cBoxIsDefault.getSelected()));
    binding.filter(filterArray);

    // const sorters = [];
    // if (!cBoxIsDefault.getSelected() && !modelInitParams.getData().deliveryId) {
    //     sorters.push(new sap.ui.model.Sorter("companyName", true, true));
    // }

    // // Apply Sorting/Grouping
    // binding.sort(sorters);
}
