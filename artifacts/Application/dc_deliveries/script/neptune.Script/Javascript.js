// function getWeeksOfYear(year = new Date().getFullYear()) {
//     const weeks = [];
//     let date = new Date(year, 0, 1);

//     // Allinea al primo lunedì
//     while (date.getDay() !== 1) {
//         date.setDate(date.getDate() + 1);
//     }

//     let weekNumber = 1;
//     while (date.getFullYear() === year || (date.getFullYear() === year + 1 && weekNumber <= 52)) {
//         const start = new Date(date);
//         const end = new Date(date);
//         end.setDate(end.getDate() + 6);

//         weeks.push({
//             week: weekNumber,
//             start: formatDate(start),
//             end: formatDate(end),
//         });

//         date.setDate(date.getDate() + 7);
//         weekNumber++;
//     }

//     return weeks;

//     function formatDate(d) {
//         return d.toISOString().slice(0, 10);
//     }
// }

function getWeeksOfYear(year = new Date().getFullYear()) {
    const weeks = [];
    const today = new Date();
    today.setHours(0, 0, 0, 0); // Normalizza l'ora

    let date = new Date(year, 0, 1);

    // Allinea al primo lunedì dell'anno
    while (date.getDay() !== 1) {
        date.setDate(date.getDate() + 1);
    }

    let weekNumber = 1;
    while (date.getFullYear() === year || (date.getFullYear() === year + 1 && weekNumber <= 52)) {
        const start = new Date(date);
        const end = new Date(date);
        end.setDate(end.getDate() + 6);

        // Includi la settimana se termina oggi o in futuro
        if (end >= today) {
            weeks.push({
                week: weekNumber,
                start: formatDate(start),
                end: formatDate(end),
            });
        }

        date.setDate(date.getDate() + 7);
        weekNumber++;
    }

    return weeks;

    function formatDate(d) {
        return d.toISOString().slice(0, 10);
    }
}

// 1. Funzione per ottenere le settimane di un tour
function getWeeksForTour(tourNumber, year = new Date().getFullYear()) {
    const allWeeks = getWeeksOfYear(year);
    if (tourNumber <= 4) {
        return allWeeks.filter((w) => ((w.week - 1) % 4) + 1 === tourNumber);
    }
    return allWeeks;
}

// 2. Funzione per ottenere il tour da una settimana
function getTourForWeek(weekNumber) {
    return ((weekNumber - 1) % 4) + 1;
}

function getNextWeekInfo(year = new Date().getFullYear()) {
    const weeks = getWeeksOfYear(year);
    const today = new Date();

    // Trova la settimana corrente
    // const currentWeek = weeks.find((w) => {
    //     const start = new Date(w.start);
    //     const end = new Date(w.end);
    //     return today >= start && today <= end;
    // });
const currentWeek = weeks[0]
    if (!currentWeek) return null;

    const nextWeekIndex = currentWeek.week; // +1 rispetto all'attuale
    // const nextWeek = weeks[nextWeekIndex]; // array 0-based, quindi va bene così
    const nextWeek = weeks.find((w) => w.week === nextWeekIndex + 1);
    if (!nextWeek) return null;

    return {
        week: nextWeek.week,
        start: nextWeek.start,
        end: nextWeek.end,
        tour: getTourForWeek(nextWeek.week),
    };
}

function initWizard() {
    const weeksArray = getWeeksOfYear();
    let md = modelMasterData.getData();
    md.weeks = weeksArray;
    modelMasterData.setData(md);
    modelMasterData.refresh();
    let nextWeek = getNextWeekInfo();
    WeekSelect.setSelectedKey(nextWeek.week);
    debugger;
    headerInfo.setText(formatDate(Date.now()))
    oApp.to(oPageNewDelivery);
    tourSegmentBtn.setSelectedKey("5");
    onSelectionchangeTour("5");
}
function getTruckByCode(code) {
    return modelMasterData.getData().trucks.find((t) => t.code === code);
}
function getCustomersFromIndices(selectedCustomersIds) {
    let customersArray = [];
    if (!selectedCustomersIds) {
        selectedCustomersIds = clientsTable.getSelectedIndices();
    }
    for (let i = 0; i < selectedCustomersIds.length; i++) {
        const index = selectedCustomersIds[i];
        let currentData = modelclientsTable.getData()[index];
        customersArray.push(currentData);
    }
    return customersArray;
}

function creaSpedizione() {
    const tourCode = tourSegmentBtn.getSelectedKey();
    const weekNumber = WeekSelect.getSelectedKey();
    const areaId = mComboBoxAree.getSelectedKey();
    const areaObj = modelMasterData.getData().aree.find((a) => a.id === areaId);
    const selectedCustomersIds = clientsTable.getSelectedIndices();
    const selectedCustomers = getCustomersFromIndices(selectedCustomersIds);
    const truck = getTruckByCode(truckSegmentBtn.getSelectedKey());
    const deliveryCode = "D" + weekNumber + areaObj.areaCode+Date.now();
    const driverId = DriversSelect.getSelectedKey();
    const deliveryDate = DatePickerShipment.getValue();
    let delivery = {
        deliveryCode: deliveryCode,
        tour: tourCode,
        week: weekNumber,
        area: areaId,
        deliveryDate: deliveryDate,
        truck: truck.id,
        driverId: driverId,
    };
    console.log(delivery);
    console.log(selectedCustomers);
    var options = {
        data: {
            delivery,
            customers: selectedCustomers,
        },
    };

    apisaveDelivery(options);
}

function onSelectionchangeTour(key) {
    debugger;
    const weeks = getWeeksForTour(Number(key));

    let md = modelMasterData.getData();

    let filteredAreas = [];
    if (Number(key) <= 4) {
        const toursFiltered = md.tours.filter((t) => t.tour == key);
        for (let i = 0; i < toursFiltered.length; i++) {
            let area = md.aree.find((a) => a.areaCode === toursFiltered[i].areaCode);
            filteredAreas.push(area);
        }
    } else {
        filteredAreas = md.aree;
    }

    modelmComboBoxAree.setData(filteredAreas);
    md.weeks = weeks;
    modelMasterData.setData(md);
    modelMasterData.refresh();
}

function formatNumber(value) {
    return Number(value).toLocaleString("it-IT", {
        minimumFractionDigits: 0,
        maximumFractionDigits: 2,
    });
}
