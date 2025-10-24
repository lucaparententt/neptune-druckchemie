//format dates
function formatDate(date) {
    let d = new Date(date);
    let month = "" + (d.getMonth() + 1);
    let day = "" + d.getDate();
    let year = d.getFullYear();

    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;

    return [year, month, day].join("-");
}
function generateUUID() {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
        var r = (Math.random() * 16) | 0,
            v = c === "x" ? r : (r & 0x3) | 0x8;
        return v.toString(16);
    });
}
// Function to get all dates between two dates
function getAllDatesInRange(startDate, endDate) {
    let dateArray = [];
    let currentDate = new Date(startDate);
    while (currentDate <= endDate) {
        dateArray.push(formatDate(currentDate));
        currentDate.setDate(currentDate.getDate() + 1);
    }
    return dateArray;
}
function removeSpecialDatesByTooltip(tooltipToRemove) {
    // Get all special dates from the calendar
    var specialDates = Calendar.getSpecialDates();

    // Iterate over the special dates in reverse to avoid issues while removing items
    for (var i = specialDates.length - 1; i >= 0; i--) {
        var specialDate = specialDates[i];

        // Check if the tooltip matches the one to remove
        if (specialDate.getTooltip() === tooltipToRemove) {
            // Remove the special date from the calendar
            Calendar.removeSpecialDate(specialDate);
        }
    }
}
function parseDate(dateString) {
    var parts = dateString.split("-");
    return new Date(parts[0], parts[1] - 1, parts[2]);
}
function addDataToSelect(select, data) {
    data.forEach(function (item) {
        var oItem = new sap.ui.core.Item({
            key: item.key,
            text: item.text,
        });
        select.addItem(oItem);
    });
}

function getInitials(phrase) {
    // Restituisce le iniziali di una parola composta
    return phrase
        .split(" ") // Divide la stringa in parole
        .map((word) => word[0].toUpperCase()) // Prende la prima lettera e la converte in maiuscolo
        .join(""); // Unisce le iniziali
}

// Get the Calendar instance by ID

function setCalendarDate(date) {
    // Clear previous selections
    Calendar.removeAllSelectedDates();

    // Create a new date instance (e.g., March 14, 2025)
    var oDateRange = new sap.ui.unified.DateRange({
        startDate: date, // Month index starts from 0 (0 = January)
        endDate: date, // Month index starts from 0 (0 = January)
    });

    // Add the selected date
    Calendar.addSelectedDate(oDateRange);
}

function getTuorByDate(date) {
    const inputDate = new Date(date);
    const startOfYear = new Date(inputDate.getFullYear(), 0, 1);
    const weekNumber = Math.ceil(
        ((inputDate - startOfYear) / (1000 * 60 * 60 * 24) + startOfYear.getDay() + 1) / 7
    );
    return ((weekNumber - 1) % 4) + 1;
}

function getWeekByDate(date) {
    const inputDate = new Date(date);
    const startOfYear = new Date(inputDate.getFullYear(), 0, 1);
    const weekNumber = Math.ceil(
        ((inputDate - startOfYear) / (1000 * 60 * 60 * 24) + startOfYear.getDay() + 1) / 7
    );
    return weekNumber;
}

function saveAppointments() {
    let appointment = AppointmentForm.getModel().getData();
    const newDate = dateApointment.getValue();
    appointment.appointmentDate = newDate;

    if (appointment === undefined) return;

    var key = appointment.id;

    const appointments = PlanningCalendar.getAppointments();
    var data = ModelData.FindFirst(appointments.appointments, "id", key);
    data.startDateTime = updateDateKeepTime(data.startDateTime, newDate);
    data.endDateTime = updateDateKeepTime(data.endDateTime, newDate);

    ModelData.Update(appointments.appointments, "id", key, data);
    PlanningCalendar.calendarUpdateSyncArray(data);
    PlanningCalendar.setAppointments(appointments);
    modelAppointments.setData(PlanningCalendar.getAppointments());
    modelAppointments.refresh();
    setStatistics();
}

function getAppointmentList(startDate, endDate, customerId) {
    var options = {
        parameters: {
            startDate: startDate,
            endDate: endDate,
            customerId: customerId,
        },
    };

    apigetAppointments(options);
}

function getCurrentYear(isIso) {
    const currentYear = new Date().getFullYear();
    const startOfYear = new Date(currentYear, 0, 1); // 1 gennaio dell'anno corrente
    const endOfYear = new Date(currentYear, 11, 31, 23, 59, 59, 999); // 31 dicembre dell'anno corrente
    if (isIso) {
        return { start: startOfYear.toISOString(), end: endOfYear.toISOString() };
    } else {
        return { start: startOfYear, end: endOfYear };
    }
}

