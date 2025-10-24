// The following parameters are available via oEvent.getParameter("parameterName"); 
// 
// value - string
// itemPressed - boolean
// 

debugger;

const selectedKey = this.getSelectedKey();

const data  = modelProducts.getData().find(function(prod) { return prod.id === selectedKey})

modelProductForm.setData(data);

