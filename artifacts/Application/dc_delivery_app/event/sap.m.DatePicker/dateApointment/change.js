// The following parameters are available via oEvent.getParameter("parameterName"); 
// 
// value - string
// 
// debugger;
const dateValue = this.getDateValue();//oEvent.getParameter("dateValue"); 
// setCalendarDate(dateValue);
this.setValue(formatDate(dateValue));
