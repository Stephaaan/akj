<!--
  SAFE TO DELETE
 -->
<template>
  <div class="font-worksans text-sm uppercase text-textPink">
    <div class="px-8 justify-between w-550 text hidden md:flex">
      <div v-for="link in links" v-bind:key="link.link" class="cursor-pointer">
        <nuxt-link :to="link.link">
          {{ $t(link.text) }}
        </nuxt-link>
      </div>
      <div class="language_selector relative hidden md:flex">
        <div class="uppercase cursor-pointer">
          {{ $store.getters.lang }}
        </div>
        <div
          v-on:click.prevent="switchLang($store.getters.lang === 'en'? 'sk' : 'en')"
          class="language_selector_inner w-5 h-5 uppercase hidden cursor-pointer"
        >
          {{ $store.getters.lang === 'en'? 'sk' : 'en' }}
        </div>
      </div>
    </div>
    <div id="hamburger_icon" class="px-8 md:hidden flex items-end flex-col relative">
      <div v-on:click.prevent="toggleHamburger">
        <img
          v-if="!hamburgerOpen"
          class="w-12"
          src="~/assets/imgs/icons/hamburger.svg"
          alt="menu"
        >
        <img
          v-if="hamburgerOpen"
          class="w-8 m-2"
          src="~/assets/imgs/icons/close.svg"
          alt="menu"
        >
      </div>
      <div
        id="hamburger_body"
        v-if="hamburgerOpen"
        class="flex bg-white w-screen pb-8 pt-24 pl-8 -z-1 top-0 flex-col absolute right-0"
      >
        <div v-for="link in links" v-bind:key="link.link" class="cursor-pointer">
          <nuxt-link :to="link.link">
            {{ $t(link.text) }}
          </nuxt-link>
        </div>
        <div class="flex">
          <div class="uppercase cursor-pointer font-bold mr-2">
            {{ $store.getters.lang }}
          </div>
          <div
            v-on:click.prevent="switchLang($store.getters.lang === 'en'? 'sk' : 'en')"
            class="uppercase cursor-pointer font-light"
          >
            {{ $store.getters.lang === 'en'? 'sk' : 'en' }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { actionTypes } from '~/store/actionTypes'
export default {
  data: () => {
    return {
      activeClass: 'border-textPink border-b border-solid',
      links: [
        {
          text: 'menu.about',
          link: 'o-nas'
        },
        {
          text: 'menu.services',
          link: '/sluzby'
        },
        {
          text: 'menu.carrer',
          link: '/kariera'
        },
        {
          text: 'menu.news',
          link: '/aktuality'
        },
        {
          text: 'menu.profile',
          link: '/profil'
        },
        {
          text: 'menu.contact',
          link: '/kontakt'
        }
      ],
      hamburgerOpen: false
    }
  },
  watch: {
    $route () {
      this.hamburgerOpen = false
    }
  },
  methods: {
    switchLang (lang) {
      this.$store.commit(actionTypes.SET_LANG, lang)
    },
    toggleHamburger () {
      this.hamburgerOpen = !this.hamburgerOpennpm
    }
  }
}
</script>
<style scoped>
#hamburger_body {
  top: -2rem;
}
#hamburger_body > div {
  width: fit-content;
}
.language_selector:hover > .language_selector_inner {
  position: absolute;
  top: 20px;
  left: 0;
  display: flex;
}
</style>
