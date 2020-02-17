module.exports={
  data:{
    'headBarData':{
      'searchInput':'',
      'options': [{
        'value': '选项1',
        'label': '按图像'
      }, {
        'value': '选项2',
        'label': '按色彩'
      }, {
        'value': '选项3',
        'label': '按风格'
      },{
        'value': '选项4',
        'label': '按手绘'
      }],
      'selectValue':'选项1',
      'searchPlaceholder':'请输入关键字查询'
    },
    'indexTabsData':{
      'activeName': 'flower',
      'fatherPath':'/material/',
      'tabsData':[
        {
          'labelName':'个人收藏',
          'tabName':'collection',
          'show':false
        },
        {
          'labelName':'数字图形',
          'tabName':'digital',
          'show':false
        },
        {
          'labelName':'花型',
          'tabName':'flower',
          'show':true
        },
        {
          'labelName':'面料',
          'tabName':'fabric',
          'show':true
        },
        {
          'labelName':'服装',
          'tabName':'costume',
          'show':true
        },
        {
          'labelName':'服饰',
          'tabName':'apparel',
          'show':true
        }
      ]
    }
  }
};
