/**
 * Use this namespace to reference objects in your custom component.
 *
 * When using custom components you might have multiple instances of the
 * same custom component. When you add a custom component to an app this
 * namespace is renamed to the custom component object name in the app.
 *
 * E.g. if the custom component object name is myCustomComponent you can call
 * functions from this namespace with myCustomComponent.foo()
 *
 */
namespace CustomComponent {
    export function foo() {}
    export function refreshList() {
        toolFilterUpdate.firePress();
    }
    export function setMasterData(masterData) {
        if (masterData) {
            modelMasterData.setData(masterData);
            modelMasterData.refresh();
            const options = {};
            apiOrdersAPI(options);
        } else {
            apiapiMasterData();
        }
    }
}
