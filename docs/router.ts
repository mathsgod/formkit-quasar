import { createRouter, createWebHashHistory, type RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
    { path: '/', redirect: '/input' },
    { path: '/input', name: 'q-input', component: () => import('./pages/Input.vue'), meta: { title: 'q-input', group: 'Inputs' } },
    { path: '/textarea', name: 'q-textarea', component: () => import('./pages/Textarea.vue'), meta: { title: 'q-textarea', group: 'Inputs' } },
    { path: '/editor', name: 'q-editor', component: () => import('./pages/Editor.vue'), meta: { title: 'q-editor', group: 'Inputs' } },
    { path: '/file', name: 'q-file', component: () => import('./pages/File.vue'), meta: { title: 'q-file', group: 'Inputs' } },
    { path: '/select', name: 'q-select', component: () => import('./pages/Select.vue'), meta: { title: 'q-select', group: 'Selection' } },
    { path: '/radio', name: 'q-radio', component: () => import('./pages/Radio.vue'), meta: { title: 'q-radio', group: 'Selection' } },
    { path: '/checkbox', name: 'q-checkbox', component: () => import('./pages/Checkbox.vue'), meta: { title: 'q-checkbox', group: 'Selection' } },
    { path: '/option-group', name: 'q-option-group', component: () => import('./pages/OptionGroup.vue'), meta: { title: 'q-option-group', group: 'Selection' } },
    { path: '/toggle', name: 'q-toggle', component: () => import('./pages/Toggle.vue'), meta: { title: 'q-toggle', group: 'Selection' } },
    { path: '/btn-toggle', name: 'q-btn-toggle', component: () => import('./pages/BtnToggle.vue'), meta: { title: 'q-btn-toggle', group: 'Selection' } },
    { path: '/date', name: 'q-date', component: () => import('./pages/Date.vue'), meta: { title: 'q-date / q-time', group: 'Pickers' } },
    { path: '/color', name: 'q-color', component: () => import('./pages/Color.vue'), meta: { title: 'q-color', group: 'Pickers' } },
    { path: '/slider', name: 'q-slider', component: () => import('./pages/Slider.vue'), meta: { title: 'q-slider / q-range / q-rating', group: 'Sliders' } }
]

export const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export const navGroups: { title: string; items: typeof routes }[] = [
    { title: 'Inputs', items: routes.filter(r => r.meta?.group === 'Inputs') },
    { title: 'Selection', items: routes.filter(r => r.meta?.group === 'Selection') },
    { title: 'Pickers', items: routes.filter(r => r.meta?.group === 'Pickers') },
    { title: 'Sliders', items: routes.filter(r => r.meta?.group === 'Sliders') }
]
