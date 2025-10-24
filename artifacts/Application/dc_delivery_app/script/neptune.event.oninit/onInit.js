debugger;
var DaysTotal = 35;
var UUID;


// Calendar.setMinDate(getCurrentYear().start);
// Calendar.setMaxDate(getCurrentYear().end);
// removeNonWorkingDays();
// setTourDatesForYear();

var year = new Date().getFullYear().toString();

const options = {
    parameters: {
        startDate: getSelectedDay(),// todayFormatted, // Optional
        endDate: getSelectedDay()//todayFormatted, // Optional
    },
};

// apigetAppointments(options);

setTimeout(function () {
    // modelSPC1.setData(appointmentsObj.appointments)
    // modelMMAppointments.setData(appointmentsObj);
    // modelMMAppointments.refresh();
    // modelSPC1.refresh();
    
}, 1000);
