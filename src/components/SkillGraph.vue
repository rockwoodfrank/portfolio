<template>
  <div class="skill-bar">
    <div class="skill-bar__left">
      <img class="skill-bar__logo" :src="logo" :alt="langName" />
      <p class="skill-bar__name">{{ langName }}</p>
    </div>
    <div class="skill-bar__bar" v-if="bar" :style="{ width: barWidth }"></div>
    <div class="skill-bar__soon" v-else>COMING SOON</div>
    <p class="skill-bar__percent">{{ percent }}%</p>
  </div>
</template>

<script>
export default {
  name: 'SkillGraph',
  props: {
    logo: String,
    langName: String,
    percent: Number,
  },
  data() {
    return {
      isBar: false,
    }
  },
  computed: {
    bar() {
      if (this.langName == 'Java') return false
      else return true
    },
    barWidth() {
      return `${this.percent / 2}vw`
    },
  },
}
</script>

<style>
.skill-bar {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 3rem;
  width: 60vw;
}
.skill-bar:hover .skill-bar__percent {
  opacity: 1;
  top: 0;
}
.skill-bar:hover .skill-bar__logo {
  opacity: 0;
  top: 0;
}
.skill-bar:hover .skill-bar__name {
  opacity: 1;
  bottom: 1rem;
}
.skill-bar__logo {
  width: 2rem;
  height: 2rem;
  position: relative;
  top: 1rem;
  transition: all 0.5s ease;
}
.skill-bar__name {
  position: relative;
  font-weight: bold;
  opacity: 0;
  bottom: 0;
  transition: all 0.5s ease;
}
.skill-bar__left {
  width: 3rem;
  height: auto;
  padding-right: 2rem;
}
.skill-bar__bar {
  max-width: 50vw;
  background: linear-gradient(90deg, #075995 0%, #075995 0.01%, #2d937a 99.99%);
  border-radius: 8px;
  height: 1.5rem;
  transition: height 0.1s ease;
}
.skill-bar:hover .skill-bar__bar {
  height: 2rem;
}
.skill-bar__soon {
  width: 50vw;
  font-weight: bold;
  height: 1.5rem;
  background: linear-gradient(90deg, #c2c2c2 0%, #ececec 99.99%);
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.skill-bar__percent {
  padding-left: 1rem;
  font-weight: bold;
  opacity: 0;
  position: relative;
  top: 2rem;
  transition: all 0.5s;
}

@media (max-width: 500px) {
  .skill-bar__left {
    width: 2rem;
  }
  .skill-bar__percent {
    padding-left: 0.2rem;
  }
}
</style>
