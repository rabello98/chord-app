import { Router } from './routes/Router'
window.$router = Router

import moment from 'moment'

const global = {
    moment: moment
}

window.globalModules = global

export default {
    render (CurrentView, CurrentModule) {
        $('#app').html(CurrentView);
        window[CurrentModule.moduleName] = CurrentModule
    }
}