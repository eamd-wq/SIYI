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
        trigger: "axis",
        showDelay: 0,
        axisPointer: {
            type: "cross",
            lineStyle: {
                type: "dashed",
                width: 1
            }
        }
    },
    legend: {
        data: ["scatter1", "scatter2"]
    },
    toolbox: {
        show: true,
        feature: {
            mark: {
                show: true
            },
            dataZoom: {
                show: true
            },
            dataView: {
                show: true,
                readOnly: true
            },
            restore: {
                show: true
            },
            saveAsImage: {
                show: true
            }
        }
    },
    xAxis: [
        {
            type: "value",
            power: 1,
            splitNumber: 4,
            scale: true
        }
    ],
    yAxis: [
        {
            type: "value",
            power: 1,
            splitNumber: 4,
            scale: true
        }
    ],
    series: [
        {
            name: "scatter1",
            type: "scatter",
            symbol: "circle",
            data: [[-69, 58, 70], [10, 74, 29], [-11, 68, 99], [10, 76, 53], [-79, -9, 93], [-81, -67, 56], [-95, -71, 50], [-7, 22, 5], [-57, -67, 73], [16, 58, 73], [-65, 30, 56], [4, -75, 3], [-65, 92, 98], [30, -65, 29], [-11, -37, 59], [48, -31, 89], [-39, -51, 23], [-21, -37, 23], [24, -11, 38], [90, -19, 79], [-61, -11, 98], [-23, -83, 75], [-39, 58, 25], [-93, -65, 24], [60, -17, 22], [54, 88, 27], [-29, 76, 76], [-45, 32, 89], [-69, 58, 63], [90, 34, 33], [-41, -5, 91], [58, -33, 77], [-79, -83, 69], [-99, -43, 80], [44, 8, 0], [-81, -19, 74], [-13, 40, 84], [60, -67, 82], [16, 14, 59], [-37, 36, 93], [0, 54, 23], [-61, 44, 26], [32, 60, 10], [90, 20, 21], [20, -91, 53], [32, -87, 73], [-85, 90, 74], [72, -1, 95], [-67, -59, 87], [-21, -29, 60]],
            symbolSize: function anonymous(value
               ) {
               var radius = (value[2] - 0) * 16 / 100 + 4;
               return Math.max(Math.round(radius), 1) || 1;
           }
        },
        {
            name: "scatter2",
            type: "scatter",
            symbol: "circle",
            data: [[76, 72, 50], [-67, 70, 52], [26, 20, 71], [-57, -63, 93], [-19, -49, 78], [46, 28, 71], [-87, -97, 7], [-81, -59, 71], [32, 28, 49], [68, 88, 73], [20, -47, 46], [-61, 18, 89], [-89, -3, 92], [-19, -27, 43], [-55, -67, 18], [-79, 52, 92], [14, 16, 61], [-19, -1, 97], [-93, -67, 81], [-63, 14, 4], [-87, -37, 92], [24, 96, 82]],
            symbolSize: function anonymous(value
               ) {
               var radius = (value[2] - 0) * 16 / 100 + 4;
               return Math.max(Math.round(radius), 1) || 1;
           }
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
