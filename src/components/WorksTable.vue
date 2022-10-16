<script setup lang="ts">
import { onMounted, ref } from 'vue';
import Work from './Work.vue';

const workList = ref([]);

async function readWorksDetails() {
    const data = await fetch('src/workDetails.json').then(res => res.json());
    console.log(data);
    return data;
}

onMounted(async () => workList.value = await readWorksDetails());

</script>

<template>
    <div id="works" class="works-table-main-container">
        <h2 class="works-table-title">My works</h2>
        <div class="works-container">
            <template v-for="work in workList">
                <Work :name="work.name" :description="work.description" :image="work.img" :github="work.github"
                    :view="work.viewLink" />
            </template>
        </div>

    </div>
</template>

<style scoped>
.works-table-main-container {
    position: relative;
    top: -60px;
    width: 85%;
    margin-left: auto;
    margin-right: auto;
}

.works-table-title {
    margin-bottom: 60px;
    font-family: 'europanuova', sans-serif;
    font-weight: 500;
    font-size: 30px;
    text-align: center;
    color: var(--title-color);
}

.works-container {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
}


@media screen and (max-width:760px) {
    .works-table-main-container {
        top: -100px;
    }
}
</style>