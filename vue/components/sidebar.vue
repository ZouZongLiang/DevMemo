<template>
  <div class="sidebar relative w-full h-full bg-[var(--bg-color)]">
    <div class="top flex flex-col">
      <div>
        <input @change="routerChange('/')" type="radio" name="item" id="rb1" class="hidden" checked="true">
        <label for="rb1" class="flex flex-col items-center justify-center">
          <home-two :size="size" stroke-width="2" />
          <p>主页</p>
        </label>
      </div>
      <div>
        <input @change="routerChange('/projectview')"  type="radio" name="item" id="rb2" class="hidden">
        <label for="rb2" class="flex flex-col items-center justify-center">
          <application-two :size="size" stroke-width="2" />
          <p>项目</p>
        </label>
      </div>
      <div>
        <input @change="routerChange('/noteview')"  type="radio" name="item" id="rb3" class="hidden">
        <label for="rb3" class="flex flex-col items-center justify-center">
          <notebook :size="size" stroke-width="2" />
          <p>笔记</p>
        </label>
      </div>
    </div>

    <div class="bottom flex flex-col absolute bottom-0 w-full mb-2">
      <div>
        <label  class="flex flex-col items-center justify-center">
          <SunOne v-show="!dark" :size="size" stroke-width="2" />
          <Moon v-show="dark" :size="size" stroke-width="2" />
          <p v-show="!dark">白天</p>
          <p v-show="dark">夜晚</p>
        </label>

      </div>
      <div>
        <input  @change="routerChange('/settingview')"  type="radio" name="item" id="rb4" class="hidden">
        <label for="rb4" class="flex flex-col items-center justify-center">
          <Setting-One :size="size" stroke-width="2" />
          <p>设置</p>
        </label>
      </div>

      <div>
        <input  @change="routerChange('/userview')"  type="radio" name="item" id="rb5" class="hidden">
        <label for="rb5" class="flex flex-col items-center justify-center">
          <user :size="size" stroke-width="2" />
          <p>个人</p>
        </label>
      </div>
    </div>
  </div>
</template>

<script setup>
import {
  HomeTwo,
  Notebook,
  ApplicationTwo,
  SettingOne,
  User,
  SunOne,
  Moon
} from "@icon-park/vue-next";
import { useRouter } from "vue-router";
import { ref } from "vue";

let size = ref(24), dark = ref(false);
const router = useRouter();

const routerChange = (r)=>{
  router.push(r);
}

</script>

<style scoped>
* {
  user-select: none;
}

label {
  @apply cursor-pointer
}

label {
  @apply w-[60px] h-[60px] ;
}

input[type="radio"]:checked+label {
  @apply bg-[#fff] overflow-hidden relative rounded-md;
  border: 1px solid #83838380;
  box-shadow: #83838380 0px 0px 1px 1px;
}
input[type="radio"]+label:hover{
  border: 1px solid #83838380;
  box-shadow: #83838380 0px 0px 1px 1px;
  @apply bg-[#f5f5f5]  rounded-md
}

label:hover{
  border: 1px solid #83838380;
  box-shadow: #83838380 0px 0px 1px 1px;
  @apply bg-[#f5f5f5]  rounded-md
}

input[type="radio"]:checked+label * {
  @apply fill-[#027de0] 
}

input[type="radio"]:checked+label p {
  display: none;
}


div div div p {
  @apply text-[16px]
}

div div div div {
  @apply flex flex-col items-center;
}

input[type="radio"]:checked+label::before{
  content: "";
  @apply block w-[6px] h-[28px] bg-[#027de0]  absolute top-[16px] left-0 rounded-md;
}
</style>
