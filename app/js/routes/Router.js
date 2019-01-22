import Home from 'Js/modules/home'
import HomeView from 'View/modules/homeView.html'

import Detail from 'Js/modules/detail'
import DetailView from 'View/modules/detailView.html'

export const Route = {
    routes: {
        home: {
            module: Home,
            view: HomeView,
            hash: null
        },
        detail: {
            module: Detail, 
            view: DetailView,
            hash: null
        }
    },

    buildHome () {
        $chord.render(this.routes.home.view, this.routes.home.module);
    },

    buildDetail () {
        $chord.render(this.routes.detail.view, this.routes.detail.module);
    },
    
    init () {
        // build default route (the /)
        this.buildHome();
    }
}