<template>
    <aside class="sidebar">
        <!-- Brand -->
        <div class="brand">
            <div class="logo">
                <div class="logo"><span> A </span></div>
            </div>
            <div class="brand-text">
                <div class="title">Automation Hub</div>
                <div class="subtitle">Enterprise Platform</div>
            </div>
        </div>
        <!-- Menu -->
        <nav class="menu">
            <RouterLink v-for="item in mainMenu" :key="item.name" :to="item.path" class="menu-item">
                <component :is="item.icon" class="icon" /> <span> {{ item.name }} </span>
            </RouterLink>
        </nav>
        <!-- Bottom -->
        <div class="bottom-menu">
            <RouterLink v-for="item in bottomMenu" :key="item.name" :to="item.path" class="menu-item">
                <component :is="item.icon" class="icon" /> <span> {{ item.name }} </span>
            </RouterLink>
        </div>
    </aside>
</template>
<script setup>
import { mainMenu, bottomMenu } from '../../config/menu.js'
</script>
<style scoped>
.sidebar {
    width: 260px;
    height: 100vh;
    background: #ffffff;
    border-right: 1px solid #e5e7eb;
    display: flex;
    flex-direction: column;
    padding: 20px 16px;
} /* Brand */
.brand {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 10px 8px 30px;
}
.logo {
    width: 42px;
    height: 42px;
    background: linear-gradient(135deg, #2563eb, #38bdf8);
    color: white;
    border-radius: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 22px;
    font-weight: 700;
}
.brand-text .title {
    font-size: 16px;
    font-weight: 700;
    color: #111827;
}
.brand-text .subtitle {
    font-size: 12px;
    color: #6b7280;
} /* Menu */
.menu {
    display: flex;
    flex-direction: column;
    gap: 6px;
}
.menu-item {
    height: 44px;
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 0 14px;
    border-radius: 10px;
    text-decoration: none;
    color: #374151;
    font-size: 14px;
    font-weight: 500;
    transition: all 0.2s;
}
.icon {
    width: 20px;
    height: 20px;
    stroke-width: 2;
}
.menu-item:hover {
    background: #eff6ff;
    transform: translateX(3px);
} /* active */
.router-link-active {
    background: #eff6ff;
    color: #2563eb;
    font-weight: 600;
} /* bottom */
.bottom-menu {
    margin-top: auto;
}
</style>
