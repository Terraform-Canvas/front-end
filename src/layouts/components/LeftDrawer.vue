<script setup>
const types = [
    {
        Computing: ['ec2'],
    },
    {
        Networking: ['natgw', 'privatesubnet', 'publicsubnet', 'vpc'],
    },
    {
        Scailing: ['alb', 'asg'],
    },
    {
        Security: ['sg'],
    },
];

function onDragStart(event, nodeType) {
    if (event.dataTransfer) {
        event.dataTransfer.setData('application/vueflow', nodeType);
        event.dataTransfer.effectAllowed = 'move';
    }
}
</script>

<template>
    <v-navigation-drawer theme="dark" rail permanent>
        <v-list density="compact" nav>
            <!-- add cloud platform icons -->
            <v-list-item
                ><v-img
                    src="@/assets/images/aws-logo.png"
                    width="auto"
                    height="auto"
            /></v-list-item>
        </v-list>
    </v-navigation-drawer>
    <v-navigation-drawer width="180">
        <v-list
            class="nodes"
            nav
            v-for="(item, idx) in types"
            density="compact"
        >
            <v-list-group value="aws">
                <template v-slot:activator="{ props }">
                    <v-list-item
                        v-bind="props"
                        :title="Object.keys(item)[0]"
                    ></v-list-item>
                </template>
                <v-list-item
                    nav
                    v-for="(resource, i) in Object.values(item)[0]"
                    :key="i"
                    :title="resource"
                    :draggable="true"
                    @dragstart="onDragStart($event, resource)"
                ></v-list-item>
            </v-list-group>
        </v-list>
    </v-navigation-drawer>
</template>
