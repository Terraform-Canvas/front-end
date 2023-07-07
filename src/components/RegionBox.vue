<script setup>
const region = "us-east-1";
</script>

<template>
  <div class="region-box">{{ region }}</div>
</template>

<style>
.region-box {
  color: white;
  font-weight: 400;
  background-color: black;
  font-size: 0.5rem;
  padding: 0.5px 10px;
  border-radius: 40px;
  text-align: center;
  margin-right: auto;
  border: 1px solid black;
  line-height: 2rem;
}
</style>
