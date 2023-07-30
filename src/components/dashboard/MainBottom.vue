<script setup>
import VueCommand, { createStdout } from 'vue-command';
import 'vue-command/dist/vue-command.css';
const commands = {
    'hello-world': () => createStdout('Hello world'),
};
let data_list = [];
</script>

<template>
    <vue-command
        class="cmd-size"
        :commands="commands"
        title="terraform log"
        is-fullscreen
    />
</template>
<style>
.cmd-size {
    width: 100%;
    height: 200px;
}
</style>
