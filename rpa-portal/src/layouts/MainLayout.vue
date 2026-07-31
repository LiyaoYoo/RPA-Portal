<template>
    <div class="layout">
        <AppSidebar :collapsed="collapsed" @expand-sidebar="expandSidebar" />

        <div class="main">
            <AppHeader @toggle-sidebar="toggleSidebar" />

            <div class="content">
                <!-- Breadcrumb -->

                <el-breadcrumb separator="/" class="breadcrumb">
                    <el-breadcrumb-item to="/Home"> Home </el-breadcrumb-item>

                    <el-breadcrumb-item v-if="$route.path !== '/Home'">
                        {{ $route.name }}
                    </el-breadcrumb-item>
                </el-breadcrumb>

                <RouterView @hide-sidebar="hideSidebar" />
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'

import AppHeader from '../components/common/AppHeader.vue'
import AppSidebar from '../components/common/AppSidebar.vue'

const collapsed = ref(false)

function toggleSidebar() {
    collapsed.value = !collapsed.value
}

function hideSidebar() {
    collapsed.value = true
}

function expandSidebar() {
    collapsed.value = false
}
</script>

<style scoped>
.breadcrumb {
    margin-bottom: 24px;

    font-size: 14px;
}
.layout {
    display: flex;

    height: 100vh;

    background: #f5f7fa;
}

.main {
    flex: 1;

    display: flex;

    flex-direction: column;

    min-width: 0;
}

.content {
    flex: 1;

    padding: 32px;

    overflow: auto;

    min-width: 0;
}
</style>
