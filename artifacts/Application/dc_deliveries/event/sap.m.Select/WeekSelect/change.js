// The following parameters are available via oEvent.getParameter("parameterName"); 
// 
// selectedItem - sap.ui.core.Item
// previousSelectedItem - sap.ui.core.Item
// 
const tour = getTourForWeek(this.getSelectedKey());
tourSegmentBtn.setSelectedKey(tour.toString());
tourSegmentBtn.setSelectedButton(tour.toString());
debugger;
const weekSelected = modelMasterData.getData().weeks.find(w => w.week === Number(this.getSelectedKey()));
DatePickerShipment.setMinDate(new Date(weekSelected.start));
DatePickerShipment.setMaxDate(new Date(weekSelected.end));