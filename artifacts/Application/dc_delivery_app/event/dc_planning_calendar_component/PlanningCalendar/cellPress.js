// The following parameters are available via oEvent.getParameter("parameterName"); 
// 
// startDate - object
// endDate - object
// 
const selectedDay = oEvent.getParameter("endDate");
//PlanningCalendar_SPC1.getStartDate().toISOString();

globalThis.selectedDay = selectedDay.toISOString();
setStatistics();
