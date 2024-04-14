<script>
import HeaderSection from './components/HeaderSection.vue';
import MainSection from './components/MainSection.vue';
import FooterSection from './components/FooterSection.vue';
import axios from 'axios';
import { store } from './store';

export default {
  components: {
    HeaderSection,
    MainSection,
    FooterSection,
  },
  methods: {
    fetchProducts() {
      axios.get('http://localhost:3000/products').then((res) => {
        store.products = res.data;
      })
    }
  },
  created() {
    this.fetchProducts()
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


<!-- Continuate a lavorare nella stessa repo di ieri.
Aggiungiamo lo store al nostro progetto. Create il file
 store.js come avete visto nelle slide.
Questo sarà un oggetto reattivo che conterrà una proprità
 products. Inizialmente valorizzate questa proprietà 
 importando i dati dal json nel file store.js e adattate 
 il resto dei componenti in modo che leggano i dati 
 dallo store.
Successivamente installate la libreria json-server e 
aggiungiamo al package.json lo script "server" 
necessario per avviarlo: “json-server db.json". poi l
anciate il comando npm run server
Attenzione che dovete spostare il file db.json nella 
cartella root del progetto (dove si trova anche il file 
index.html per intenderci)
Infine, facciamo in modo che la nostra App, all’avvio, 
faccia una chiamata get con axios all’endpoint generato 
da json-server andando a salvare l’array di prodotti 
nello store che inzialmente sarà vuoto.
Axios dovete installarlo con npm install axios e poi 
ricordatevi di importarlo nel componente che farà la 
chiamata -->