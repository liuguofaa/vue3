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
    },
}