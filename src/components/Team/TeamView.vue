<script setup>
import team from "../../team.json";
import TeamHeader from "./Teams/TeamHeader.vue";
import TeamMembers from "./Teams/TeamMembers.vue";
import TeamFooter from "./Teams/TeamFooter.vue";
</script>

<template>
  <TeamHeader :team="team" />

  <div class="place-self-center flex flex-col gap-y-3" style="width: 725px">
    <TeamMembers :team="team" />
  </div>

  <TeamFooter :team="team" />
</template>
