import request from '../util/request';  // request 是 demo 项目脚手架中提供的一个做 http 请求的方法，是对于 fetch 的封装，返回 Promise
import { message } from 'antd';

const delay = (millisecond) => {
  return new Promise((resolve) => {
    setTimeout(resolve, millisecond);
  });
};

export default {
  namespace: 'graph',
  state: {
    data: {}
  },
  effects: {
    *queryGraphData(_, sagaEffects) {
      const { call, put } = sagaEffects;
      // const endPointURI = 'https://08ad1pao69.execute-api.us-east-1.amazonaws.com/dev/random_joke';
      const endPointURI = '';

      try {
        const graphData = yield call(request, endPointURI);
        console.log(graphData)
        yield put({ type: 'save', payload: graphData });
      } catch (e) {
        message.error("获取数据失败"); // 打印错误信息
      }
    }
  },
  reducers: {
    save(state, { payload: { graphData } }) {
      return {
        ...state,
        graphData,
      }
    }
  }
};