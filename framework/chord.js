export const Chord = {
    globalModules: {},

    initGlobalModules (modules) {
        this.globalModules = modules
    },

    render (CurrentView, CurrentModule) {
        $('#app').html(CurrentView);
        window[CurrentModule.moduleName] = CurrentModule
    },
}