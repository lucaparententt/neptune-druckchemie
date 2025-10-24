const context = oEvent.oSource.getBindingContext("deliveries");
const data = context.getObject();



// if (sap.ui.Device.system.phone || window.innerWidth < 1600) {
//     oApp.setBusy(true);



//     AppCache.Load("dc_customer_details", {
//         parentObject: oPageDetail,
//         startParams: {
//             PARTNER_GUID: data.id,
//             PARTNER: data.companyName,
//             OWNER: data.OWNER,
//             afterSave: function () {
//                 toolFilterUpdate.firePress();
//             },
//             afterAjax: function () {
//                 oApp.to(oPageDetail);
//                 oApp.setBusy(false);
//             },
//             onBack: function () {
//                 oApp.back();
//             },
//         },
//     });
// } else {
//     sap.n.Shell.loadSidepanel("dc_customer_details", {
//         tabTitle: data.companyName,
//         tabId: `dc_customer_details_${data.customerId}`,
//         resizeable: true,
//         additionaltext: "Customer",
//         startParams: {
//             PARTNER_GUID: data.id,
//             PARTNER: data.companyName,
//             OWNER: data.OWNER,
//             afterSave: function () {
//                 toolFilterUpdate.firePress();
//             },
//         },
//     });
//     //BT@DB - UpgradeFix - v24.11.0 - 21/03/2025 End
// }
