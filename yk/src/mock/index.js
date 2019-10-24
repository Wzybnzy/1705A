import Mock from 'mockjs'

// Mock.mock('/api/list',{
//     'list|10-20':[
//         {
//             'img':'@image(200x200,#abc)',
//             'title':'@ctitle',
//             'price|10-20':10,
//             'id|+1':1
//         }
//     ]
// })


Mock.mock('/api/list', ({ body }) => {
    let { page, limit } = JSON.parse(body);
    console.log(page, limit);
    // 0-9   10-19  20-29  
    let start = (page -1) * limit; // 0 10 20
    console.log(start);
    if(page <= 3){  //最多5页的数据
        return Mock.mock({
            [`list|${limit}`]: [
                {
                    'img': '@image(200x200,#abc)',
                    'title': '@ctitle',
                    'price|10-20': 10,
                    'id|+1': start
                }
            ]
        });
    } else { 
        return {
            list:[]
        }
    }
    
});