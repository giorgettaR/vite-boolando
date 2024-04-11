<script>
import ProductCard from '../components/ProductCard.vue';
import dataProducts from '../assets/db.json';

export default  {
    components: {
        ProductCard,
  },
  data() {
    return {
        products : dataProducts.products,
    }
  },
  mounted() {
    console.log(dataProducts.products[1])
  }
}
</script>

<template>
    <main>
        <section class="products container">
            <div class="row">
                <ProductCard v-for="(product,i) in products"
                    :product="products[i]"/>
            </div>
        </section>
    </main>
</template>

<style lang="scss">
</style>