function setTourDatesForYear() {
    for (let week = 1; week <= 52; week += 4) {
        addTourDates(week, "1");
    }
    for (let week = 2; week <= 52; week += 4) {
        addTourDates(week, "2");
    }
    for (let week = 3; week <= 52; week += 4) {
        addTourDates(week, "3");
    }
    for (let week = 4; week <= 52; week += 4) {
        addTourDates(week, "4");
    }
}

function addTourDates(weekNumber, tour) {
    const tooltip = "T" + tour;
    const type = "Type0" + tour;
    const currentYear = new Date().getFullYear();
    const baseDate = new Date(currentYear, 0, 1);
    const firstMonday = new Date(
        baseDate.setDate(baseDate.getDate() + ((1 - baseDate.getDay() + 7) % 7))
    );
    const weekStartDate = new Date(firstMonday);
    weekStartDate.setDate(firstMonday.getDate() + (weekNumber - 1) * 7);

    for (let i = 0; i < 4; i++) {
        // Monday to Thursday
        const tourDate = new Date(weekStartDate);
        tourDate.setDate(weekStartDate.getDate() + i);

        const dateRange = new sap.ui.unified.DateTypeRange({
            startDate: tourDate,
            endDate: tourDate,
            type: type,
            tooltip: tooltip,
        });
        Calendar.addSpecialDate(dateRange);
    }
}

function removeNonWorkingDays() {
    const specialDates = Calendar.getSpecialDates();
    specialDates.forEach((dateRange) => {
        if (dateRange.getTooltip() === "Non-Working Day") {
            Calendar.removeSpecialDate(dateRange);
        }
    });
}

function formatDateDDMMYYYY(isoString) {
    const date = new Date(isoString);
    const day = String(date.getUTCDate()).padStart(2, "0");
    const month = String(date.getUTCMonth() + 1).padStart(2, "0");
    const year = date.getUTCFullYear();
    return `${day}/${month}/${year}`;
}

function getAppointmentState(appointments_status) {
    let formattedText;

    switch (appointments_status) {
        case 1:
            formattedText = "Information";
            break;
        case 2:
            formattedText = "Success";
            break;
        case 3:
            formattedText = "Warning";
            break;
        default:
            formattedText = "Error";
    }

    return formattedText;
}

function addEmptyOrderItem() {
    newItemDialog.open();
    // Shell.to(oPageNewItem)
}

function addOrderItem(item) {
    let order = modelOrder.getData();
    if (order.orderItems.find((i) => i.productId === item.productId)) {
        sap.m.MessageToast.show("Item already in the list");
        return;
    }
    order.orderItems.push(item);
    modelOrder.setData(order);
    modelOrder.refresh();

    newItemDialog.close();
}

// Funzione per aggiornare anno, mese e giorno mantenendo orario
function updateDateKeepTime(originalDate, newDate) {
    const updatedDate = new Date(newDate);
    originalDate = new Date(originalDate);
    const day = updatedDate.getDate().toString();
    const month = originalDate.getMonth().toString();
    const year = originalDate.getFullYear().toString();
    const hh = originalDate.getHours().toString();
    const mm = originalDate.getMinutes().toString();
    const ss = originalDate.getSeconds().toString();
    const ms = originalDate.getMilliseconds().toString();
    const lastDate = new Date(year, month, day, hh, mm, ss, ms);
    return lastDate.toISOString();
}

function getSelectedDay() {
    const currentDate = new Date();
    return globalThis.selectedDay || currentDate.toISOString();
}

function setStatistics() {
    // var today = new Date();
    // const todayFormatted = formatDate(today);
    dateApointment.setValue(new Date(getSelectedDay()));
    TitleCurrentTourNumber.setText(getTuorByDate(getSelectedDay()));
    TitleWeekNumber.setText(getWeekByDate(getSelectedDay()));
    TitleTruckDAFAppNum.setText(getTotAppointmensByTruck("DAF").length);
    TitleTotDAFWeightNumber.setText(getTotWeightByTruck("DAF"));
    TitleTruckGHAppNum.setText(getTotAppointmensByTruck("GH").length);
    TitleTotGHWeightNumber.setText(getTotWeightByTruck("GH"));
    TitleTruckMANAppNumber.setText(getTotAppointmensByTruck("MAN").length);
    TitleTotMANWeightNumber.setText(getTotWeightByTruck("MAN"));

    modelListOrdersDAF.setData(getOrdersListByTruck("DAF"));
    modelListOrdersGH.setData(getOrdersListByTruck("GH"));
    modelListOrdersMAN.setData(getOrdersListByTruck("MAN"));
}

