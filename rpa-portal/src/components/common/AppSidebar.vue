<template>
    <aside class="sidebar" :class="{ collapsed }">
        <!-- Brand -->

        <div class="brand">
            <div class="logo" @click="handleLogoClick">R</div>

            <div class="brand-text" v-if="!collapsed">
                <div class="title">Automation Hub</div>

                <div class="subtitle">Enterprise Platform</div>
            </div>
        </div>

        <!-- Menu -->

        <nav class="menu">
            <RouterLink v-for="item in mainMenu" :key="item.name" :to="item.path" class="menu-item">
                <component :is="item.icon" class="icon" />

                <span v-if="!collapsed">
                    {{ item.name }}
                </span>
            </RouterLink>
        </nav>

        <!-- Bottom -->

        <div class="bottom-menu">
            <RouterLink v-for="item in bottomMenu" :key="item.name" :to="item.path" class="menu-item">
                <component :is="item.icon" class="icon" />

                <span v-if="!collapsed">
                    {{ item.name }}
                </span>
            </RouterLink>
        </div>
    </aside>
</template>
<script setup>
import { mainMenu, bottomMenu } from '../../config/menu.js'

defineProps({
    collapsed: {
        type: Boolean,
        default: false
    }
})

const emit = defineEmits(['expand-sidebar'])

function handleLogoClick() {
    emit('expand-sidebar')
}
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

    transition: width 0.25s;
    flex-shrink: 0;

    transition: width 0.25s ease;
}

.sidebar.collapsed {
    width: 72px;

    padding: 20px 12px;

    overflow: hidden;
}
.sidebar.collapsed .brand {
    justify-content: center;
}

.sidebar.collapsed .menu-item {
    justify-content: center;

    padding: 0;
}
/* Brand */
.brand {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 10px 8px 30px;
}
.logo {
    width: 42px;

    height: 42px;

    flex-shrink: 0;

    cursor: pointer;

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
