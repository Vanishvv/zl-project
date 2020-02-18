module.exports={
  data:{
    'activeColor':'#ff0000',
    'inactiveColor':'#ccc',
    'indexMenuMode':'horizontal',
    'select':'',
    'headBarData':{
      'indexBgUrl':'/static/images/index-bg.jpg',
      'searchInput':'',
      'options': [{
        'value': '选项1',
        'label': '按收藏数'
      }, {
        'value': '选项2',
        'label': '按浏览数'
      }, {
        'value': '选项3',
        'label': '按时间'
      }],
      'selectValue':'选项1',
      'searchPlaceholder':'请输入关键字查询'
    },
    'indexTabsData':{
      'activeName': 'materials',
      'fatherPath':'/resource/',
      'tabsData':[
        {
          'labelName':'个人收藏',
          'tabName':'collection',
          'show':false
        },
        {
          'labelName':'重点推荐',
          'tabName':'recommended',
          'show':true
        },
        {
          'labelName':'设计素材',
          'tabName':'materials',
          'show':true
        },
        {
          'labelName':'设计工具',
          'tabName':'tool',
          'show':true
        },
        {
          'labelName':'设计导航',
          'tabName':'nav',
          'show':true
        },
        {
          'labelName':'其他',
          'tabName':'other',
          'show':true
        }
      ]
    },
    'switchData':[
      {
        'name':'国内',
        'value':''
      },
      {
        'name':'国外',
        'value':''
      },
      {
        'name':'免费',
        'value':''
      },
      {
        'name':'收费',
        'value':''
      }
    ]
  }
};
