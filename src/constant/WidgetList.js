const widgetList = [{
    name: '输入框',
    _type: 'input'
  }, {
    name: '数字',
    _type: 'inputNumber'
  }, {
    name: '数据字典',
    _type: 'dataDic'
  }, {
    name: '逻辑组件',
    _type: 'logic'
  }, {
    name: '纯文本',
    _type: 'desc'
  }, {
    name: '富文本',
    _type: 'richTextEditor'
  }, {
    name: '评分',
    _type: 'rate'
  }, {
    name: '级联组件',
    _type: 'cascader'
  }, {
    name: '子表',
    _type: 'subTable'
  }, {
    name: '多行文本',
    _type: 'textarea'
  }, {
    name: '单选',
    _type: 'radio'
  }, {
    name: '多选',
    _type: 'checkbox'
  }, {
    name: '下拉框',
    _type: 'select'
  }, {
    name: '日期',
    _type: 'date'
  }, {
    name: '日期&时间',
    _type: 'datetime'
  }, {
    name: '上传',
    _type: 'upload'
  }, {
    name: '提交按钮组',
    _type: 'submitBtns'
  }, {
    name: '人员选择',
    _type: 'personnelSelection'
  }]
  
export const getWidgetList = () => {
    return widgetList
}
  