<script>
export default {
    props: {
      product: {
        type: Object,
        required: true
      }
    },
    methods: {
        getImgPath(imgFile) {
            let imgPath = '/public/img/' + imgFile
            return imgPath;
        },
        NoDiscountPrice(product) {
            let isTHereDiscount = false;
            let NoDiscountPrice = 0;
            for (let i = 0; i < product.badges.length; i++) {
                if (product.badges[i].type == 'discount') {
                    let discount = product.badges[i].value.slice(1,3)
                    NoDiscountPrice = product.price/discount*100;
                    isTHereDiscount = true;
                }
            }
            if (isTHereDiscount)  {
                return NoDiscountPrice.toFixed(2)
            }
        }
    }
}
</script>

<template>
    <div class="col-card flex">
        <div class="img">
            <img class="first" :src="getImgPath(product.frontImage)" alt="">
            <img class="hover" :src="getImgPath(product.backImage)" alt="">
            <ul class="labels">
                <li 
                    v-for="(badge) in product.badges"
                    class="label"
                    :class="badge.type"
                    > 
                    {{ badge.value }}
                    
                </li>
            </ul>
            <button :class="product.isInFavorites ? 'fav':''" class="heart">
                &#10084;
        </button>
        </div>
        <div class="description">
            <span class="brand">{{ product.brand }}</span>
            <h1 class="product">{{ product.name }}</h1>
            <span class="price">
                {{ product.price }} €
                <span class="old">{{ NoDiscountPrice(product) }}</span>
            </span>
        </div>
    </div>
</template>

<style lang="scss">
</style>