<script setup>
import axios from 'axios';
import { ref } from 'vue';
let btnData = ref('upload');
let btnLoader = ref(false);
let btnType = ref('');
let btnMsg = ref('');
const showModal = ref(false);

const OnClick = () => {
    btnLoader.value = true;
    if (btnData.value == 'upload') {
        axios
            .post('/s3/upload')
            .then((res) => {
                btnData.value = 'download';
                btnType.value = 'success';
                btnMsg.value = 's3 업로드 완료';
                btnLoader.value = false;
                showModal.value = true;
            })
            .catch((err) => {
                btnMsg.value = 's3 업로드 실패';
                btnType.value = 'warning';
                btnLoader.value = false;
                showModal.value = true;
                console.error(err);
            });
    } else if (btnData.value == 'download') {
        axios
            .get('/s3/download', { responseType: 'blob' })
            .then((res) => {
                btnData.value = 'upload';
                btnType.value = 'success';
                btnMsg.value = 's3 다운로드 완료';
                btnLoader.value = false;
                showModal.value = true;

                const url = window.URL.createObjectURL(new Blob([res.data]), {
                    type: 'application/zip',
                });
                const link = document.createElement('a');
                link.href = url;
                link.setAttribute('download', 'tf.zip');
                document.body.appendChild(link);
                link.click();
            })
            .catch((err) => {
                btnMsg.value = 's3 다운로드 실패';
                btnType.value = 'warning';
                btnLoader.value = false;
                showModal.value = true;
                console.error(err);
            });
    }
};
</script>
<template>
    <div>
        <v-btn :loading="btnLoader" class="upload-btn" @click="OnClick">{{
            btnData
        }}</v-btn>
    </div>
    <template>
        <v-dialog v-model="showModal" content-class="align-center">
            <v-alert
                variant="outlined"
                :type="btnType"
                prominent
                border="top"
                width="300"
            >
                {{ btnMsg }}
            </v-alert>
        </v-dialog>
    </template>
</template>

<style>
.upload-btn {
    margin-top: 10px;
    margin-left: auto;
    height: 2rem;
    background-color: #228be6;
    color: white;
    font-weight: bold;
}
</style>
