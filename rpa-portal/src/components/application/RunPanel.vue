<template>
    <div class="run-card">
        <h2>Execution</h2>

        <button class="run-btn" @click="run" :disabled="running || disabled">
            <span v-if="!running"> ▶ Run Analysis </span>

            <span v-else> ⏳ Running... </span>
        </button>
    </div>
</template>

<script setup>
const props = defineProps({
    running: Boolean,

    disabled: Boolean
})

const emit = defineEmits(['run'])

function run() {
    emit('run')
}
</script>
<style scoped>
.run-card {
    background: white;

    border: 1px solid #e5e7eb;

    border-radius: 16px;

    padding: 25px;

    min-height: 220px;

    width: 100%;

    box-sizing: border-box;
}

.run-btn {
    margin-top: 60px;

    width: 220px;

    height: 45px;

    margin-left: auto;

    margin-right: auto;

    display: flex;

    align-items: center;

    justify-content: center;

    background: #2563eb;

    color: white;

    border: none;

    border-radius: 10px;

    font-size: 15px;

    font-weight: 600;

    cursor: pointer;

    box-shadow: 0 4px 10px rgba(37, 99, 235, 0.25);

    transition: all 0.2s;
}

.run-btn:hover {
    background: #1d4ed8;

    transform: translateY(-2px);
}

.run-btn:disabled {
    background: #94a3b8;

    box-shadow: none;

    transform: none;
}
</style>
