
/* redux最核心的数据管理对象模块 */

import {createStore,applyMiddleware} from 'redux'   
import {composeWithDevTools} from 'redux-devtools-extension'  // 使用redux调试工具插件
import thunk from 'redux-thunk'              // 导入thunk支持异步action

import reducers from './reducers'

export default createStore(reducers,composeWithDevTools(applyMiddleware(thunk)))
