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
                <li class="label discount">-50%</li>
                <li class="label discount">-50%</li>
                <li class="label sustainability">Sostenibilità</li>
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
                <span class="old">29,99 €</span>
            </span>
        </div>
    </div>
</template>

<style lang="scss">
</style>