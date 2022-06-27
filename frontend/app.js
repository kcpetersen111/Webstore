const API_URL = "https://fakestoreapi.com";

Vue.component("product",{
    template:`
    <div>
        <h1>{{item.title}}</h1>
        <h3>{{item.price}}</h3>
        <h2>{{item.description}}</h2>
        <img v-bind:src="item.image" style="max-height:100px; max-width:100px;">
        <div @click="addToCartCallback(item)" >Add to cart</div>
    </div>
    `,
    props:[
        "item",
        "add-to-cart-callback",
    ],
    data:function(){
        return{};
    },
    methods:{

    },
});

Vue.component("productcheckout",{
    template:`
    <div>
        <h1>{{item.title}}</h1>
        <h3>{{item.price}}</h3>
        <h2>{{item.description}}</h2>
        <img v-bind:src="item.image" style="max-height:100px; max-width:100px;">
        <div @click="addToCartCallback(item)" >Add to cart</div>
        <div @click="removeItemCallback(index)">Remove from cart</div>
    </div>
    `,
    props:[
        "item",
        "add-to-cart-callback",
        "remove-item-callback",
        "index",
    ],
    data:function(){
        return{};
    },
    methods:{

    },
});

// Vue.component("")

let app = new Vue({
    el:'#app',
    data:{
        // test:"success",
        products:[],
        currentPage:1,
        cart:[],
    },
    methods:{
        switchPage: function(page){
            this.currentPage = page;
        },
        addToCart: function(item){
            console.log(item);
            this.cart.push(item);
        },
        removeFromCart: function(index){
            this.cart.splice(index,1);
        },
        getProducts:function(){
            fetch(API_URL+"/products").then(response =>{
                response.json().then(data=>{
                    this.products = data;
                    console.log(data);
                });
            });
        },
    },
    computed:{
        totalPrice: function(){
            let current =0;
            for (let i = 0; i < this.cart.length; i++) {
                current+=this.cart[i].price;
                
            }
            return current
        },
    },
    created: function(){
        this.getProducts();
    },

    
})