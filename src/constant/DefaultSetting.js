export default {
    input: {
      type: 'input',
      label: '输入框',
      name: '',
      placeholder: '请输入...',
      desc: '',
      disabled: false,
      expression: '',
      value: '',
      formula: '',
      rules: [
        { required: false, message: '必填项不能为空！', trigger: 'change' },
        { type: 'string', message: '格式不正确', trigger: 'change' }
      ]
    },
    inputNumber: {
      type: 'inputNumber',
      label: '输入框',
      name: '',
      placeholder: '请输入...',
      desc: '',
      disabled: false,
      precision: 0,
      formula: '',
      rules: [
        { required: false, message: '必填项不能为空！', trigger: 'change', type: 'number' }
      ],
      value: 0
    },
    textarea: {
      type: 'textarea',
      label: '文本域',
      name: '',
      placeholder: '请输入...',
      desc: '',
      disabled: false,
      textareaRows: 3,
      value: '',
      rules: [
        { required: false, message: '必填项不能为空！', trigger: 'blur' },
        { type: 'string', message: '格式不正确', trigger: 'blur' }
      ]
    },
    checkbox: {
      type: 'checkbox',
      label: '复选框',
      name: '',
      options: [],
      desc: '',
      value: [],
      disabled: false,
      dataTable: {},
      dataFrom: 'manual',
      rules: [
        { required: false, type: 'array', min: 1, message: '至少选择一个选项', trigger: 'change' }
      ]
    },
    radio: {
      type: 'radio',
      label: '单选框',
      name: '',
      options: [],
      desc: '',
      disabled: false,
      dataTable: {},
      dataFrom: 'manual',
      rules: [
        { required: false, message: '请选择选项', trigger: 'change' }
      ]
    },
    select: {
      type: 'select',
      label: '下拉框',
      name: '',
      options: [],
      desc: '',
      disabled: false,
      filter: false,
      multiple: false,
      dataTable: {}, // curDataTable, columnId, columnIdName, columnValue, columnValueName
      dataFrom: 'manual',
      rules: [
        { required: false, message: '请选择选项', trigger: 'change', type: 'string' }
      ]
    },
    date: {
      type: 'date',
      label: '日期',
      name: '',
      desc: '',
      disabled: false,
      showTime: false,
      format: 'yyyy-MM-dd',
      nowDate: false,
      value: '',
      rules: [
        { required: false, type: 'date', message: '请选择日期', trigger: 'change' }
      ]
    },
    datetime: {
      type: 'datetime',
      label: '时间',
      name: '',
      desc: '',
      disabled: false,
      showTime: true,
      format: 'yyyy-MM-dd HH:mm:ss',
      nowDate: false,
      value: '',
      rules: [
        { required: false, type: 'date', message: '请选择时间', trigger: 'change' }
      ]
    },
    upload: {
      type: 'upload',
      label: '上传',
      name: '',
      btnText: '上传文件',
      fileType: 'xls,xlsx', // 'file'
      action: '/rest/content/raw',
      fieldName: 'file',
      downloadUrl: '/rest/content/${id}/raw',
      deleteUrl: '/rest/content/${id}',
      size: 20480,
      desc: '',
      disabled: false,
      rules: [
        { required: false, message: '请上传文件', trigger: 'change' }
      ]
    },
    rate: {
      type: 'rate',
      label: '评分',
      name: '',
      desc: '',
      disabled: false,
      allowHalf: false,
      showText: false,
      count: 5,
      rules: [
        { required: false, message: '请评分', trigger: 'change', type: 'number' }
      ]
    },
    desc: {
      type: 'desc',
      name: '',
      expression: '',
      fontSize: 12,
      color: '#333',
      content: '段落描述信息',
      visible: true,
      format: 'YYYY-MM-DD HH:mm:ss',
      nowDate: false,
      isUrl: false,
      value: '',
      align: 'left'
    },
    richTextEditor: {
      type: 'richTextEditor',
      name: '',
      label: '富文本',
      expression: '',
      placeholder: '请输入...',
      desc: '',
      disabled: false,
      value: '',
      editorOptions: [],
      rules: [{
        required: false,
        message: '必填项不能为空！',
        trigger: 'change'
      }]
    },
    submitBtns: {
      type: 'submitBtns',
      name: '',
      btns: [
        { text: '认领', disabled: false, btntype: 'primary', name: 'claim' },
        { text: '删除', disabled: false, btntype: 'default', name: 'delete' },
        { text: '暂存', disabled: false, btntype: 'primary', name: 'save' },
        { text: '同意', disabled: false, btntype: 'primary', name: 'agree', commentRequired: false, noValid: false },
        { text: '不同意', disabled: false, btntype: 'default', name: 'disagree', commentRequired: true, noValid: false },
        { text: '提交', disabled: false, btntype: 'primary', name: 'submit' }
      ]
    },
    fetchBtn: {
      type: 'fetchBtn',
      name: '',
      url: '',
      text: 'BUTTON',
      disabled: false,
      btntype: 'primary'
    },
    datetimeRange: {
      type: 'datetimeRange',
      label: '起止时间',
      nameBegin: '',
      nameEnd: '',
      desc: '',
      rangeType: 'date',
      disabled: false,
      showTime: true,
      format: 'yyyy-MM-dd',
      rules: [{
        required: false,
        type: 'date',
        message: '请选择日期',
        trigger: 'change'
      }]
    },
    subTable: {
      type: 'subTable',
      label: '子表',
      name: '',
      disabled: false,
      fieldSetting: [{
        label: '默认字段',
        property: {}
      }],
      types: [], // 给后端取值用
      value: [],
      showAddBtn: false,
      showDelBtn: false,
      showDataTransBtn: false,
      showDownloadBtn: false
    },
    dataDic: {
      type: 'dataDic',
      name: '',
      draggable: true,
      settings: {
        dataDict: {},
        api: {},
        resultFields: [],
        apiParamFields: []
      },
      widgetNames: [],
      mouseHover: false,
      mouseClick: false,
      offset: {
        x: 0,
        y: 0
      },
      pos: {
        x: 0,
        y: 0
      }
    },
    personnelSelection: {
      type: 'personnelSelection',
      label: '成员名称',
      showvalue: '成员名称',
      name: '',
      placeholder: '请输入...',
      selectMultiple: false,
      desc: '',
      disabled: false,
      expression: '',
      value: [],
      personnelDetails: [],
      disName: 'firstName',
      searchField: 'filter',
      rules: [
        { required: false, type: 'array', message: '必填项不能为空！', trigger: 'change' }
      ]
    },
    cascader: {
      type: 'cascader',
      label: '级联组件',
      name: '',
      desc: '',
      options: [],
      value: [],
      rules: [
        { required: false, type: 'array', message: '必填项不能为空！', trigger: 'change' }
      ]
    },
    // logic: {
    //   type: 'logic',
    //   label: '逻辑组件',
    //   name: '',
    //   desc: '',
    //   value: [],
    //   logicRules: [{
    //     condition: [{
    //       id: 'c_1527848233309',
    //       fieldName: 'w1526355322649__输入框',
    //       value: ''
    //     }],
    //     result: {
    //       display: [],
    //       hidden: ['wTextarea__申请原因']
    //     }
    //   }]
    // },
    logic: {
      type: 'logic',
      label: '逻辑组件',
      name: '',
      desc: '',
      value: [],
      logicRules: []
    }
}
  