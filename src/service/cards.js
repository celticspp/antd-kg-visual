import request from '../util/request';
import { ok } from 'ansi-colors';

// 自增计数器
// var counter = 1004
// var dataList = [
//   { 'id': 1001, 'name': "baidu", 'desc': 'baidu', 'url': 'http://www.baidu.com' },
//   { 'id': 1002, 'name': "google", 'desc': 'google', 'url': 'http://www.google.com' },
//   { 'id': 1003, 'name': "bing", 'desc': 'bing', 'url': 'http://www.bing.com' }
// ];

export function queryList() {
  return request('/api/cards');
  // const rsp = {
  //   status: 'success',
  //   'result': dataList
  // };
  // return rsp;
}

export function deleteOne(id) {
  return request(`/api/cards/${id}`, {
    method: 'DELETE'
  });
}

export function addOne(data) {
  return request('/api/cards/add', {
    headers: {
      'content-type': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify(data),
  });

  // var existData = dataList.some((x) => {
  //   if (x.name == data.name)
  //     return true;
  //   else
  //     return false;
  // });
  // var resp = {}

  // if (existData) {
  //   resp = {
  //     'status': 'fail',
  //     'errorText': 'record already exists'
  //   }
  //   return resp
  // }
  // // id赋值
  // data.id = counter;
  // counter = counter + 1;
  // dataList = dataList.concat(data)

  // resp = {
  //   'status': 'success',
  //   'errorText': ''
  // }
  // return resp
}

export function getStatistic(id) {
  return request(`/api/cards/${id}/statistic`);
}