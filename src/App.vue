<script setup lang="ts">
import Header from './components/Header.vue';
import Description from './components/Description.vue';
import SkillsTable from './components/SkillsTable.vue';
import WorksTable from './components/WorksTable.vue';
import Footer from './components/Footer.vue';
import Contact from './components/Contact.vue';
import WorkModalVue from './components/WorkModal.vue';
</script>

<template>
  <Header />
  <Description />
  <SkillsTable class="relative md:bottom-48 bottom-36" />
  <WorksTable />
  <Contact class="relative bottom-32 md:bottom-48" />
  <Footer />
</template>

<style scoped>

</style>
