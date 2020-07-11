<template>
    <div class="ye-uploader">
        <button
            @click="handleSubmit"
            class="ye-uploader__button"
        >上传文件
        </button>
        <button
            @click="onSure"
            class="ye-uploader__button ye-uploader__button--confirm"
        >发送
        </button>
        <input
            :accept="accept"
            @change="handleChangeFile"
            ref="input"
            class="ye-uploader__file"
            multiple
            type="file"
        />
        <div class="ye-uploader__tips">
            <slot></slot>
        </div>
        <div class="ye-uploader__file-list">
            <div
                class="ye-uploader__file-list__item"
                v-for="file in infoCache"
                @mouseenter="handleShow(file)"
                @mouseleave="handleUnShow(file)"
            >
                <div :class="`file-list__item__bar file-list__item__bar__${file.i}`">

                </div>
                <svg
                    class="icon"
                    style="width: 1em; height: 1em;vertical-align: middle;fill: currentColor;overflow: hidden;"
                    viewBox="0 0 1024 1024"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    p-id="1476"
                >
                    <path
                        d="M832 160c-35.2 0-64 28.8-64 64s28.8 64 64 64 64-28.8 64-64-28.8-64-64-64"
                        fill="#181818"
                        p-id="1477"
                    ></path>
                    <path
                        d="M320 480h384v-64H320z"
                        fill="#181818"
                        p-id="1478"
                    ></path>
                    <path
                        d="M320 608h256v-64h-256z"
                        fill="#181818"
                        p-id="1479"
                    ></path>
                    <path
                        d="M320 736h256v-64h-256z"
                        fill="#181818"
                        p-id="1480"
                    ></path>
                    <path
                        d="M800 352v512H224V224h96v64h384V96H320v64H192c-19.2 0-32 12.8-32 32v704c0 19.2 12.8 32 32 32h640c19.2 0 32-12.8 32-32V352h-64zM384 160h256v64h-256V160z"
                        fill="#181818"
                        p-id="1481"
                    ></path>
                </svg>
                <div class="file-list__item__filename">{{ file.name }}</div>
                <div
                    @click="handleDelete(file)"
                    style="margin-left: auto"
                >
                    <svg
                        v-show="file.show && (!file.finished)"
                        class="icon"
                        style="width: 1em; height: 1em;vertical-align: middle;fill: currentColor;overflow: hidden;font-size: 14px"
                        viewBox="0 0 1024 1024"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        p-id="481"
                    >
                        <path
                            d="M924.8 337.6c-22.6-53.4-54.9-101.3-96-142.4s-89-73.4-142.4-96C631.1 75.8 572.5 64 512 64S392.9 75.8 337.6 99.2c-53.4 22.6-101.3 54.9-142.4 96s-73.4 89-96 142.4C75.8 392.9 64 451.5 64 512s11.8 119.1 35.2 174.4c22.6 53.4 54.9 101.3 96 142.4 41.1 41.1 89 73.4 142.4 96C392.9 948.2 451.5 960 512 960s119.1-11.8 174.4-35.2c53.4-22.6 101.3-54.9 142.4-96 41.1-41.1 73.4-89 96-142.4C948.2 631.1 960 572.5 960 512s-11.8-119.1-35.2-174.4z"
                            p-id="482"
                        ></path>
                        <path
                            d="M557.3 512L693 376.2c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L512 466.7 376.2 331c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L466.7 512 331 647.8c-12.5 12.5-12.5 32.8 0 45.3 6.2 6.2 14.4 9.4 22.6 9.4s16.4-3.1 22.6-9.4L512 557.3 647.8 693c6.2 6.2 14.4 9.4 22.6 9.4s16.4-3.1 22.6-9.4c12.5-12.5 12.5-32.8 0-45.3L557.3 512z"
                            fill="#FFFFFF"
                            p-id="483"
                        ></path>
                    </svg>
                    <svg
                        v-show="file.finished"
                        class="icon"
                        style="width: 1em; height: 1em;vertical-align: middle;fill: currentColor;overflow: hidden;font-size: 14px;color: #409eff"
                        viewBox="0 0 1024 1024"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        p-id="469"
                    >
                        <path
                            d="M924.8 337.6c-22.6-53.4-54.9-101.3-96-142.4s-89-73.4-142.4-96C631.1 75.8 572.5 64 512 64S392.9 75.8 337.6 99.2c-53.4 22.6-101.3 54.9-142.4 96s-73.4 89-96 142.4C75.8 392.9 64 451.5 64 512s11.8 119.1 35.2 174.4c22.6 53.4 54.9 101.3 96 142.4 41.1 41.1 89 73.4 142.4 96C392.9 948.2 451.5 960 512 960s119.1-11.8 174.4-35.2c53.4-22.6 101.3-54.9 142.4-96 41.1-41.1 73.4-89 96-142.4C948.2 631.1 960 572.5 960 512s-11.8-119.1-35.2-174.4z"
                            p-id="470"
                        ></path>
                        <path
                            d="M783.5 364c-12.5-12.5-32.8-12.5-45.3 0L444.1 658.1 285.7 499.7c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l181 181c4.7 4.7 10.5 7.6 16.5 8.8 2 0.4 4.1 0.6 6.1 0.6s4.1-0.2 6.1-0.6c6.1-1.2 11.8-4.1 16.5-8.8l316.8-316.8c12.6-12.5 12.6-32.7 0.1-45.2z"
                            fill="#FFFFFF"
                            p-id="471"
                        ></path>
                    </svg>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "uploader",
    props: {
        multiple: {
            type: Boolean,
            default: false
        },
        accept: {
            type: String,
            default: 'image/*'
        }
    },
    data() {
        return {
            fileCache: [],
            infoCache: []
        }
    },
    methods: {
        handleSubmit() {
            this.$refs.input.click()
        },
        handleChangeFile() {
            let i;
            let infoArr = Array.from(this.$refs.input.files, (file, i) => {
                return {
                    i,
                    name: file.name,
                    show: false,
                    finished: false
                }
            });
            let fileArr = Array.from(this.$refs.input.files);

            this.infoCache = infoArr;
            this.fileCache = fileArr;
        },
        handleShow(file) {
            file.show = true
        },
        handleUnShow(file) {
            file.show = false;
        },

        handleDelete(file) {
            if(file.finished) {
                return
            }
            this.fileCache.splice(file.i, 1)
            // this.fileCache.splice(file.i,1)
            this.infoCache.splice(file.i, 1)
        },

        onSure() {
            for (let [i, item] of this.fileCache.entries()) {
                const xhr = new XMLHttpRequest()
                const formData = new FormData();
                formData.append('file', item);
                xhr.open('post', 'http://127.0.0.1:3020/api/static-request/upload')
                const that = this;
                xhr.upload.onprogress = function (e) {
                    const percent = e.loaded / e.total;
                    const barWidth = percent * 330 + 'px';
                    const currentWidth = getComputedStyle(document.querySelector(`.file-list__item__bar__${ i }`)).width || '0';

                    document.querySelector(`.file-list__item__bar__${ i }`).animate({
                        width: [currentWidth, barWidth]
                    }, {
                        easing: 'linear',
                        duration: 150,
                        fill: 'forwards',
                    })

                    if(percent === 1){
                        that.infoCache[i].finished = true;
                    }
                }
                xhr.send(formData)
            }
        }
    }
}
</script>

