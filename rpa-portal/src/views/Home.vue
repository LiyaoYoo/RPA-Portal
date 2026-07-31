<template>
    <div class="home">
        <section class="welcome">
            <h1>👋 Welcome RPA Automation Hub</h1>

            <p>Welcome back to Automation Hub. Find and launch your automation applications.</p>
        </section>

        <div class="search-box">
            🔍

            <input v-model="search" placeholder="Search applications..." @input="console.log(search)" />
        </div>

        <section>
            <div class="card-grid">
                <div v-for="app in filteredApplications" :key="app.id" class="app-card">
                    <div class="card-top">
                        <component :is="app.icon" class="app-icon" />

                        <div class="tags">
                            <span class="department">
                                {{ app.department }}
                            </span>

                            <span class="status" :class="app.status.toLowerCase()">
                                {{ app.status }}
                            </span>
                        </div>
                    </div>

                    <h3>
                        {{ app.name }}
                    </h3>
                    <p class="description">
                        {{ app.description }}
                    </p>

                    <!-- Application Metadata -->

                    <div class="metadata">
                        <div class="meta-row">
                            <span> 👤 Owner </span>

                            <strong>
                                {{ app.owner }}
                            </strong>
                        </div>

                        <div class="meta-row">
                            <span> 📅 Updated </span>

                            <strong>
                                {{ app.lastUpdated }}
                            </strong>
                        </div>

                        <div class="meta-row">
                            <span> 📦 Version </span>

                            <strong>
                                {{ app.version }}
                            </strong>
                        </div>
                    </div>

                    <RouterLink :to="app.route" class="open-btn"> Open → </RouterLink>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue'

import { applications } from '../config/applications'

const search = ref('')

const filteredApplications = computed(() => {
    return applications.filter(app => {
        const text = `
        ${app.name}
        ${app.department}
        ${app.owner}
        ${app.category}
        `.toLowerCase()

        return text.includes(search.value.toLowerCase())
    })
})
</script>

<style scoped>
/*

    Home 页面最大宽度


    防止超宽屏显示太散


*/

.home {
    /* max-width: 1200px; */
    width: 100%;
}

/*

    Welcome 区域

*/

.welcome {
    margin-bottom: 30px;
}

.welcome h1 {
    font-size: 32px;

    color: #111827;
}

.welcome p {
    color: #6b7280;

    margin-top: 8px;
}
.tags {
    display: flex;

    gap: 8px;
}
.status {
    padding: 4px 10px;

    border-radius: 20px;

    font-size: 12px;

    font-weight: 600;
}

.status.active {
    background: #ecfdf5;

    color: #059669;
}

.status.maintenance {
    background: #fef3c7;

    color: #d97706;
}

.status.development {
    background: #eff6ff;

    color: #2563eb;
}
/*

    Search Box

*/

.search-box {
    width: 100%;

    height: 48px;

    background: white;

    border-radius: 12px;

    display: flex;

    align-items: center;

    padding: 0 20px;

    margin-bottom: 35px;

    border: 1px solid #e5e7eb;

    box-sizing: border-box;
}

.search-box input {
    border: none;

    outline: none;

    flex: 1;

    font-size: 15px;
}
.metadata {
    margin-top: 20px;

    padding-top: 15px;

    border-top: 1px solid #f1f5f9;

    display: flex;

    flex-direction: column;

    gap: 8px;
}

.meta-row {
    display: flex;

    justify-content: space-between;

    font-size: 13px;
}

.meta-row span {
    color: #94a3b8;
}

.meta-row strong {
    color: #334155;

    font-weight: 600;
}
/*

    Application Grid


    auto-fit:

    自动适配屏幕宽度



    minmax:

    最小280px


    效果:


    大屏:

    4个卡片



    小屏:

    自动换行



*/

.card-grid {
    display: grid;

    grid-template-columns: repeat(auto-fill, minmax(280px, 320px));

    gap: 24px;
}

/*

    Application Card


    每个 RPA 项目的展示卡片


*/

.app-card {
    background: white;

    border-radius: 16px;

    padding: 24px;

    border: 1px solid #e5e7eb;

    display: flex;

    flex-direction: column;

    min-height: 320px;

    transition: 0.2s;
}

/*

    Card Header


    Icon + Department


*/

.card-top {
    display: flex;

    justify-content: space-between;

    align-items: center;
}

/*

    Department 标签


*/

.department {
    background: #eff6ff;

    color: #2563eb;

    padding: 4px 10px;

    border-radius: 20px;

    font-size: 12px;

    font-weight: 600;
}

/*

    Hover 动画


    鼠标移动:

    卡片浮起


*/

.app-card:hover {
    transform: translateY(-5px);

    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08);
}

/*

    Application Icon


*/

.app-icon {
    width: 36px;

    height: 36px;

    color: #2563eb;
}

.app-card h3 {
    margin-top: 20px;

    font-size: 18px;

    color: #111827;
}

.description {
    margin-top: 10px;

    color: #6b7280;

    font-size: 14px;

    line-height: 1.5;

    flex: 1;
}

.version {
    margin-top: 15px;

    font-size: 12px;

    color: #9ca3af;
}

/*

    Open Button


    实际是 RouterLink


    不是普通 button



*/

.open-btn {
    margin-top: 20px;

    height: 38px;

    background: #2563eb;

    color: white;

    border-radius: 8px;

    display: flex;

    align-items: center;

    justify-content: center;

    text-decoration: none;

    font-size: 14px;

    font-weight: 500;
}

.open-btn:hover {
    background: #1d4ed8;
}
</style>
