import Mock from 'mockjs'

import city from './city.json'

console.log(city.data.map(item => item.Spelling.substr(0,1)))
let arr = [...new Set(city.data.map(item => item.Spelling.substr(0,1)))]

let data = {};

arr.forEach(item => {
    data[item] = city.data.filter(item1 => item1.Spelling.substr(0,1) == item);
})


console.log(arr);

Mock.mock('/api/list',{
    'list|10-20':[
        {
            'img':'@image(200x200,#f0f)',
            'title':'@ctitle',
            'price|10-20':1,
            'id|+':1
        }
    ]
});

Mock.mock('/api/city',data);