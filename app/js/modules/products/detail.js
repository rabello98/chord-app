export default {
    component: {
        navigateToEdit () {
            $route.go({ name: 'products.edit', params: { product_id : '5341'} })
        },

        navigateToIndex () {
            $route.go({ name: 'products.index', params: { product_id : '5341'} })
        }
    },

    beforeCreate (params) {
        
    },

    afterCreate () {
        
    },

    beforeRemove () {
        
    },

    afterRemove () {
        
    }
}