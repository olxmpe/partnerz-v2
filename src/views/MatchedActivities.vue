<script setup lang="ts">
import RefreshIcon from '@/assets/RefreshIcon.vue';
import ActivityCard from '@/components/ActivityCard.vue';

</script>
<template>
    <h3>Based on your answers, here are 3 activities you could like for this weekend.</h3>
    <div class="flex activities">
        <ActivityCard />
        <ActivityCard />
        <ActivityCard />
    </div>
    <div class="button-area">
        <div class="button arrow">
            <RefreshIcon />
        </div>
    </div>
</template>
<style scoped lang="scss">
h3 {
    text-align: center;
    max-width: 30%;
    margin: 3rem auto;
}

.activities {
    gap: 3rem;
    justify-content: center;
    align-items: center;
}

.button-area {
    text-align: center;

    .button {
        margin: 3rem 0;
    }
}
</style>