import { FormKitPlugin } from '@formkit/core';
import Input from './Input.vue'
import Select from './Select.vue'
import Checkbox from './Checkbox.vue'
import Radio from './Radio.vue'
import OptionGroupVue from './OptionGroup.vue';
import ToggleVue from './Toggle.vue';
import Textarea from './Textarea.vue';
import ColorVue from './Color.vue';
import RangeVue from './Range.vue';
import FileVue from './File.vue';
import DateVue from './Date.vue';
import TimeVue from './Time.vue';
import BtnToggle from './BtnToggle.vue';
import RatingVue from './Rating.vue';
import EditorVue from './Editor.vue';
import SliderVue from './Slider.vue';

export { default as registerErrorMessage } from '../utils/registerErrorMessage';
export { default as getErrorMessage } from '../utils/getErrorMessage';




export const createQuasarPlugin = (): FormKitPlugin => {

    return (node) => {
        let type = node.props.type + '';



        switch (type) {
            case "q-input":
                return node.define({
                    type: "input",
                    props: ["inputType"],
                    component: Input
                });
            case "q-textarea":
                return node.define({
                    type: "input",
                    component: Textarea
                });
            case "q-editor":
                return node.define({
                    type: "input",
                    component: EditorVue
                });

            case "q-select":
                return node.define({
                    type: "input",
                    component: Select
                });
            case "q-checkbox":
                return node.define({
                    type: "input",
                    component: Checkbox
                });
            case "q-radio":
                return node.define({
                    type: "input",
                    component: Radio
                });
            case "q-option-group":
                return node.define({
                    type: "input",
                    props: ["optionType"],
                    component: OptionGroupVue
                });
            case "q-toggle":
                return node.define({
                    type: "input",
                    component: ToggleVue
                });
            case "q-color":
                return node.define({
                    type: "input",
                    component: ColorVue
                });
            case "q-range":
                return node.define({
                    type: "input",
                    component: RangeVue
                });
            case "q-file":
                return node.define({
                    type: "input",
                    component: FileVue
                });
            case "q-date":
                return node.define({
                    type: "input",
                    component: DateVue
                });

            case "q-time":
                return node.define({
                    type: "input",
                    component: TimeVue
                });
            case "q-btn-toggle":
                return node.define({
                    type: "input",
                    component: BtnToggle,
                });
            case "q-rating":
                return node.define({
                    type: "input",
                    component: RatingVue
                });
            case "q-slider":
                return node.define({
                    type: "input",
                    component: SliderVue
                });


        }
    }

}