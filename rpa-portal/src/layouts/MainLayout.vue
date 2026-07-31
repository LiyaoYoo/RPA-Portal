<template>
    <div class="layout">
        <!-- <AppSidebar /> -->

        <div class="main">
            <AppHeader />

            <div class="content">
                <RouterView />
            </div>
        </div>
    </div>
</template>

<script setup>
import AppHeader from '../components/common/AppHeader.vue'
import AppSidebar from '../components/common/AppSidebar.vue'
</script>

<style scoped>
.layout {
    display: flex;
    height: 100vh;
    background: #f5f7fa;
}

.main {
    flex: 1;
    display: flex;
    flex-direction: column;
}

.content {
    flex: 1;
    padding: 32px;
    overflow: auto;
}
</style>
