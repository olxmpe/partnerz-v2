<script setup lang="ts">
import ArrowIcon from '@/assets/ArrowIcon.vue'
import { ref } from 'vue';

const interests = ref<Interest[]>([
    { label: "Museum", isSelected: false },
    { label: "Indoors", isSelected: false },
    { label: "Outdoors", isSelected: false },
    { label: "Open Minded", isSelected: false },
    { label: "Bar", isSelected: false },
    { label: "Fancy", isSelected: false },
    { label: "Adventure", isSelected: false },
    { label: "Culture", isSelected: false },
    { label: "Art", isSelected: false },
    { label: "Show", isSelected: false },
    { label: "Romantic", isSelected: false },
    { label: "Landscape", isSelected: false },
    { label: "Secret Place", isSelected: false },
    { label: "Free", isSelected: false },
    { label: "Cheap", isSelected: false },
    { label: "Cocktails", isSelected: false },
    { label: "Music", isSelected: false },
    { label: "Cosy", isSelected: false },
    { label: "Ambiance", isSelected: false },
    { label: "Exotic", isSelected: false },
    { label: "Original", isSelected: false },
    { label: "Chill", isSelected: false },
    { label: "Sports", isSelected: false },
    { label: "Creative", isSelected: false },
    { label: "Touristic", isSelected: false },
    { label: "Food", isSelected: false },
    { label: "Walks", isSelected: false },
    { label: "Drinks", isSelected: false },
    { label: "Craft", isSelected: false },
    { label: "Clubbing", isSelected: false }
])


const selectedInterests = ref<Interest[]>([]);

const collectInterest = (selectedInterest: Interest) => {
    selectedInterest.isSelected = !selectedInterest.isSelected
    selectedInterests.value = interests.value.filter(interest => interest.isSelected)
}
</script>

<template>
    <div class="flex container">
        <div class="section">
            <div class="flex users">
                <img src="./../assets/homePage/firstUser.png" />
                <img src="./../assets/homePage/secondUser.png" />
                <img src="./../assets/homePage/thirdUser.png" />
            </div>

            <h2>Meet your adventure partner now</h2>
            <p>Enjoy each moment doing whatever you love: discover new places based on your interests and meet the
                like-minded partner who will make this a unique
                experience.</p>
            <p> Thousands of partners are looking for someone to share a moment, find yours.</p>
        </div>
        <div class="section">
            <h2>Tell us what you like the most</h2>
            <div class="labels flex">
                <div v-for="interest in interests" class="label" :class="{ active: interest.isSelected }"
                    @click="collectInterest(interest)">{{ interest.label }}</div>
            </div>
            <div class="button-area">
                <div class="button arrow">
                    <ArrowIcon />
                </div>
            </div>

        </div>
    </div>
</template>

<style scoped lang="scss">
.container {
    width: 80%;
    height: calc(100vh - 4.5rem);
    margin-top: 3rem;
    margin: auto;
    flex: 1;
    justify-content: center;
    gap: 5rem;

    .section {
        flex-basis: 100%;
        margin: auto;
        padding: 3rem;

        img {
            margin-bottom: 2rem;
        }

        h2 {
            margin: 1rem 0 3rem 0;
        }

        p {
            margin: 1rem 0;
        }

        .users>img {
            aspect-ratio: 1;
            width: 10rem;
            margin-right: -3rem;
        }

        .labels {
            flex-wrap: wrap;
            gap: 0.4rem;
            margin: 2.5rem 0;

            .label {
                flex: 1 1 auto;
            }
        }

        .button-area {
            text-align: right;
        }
    }
}
</style>