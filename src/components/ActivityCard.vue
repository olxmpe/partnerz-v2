<script setup lang="ts">
import { ref } from 'vue';

const interests = ref<Interest[]>([{ label: "intéret 1", isSelected: false }, { label: "intéret 2", isSelected: false }, { label: "intéret 3", isSelected: false }])
</script>
<template>
    <div class="card">
        <div class="img"></div>
        <p class="card-title">Activité Random</p>
        <p>Paris 14</p>
        <div class="flex labels">
            <div v-for="interest in interests" class="label">{{ interest.label }}</div>
        </div>

    </div>
</template>
<style scoped lang="scss">
.card {
    width: 20rem;


    .img {
        aspect-ratio: 1;
        width: 100%;
        background-color: grey;
        border-radius: 20px;
        margin-bottom: 0.5rem;
    }

    .card-title {
        font-weight: var(--semibold);
    }

    .labels {
        gap: 0.5rem;
        padding: 0.5rem 0;
    }
}
</style>