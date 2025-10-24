


// sap.ui.getCore().attachInit(function (startParams) {
//     debugger;
//     var DaysTotal = 35;
//     var UUID;

//     var today = new Date();
//     const todayFormatted = formatDate(today);
//     dateApointment.setValue(formatDate(today));
//     TitleCurrentTourNumber.setText(getTuorByDate(todayFormatted));
//     TitleWeekNumber.setText(getWeekByDate(todayFormatted));

//     Calendar.setMinDate(getCurrentYear().start);
//     Calendar.setMaxDate(getCurrentYear().end);
//     removeNonWorkingDays();
//     setTourDatesForYear();

//     var year = new Date().getFullYear().toString();

//     const options = {
//         parameters: {
//             startDate: todayFormatted, // Optional
//             endDate: todayFormatted, // Optional
//         },
//     };

//     // CalendarPage.setModel(oModel);
//     const appointmentsObj = {
//         startDate: new Date("2018", "6", "9"),
//         appointments: [
//             {
//                 title: "Meet John Miller",
//                 type: "Type05",
//                 startDate: new Date("2018", "6", "8", "5", "0"),
//                 endDate: new Date("2018", "6", "8", "6", "0"),
//             },
//             {
//                 title: "Discussion of the plan",
//                 type: "Type01",
//                 startDate: new Date("2018", "6", "8", "6", "0"),
//                 endDate: new Date("2018", "6", "8", "7", "9"),
//             },
//             {
//                 title: "Lunch",
//                 text: "canteen",
//                 type: "Type05",
//                 startDate: new Date("2018", "6", "8", "7", "0"),
//                 endDate: new Date("2018", "6", "8", "8", "0"),
//             },
//             {
//                 title: "New Product",
//                 text: "room 105",
//                 type: "Type01",
//                 icon: "sap-icon://meeting-room",
//                 startDate: new Date("2018", "6", "8", "8", "0"),
//                 endDate: new Date("2018", "6", "8", "9", "0"),
//             },
//             {
//                 title: "Team meeting",
//                 text: "Regular",
//                 type: "Type01",
//                 icon: "sap-icon://home",
//                 startDate: new Date("2018", "6", "8", "9", "9"),
//                 endDate: new Date("2018", "6", "8", "10", "0"),
//             },
//             {
//                 title: "Discussion with clients",
//                 text: "Online meeting",
//                 type: "Type08",
//                 icon: "sap-icon://home",
//                 startDate: new Date("2018", "6", "8", "10", "0"),
//                 endDate: new Date("2018", "6", "8", "11", "0"),
//             },
//             {
//                 title: "Discussion of the plan",
//                 text: "Online meeting",
//                 type: "Type01",
//                 icon: "sap-icon://home",
//                 tentative: true,
//                 startDate: new Date("2018", "6", "8", "11", "0"),
//                 endDate: new Date("2018", "6", "8", "12", "0"),
//             },
//             {
//                 title: "Discussion with clients",
//                 type: "Type08",
//                 icon: "sap-icon://home",
//                 startDate: new Date("2018", "6", "8", "12", "0"),
//                 endDate: new Date("2018", "6", "8", "13", "9"),
//             },
//             {
//                 title: "Meeting with the manager",
//                 type: "Type03",
//                 startDate: new Date("2018", "6", "8", "13", "9"),
//                 endDate: new Date("2018", "6", "8", "13", "9"),
//             },
//         ],
//     };

//     apigetAppointments(options);
//     // Custom Init - Happens only once when mounting the component

//     // startParams = Start Parameters from Cockpit Tile application settings (action tab)
//     // Do your stuff

//     // Some things need to be delayed. Run them inside a timeout
//     setTimeout(function () {
//         modelMMAppointments.setData();
//         // modelMMAppointments.setData(oModel.getData());
//         modelMMAppointments.refresh();
//         // SPC1.getModel().setData(appointmentsObj);
//     }, 200);
// });

// // var options = {
// //     parameters: {
// //         where: JSON.stringify({ createdBy: userName, year: year }),
// //     }
// // };
// // // apiRestAPIGetERequests(options);

// // var options2 = {
// //     parameters: {
// //         where: JSON.stringify({ createdBy: userName, year: year }),
// //     },
// // };
// // apiRestAPIGet(options2);
// // var aData = [
// //     { key: "Vacation", text: "Vacation" },
// //     { key: "National Holiday", text: "National Holiday" },
// //     { key: "Sick Leave", text: "Sick Leave" },
// // ];
// // addDataToSelect(SelectReason, aData);
