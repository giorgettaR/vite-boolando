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
    <HeaderSection/>
    <MainSection/>
    <FooterSection/>
</template>

<style lang="scss">
@use './style/general.scss';
</style>