function getTotWeightByTruck(truck) {
    return modelAppointments
        .getData()
        .appointments.filter(function (app) {
            return (
                app.truck === truck &&
                app.startDateTime &&
                app.startDateTime.substring(0, 10) === getSelectedDay().substring(0, 10)
            );
        })
        .reduce(function (total, app) {
            return total + Number(app.totalWeight); // o netWeight, o altro campo peso
        }, 0);
}

function getTotAppointmensByTruck(truck) {
    return modelAppointments.getData().appointments.filter(function (app) {
        return (
            app.truck === truck &&
            app.startDateTime &&
            app.startDateTime.substring(0, 10) === getSelectedDay().substring(0, 10)
        );
    });
}

function getOrdersListByTruck(truck) {
    const appointments = modelAppointments.getData().appointments.filter(function (app) {
        return (
            app.truck === truck &&
            app.startDateTime &&
            app.startDateTime.substring(0, 10) === getSelectedDay().substring(0, 10)
        );
    });
    let orderList = [];

    orderList = appointments.map((app) => app.order.orderHeader);

    return orderList;
}

function saveOrder(isConfirmed,sendNotification) {
    let order = modelOrder.getData().order;
    
    const totals = calculateTotals();

    const totUnits = {};
    if (totals.totalKg > 0) totUnits.KG = totals.totalKg;
    if (totals.totalLt > 0) totUnits.LT = totals.totalLt;
    if (totals.totalPz > 0) totUnits.PZ = totals.totalPz;
    if (totals.totalOther > 0) totUnits.OTHER = totals.totalOther;

    order.totWeight = totals.totalWeight;
    order.totUnits = totUnits;

    if (isConfirmed) {
        order.status = 2;
    }
    let orderItems = modelOrder.getData().orderItems;
    var options = {
        data: {
            order,
            orderItems,
        },
        parameters:{
            sendNotification
        }
    };

    apiSaveOrder(options);
}
function initOrder(orderId) {
    modelAppCtrl.getData().editMode = false;
    modelAppCtrl.refresh();
    modelParams.getData().orderId = orderId;
    modelParams.refresh();
    const data = {
        parameters: {
            orderId: orderId,
        },
    };
    apiGetOrderDetails(data);
}
function setDetailsTableHeaderText() {
    let totals = calculateTotals();
    let parts = [`Items (${totals.itemsLength})`, `Total Weight: ${totals.totalWeight}`];
    parts.push(`Total Units:`);
    if (totals.totalLt > 0) parts.push(`  ${formatNumber(totals.totalLt)} LT`);
    if (totals.totalPz > 0) parts.push(`  ${formatNumber(totals.totalPz)} PZ`);
    if (totals.totalKg > 0) parts.push(`  ${formatNumber(totals.totalKg)} KG`);
    if (totals.totalOther > 0) parts.push(`  ${formatNumber(totals.totalOther)} Other`);

    let headerText = parts.join("  ");
    productsTable.setHeaderText(headerText);
}
function calculateTotals() {
    let items = modelOrder.getData().orderItems;
    let products = modelProducts.getData();
    let totalWeight = 0;
    let totalLt = 0;
    let totalPz = 0;
    let totalKg = 0;
    let totalOther = 0;
    let itemsLength = 0;
    if (items) {
        itemsLength = items.length;
        for (let i = 0; i < items.length; i++) {
            const product = products.find((p) => p.id === items[i].productId);
            let weight = Number(product.grossWeight);
            totalWeight += Number(items[i].qty) * weight;

            let qtyPerItem = Number(product.qtyPerItem);
            let itemNum = Number(items[i].qty) * qtyPerItem;
            switch (product.unit) {
                case "LT":
                    totalLt += itemNum;
                    break;
                case "KG":
                    totalKg += itemNum;
                    break;
                case "PZ":
                    totalPz += itemNum;
                    break;
                default:
                    totalOther += itemNum;
            }
        }
    }
    return {
        totalWeight,
        totalLt,
        totalPz,
        totalKg,
        totalOther,
        itemsLength,
    };
}

function formatNumber(value) {
    return Number(value).toLocaleString('it-IT', {
        minimumFractionDigits: 0,
        maximumFractionDigits: 2
    });
}
