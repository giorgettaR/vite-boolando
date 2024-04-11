<script>
import HeaderSection from './components/HeaderSection.vue';
import MainSection from './components/MainSection.vue';
import FooterSection from './components/FooterSection.vue';


export default {
  data(){
    return {
      dataz: '1 1dato'
    }
  },
  components: {
    HeaderSection,
    MainSection,
    FooterSection,
  }
}
</script>

<template>
  <div class="page">
    <HeaderSection/>
    <MainSection/>
    <FooterSection/>
  </div>
</template>

<style lang="scss">
@use './style/general.scss';

.page {
  display: flex;
  flex-direction: column;
}
</style>