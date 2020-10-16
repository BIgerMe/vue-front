import request from '@/utils/request'

export function fetchList(query) {
  return request({
    url: '/chefs/select',
    method: 'get',
    params: query
  })
}

export function fetchArticle(id) {
  return request({
    url: '/chefs/detail',
    method: 'get',
    params: { id }
  })
}

export function fetchPv(pv) {
  return request({
    url: '/chefs/pv',
    method: 'get',
    params: { pv }
  })
}

export function createArticle(data) {
  return request({
    url: '/chefs/create',
    method: 'post',
    data
  })
}

export function updateArticle(data) {
  return request({
    url: '/chefs/update',
    method: 'post',
    data
  })
}
