<script setup>
  import InputWrapper from './FormInputWrapper.vue'
  import Input from './InputField.vue'
  import Label from './Label.vue'
</script>

<template>
  <form
    name="contact-form"
    method="post"
    data-netlify="true"
    data-netlify-honeypot="franks-field"
  >
    <input type="hidden" name="form-name" value="contact-form" />
    <input type="hidden" name="franks-field" />
    <fieldset class="space-y-4">
      <InputWrapper>
        <Input name="Name" nameAttrib="name" id="name" required type="text" placeholder="Dade Murphy" />
      </InputWrapper>
      <InputWrapper>
        <Input name="Email" nameAttrib="email" id="email" required type="email" placeholder="zerocool@stuyvesantHS.edu" />
      </InputWrapper>
      <InputWrapper>
        <Label name="Message" nameAttrib="message" />
        <textarea class="h-48 sm:h-36 md:h-48 lg:h-44 footer-textarea" id="message" name="message" required placeholder="I was referred to you by Darren and Peter of Razor &amp; Blade Mktg. about raising an army of volunteers of growth hackers.

Would you happen to have 5 minutes to discuss? I know of a great rooftop we could meet at. It even has a pool."></textarea>
      </InputWrapper>
    </fieldset>
    <div class="mt-4 text-right">
      <button class="px-6 py-3 font-bold tracking-wider uppercase rounded-sm bg-tart-700 hover:bg-tart-600 text-mint-100" type="submit">Submit</button>
    </div>
  </form>
</template>