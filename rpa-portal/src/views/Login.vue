<template>
    <div class="login-page">
        <!-- Left Brand Section -->
        <div class="brand-section">
            <div class="logo">A</div>

            <h1>RPA Automation Hub</h1>

            <p>Enterprise RPA Digital Platform</p>

            <div class="features">
                <div>⚡ Automate Business Process</div>

                <div>📊 Data Driven Solutions</div>

                <div>🔐 Secure Enterprise Access</div>
            </div>
        </div>

        <!-- Login Card -->

        <div class="login-card">
            <h2>Welcome Back</h2>

            <p class="subtitle">Sign in to access Automation Hub</p>

            <button class="sso-button" @click="login">
                <span class="azure-icon"> A </span>

                Sign in with DELL SSO
            </button>

            <div class="divider">
                <span> Secure SSO Authentication </span>
            </div>

            <p class="notice">Your company account will be used for authentication.</p>
        </div>
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

function login() {
    console.log('SSO login...')

    // Mock SSO User Information

    const user = {
        name: 'Leo Li',

        email: 'leo.li@company.com',

        department: 'RPA Team'
    }

    // 保存登录用户

    localStorage.setItem('currentUser', JSON.stringify(user))

    // 跳转 Home

    router.push('/Home')
}
</script>

<style scoped>
.login-page {
    min-height: 100vh;

    width: 100%;

    display: flex;

    background: #f8fafc;
}

/*
    Left Brand

*/

.brand-section {
    flex: 1;

    background: linear-gradient(135deg, #2563eb, #38bdf8);

    color: white;

    display: flex;

    flex-direction: column;

    justify-content: center;

    padding: 80px;
}

.logo {
    width: 70px;

    height: 70px;

    border-radius: 20px;

    background: white;

    color: #2563eb;

    display: flex;

    align-items: center;

    justify-content: center;

    font-size: 40px;

    font-weight: 800;

    margin-bottom: 30px;
}

.brand-section h1 {
    font-size: 42px;

    margin: 0;
}

.brand-section p {
    margin-top: 15px;

    font-size: 18px;

    opacity: 0.9;
}

.features {
    margin-top: 50px;

    display: flex;

    flex-direction: column;

    gap: 18px;

    font-size: 16px;
}

/*
    Login Card

*/

.login-card {
    width: 420px;

    background: white;

    display: flex;

    flex-direction: column;

    justify-content: center;

    padding: 50px;

    box-shadow: -5px 0 30px rgba(0, 0, 0, 0.05);
}

.login-card h2 {
    font-size: 32px;

    margin-bottom: 10px;

    color: #111827;
}

.subtitle {
    color: #64748b;

    margin-bottom: 40px;
}

.sso-button {
    height: 52px;

    border: none;

    border-radius: 10px;

    background: #2563eb;

    color: white;

    font-size: 15px;

    font-weight: 600;

    cursor: pointer;

    display: flex;

    align-items: center;

    justify-content: center;

    gap: 12px;

    transition: 0.2s;
}

.sso-button:hover {
    background: #1d4ed8;
}

.azure-icon {
    width: 28px;

    height: 28px;

    background: white;

    color: #2563eb;

    border-radius: 6px;

    display: flex;

    align-items: center;

    justify-content: center;

    font-weight: 800;
}

.divider {
    margin: 35px 0;

    display: flex;

    align-items: center;

    color: #94a3b8;

    font-size: 12px;
}

.divider:before,
.divider:after {
    content: '';

    height: 1px;

    background: #e5e7eb;

    flex: 1;
}

.divider span {
    padding: 0 15px;
}

.notice {
    color: #94a3b8;

    font-size: 13px;

    text-align: center;
}
</style>
