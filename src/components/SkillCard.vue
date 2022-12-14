<script setup lang="ts">
const props = defineProps<{
    icon: string
    skillName: string
    languagues: string
    tools?: string[]
}>()

const iconPath = new URL(`../assets/img/${props.icon}`, import.meta.url).href;
</script>

<template>
    <div class="sm:w-1/3 w-full sm:py-[5%] py-[13%] font-europa border-[0.5px] border-slate-200">
        <div class="w-1/2 mx-auto mb-6 text-center">
            <div class="flex justify-center w-[85px] h-[85px] mx-auto mb-5 bg-[#5BE9B9] rounded-full">
                <img :src="iconPath" alt="card icon" class="w-1/2">
            </div>
            <p class="mt-[10px] text-2xl font-medium font-europanuova text-titleColor">{{ props.skillName }}
            </p>
        </div>
        <div class="w-4/5 text-bodyColor mx-auto text-center">
            <p class="mb-[50px]">
                <slot></slot>
            </p>
            <div>
                <p class="text-lg text-mainColor">Languagues I speak</p>
                <p>{{ props.languagues }}</p>
            </div>
            <div>
                <p v-if="props.tools" class="pt-[35px] text-lg text-mainColor mb-3">Dev tools</p>
                <ul class="space-y-2">
                    <li v-for="tool in props.tools">
                        {{ tool }}
                    </li>
                </ul>
            </div>

        </div>
    </div>

</template>