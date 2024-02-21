<script setup lang="ts">
</script>

<template>
    <div class="menu flex">
        <img class="logo" src="./../assets/logo.png" />

        <div class="items flex">
            <p class="menu-item">About us</p>
            <p class="menu-item selected">Log in</p>
        </div>
    </div>
</template>

<style scoped lang="scss">
.menu {
    // box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
    height: 4.5rem;
    padding: 0 3rem;
    justify-content: space-between;
    align-items: center;

    .items {
        gap: 3rem;

        .menu-item {
            font-weight: var(--semibold);
            cursor: pointer;

            &.selected {
                color: var(--customprimary);
            }
        }
    }


    .logo {
        height: 3rem;
    }
}
</style>
