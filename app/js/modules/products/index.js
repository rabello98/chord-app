export default {
    component: {
        navigate2Home () {
            $route.go({ name: 'home' })
        },

        navigate2New () {
            $route.go({ name: 'products.edit' })
        },
        
        navigate2Edit () {
            $route.go({ name: 'products.edit', params: { product_id : '5341' } })
        },

        navigate2Detail () {
            $route.go({ name: 'products.detail', params: { product_id : '5341' } })
        }
    }
}