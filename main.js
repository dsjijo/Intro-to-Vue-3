const app = Vue.createApp({
    data() {
        return {
            cart: [],
            premium: true
        }
    },
    methods: {
        updateCart(productId) {
            this.cart.push(productId)
        },
        removeFromCart(productId) {
            this.cart.pop(productId)
        },
    }
})