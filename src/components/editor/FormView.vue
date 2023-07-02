<template lang="pug">
.form-view(
    @mousemove="handleMousemove"
    @mousedown="handleMousedown"
    @mouseup="handleMouseup")
    Form(ref="form" label-position="top" :model="formData")
        draggable(v-model="nativeSchema" item-key="id" @start="startMove" @end="endMove")
            template(#item="{element, index}")
                .item-container
                    .item-wrapper(
                        v-for="(elem, k) in element" :key="k" @click="onClickItem([index, k], elem)"
                        :style="{background: isSelectedItem([index, k]) ? '#f4f4ff' : ''}"
                    )
                        .del-icon(v-if="isSelectedItem([index, k], 'del')" @click.stop="delWidget([index, k])")
                            Icon.trash(type="md-trash")
                        .movedown-icon(v-if="isSelectedItem([index, k], 'movedown')" @click.stop="movedownWidget([index, k])")
                            Icon.movedown(type="md-arrow-down")
                        .moveup-icon(v-if="isSelectedItem([index, k], 'moveup')" @click.stop="moveupWidget([index, k])")
                            Icon.moveup(type="md-arrow-up")
                        .swap-left-icon(v-if="isSelectedItem([index, k], 'swap-left')" @click.stop="swapMoveWidget([index, k], -1)")
                            Icon.swap(type="md-swap")
                        .swap-right-icon(v-if="isSelectedItem([index, k], 'swap-right')" @click.stop="swapMoveWidget([index, k], 1)")
                            Icon.swap(type="md-swap")

                        BaseWidget(
                            :elem="elem"
                            :formData="formData"
                            :curWidget="getCurWidget(elem)"
                            :curRow="element"
                            :editable="true"
                        )
</template>

<script setup>
import { ref, watch } from 'vue'
import draggable from 'vuedraggable'
import BaseWidget from './BaseWidget.vue';
import { useFormDataStore } from '@/stores/formDataStore';

const store = useFormDataStore();

const props = defineProps({
    schema: {
        type: Array,
        default: () => [],
    },
    widgetSettings: {
        type: Object
    },
    activeIndex: {
        type: Array,
        default: () => [-1, -1]
    },
    rawModelJson: {
        type: Object,
    },
})

function getFormData(schema) {
    const formData = {}
    schema.forEach((row) => {
        if (Array.isArray(row)) {
            row.forEach((item) => {
                formData[item.gid] = item.value;
            })
        }
    })
    return formData;
}

const nativeSchema = ref(props.schema)
const formData = ref(getFormData(props.schema))


watch(props.schema, (schema) => {
    nativeSchema.value = [...schema]
    formData.value = getFormData(schema)
})


function handleMousemove() {

}

function handleMousedown() {

}

function handleMouseup() {

}

function startMove() {
    store.changeActiveIndex([-1, -1])
}

function endMove() {
    store.changeActiveIndex([-1, -1])
}

function onClickItem(position) {
    store.changeActiveIndex(position)
}

function isSelectedItem(position, type) {
    const [row, column] = position;
    const isSelected = store.activeIndex.join() === position.join();
    switch(type) {
        case 'moveup':
            if (row === 0) {
                return false
            }
            return isSelected
        case 'movedown':
            if (Array.isArray(nativeSchema.value[row + 1]) && nativeSchema.value[row + 1].length) {
                return isSelected;
            }
            return nativeSchema.value[row].length > 1 && isSelected
        case 'swap-left':
            return column !== 0 && isSelected
        case 'swap-right': {
            const len = nativeSchema.value[row].length
            return column !== len - 1  && isSelected
        }
        default:
            return isSelected;
    }
}

function movedownWidget(position) {
    store.moveDownWidget(position)
}

function moveupWidget(position) {
    store.moveUpWidget(position)
}
function swapMoveWidget(position, direction) {
    store.swapMoveWidget(position, direction);
}
function delWidget(position) {
    store.delWidget(position);
}
function getCurWidget(elem) {
    return store.widgetComponents[elem.gid];
}

</script>

<style lang="less" scoped>
.form-view {
    width: 100%;
    padding: 2rem;
  .item-container {
    width: 100%;
    cursor: pointer;
    display: flex;
    flex-direction: row;
    .item-wrapper {
      transition: all .2s ease;
      position: relative;
      width: 100%;
      padding: 0 1rem;
      .del-icon {
        position: absolute;
        top: -5px;
        right: 5px;
        width: 20px;
        height: 20px;
        margin: auto;
        border-radius: 50%;
        background: #f66e1f;
        z-index: 10;
        .trash {
          color: #fff;
        }
      }
      .movedown-icon {
        position: absolute;
        bottom: -10px;
        left: 50%;
        height: 20px;
        width: 20px;
        border-radius: 50%;
        background: #fff;
        transform: translate(-50%, 0);
        z-index: 10;
        .movedown {
          color: #fc9153;
        }
      }
      .moveup-icon {
        position: absolute;
        top: -10px;
        left: 50%;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background: #fff;
        transform: translate(-50%, 0);
        z-index: 10;
        .moveup {
          color: #fc9153;
        }
      }
      .trash, .movedown, .swap, .moveup {
        margin-left: 5px;
        font-size: 14px;
      }
      .swap-right-icon {
        position: absolute;
        right: -10px;
        top: 50%;
        transform: translate(0, -50%);
        border-radius: 50%;
        background: #fff;
        z-index: 10;
        .swap {
          color: #fc9153;
        }
      }
      .swap-left-icon {
        position: absolute;
        left: -10px;
        top: 50%;
        transform: translate(0, -50%);
        border-radius: 50%;
        background: #fff;
        z-index: 10;
        .swap {
          color: #fc9153;
        }
      }
    }
  }
}
</style>>
