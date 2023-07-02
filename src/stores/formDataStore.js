import { markRaw } from 'vue'
import { defineStore } from 'pinia'
import cloneDeep from 'lodash/cloneDeep'
import uniqueId from 'lodash/uniqueId'
import DefaultSetting from '@/constant/DefaultSetting'

export const useFormDataStore = defineStore('formData', {
    state: () => ({
        schema: [[]],
        activeIndex: [-1, 0],
        activeElem: null,
        widgetComponents: {}, // 根据 uniqueId 生成的 widgetCmp
        widgetSettings: {},
    }),
    getters: {
        widgetCmp: (state) => {
            const [row, column] = state.activeIndex
            if (row > -1 && column > -1) {
                const curSchema = state.schema[row][column]
                if (curSchema) {
                    return state.widgetComponents[curSchema.gid]
                }
            }
            
            return null;
        },
        settingCmp: (state) => {
            const [row, column] = state.activeIndex
            if (row > -1 && column > -1) {
                const curSchema = state.schema[row][column]
                if (curSchema) {
                    return state.widgetSettings[curSchema.gid]
                }
            }
            return null;
        },
        curElem: (state) => {
            const [row, column] = state.activeIndex
            if (row > -1 && column > -1) {
                return state.schema[row][column]
            }
            return null
        },
    },
    actions: {
        async addWidget(type) {
            const setting = cloneDeep(DefaultSetting[type]);
            if (setting) {
                setting.gid = uniqueId('widget_');
                let row = this.activeIndex[0]; // 当前激活行位置
                // schema 结构 [[elem, elem], [elem]]
                if (!this.schema[row + 1]) {
                    this.schema.push([setting]);
                } else if (this.schema[row + 1] === []) {
                    this.schema[row + 1] = [setting]
                } else {
                    this.schema.splice(row + 1, 0, [setting])
                }
                this.changeActiveIndex([row + 1, 0])
                this.activeElem = setting;
                const widget = await import(`@/widgets/${type}/form-${type}.vue`);
                this.widgetComponents[setting.gid] = markRaw(widget.default);
                const settingCmp = await import(`@/components/widget-setting/${type}/${type}-setting.vue`);
                this.widgetSettings[setting.gid] = markRaw(settingCmp.default);
            }
        },
        delWidget(position) {
            const [row, column] = position;
            const rowElemArr = this.schema[row];
            if (rowElemArr[column]) {
                const delElem = rowElemArr.splice(column, 1)[0];
                if (!rowElemArr.length) {
                    this.schema.splice(row, 1);
                }
                this.changeActiveIndex([-1, -1]);
                delete this.widgetComponents[delElem.gid];
            }
        },
        changeActiveIndex(position) {
            this.activeIndex = position;
            const [row, column] = position;
            if (!this.schema[row] || !this.schema[row].length) {
                this.activeElem = null;
            } else {
                this.activeElem = this.schema[row][column];
            }
        },
        moveDownWidget(position) {
            const [row, column] = position;
            const curElemArr = this.schema[row].splice(column, 1);
            if (!this.schema[row + 1]) {
                this.schema[row + 1] = []
            }
            this.schema[row + 1].unshift(curElemArr[0]);
            if (!this.schema[row].length) {
                this.schema.splice(row, 1);
            }
            this.changeActiveIndex([row + 1, 0]);
        },
        moveUpWidget(position) {
            const [row, column] = position;
            const curElemArr = this.schema[row].splice(column, 1);
            this.schema[row - 1].push(curElemArr[0]);
            if (!this.schema[row].length) {
                this.schema.splice(row, 1);
            }
            this.changeActiveIndex([row - 1, this.schema[row - 1].length - 1]);
        },
        swapMoveWidget(position, direction) {
            const [row, column] = position;
            const schemaRow = this.schema[row];
            schemaRow.splice(column + direction, 1, ...schemaRow.splice(column, 1, schemaRow[column + direction]));
            this.changeActiveIndex([row, column + direction]);
        },
        saveFormData() {
            // 存储在 localStorage 中
        },
        updateSetting() {

        },
    }
})
