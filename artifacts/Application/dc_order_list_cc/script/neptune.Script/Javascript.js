function getCustomerById(customerId, property) {
    let customerObj = modelCustomers.getData().find((c) => c.id === customerId);
    if (customerObj && property) {
        return customerObj[property];
    } else {
        return customerObj;
    }
}

function getDeliveryById(deliveryId, property) {
    let deliveryObj = modelCustomers.getData().find((c) => c.id === deliveryId);
    if (deliveryObj && property) {
        return deliveryObj[property];
    } else {
        return deliveryObj;
    }
}

function getMDattributeByKey(type, key, property, keyfield = "id") {
    let mdObj = modelMasterData.getData()[type].find((c) => c[keyfield] === key);
    if (mdObj && property) {
        return mdObj[property];
    } else {
        return mdObj;
    }
}


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