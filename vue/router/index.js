import { createMemoryHistory, createRouter } from 'vue-router'

const HomeView = ()=> import('../views/HomeView.vue')
const NoteView = ()=> import('../views/NoteView.vue')
const ProjectView = ()=> import('../views/ProjectView.vue')
const SettingsView = ()=> import('../views/SettingView.vue')
const UserView = ()=> import('../views/UserView.vue')


const routes = [
  { path: '/', component: HomeView },
  { path: '/noteview', component: NoteView },
  { path: '/projectview', component: ProjectView },
  { path: '/settingview', component: SettingsView },
  { path: '/userview', component: UserView },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router