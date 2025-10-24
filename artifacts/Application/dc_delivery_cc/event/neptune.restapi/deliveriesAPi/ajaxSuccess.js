/**
 * Name: DruckChemieSC
 * Description: Druck Chemie Server Script
 * 
 * Path: /getCustomers
 * Method: GET
 * 
 */
var options = {};

apiGetCustomers(options);
const weeksArray = getWeeksOfYear(new Date().getFullYear(),true);
let md = modelMasterData.getData();
md.weeks = weeksArray;
