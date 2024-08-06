<script>
export default {
    data() {
        return  {
        like: false
        }
    },
    props: {
      product: {
        type: Object,
        required: true
      }
    },
    methods: {
        likeToggle(){
            this.like = !this.like
        },
        getImgPath(imgFile) {
            let imgPath = '/img/' + imgFile
            return imgPath;
        },
        isThereDiscount(product) {
            for (let i = 0; i < product.badges.length; i++) {
                if (product.badges[i].type == 'discount') {
                    return true
                }
            }
        },
        originalPrice(product) {
            let originalPrice = 0;
            for (let i = 0; i < product.badges.length; i++) {
                if (product.badges[i].type == 'discount') {
                    let discount = product.badges[i].value.slice(1,3)
                    originalPrice = product.price/(100-discount)*100;
                } 
            } return originalPrice.toFixed(2) + ' €'
        }
    }
}
</script>

<template>
    <div class="col-card flex">
        <div @dblclick="likeToggle()" class="img">
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
        </div>
        <button @click="likeToggle()" :class="{ like: this.like }" class="heart">
                <font-awesome-icon :icon="['fas', 'heart']" />
        </button>
        <div class="description">
            <span class="brand">{{ product.brand }}</span>
            <h1 class="product">{{ product.name }}</h1>
            <span class="price">
                <span v-if="isThereDiscount(product)" class="discountPrice" >{{ product.price }} €  </span>
                <span v-else>{{ product.price }} €  </span>
                <span v-if="isThereDiscount(product)" class="oldPrice">{{ originalPrice(product) }}</span>
            </span>
        </div>
    </div>
</template>

<style lang="scss">
</style>