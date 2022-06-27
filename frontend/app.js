const API_URL = "https://fakestoreapi.com";

let app = new Vue({
    el:'#app',
    data:{
        // test:"success",
        products:[],
        currentPage:1,
    },
    methods:{
        switchPage: function(page){
            this.currentPage = page;
        },
    },
    created: function(){
        fetch(API_URL+"/products").then(response =>{
            response.json().then(data=>{
                this.products = data;
                console.log(data);
            });
        });

    },

    
})