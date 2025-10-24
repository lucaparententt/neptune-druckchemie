// The following parameters are available via oEvent.getParameter("parameterName");
// //
// // item - sap.m.SegmentedButtonItem
// //
// const weeks = getWeeksForTour(Number(this.getSelectedKey()));

// let md = modelMasterData.getData();
// const toursFiltered = md.tours.filter((t) => t.tour == this.getSelectedKey());
// let filteredAreas = [];
// for (let i = 0; i < toursFiltered.length; i++) {
//     let area = md.aree.find((a) => a.areaCode === toursFiltered[i].areaCode);
//     filteredAreas.push(area);
// }
// modelmComboBoxAree.setData(filteredAreas);
// md.weeks = weeks;
// modelMasterData.setData(md);
// modelMasterData.refresh();

onSelectionchangeTour(this.getSelectedKey())