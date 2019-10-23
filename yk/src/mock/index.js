import Mock from 'mockjs'

Mock.mock('/api/list',{
    'list|10-20':[
        {
            'img':'@image(200x200,#abc)',
            'title':'@ctitle',
            'price|10-20':10,
            'id|+1':1
        }
    ]
})