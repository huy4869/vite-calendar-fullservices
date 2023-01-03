<script setup lang="ts">
import WelcomeItem from "./WelcomeItem.vue";
import DocumentationIcon from "./icons/IconDocumentation.vue";
import ToolingIcon from "./icons/IconTooling.vue";
import EcosystemIcon from "./icons/IconEcosystem.vue";
import CommunityIcon from "./icons/IconCommunity.vue";
import SupportIcon from "./icons/IconSupport.vue";
</script>

<template>
  <div data-aos="fade-up" data-aos-anchor-placement="top-bottom">
    <WelcomeItem>
      <template #icon>
        <DocumentationIcon />
      </template>
      <template #heading>Documentation</template>

      Vue’s
      <a href="https://vuejs.org/" target="_blank" rel="noopener"
        >official documentation</a
      >
      provides you with all information you need to get started.
    </WelcomeItem>
  </div>

  <div data-aos="fade-up" data-aos-anchor-placement="center-bottom">
    <WelcomeItem>
      <template #icon>
        <ToolingIcon />
      </template>
      <template #heading>Tooling</template>

      This project is served and bundled with
      <a
        href="https://vitejs.dev/guide/features.html"
        target="_blank"
        rel="noopener"
        >Vite</a
      >. The recommended IDE setup is
      <a href="https://code.visualstudio.com/" target="_blank" rel="noopener"
        >VSCode</a
      >
      +
      <a
        href="https://github.com/johnsoncodehk/volar"
        target="_blank"
        rel="noopener"
        >Volar</a
      >. If you need to test your components and web pages, check out
      <a href="https://www.cypress.io/" target="_blank" rel="noopener"
        >Cypress</a
      >
      and
      <a href="https://on.cypress.io/component" target="_blank"
        >Cypress Component Testing</a
      >.

      <br />

      More instructions are available in <code>README.md</code>.
    </WelcomeItem>
  </div>
  <div data-aos="fade-up" data-aos-anchor-placement="bottom-bottom">
    <WelcomeItem>
      <template #icon>
        <EcosystemIcon />
      </template>
      <template #heading>Ecosystem</template>

      Get official tools and libraries for your project:
      <a href="https://pinia.vuejs.org/" target="_blank" rel="noopener">Pinia</a
      >,
      <a href="https://router.vuejs.org/" target="_blank" rel="noopener"
        >Vue Router</a
      >,
      <a href="https://test-utils.vuejs.org/" target="_blank" rel="noopener"
        >Vue Test Utils</a
      >, and
      <a href="https://github.com/vuejs/devtools" target="_blank" rel="noopener"
        >Vue Dev Tools</a
      >. If you need more resources, we suggest paying
      <a
        href="https://github.com/vuejs/awesome-vue"
        target="_blank"
        rel="noopener"
        >Awesome Vue</a
      >
      a visit.
    </WelcomeItem>
  </div>

  <div data-aos="flip-left"
       data-aos-easing="ease-out-cubic"
       data-aos-duration="2000">
    <WelcomeItem>
      <template #icon>
        <CommunityIcon />
      </template>
      <template #heading>Community</template>

      Got stuck? Ask your question on
      <a href="https://chat.vuejs.org" target="_blank" rel="noopener"
        >Vue Land</a
      >, our official Discord server, or
      <a
        href="https://stackoverflow.com/questions/tagged/vue.js"
        target="_blank"
        rel="noopener"
        >StackOverflow</a
      >. You should also subscribe to
      <a href="https://news.vuejs.org" target="_blank" rel="noopener"
        >our mailing list</a
      >
      and follow the official
      <a href="https://twitter.com/vuejs" target="_blank" rel="noopener"
        >@vuejs</a
      >
      twitter account for latest news in the Vue world.
    </WelcomeItem>
  </div>
  <div data-aos="fade-left"
       data-aos-anchor="#example-anchor"
       data-aos-offset="500"
       data-aos-duration="500">
    <WelcomeItem>
      <template #icon>
        <SupportIcon />
      </template>
      <template #heading>Support Vue</template>

      As an independent project, Vue relies on community backing for its
      sustainability. You can help us by
      <a href="https://vuejs.org/sponsor/" target="_blank" rel="noopener"
        >becoming a sponsor</a
      >.
    </WelcomeItem>
  </div>
</template>