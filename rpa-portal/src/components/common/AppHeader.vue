<template>
    <header class="header">
        <div class="title">
            <h2>RPA Automation Hub</h2>

            <span> Enterprise Digital Solutions </span>
        </div>

        <div class="actions">
            <el-button text @click="copyEmail"> 📧 Contact Us </el-button>

            <el-dropdown>
                <span class="user"> 👤 {{ userName }} </span>

                <template #dropdown>
                    <el-dropdown-menu>
                        <el-dropdown-item> Profile </el-dropdown-item>

                        <el-dropdown-item @click="logout"> Logout </el-dropdown-item>
                    </el-dropdown-menu>
                </template>
            </el-dropdown>
        </div>
    </header>
</template>
<script setup>
import { useRouter } from 'vue-router'
import { ref } from 'vue'

const userName = ref('Guest')
const router = useRouter()
const currentUser = localStorage.getItem('currentUser')
if (currentUser) {
    const user = JSON.parse(currentUser)

    userName.value = user.name
    console.log(user.name)
}
function logout() {
    /*
        Future:

        Azure AD logout

        clear token

        clear user info

    */

    console.log('Logout')

    router.push('/login')
}

function copyEmail() {
    const email = 'rpa.team@company.com'

    navigator.clipboard.writeText(email)

    alert('Support email copied!')
}
</script>
<style scoped>
.header {
    height: 64px;
    background: white;
    border-bottom: 1px solid #e5e7eb;

    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 0 30px;
}
.actions {
    display: flex;

    align-items: center;

    gap: 20px;
}

.user {
    cursor: pointer;

    font-weight: 600;

    color: #374151;
}

.user:hover {
    color: #2563eb;
}
.title h2 {
    margin: 0;
    font-size: 22px;
}

.title span {
    color: gray;
    font-size: 13px;
}

.user {
    font-weight: bold;
}
</style>
