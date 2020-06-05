import request from "@/utils/request"

export function get_posts(type=null,order_field=1){
    return request({
        url:"/posts",
        method: "GET",
        params:{type,order_field}
    })
}

