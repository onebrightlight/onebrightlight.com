<script setup>
  import Link from '@/components/Link.vue'
  import HeroHeadAndTextVue from '@/components/hero-head-and-text/Wrapper.vue'
  import HeroHead from '@/components/hero-head-and-text/Head.vue'
  import HeroText from '@/components/hero-head-and-text/Text.vue'
  import Form from '@/components/Form.vue'
</script>

<template>
  <div class="relative py-12 bg-repeat bg-[length:240px] bg-tart-500 bg-hero-pattern overflow-x-hidden">
    <div class="container relative z-10 mx-auto container-padding pt-36">
      <h1 class="text-4xl font-bold md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl text-jet-700 font-heading">Hey there, I’m<br><span class="text-mint-500">Christopher.</span></h1>
      <p class="max-w-sm mt-4 text-sm md:mt-8 lg:mt-12 text-mint-500 md:text-base md:max-w-md lg:max-w-xl lg:text-xl lg:leading-snug xl:max-w-2xl 2xl:max-w-3xl">I’m a frontend web developer in Oakland that loves building fun, practical things that help everyday people. I’m passionate about CSS, accessibility, and building a better, more inclusive&nbsp;web.</p>
    </div>
    <img src="/img/portrait-illustration.png" alt="Portrait illustration of me, Christopher Kennedy" class="absolute bottom-0 z-0 h-full max-w-none -right-24 sm:right-0 opacity-60 sm:opacity-80 md:opacity-100">
  </div>
  <HeroHeadAndTextVue background="bg-jet-100 bg-light-jet-pattern">
    <HeroHead>
       <h2 class="text-3xl font-bold sm:text-4xl lg:text-5xl font-heading xl:text-6xl 2xl:text-7xl">I make <span class="text-tart-500">great websites</span><br class="md:hidden"> with <span class="text-tart-500">amazing people</span>.</h2>
    </HeroHead>
    <HeroText>
      <p class="whitespace-pre-wrap ">I’ve worked on projects rang­ing from small bou­tique web­sites to ecom­merce solu­tions for nation­al food brands, to build­ing a webapp for the <Link webUrl="https://access.nyc.gov" text="City of New York" /> while working with <Link webUrl="https://www.bluestate.co" text="Blue State Digital" />, to most recently stewarding and maintaining the <Link webUrl="https://www.oaklandca.gov" text="City of Oakland’s Website" />.</p>
      
      <p class="whitespace-pre-wrap ">In every instance, I’ve enjoyed focusing on infor­ma­tion archi­tec­ture as well as the min­u­tae of front-end devel­op­ment. If you’d like to see some of my work, <Link webUrl="#contact" text="contact me" />.</p>
    </HeroText>
  </HeroHeadAndTextVue>
  <HeroHeadAndTextVue background="bg-jet-700 bg-dark-jet-pattern" textColor="text-mint-600">
    <HeroHead>
      <h2 class="text-3xl font-bold sm:text-4xl lg:text-5xl font-heading xl:text-6xl 2xl:text-7xl">I’m online a lot.<br> Like <span class="text-tart-500">a lot</span> a lot.</h2>
    </HeroHead>
    <HeroText>
      <p>I love how the internet allows us to be closer to one another, especially given the current <Link webUrl="https://www.cdc.gov/coronavirus/2019-ncov/index.html" text="health" /> and <Link webUrl="https://climate.nasa.gov" text="ecological" /> climate. We have the opportunity to expose ourselves to so many different ideas and concepts; <Link webUrl="https://www.bbvaopenmind.com/en/articles/internet-changed-everyday-life/" text="we can learn so much" /> from one another. In spite of all that, I still sometimes use TikTok.</p>

      <p>You can find me on <Link webUrl="https://www.twitter.com/furioursus" text="Twitter" />, <Link webUrl="https://www.github.com/onebrightlight" text="GitHub" />, <Link webUrl="https://medium.com/@onebrightlight" text="Medium" />, and <Link webUrl="https://flickr.com/photos/onebrightlight" text="Flickr" />.</p>
    </HeroText>
  </HeroHeadAndTextVue>
  <HeroHeadAndTextVue background="bg-jet-900 bg-darker-jet-pattern" textColor="text-mint-600" id="contact">
    <HeroHead>
      <div>
        <h2 class="text-3xl font-bold sm:text-4xl lg:text-5xl font-heading xl:text-6xl 2xl:text-7xl">Get in touch!</h2>
        <p class="mt-1 lg:max-w-lg md:mt-2 lg:text-lg xl:text-xl">If you’re interested in discussing the projects I’ve launched or you want to let me know about a project you think I’d be a match for, let’s talk!</p>
      </div>
    </HeroHead>
    <HeroText>
      <Form />
    </HeroText>
  </HeroHeadAndTextVue>
</template>
