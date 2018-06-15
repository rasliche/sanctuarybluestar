<template lang="html">
  <div>
      <h1>Register and Get Trained</h1>
      <p>Welcome to the Blue Star training. This training is required for your dive/snorkel shop or fishing charter to be recognized as a Blue Star operator.</p>

      <label for="email">Email: </label>
      <input
        type="email"
        v-model="email"
        name="email"
        placeholder="Jane.Doe@email.com">
      <br>
      <label for="password">Favorite Sea Creature: </label>
      <input
        type="password"
        v-model="password"
        name="password"
        placeholder="Bermuda Chub">
      <br>
      <button class="border" @click="register">Register</button>
  </div>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService.js'

export default {
    data() {
        return {
            email: '',
            password: ''
        }
    },
    methods: {
        async register() {
            console.log("Register button was clicked.")
            const response = await AuthenticationService.register({
                email: this.email,
                password: this.password
            })
            console.log(response.data);
        }
    }
}
</script>

<style lang="css">
</style>
