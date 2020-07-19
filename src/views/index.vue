<template>
    <div class="container">
        <div class="header">
            <div class="one"><img src="~public/img/home_icon_bendishenghuo.png"></div>
            <div class="two">北京生活</div>
            <div class="three">1</div>
        </div>
        <div class="search">
            <div class="search-header">北京</div>
            <div class="search-content">
                <div class="one"><img src="~public/img/home_icon_sousuo.png"></div>
                <div class="two"><input placeholder="请输入关键字"></div>
            </div>
        </div>
        <div class="content">
            <div class="content-all" v-for="l in list" :key="l.id">
                <div><img class="content-img" :href="l.img" /></div>
                <div class="title">{{l.title}}</div>
                <div class="desc">{{l.desc}}</div>
                <div class="price"><p class="sale-price" v-text="'￥'+l.salePrice"></p><p class="o-price" v-text="'￥'+l.oPrice"></p></div>
                <div class="from">{{l.from}}</div>
            </div>
        </div>
    </div>
</template>
<style scoped>
    @import "~@/assets/css/index.css"
</style>
<script>
import index from '@/assets/js/index.js'
export default index
</script>