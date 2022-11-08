"use strict"


const {createApp} = Vue;

createApp({

    data() {
        return {
            mails : [],
            prova: 'sicazzo'
        }
    },

    methods:{
        rndArr(arr) {
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((el)=>{
            arr.push(el.data.response)
            })
            
        },

        cleanArr(){
            this.mails.splice(0);
            for(let i = 0; i < 10; i++){
                this.rndArr(this.mails)
            }
        }
    },

  

    mounted () {
        for(let i = 0; i < 10; i++){
            this.rndArr(this.mails)
        };
    },



}).mount('#app')