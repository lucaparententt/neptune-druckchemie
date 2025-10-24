const delectedIndexes = this.getSelectedIndices();
let qtyTotals = {};
let totDefaultOrderWeight = 0;

for (let i = 0; i < delectedIndexes.length; i++) {
    const index = delectedIndexes[i];
    const currentData = modelclientsTable.getData()[index];

    // Somma quantità per unità (defaultOrderQty è un oggetto)
    const qtyObj = currentData.defaultOrderQty || {};
    for (const [unit, value] of Object.entries(qtyObj)) {
        const num = Number(value);
        if (!isNaN(num)) {
            qtyTotals[unit] = (qtyTotals[unit] || 0) + num;
        }
    }

    // Somma peso totale (defaultOrderWeight è un numero o stringa numerica)
    const weight = Number(currentData.defaultOrderWeight);
    if (!isNaN(weight)) {
        totDefaultOrderWeight += weight;
    }
}

// Funzione per formattare numeri con 2 decimali e separatore migliaia
function formatNumber(value) {
    return value.toLocaleString('it-IT', {
        minimumFractionDigits: 0,
        maximumFractionDigits: 2
    });
}

// Funzione per formattare le quantità per unità
function formatTotals(obj) {
    return Object.entries(obj)
        .map(([key, val]) => `${key}:${formatNumber(val)}`)
        .join(" - ");
}

// Imposta le etichette

totCustomers.setText("Customers: " + delectedIndexes.length);
totWeigthTxt.setText("Tot Weight: " + formatNumber(totDefaultOrderWeight));
totItemsTxt.setText("Tot Items: " + formatTotals(qtyTotals));
