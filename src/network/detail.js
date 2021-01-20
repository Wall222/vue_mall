import { request } from './request.js'

export function getDetailsData(iid) {
  return request({
    methods: 'get',
    url: '/detail',
    params: { iid }
  })
}

export function getRecommend() {
  return request({
    methods: 'get',
    url: '/recommend'
  })
}

export class Goods {
  constructor(itemInfo, columns, service) {
    this.title = itemInfo.title
    this.price = itemInfo.price
    this.oldPrice = itemInfo.oldPrice
    this.discount = itemInfo.discountDesc
    this.discountBgColor = itemInfo.discountBgColor
    this.columns = columns
    this.service = service
  }
}