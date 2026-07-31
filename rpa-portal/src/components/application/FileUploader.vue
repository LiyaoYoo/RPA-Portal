<template>
    <div class="upload-card">
        <div class="drop-zone" @click="selectFile">
            <UploadCloud class="upload-icon" />

            <h3>Drag & Drop your file</h3>

            <p>or click to browse</p>

            <input ref="fileInput" type="file" hidden @change="handleFile" />
        </div>

        <!-- Selected File -->

        <div v-if="file" class="file-item">
            <div class="file-info">
                <FileText class="file-icon" />

                <div>
                    <div class="file-name">
                        {{ file.name }}
                    </div>

                    <div class="file-size">
                        {{ formatSize(file.size) }}
                    </div>
                </div>
            </div>

            <button @click="removeFile" class="remove">✕</button>
        </div>
    </div>
</template>
<script setup>
import { UploadCloud, FileText } from 'lucide-vue-next'

import { ref } from 'vue'

const fileInput = ref(null)

const file = ref(null)
const emit = defineEmits(['file-selected'])

function selectFile() {
    fileInput.value.click()
}

async function handleFile(event) {
    file.value = event.target.files[0]

    emit('file-selected', file.value)
}
function removeFile() {
    file.value = null

    emit('file-selected', null)
}

function formatSize(size) {
    if (size < 1024) return size + ' B'
    else if (size < 1024 * 1024) return (size / 1024).toFixed(1) + ' KB'
    else return (size / 1024 / 1024).toFixed(1) + ' MB'
}
</script>
<style scoped>
.upload-card {
    background: white;

    border: 1px solid #e5e7eb;

    border-radius: 16px;

    padding: 24px;
}

.drop-zone {
    height: 220px;

    border: 2px dashed #cbd5e1;

    border-radius: 14px;

    display: flex;

    flex-direction: column;

    align-items: center;

    justify-content: center;

    cursor: pointer;

    transition: 0.2s;
}

.drop-zone:hover {
    background: #f8fafc;

    border-color: #2563eb;
}

.upload-icon {
    width: 45px;

    height: 45px;

    color: #2563eb;
}

.drop-zone h3 {
    margin-top: 15px;

    font-size: 16px;

    color: #111827;
}

.drop-zone p {
    color: #6b7280;

    font-size: 14px;
}

.file-item {
    margin-top: 20px;

    display: flex;

    justify-content: space-between;

    align-items: center;

    background: #f8fafc;

    padding: 14px;

    border-radius: 10px;
}

.file-info {
    display: flex;

    align-items: center;

    gap: 12px;
}

.file-icon {
    width: 30px;

    height: 30px;

    color: #2563eb;
}

.file-name {
    font-weight: 600;

    font-size: 14px;
}

.file-size {
    font-size: 12px;

    color: #6b7280;
}

.remove {
    border: none;

    background: none;

    cursor: pointer;

    font-size: 18px;

    color: #ef4444;
}
</style>
