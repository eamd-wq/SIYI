<template>
  <div class="home">
    <div id="myCharts"></div>
  </div>
</template>

<script>
export default {
  mounted() {
    var charts = this.$echarts.init(document.getElementById("myCharts"));
    charts.showLoading({
            text: '数据正在努力加载...',
        }); 
    window.setTimeout(() => {
    charts.hideLoading()
      charts.setOption({
    tooltip: {
        formatter: "{a} <br/>{b} : {c}%"
    },
    toolbox: {
        show: true,
        feature: {
            mark: {
                show: true
            },
            restore: {
                show: true
            },
            saveAsImage: {
                show: true
            }
        }
    },
    series: [
        {
            name: "业务指标",
            type: "gauge",
            detail: {
                formatter: "{value}%"
            },
            data: [
                {
                    value: 50,
                    name: "完成率"
                }
            ]
        }
    ]
});
    }, 500);
  }
};
</script>

<style>
#myCharts {
  width: 900px;
  height: 600px;
}
</style>
