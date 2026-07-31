<template>
    <div class="preview-card">
        <!-- Header -->

        <div class="table-header">
            <div>
                <h2>MRA Preview Result</h2>

                <p>{{ filteredData.length }} records generated</p>
            </div>

            <div>
                <el-button type="primary" @click="downloadExcel"> Download Excel </el-button>
            </div>
        </div>

        <!-- Summary -->

        <div class="summary">
            <div class="summary-card">
                <span>Total</span>

                <strong>
                    {{ tableData.length }}
                </strong>
            </div>

            <div class="summary-card success">
                <span>Success</span>

                <strong>
                    {{ successCount }}
                </strong>
            </div>

            <div class="summary-card error">
                <span>Error</span>

                <strong>
                    {{ errorCount }}
                </strong>
            </div>
        </div>

        <!-- Search -->

        <el-input v-model="search" placeholder="Search Model / Platform..." class="search" />

        <!-- Table -->

        <el-table :data="tableData">
            <el-table-column prop="name" label="Name" />

            <el-table-column prop="age" label="Age" />
        </el-table>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import * as XLSX from 'xlsx'
const search = ref('')
const props = defineProps({
    tableData: {
        type: Array,
        default: () => []
    }
})

// Search

const filteredData = computed(() => {
    return props.tableData.filter(item => {
        const text = ((item.model || '') + (item.platform || '') + (item.region || '')).toLowerCase()

        return text.includes(search.value.toLowerCase())
    })
})

// Summary

const successCount = computed(() => {
    return props.tableData.filter(x => x.status === 'Success').length
})

const errorCount = computed(() => {
    return props.tableData.filter(x => x.status === 'Error').length
})

// Report Error

function reportError(row) {
    console.log('Report Error:', row)
}
function downloadExcel() {
    if (!props.tableData.length) {
        return
    }

    // JSON 转 Sheet

    const worksheet = XLSX.utils.json_to_sheet(props.tableData)

    // 创建 workbook

    const workbook = XLSX.utils.book_new()

    XLSX.utils.book_append_sheet(workbook, worksheet, 'MRA Result')

    // 下载

    XLSX.writeFile(workbook, 'MRA_Result.xlsx')
}
</script>

<style scoped>
.preview-card {
    margin-top: 24px;

    background: white;

    border-radius: 18px;

    padding: 28px;

    border: 1px solid #e5e7eb;
}

.table-header {
    display: flex;

    justify-content: space-between;

    align-items: center;

    margin-bottom: 20px;
}

h2 {
    margin: 0;

    font-size: 22px;

    color: #111827;
}

p {
    margin-top: 6px;

    color: #6b7280;

    font-size: 14px;
}

.summary {
    display: flex;

    gap: 20px;

    margin-bottom: 20px;
}

.summary-card {
    width: 160px;

    padding: 16px;

    border-radius: 12px;

    background: #f8fafc;

    display: flex;

    flex-direction: column;
}

.summary-card span {
    color: #6b7280;

    font-size: 13px;
}

.summary-card strong {
    margin-top: 8px;

    font-size: 26px;
}

.success {
    background: #ecfdf5;
}

.error {
    background: #fef2f2;
}

.search {
    width: 300px;

    margin-bottom: 20px;
}
</style>
