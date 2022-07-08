<template>
  <main class="page-404">
    <h1>404 Not found</h1>
    <button @click="router.back()">
      Back
    </button>
  </main>
</template>
<style lang="scss">
.page-404 {
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  padding-top: 20vh;
  align-items: center;
  gap: 10vh;
  h1 {
    color: #fff;
    font-size: 4em;
    font-family: "Inter", sans-serif;
  }
  button {
    appearance: none;
    border: none;
    border-radius: 110px;
    font-size: 2.25em;
    padding: 10px 25px;
    background: rgba(255, 255, 255, 0.4);
    backdrop-filter: blur(18px);
    color: #000;
  }
}
</style>
<script setup lang="ts">
const router = useRouter();

/**
 * We modify the head for the current page
 */
useHead({
  //The content is in english so we set the lang to en
  htmlAttrs: {
    lang: "en"
  },
  // the title show in the address bar
  title: "404 Not found!",
  // A description for SEO
  meta: [
    {
      name: "description",
      content: "This page doesn't exist sorry!"
    }
  ],
  /**
   * We add font we need here
   * that we get from google font
   */
  link: [
    {
      rel: "preconnect",
      href: "https://fonts.googleapis.com"
    },
    {
      rel: "preconnect",
      href: "https://fonts.gstatic.com",
      crossorigin: true,
    },
    {
      href: "https://fonts.googleapis.com/css2?family=Inter&display=swap",
      rel: "stylesheet",
    }
  ]
});
</script>
