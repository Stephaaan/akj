<template>
  <div
    :class="hamburgerOpen ? 'fixed bg-white' : 'absolute'"
    class="w-full max-w-full  z-50 pt-8"
  >
    <div class="relative w-full flex justify-between no-link-border">
      <nuxt-link to="/">
        <img class="px-8 h-12 md:h-20 cursor-pointer " src="~/assets/imgs/logo.png" alt="logo">
      </nuxt-link>
      <div>
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
          <div id="hamburger_icon" class="px-8 md:hidden flex items-end flex-col z-10">
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
              v-on:click.prevent="closeHamburger"
              class="flex w-screen h-screen bg-blackOpacity flex-col z-50 fixed right-0 top-80"
            >
              <div v-on:click.prevent class="w-full px-8 bg-white opacity-100 pb-8 pt-8">
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
      this.hamburgerOpen = !this.hamburgerOpen
    },
    closeHamburger () {
      this.hamburgerOpen = false
    }
  }
}
</script>
<style scoped>
  .no-link-border > a{
    border: none !important;
  }
</style>
