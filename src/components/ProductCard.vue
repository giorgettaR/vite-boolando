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
        // getDiscountPrice(product) {
        //     let price = product.price
        //     let isThereDiscount = (badge) => badge.type === "discount";
        //     if (product.badges.some(isThereDiscount)) {
        //         let discount = product.badges
        //         return price
        //     }
        // }
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
                    v-for="(i) in product.badges"
                    class="label"
                    :class="product.badges[i].type"
                    > 
                    {{ product.badges[i].value }}
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
                <!-- <span class="old">{{ getDiscountPrice() }}</span> -->
            </span>
        </div>
    </div>
</template>

<style lang="scss">
</style>