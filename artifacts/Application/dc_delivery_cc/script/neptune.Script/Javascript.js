function formatDate(date) {
    if (!date) return "";

    let d = new Date(Number(date));
    if (isNaN(d.getTime())) return "";

    let month = "" + (d.getMonth() + 1);
    let day = "" + d.getDate();
    let year = d.getFullYear();

    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;

    return [year, month, day].join("-");
}


function formatNumber(value) {
    return Number(value).toLocaleString('it-IT', {
        minimumFractionDigits: 0,
        maximumFractionDigits: 2
    });
}



function getWeeksOfYear(year = new Date().getFullYear(),isFullRange) {
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
        let start = new Date(date);
        const end = new Date(date);
        end.setDate(end.getDate() + 6);

        // Includi la settimana se termina oggi o in futuro
        if (end >= today || isFullRange) {
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