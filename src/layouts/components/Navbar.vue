<template>
  <div class="navbar-container d-flex content align-items-center">
    
    <!-- Nav Menu Toggler -->
    <ul class="nav navbar-nav d-xl-none">
      <li class="nav-item">
        <b-link
          class="nav-link"
          @click="toggleVerticalMenuActive"
        >
          <feather-icon
            icon="MenuIcon"
            size="21"
          />
        </b-link>
      </li>
    </ul>

    <!-- Left Col -->
    <div class="bookmark-wrapper align-items-center flex-grow-1 d-none d-lg-flex">
      <dark-Toggler class="d-none d-lg-block" />
    </div>

    <b-navbar-nav class="nav align-items-center ml-auto">
      <b-nav-item-dropdown
        right
        toggle-class="d-flex align-items-center dropdown-user-link"
        class="dropdown-user"
      >
      <template #button-content>
      <div class="d-sm-flex d-none user-nav">
        <p class="user-name font-weight-bolder mb-0">
          {{ userData.user_name || userData.user_sobrenome }}
        </p>
        <!-- <span class="user-status">{{ userData.role }}</span> -->
      </div>
      <b-avatar
        size="40"
        :src="userData.user_photo_url"
        variant="light-primary"
        badge
        class="badge-minimal"
        badge-variant="success"
      >
        <feather-icon
          v-if="!userData.user_name"
          icon="UserIcon"
          size="22"
        />
      </b-avatar>
    </template>

        <b-dropdown-item link-class="d-flex align-items-center">
          <feather-icon
            size="16"
            icon="UserIcon"
            class="mr-50"
          />
          <span>Profile</span>
        </b-dropdown-item>

        <b-dropdown-item link-class="d-flex align-items-center">
          <feather-icon
            size="16"
            icon="MailIcon"
            class="mr-50"
          />
          <span>Inbox</span>
        </b-dropdown-item>

        <b-dropdown-item link-class="d-flex align-items-center">
          <feather-icon
            size="16"
            icon="CheckSquareIcon"
            class="mr-50"
          />
          <span>Task</span>
        </b-dropdown-item>

        <b-dropdown-item link-class="d-flex align-items-center">
          <feather-icon
            size="16"
            icon="MessageSquareIcon"
            class="mr-50"
          />
          <span>Chat</span>
        </b-dropdown-item>

        <b-dropdown-divider />

        <b-dropdown-item
      link-class="d-flex align-items-center"
      @click="logout"
    >
      <feather-icon
        size="16"
        icon="LogOutIcon"
        class="mr-50"
      />
      <span>Logout</span>
    </b-dropdown-item>
      </b-nav-item-dropdown>
    </b-navbar-nav>
  </div>
</template>

<script>

import DarkToggler from '@core/layouts/components/app-navbar/components/DarkToggler.vue'

import {
  BNavItemDropdown, BDropdownItem, BDropdownDivider, BAvatar,
} from 'bootstrap-vue'
// import { initialAbility } from '@/libs/acl/config'
import useJwt from '@/auth/jwt/useJwt'


export default {
  components: {
    BNavItemDropdown,
    BDropdownItem,
    BDropdownDivider,
    BAvatar,

    DarkToggler,
  },
  data() {
    return {
      userData: JSON.parse(localStorage.getItem('userData')),
    
    
    }
  },
  props: {
    toggleVerticalMenuActive: {
      type: Function,
      default: () => {},
    },
  },

  methods: {
    logout() {
    
      localStorage.removeItem(useJwt.jwtConfig.storageTokenKeyName)
      localStorage.removeItem(useJwt.jwtConfig.storageRefreshTokenKeyName)
      localStorage.removeItem('userData')
    

     
      this.$router.push({ name: 'auth-login' })
    },
  },
}
</script>
