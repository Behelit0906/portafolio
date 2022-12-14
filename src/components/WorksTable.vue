<script setup lang="ts">
import { onMounted, ref } from 'vue';
import Work from './Work.vue';
import workDetails from '../assets/workDetails.json';

type work = {
    name: string;
    description: string;
    img: string
    github: string
    viewLink: string
};

const workList = ref<work[]>([]);

async function readWorksDetails() {
    const data = JSON.parse(JSON.stringify(workDetails));
    return data;
}

onMounted(async () => workList.value = await readWorksDetails());

</script>

<template>
    <section id="works" class=" bg-mainColor pt-28 pb-48 md:pb-72 px-11 rounded">
        <h2 class="font-europanuova text-white text-center text-3xl mb-11">Personal projects</h2>
        <div class="flex flex-col sm:flex-row gap-y-6 flex-wrap">
            <template v-for="work in workList">
                <Work :name="work.name" :description="work.description" :image="work.img" :github="work.github"
                    :view="work.viewLink" />
            </template>
        </div>

    </section>
</template>