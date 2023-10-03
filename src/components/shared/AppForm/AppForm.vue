<script setup lang="ts">
import { ref } from "vue";
import { contact } from "../../../content/Contact";

import DarkButton from "../../shared/AppButtons/DarkButton.vue";

const emailDomains = [
  "gmail",
  "hotmail",
  "outlook",
  "yahoo",
  "proton",
  "mailbox",
];
const email = ref<string>("");
const message = ref<string>("");
function extractCorporativeName(): string {
  if (email.value === "" || !email.value.includes("@")) {
    return "";
  }
  const message = "New portfolio message from ";
  const atPosition = email.value.indexOf("@");
  const lastDotPosition = email.value.lastIndexOf(".");
  const corporativeName = email.value.slice(atPosition + 1, lastDotPosition);
  if (emailDomains.includes(corporativeName)) {
    return message.concat("a company");
  }
  return message.concat(capitalize(corporativeName));
}

function capitalize(text: string): string {
  return text[0].toUpperCase() + text.slice(1);
}

const WEB3FORMS_ACCESS_KEY = "93c5dc5e-42e0-47b5-9436-b71bff45b79a";
const loading = ref<boolean>(false);
const success = ref<boolean>(false);
const error = ref<boolean>(false);

async function submitForm() {
  loading.value = true;
  const response = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      access_key: WEB3FORMS_ACCESS_KEY,
      email: email.value,
      message: message.value,
    }),
  });
  const result = await response.json();
  loading.value = false;
  result.success ? (success.value = true) : (error.value = true);
}
</script>

<template>
  <form @submit.prevent="submitForm" class="contact-form">
    <input type="hidden" name="subject" :value="extractCorporativeName()" />
    <input
      type="hidden"
      name="from_name"
      value="IMPORTANT: portfolio message"
      
    />

    <label for="email">{{ contact.email }}</label>
    <input
      id="email"
      type="email"
      name="email"
      placeholder="Write your email"
      v-model="email"
      required
      autocomplete="email"
    />

    <label for="message">{{ contact.message }}</label>
    <textarea
      id="message"
      name="message"
      rows="10"
      cols="auto"
      placeholder="Write your message"
      v-model="message"
      required
      autocomplete="off"
    />
    <button
      type="submit"
      class="submit-button"
      :disabled="loading || error || success"
    >
      <DarkButton
        :text="success ? 'Success' : error ? 'Error' : contact.sendMessage"
        :icon-name="success ? 'success' : error ? 'error' : 'plane'"
        :is-loading="loading"
        :background-color="success ? 'blue-dark' : error ? 'orange' : undefined"
      />
    </button>
  </form>
</template>

<style scoped lang="scss">
@import '@/styles/main.scss';
.contact-form {
  width: 40%;
  display: flex;
  flex-direction: column;
  margin-top: 15px;
  @media screen and (max-width: $breackpoint-medium) {
    width: 100%;
    margin-top: 25px;
  }
  &:deep(.button) {
    align-self: end;
  }
  & label {
    margin-top: 15px;
    font-size: $font-size-p-mobile;
    font-family: $font-primary;
    color: $grey-dark;
    margin-left: 10px;
  }
  & input,
  & textarea {
    resize: none;
    border: 2px solid $grey-light;
    border-radius: 10px;
    padding: 10px 20px;
    font-family: $font-primary;
    &:focus {
      border: 2px solid $grey-dark;
    }
  }
  textarea {
    margin-bottom: 20px;
  }

  .submit-button {
    width: fit-content;
    height: fit-content;
    &:disabled,
    :deep(.button) {
      cursor: default;
    }
  }
}
</style>
