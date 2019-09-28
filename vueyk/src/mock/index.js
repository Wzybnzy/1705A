import Mock from 'mockjs'
import banner from './banner.json'

import data from './data.json'

Mock.mock('/api/banner',banner);

Mock.mock('/api/list',data);