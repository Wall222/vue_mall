import { request } from './request.js'

export function getHomeMultidata() {
    return request({
        method: 'get',
        url: '/home/multidata'
    })
}

export function getGoodsList(type, page) {
    return request({
        method: 'get',
        url: '/home/data',
        params: {
            type,
            page
        }
    })
}
