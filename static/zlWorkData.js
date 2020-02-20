module.exports={
  data:{
    'headBarData':{
      'indexBgUrl':'/static/images/index-bg.jpg',
      'searchInput':'',
      'options': [{
        'value': '选项1',
        'label': '全部'
      }, {
        'value': '选项2',
        'label': '2020'
      }, {
        'value': '选项3',
        'label': '2019'
      },{
        'value': '选项4',
        'label': '2018'
      },{
        'value': '选项5',
        'label': '2017'
      },{
        'value': '选项6',
        'label': '2016'
      }],
      'selectValue':'选项1',
      'searchPlaceholder':'请输入关键字查询'
    },
    'indexTabsData':{
      'activeName': 'show',
      'fatherPath':'/work/',
      'tabsData':[
        {
          'labelName':'个人收藏',
          'tabName':'collection',
          'show':false
        },
        {
          'labelName':'毕业汇演',
          'tabName':'show',
          'show':true
        },
        {
          'labelName':'服装艺术设计',
          'tabName':'costume',
          'show':false
        },
        {
          'labelName':'纺织品艺术设计',
          'tabName':'textile',
          'show':false
        },
        {
          'labelName':'人物形象设计',
          'tabName':'characters',
          'show':false
        },
        {
          'labelName':'课外作品',
          'tabName':'extracurricular',
          'show':true
        }
      ]
    },
  }
};
