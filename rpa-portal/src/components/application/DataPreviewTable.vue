<template>
    <div class="preview-card">
        <!-- Header -->
        <div class="table-header">
            <div>
                <h2>MRA Preview Result</h2>

                <p>{{ filteredData.length }} records generated</p>
            </div>

            <div class="actions">
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

        <!-- Search Area -->

        <div class="filter-area">
            <el-input v-model="search" placeholder="Search..." clearable />

            <el-select v-model="statusFilter" placeholder="Status" clearable>
                <el-option label="Success" value="Success" />

                <el-option label="Error" value="Error" />
            </el-select>
        </div>

        <!-- Table -->

        <div class="table-container">
            <el-table :data="filteredData" stripe border class="mra-table" height="500">
                <el-table-column v-for="column in props.columns" :key="column" :prop="column" :label="formatHeader(column)" width="160" />
            </el-table>
        </div>
    </div>
</template>
<script setup>
import { ref, computed, watch } from 'vue'
import * as XLSX from 'xlsx'
const props = defineProps({
    tableData: {
        type: Array,
        default: () => []
    },

    columns: {
        type: Array,
        default: () => []
    }
})
const search = ref('')

const statusFilter = ref('')

const filteredData = computed(() => {
    return props.tableData.filter(item => {
        const keyword = search.value.toLowerCase()

        const matchSearch = JSON.stringify(item).toLowerCase().includes(keyword)

        const matchStatus = !statusFilter.value || item.status === statusFilter.value

        return matchSearch && matchStatus
    })
})

const successCount = computed(() => {
    return props.tableData.filter(x => x.status === 'Success').length
})

const errorCount = computed(() => {
    return props.tableData.filter(x => x.status === 'Error').length
})

function formatHeader(column) {
    return column
        .replace(/_/g, ' ')
        .replace(/([A-Z])/g, ' $1')
        .replace(/^./, str => str.toUpperCase())
}
function reportError(row) {
    console.log(row)
}

function downloadExcel() {
    if (filteredData.value.length === 0) {
        return
    }

    const exportData = filteredData.value.map(row => {
        const newRow = {}

        props.columns.forEach(col => {
            newRow[col] = row[col]
        })

        return newRow
    })

    const worksheet = XLSX.utils.json_to_sheet(exportData, {
        header: props.columns
    })

    const workbook = XLSX.utils.book_new()

    XLSX.utils.book_append_sheet(workbook, worksheet, 'MRA Result')

    XLSX.writeFile(workbook, 'MRA_Result.xlsx')
}
</script>
<style>
.mra-table {
    width: 100%;

    min-width: 1200px;

    border-radius: 12px;

    overflow: hidden;
}

.table-header {
    display: flex;

    justify-content: space-between;

    align-items: center;

    margin-bottom: 25px;
}

.table-header h2 {
    margin: 0;

    font-size: 24px;

    color: #111827;
}

.actions {
    display: flex;

    justify-content: flex-end;
}

.summary {
    display: flex;

    gap: 20px;

    margin-bottom: 25px;
}

.summary-card {
    width: 160px;

    padding: 18px;

    border-radius: 14px;

    background: #f8fafc;
}

.summary-card span {
    color: #64748b;

    font-size: 14px;
}

.summary-card strong {
    display: block;

    margin-top: 8px;

    font-size: 28px;
}

.success {
    background: #ecfdf5;
}

.error {
    background: #fef2f2;
}

.filter-area {
    display: flex;

    gap: 15px;

    margin-bottom: 20px;
}

.filter-area .el-input {
    width: 300px;
}

.filter-area .el-select {
    width: 150px;
}

/* 表头 */

:deep(.el-table th) {
    background: #f1f5f9 !important;

    color: #334155;

    font-weight: 700;
}

/* hover */

:deep(.el-table tbody tr:hover > td) {
    background: #eff6ff !important;
}

/* stripe */

:deep(.el-table--striped .el-table__body tr.el-table__row--striped td) {
    background: #fafafa;
}

.preview-card {
    margin-top: 24px;

    background: white;

    border-radius: 18px;

    padding: 30px;

    border: 1px solid #e5e7eb;

    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);

    /*
        防止内容撑开父元素
    */
    width: 100%;

    box-sizing: border-box;

    overflow: hidden;
}

/*
    Table 外层容器

    负责滚动

*/

.table-container {
    width: 100%;

    max-width: 100%;

    overflow-x: auto;

    overflow-y: hidden;

    min-width: 0;
}
</style>
