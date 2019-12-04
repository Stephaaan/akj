<template>
  <div class="font-worksans text-sm text-textPink">
    <div class="px-8 justify-between w-550 text  hidden md:flex">
      <div v-for="link in links" v-bind:key="link.link" :class="[active===link.link?activeClass:'']" class="cursor-pointer">
        {{ link.text }}
      </div>
    </div>
    <div id="hamburger_icon" class="px-8 md:hidden flex items-end flex-col relative">
      <img class="w-12" src="~/assets/imgs/icons/hamburger.svg" alt="menu"></img>
      <div id="hamburger_body" class="bg-white w-screen pb-8 pt-24 pl-8 -z-1 top-0 hidden flex-col absolute right-0">
        <div v-for="link in links" v-bind:key="link.link" :class="[active===link.link?activeClass:'']" class="cursor-pointer">
          {{ link.text }}
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    active: {
      type: String,
      required: true
    }
  },
  data: () => {
    return {
      activeClass: 'border-textPink border-b border-solid',
      links: [
        {
          text: 'O NÁS',
          link: 'o-nas'
        },
        {
          text: 'SLUŽBY',
          link: 'sluzby'
        },
        {
          text: 'KARIÉRA',
          link: 'kariera'
        },
        {
          text: 'AKTUALITY',
          link: 'aktuality'
        },
        {
          text: 'PROFIL',
          link: 'profil'
        },
        {
          text: 'KONTAKT',
          link: 'kontakt'
        }
      ]
    }
  },
  watch: {
    active: {
      immediate: true,
      handler: (val, oldVal) => {
        // eslint-disable-next-line
        console.log(val)
      }
    }
  }
}
</script>
<style scoped>
#hamburger_icon:hover > #hamburger_body{
 display:flex;
}
#hamburger_body {
  top: -2rem;
}
#hamburger_body > div {
  width: fit-content;
}

</style>
