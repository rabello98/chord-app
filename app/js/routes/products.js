import index from 'Js/modules/products/index'
import indexView from 'View/modules/products/indexView.html'

import edit from 'Js/modules/products/edit'
import editView from 'View/modules/products/editView.html'

import detail from 'Js/modules/products/detail'
import detailView from 'View/modules/products/detailView.html'

export const products = [
    {
        module: index,
        view: indexView,
        path: '/Products/Index',
        name: 'products.index'
    },
    {
        module: edit,
        view: editView,
        path: '/Products/Edit/(:product_id)',
        name: 'products.edit'
    },
    {
        module: detail,
        view: detailView,
        path: '/Products/Detail/:product_id',
        name: 'products.detail'
    }
]