<style scoped>
    .ye-uploader {
        width: 330px;
    }

    .ye-uploader__button {
        padding: 6px 10px;
        background-color: #409eff;
        outline: none;
        appearance: none;
        border: none;
        border-radius: 3px;
        color: white;
        font-size: 12px;
        transition: 0.2s;
        cursor: pointer;
    }

    .ye-uploader__button:hover {
        background-color: #3a90e8;
    }

    .ye-uploader__file {
        display: none;
    }

    .ye-uploader__tips {
        margin-top: 6px;
    }

    .ye-uploader__file-list {
        margin-top: 6px;
    }

    .ye-uploader__file-list__item {
        width: 100%;
        padding: 3px 3px;
        margin-bottom: 4px;
        box-sizing: border-box;
        border-radius: 4px;
        display: flex;
        align-items: center;
        height: 26px;
        cursor: pointer;
        position: relative;
    }

    .ye-uploader__file-list__item:hover {
        background-color: rgba(64, 158, 255, 0.07);

    }

    .file-list__item__filename {
        font-size: 14px;
        margin-left: 4px;
        font-weight: 300;
    }

    .ye-uploader__button--confirm {
        background-color: orange;
    }

    .ye-uploader__button--confirm:hover {
        background-color: #f29d00;
    }

    .file-list__item__bar {
        position: absolute;
        left: 0;
        bottom: 0;
        height: 1px;
        background-color: #409eff;
    }
</style>
