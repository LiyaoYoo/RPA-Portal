<template>
    <div class="status-card">
        <h2>Execution Status</h2>

        <div class="status-row">
            <span class="dot" :class="status"> </span>

            <span class="text">
                {{ statusText }}
            </span>
        </div>

        <div class="progress">
            <div class="progress-bar" :style="{ width: progress + '%' }"></div>
        </div>

        <div class="percentage">{{ progress }}%</div>
    </div>
</template>
<script setup>
import { computed } from 'vue'

const props = defineProps({
    status: String,

    progress: Number
})

const statusText = computed(() => {
    switch (props.status) {
        case 'ready':
            return 'Ready'

        case 'running':
            return 'Processing'

        case 'completed':
            return 'Completed'

        case 'failed':
            return 'Failed'

        default:
            return 'Unknown'
    }
})
</script>
<style scoped>
.status-card {
    background: white;

    border: 1px solid #e5e7eb;

    border-radius: 16px;

    padding: 25px;

    margin-top: 20px;
}

.status-row {
    display: flex;

    align-items: center;

    gap: 10px;

    margin-top: 20px;

    font-weight: 600;
}

.dot {
    width: 10px;

    height: 10px;

    border-radius: 50%;
}

.ready {
    background: #22c55e;
}

.running {
    background: #facc15;
}

.completed {
    background: #3b82f6;
}

.failed {
    background: #ef4444;
}

.progress {
    height: 8px;

    background: #e5e7eb;

    border-radius: 10px;

    margin-top: 20px;

    overflow: hidden;
}

.progress-bar {
    height: 100%;

    background: #2563eb;

    transition: 0.3s;
}

.percentage {
    margin-top: 8px;

    font-size: 12px;

    color: #6b7280;
}
</style>
