<script>
export default {
    props: {
      product: {
        type: Object,
        required: true
      }
    },
    methods: {
        imgPath() {
            return `/public/${this.product.frontImage}`;
        }
    }
}
</script>

<template>
    <div class="col-card flex">
        <div class="img">
            <img class="first" :src="imgPath" alt="">
            <img class="hover" src="/public/img/1b.webp" alt="">
            <ul class="labels">
                <li class="label discount">-50%</li>
                <li class="label sustainability">Sostenibilità</li>
            </ul>
            <button class="heart">
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