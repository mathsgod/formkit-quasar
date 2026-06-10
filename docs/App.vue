<script setup lang="ts">
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import { navGroups } from './router'

const route = useRoute()
const drawerOpen = ref(true)

const formData = ref<Record<string, unknown> | null>(null)
</script>

<template>
  <q-layout view="hHh Lpr lFf">
    <q-header elevated class="bg-primary text-white">
      <q-toolbar>
        <q-btn flat dense round icon="menu" @click="drawerOpen = !drawerOpen" />
        <q-toolbar-title>
          <q-icon name="widgets" class="q-mr-sm" />
          FormKit + Quasar
        </q-toolbar-title>
        <q-btn flat icon="open_in_new" href="https://github.com/mathsgod/formkit-quasar" target="_blank" label="GitHub" />
      </q-toolbar>
    </q-header>

    <q-drawer v-model="drawerOpen" show-if-above bordered>
      <q-list>
        <template v-for="group in navGroups" :key="group.title">
          <q-item-label header>{{ group.title }}</q-item-label>
          <q-item
            v-for="r in group.items"
            :key="r.path"
            :to="r.path"
            clickable
            :active="route.path === r.path"
          >
            <q-item-section>{{ r.meta?.title }}</q-item-section>
          </q-item>
        </template>
      </q-list>
    </q-drawer>

    <q-page-container>
      <q-page padding>
        <router-view v-slot="{ Component }">
          <component
            :is="Component"
            v-model:formData="formData"
          />
        </router-view>
      </q-page>
    </q-page-container>
  </q-layout>
</template>
