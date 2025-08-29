const binding = ProductList.getBinding("items");

const value = this.getValue();
// Multiple Filters using OR

const filter = new sap.ui.model.Filter({
    filters: [
        new sap.ui.model.Filter("number", "Contains", value),
        new sap.ui.model.Filter("description", "Contains", value),
    ],
    and: false,
});
binding.filter([filter]);
