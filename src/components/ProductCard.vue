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
        originalPrice(product) {
            let isThereDiscount = false;
            let originalPrice = 0;
            for (let i = 0; i < product.badges.length; i++) {
                if (product.badges[i].type == 'discount') {
                    let discount = product.badges[i].value.slice(1,3)
                    originalPrice = product.price/(100-discount)*100;
                    isThereDiscount = true;
                }
            }
            if (isThereDiscount)  {
                return originalPrice.toFixed(2) + ' €'
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
                <span class="oldPrice">{{ originalPrice(product) }}</span>
            </span>
        </div>
    </div>
</template>

<style lang="scss">
</style>