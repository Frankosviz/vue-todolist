
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
        // Creo la funzione per sbarrare gli ingredienti che sono stati gia ordinati/acquistati
        toggleAcquistato(id) {
            const ingrediente = this.ingredienti.find((el) => {
                return el.id === id;
            })
            console.log(ingrediente);
            if (ingrediente) {
                ingrediente.acquistato = !ingrediente.acquistato;
            }
        },
        removeItem(id) {
            const i = this.ingredienti.findIndex((el) => {
                return el.id === id
            })
            if (i !== -1) { //questo è il controllo per vedere se non è meno1 per eliminarlo con splice
                this.ingredienti.splice(i, 1);
            }
        },
    }
}).mount('#app')