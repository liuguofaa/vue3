import api from "../../api/index"

export default {

    data(){
        return {
            list: []
        }
    },

    mounted(){
        api.getListAPI({
            count:5
        }).then(res => {
            this.list = res.data
        }, error => {
            console.log(error.message)
        })

        this.list = [{"img":"#","salePrice":100,"from":"阿里巴巴0","id":0,"title":"第0个","oPrice":0,"desc":"第0个"},{"img":"#","salePrice":100,"from":"阿里巴巴1","id":1,"title":"第1个","oPrice":1000,"desc":"第1个"},{"img":"#","salePrice":100,"from":"阿里巴巴2","id":2,"title":"第2个","oPrice":2000,"desc":"第2个"},{"img":"#","salePrice":100,"from":"阿里巴巴3","id":3,"title":"第3个","oPrice":3000,"desc":"第3个"},{"img":"#","salePrice":100,"from":"阿里巴巴4","id":4,"title":"第4个","oPrice":4000,"desc":"第4个"}]
    },
}