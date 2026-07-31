<template>
    <div class="console-card">
        <!-- Header -->

        <div class="console-header">
            <div class="title">Execution Console</div>

            <div class="status" :class="status">
                <span class="dot"></span>

                {{ statusText }}
            </div>
        </div>

        <!-- Progress -->

        <div class="progress-area">
            <div class="progress-title">
                Progress

                <span> {{ progress }}% </span>
            </div>

            <div class="progress">
                <div class="progress-bar" :style="{ width: progress + '%' }"></div>
            </div>
        </div>

        <!-- Logs -->

        <div class="console-body">
            <div v-for="(log, index) in logs" :key="index" class="log-line">
                <span class="time">
                    {{ log.time }}
                </span>

                <span>
                    {{ log.message }}
                </span>
            </div>
        </div>

        <!-- Runtime -->

        <div class="runtime">
            Runtime:

            <span>
                {{ runtime }}
            </span>
        </div>
    </div>
</template>
<script setup>
import { computed } from 'vue'

const props = defineProps({
    status: String,

    progress: Number,

    logs: Array,

    runtime: String
})

const statusText = computed(() => {
    switch (props.status) {
        case 'running':
            return 'Running'

        case 'completed':
            return 'Completed'

        case 'failed':
            return 'Failed'

        default:
            return 'Ready'
    }
})
</script>
<style scoped>
.console-card {
    background: #0f172a;

    color: white;

    border-radius: 16px;

    padding: 20px;
}

.console-header {
    display: flex;

    justify-content: space-between;

    align-items: center;

    margin-bottom: 20px;
}

.title {
    font-size: 18px;

    font-weight: 600;
}

.status {
    display: flex;

    align-items: center;

    gap: 8px;

    font-size: 13px;
}

.dot {
    width: 9px;

    height: 9px;

    border-radius: 50%;
}

.ready .dot {
    background: #22c55e;
}

.running .dot {
    background: #facc15;
}

.completed .dot {
    background: #3b82f6;
}

.failed .dot {
    background: #ef4444;
}

.progress-title {
    display: flex;

    justify-content: space-between;

    font-size: 13px;

    margin-bottom: 8px;
}

.progress {
    height: 8px;

    background: #334155;

    border-radius: 10px;

    overflow: hidden;
}

.progress-bar {
    height: 100%;

    background: #38bdf8;

    transition: 0.3s;
}

.console-body {
    margin-top: 20px;

    height: 220px;

    overflow: auto;

    font-family: Consolas, monospace;

    font-size: 13px;
}

.log-line {
    margin-bottom: 10px;
}

.time {
    color: #94a3b8;

    margin-right: 15px;
}

.runtime {
    border-top: 1px solid #334155;

    margin-top: 15px;

    padding-top: 15px;

    font-size: 13px;
}
</style>
