<template>
  <div id="app">
    <router-view />
    <ul class="list">
<li>1</li>
<li>2</li>
<li>3</li>
<li>4</li>
<li>5</li>
<li>6</li>
<li>7</li>
<li>8</li>
<li>9</li>
<li>10</li>
</ul>
  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
}
.list{color:black}
.list>li:nth-child(2n){color:red} 
.list>li:nth-child(3n+1){color:green}
.list>li:nth-child(3n+2){color:blue}
</style>
