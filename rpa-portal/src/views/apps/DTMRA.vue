<template>
    <div class="page">
        <!-- Application Header -->
        <AppInfoCard v-bind="appInfo" />

        <!-- Upload + Run -->

        <div class="execution-area">
            <FileUploader @file-selected="handleFile" />

            <RunPanel :running="running" :disabled="!selectedFile" @run="startRun" />
        </div>

        <!-- Console -->

        <ExecutionConsole v-if="showConsole" :status="status" :progress="progress" :logs="logs" :runtime="runtime" />

        <!-- Preview Table -->

        <DataPreviewTable v-if="tableData && tableData.length" :tableData="tableData" :columns="tableColumns" />
    </div>
</template>

<script setup>
/*
    引入 applications 配置中心


    applications.js:

    保存所有 RPA 项目信息


    例如:

    DT MRA
    Tool Optimization
    MRP


    是整个 Portal 的 Application Registry

*/

import { applications } from '../../config/applications'

/*
    引入公共组件


    设计思想:

    一个组件，多项目复用


    例如:

    FileUploader

    所有 RPA 项目共用


*/
import FileUploader from '../../components/application/FileUploader.vue'

import AppInfoCard from '../../components/application/AppInfoCard.vue'

import RunPanel from '../../components/application/RunPanel.vue'

import ExecutionConsole from '../../components/application/ExecutionConsole.vue'
import DataPreviewTable from '../../components/application/DataPreviewTable.vue'
/*
    引入 Vue 响应式功能


    ref:

    创建响应式变量


    当变量改变:

    页面自动刷新


*/

import { ref } from 'vue'

/*
    Timer 变量


    用于保存 setInterval 返回值


    作用:

    开始运行:

    创建 timer


    完成:

    clearInterval(timer)


*/

let timer = null

/*
    Application 当前状态


    状态机设计:


    ready

        ↓

    running

        ↓

    completed



    或:


    failed


*/

const status = ref('ready')

/*
    当前执行进度


    0 - 100


    例如:

    Reading File

    30%


    Validation

    60%


    Generate Report

    90%

*/

const progress = ref(0)

/*
    保存用户上传文件


    当前 Demo 还没有使用


    后续:

    FileUploader

    emit file

    保存到这里


    然后发送 Flask

*/

const selectedFile = ref(null)

/*
    Runtime


    显示:

    00:00

    00:01

    00:02


*/

const runtime = ref('00:00')

/*
    控制 Run Button 状态


    false:

    可以点击


    true:

    Running...

*/

const running = ref(false)

const showConsole = ref(false)

// const showPreview = ref(false)
/*
    从 applications.js

    找到当前应用


    id:

    DT-MRA


    返回:

    {
        name,
        description,
        version,
        icon
    }


*/

const appInfo = applications.find(app => app.id === 'DT-MRA')

/*
    Execution Console 初始日志


    ref(Array)


    Vue 会监听数组变化


    当:

    logs.push()


    页面自动更新

*/

const logs = ref([
    {
        time: '10:00:01',

        message: 'System initialized'
    },

    {
        time: '10:00:02',

        message: 'Waiting for input file'
    }
])

const tableData = ref([])

const tableColumns = ref([])
async function startRun() {
    // 清空上一次结果
    tableData.value = []

    // 显示 Console
    showConsole.value = true

    // 开始运行
    running.value = true

    status.value = 'running'

    progress.value = 20

    logs.value.push({
        time: new Date().toLocaleTimeString(),

        message: 'Starting MRA analysis...'
    })

    try {
        const result = await runMRAAnalysis()

        console.log('Result:', result)

        if (result.success) {
            tableData.value = result.data

            tableColumns.value = result.columns

            logs.value.push({
                time: new Date().toLocaleTimeString(),

                message: `Generated ${result.rows} records`
            })

            progress.value = 100

            status.value = 'completed'
        } else {
            throw new Error(result.message)
        }
    } catch (error) {
        console.error(error)

        status.value = 'failed'

        logs.value.push({
            time: new Date().toLocaleTimeString(),

            message: error.message
        })
    } finally {
        running.value = false

        stopTimer()

        // 延迟隐藏console

        setTimeout(() => {
            showConsole.value = false
        }, 3000)
    }
}
/*
    Run 主流程


    点击按钮后:

    RunPanel

        |

        emit run

        |

    startRun()


*/
async function runMRAAnalysis() {
    const formData = new FormData()

    formData.append('file', selectedFile.value)

    const response = await fetch('http://127.0.0.1:5000/api/mra/run', {
        method: 'POST',
        body: formData
    })

    const result = await response.json()

    console.log('Backend result:', result)

    return result
}

/*
    文件上传回调

    当前没有连接 FileUploader

    后续:

    FileUploader emit(file)

    调用这里


*/

function handleFile(file) {
    selectedFile.value = file

    console.log('Selected file:', file.name)
}

/*
    开始运行计时器

*/

function startTimer() {
    let seconds = 0

    /*
        防止重复创建 timer

    */

    if (timer) {
        clearInterval(timer)
    }

    timer = setInterval(() => {
        seconds++

        let min = Math.floor(seconds / 60)

        let sec = seconds % 60

        runtime.value = String(min).padStart(2, '0') + ':' + String(sec).padStart(2, '0')
    }, 1000)
}

/*
    停止计时

*/

function stopTimer() {
    clearInterval(timer)
}
</script>

<style scoped>
.page {
    width: 100%;

    max-width: 100%;

    padding: 0 32px;

    box-sizing: border-box;

    overflow: hidden;

    min-width: 0;
}
/*
    Console 和 Preview 动态显示时
    增加顶部间距

*/

:deep(.console-card),
:deep(.preview-card) {
    margin-top: 24px;
}

/*
    上传区域布局

    左:
    FileUploader

    右:
    RunPanel

*/

.execution-area {
    display: grid;

    grid-template-columns: 3fr 1fr;

    gap: 24px;
}

.run-btn:disabled {
    background: #cbd5e1;

    color: #64748b;

    cursor: not-allowed;

    transform: none;

    box-shadow: none;
}
</style>
