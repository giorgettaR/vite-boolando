<script>
import ProductCard from '../components/ProductCard.vue';

import { store } from '../store.js';

export default  {
    components: {
        ProductCard,
  },
  data() {
    return {
        products : store.products,
    }
  }
}
</script>

<template>
    <main>
        <section class="products container">
            <div class="row">
                <ProductCard v-for="(product) in products"
                    :product="product"/>
            </div>
        </section>
    </main>
</template>

<style lang="scss">
</style>