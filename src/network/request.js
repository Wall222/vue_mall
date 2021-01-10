import axios from 'axios'
import '../plugins/vant.js'
import { Toast } from 'vant'

export function request(config) {
    const instance = axios.create({
        baseURL: 'http://152.136.185.210:7878/api/m5',
        timeout: 5000
    })
    instance.interceptors.request.use(config => {
        Toast.loading({
            message: '加载中...',
            forbidClick: true
        })
        return config
    })
    instance.interceptors.response.use(
        res => {
            Toast.success('请求成功')
            return res.data
        },
        err => {
            Toast.fail('请求失败')
            return err
        }
    )
    return instance(config)
}
