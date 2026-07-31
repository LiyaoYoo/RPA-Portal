<template>
    <div class="info-card">
        <!-- Header -->

        <div class="header-row">
            <div class="title-area">
                <div class="icon-box">
                    <component :is="icon" class="app-icon" />
                </div>

                <div>
                    <h1>
                        {{ name }}
                    </h1>

                    <p>
                        {{ description }}
                    </p>
                </div>
            </div>

            <div class="status" :class="status.toLowerCase()">
                <span class="status-dot"></span>

                {{ status }}
            </div>
        </div>

        <!-- Metadata -->

        <div class="metadata">
            <div class="meta-item">
                <span class="label"> Department </span>

                <span class="value">
                    {{ department }}
                </span>
            </div>

            <div class="meta-item">
                <span class="label"> Version </span>

                <span class="value">
                    {{ version }}
                </span>
            </div>

            <div class="meta-item">
                <span class="label"> Owner </span>

                <span class="value"> RPA Team </span>
            </div>
        </div>
    </div>
</template>

<script setup>
defineProps({
    name: String,

    description: String,

    department: String,

    version: String,

    icon: Object,

    status: String
})
</script>

<style scoped>
.info-card {
    background: white;

    border: 1px solid #e5e7eb;

    border-radius: 18px;

    padding: 30px;
}

.header-row {
    display: flex;

    justify-content: space-between;

    align-items: flex-start;
}

.title-area {
    display: flex;

    gap: 18px;

    align-items: center;
}

.icon-box {
    width: 52px;

    height: 52px;

    background: #eff6ff;

    border-radius: 14px;

    display: flex;

    align-items: center;

    justify-content: center;
}

.app-icon {
    width: 28px;

    height: 28px;

    color: #2563eb;
}

h1 {
    font-size: 28px;

    font-weight: 700;

    color: #111827;

    margin: 0;
}

p {
    margin-top: 8px;

    color: #6b7280;

    font-size: 14px;
}

.status {
    display: flex;

    align-items: center;

    gap: 8px;

    padding: 6px 14px;

    border-radius: 20px;

    font-size: 13px;

    font-weight: 600;
}

/* Active */

.status.active {
    background: #ecfdf5;

    color: #16a34a;
}

.status.active .status-dot {
    background: #22c55e;
}

.status-dot {
    width: 8px;

    height: 8px;

    background: #22c55e;

    border-radius: 50%;
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

.metadata {
    display: flex;

    gap: 50px;

    margin-top: 30px;

    padding-top: 20px;

    border-top: 1px solid #f1f5f9;
}

.meta-item {
    display: flex;

    flex-direction: column;

    gap: 5px;
}

.label {
    font-size: 12px;

    color: #9ca3af;
}

.value {
    font-size: 14px;

    font-weight: 600;

    color: #111827;
}
</style>
