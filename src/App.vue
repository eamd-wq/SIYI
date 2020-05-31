<template>
  <div id="app">
    <main>
      <section
        :class="{'section_style':ind === selectIndex}"
        v-for="(ele,ind) in section"
        :key="ind+'section'"
        @click="setType(ind)"
      >{{ele}}</section>
    </main>
    <router-view />
  </div>
</template>
<script>
export default {
  mounted() {
    this.section.forEach((element,index)=>{
      switch(window.location.pathname) {
        case this.path[index]:
        this.selectIndex = index
        this.selectTitle = element
      }
    })
  },
  data() {
    return {
      section: [
        "柱状图",
        "折线图",
        "饼图",
        "散点图",
        "气泡图",
        "雷达图",
        "漏斗图",
        "仪表盘",
        "词云",
        "地图"
      ],
      path: [
        "/",
        "/Line",
        "/Pie",
        "/Scatter",
        "/Effect",
        "/Radar",
        "/Funnel",
        "/Gauge",
        "/Cloud",
        "/Map"
      ],
      selectIndex: 0,
      selectTitle:""
    };
  },
  methods: {
    setType(index) {
      this.selectIndex = index;
      this.$router.history.push({
        path: this.path[index]
      });
    }
  }
};
</script>
<style>
* {
  margin: 0;
  padding: 0;
}
#app main {
  display: flex;
  align-items: center;
}
#app main section {
  padding: 5px 15px;
  border: 2px solid black;
  border-radius: 5px;
  margin: 10px 15px;
}
.section_style {
  background: #999;
  color: white;
}
</style>
