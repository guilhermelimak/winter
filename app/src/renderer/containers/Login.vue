<template>
<div class="login__wrapper">
  <div class="login__container">
    <div v-if="redirected">
      <div class="form-group">
        <input
          v-model="pin"
          class="form-control text-center"
          placeholder="Type here the 7 digit pin" />
      </div>

      <button class="btn btn-primary" @click="sendPin">
        Submit PIN
      </button>
    </div>

    <button class="btn btn-primary" @click="login" v-else>
      Login
    </button>
  </div>
</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  data() {
    return {
      redirected: false,
      pin: '',
    }
  },
  created() {
    const accessToken = localStorage.getItem('accessToken')
    const accessTokenSecret = localStorage.getItem('accessTokenSecret')

    if (accessToken && accessTokenSecret) {
      this.updateAccessToken({ accessToken, accessTokenSecret })
      this.$router.push('home')
    }
  },
  computed: {
    ...mapGetters([
      'tokens',
    ]),
  },
  methods: {
    ...mapActions([
      'getRequestToken',
      'getAccessToken',
      'updateAccessToken',
    ]),
    login() {
      this.getRequestToken()
      this.redirected = true
    },
    sendPin() {
      this.getAccessToken({ ...this.tokens, pin: this.pin })
        .then(() => this.$router.push('home'))
    },
  },
}
</script>

<style lang="scss">
.login {
  &__wrapper {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &__container {
    height: 200px;
  }
}
</style>
