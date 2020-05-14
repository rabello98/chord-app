import pageNotFound from 'Js/modules/errors/pageNotFound'
import pageNotFoundView from 'View/modules/errors/pageNotFound.html'

export const errors = [
    {
        module: pageNotFound,
        view: pageNotFoundView,
        path: '/Error',
        name: 'pageNotFound'
    }
]
