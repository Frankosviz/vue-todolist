
import { ingredienti } from "./data.js";

const { createApp } = Vue;

createApp({
    data() {
        return {
            ingredienti: ingredienti
        }
    },
    methods: {
        
    }
}).mount('#app')