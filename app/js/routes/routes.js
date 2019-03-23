import homeRoutes from 'Js/routes/home/homeRoutes'

export default {
    main: {
        module: homeRoutes.index,
        view: homeRoutes.indexView,
        path: '/Home',
        name: 'home'
    }
}