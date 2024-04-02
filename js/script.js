
import { ingredienti } from "./data.js";

const { createApp } = Vue;

createApp({
    data() {
        return {
            ingredienti: ingredienti,
            acquistato: ''
        }
    },
    methods: {
        toggleAcquistato(id){
            const ingrediente = this.ingredienti.find((el)=>{
                return el.id === id;
            })
            console.log(ingrediente);
            if(ingrediente){
            ingrediente.acquistato = !ingrediente.acquistato;
        }
    }
    }
}).mount('#app')