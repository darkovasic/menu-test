<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <v-card flat class="rounded-lg pa-10">
        <v-card-title class="pa-0 pb-8">
          <MenuLogo />
        </v-card-title>
        <v-card-title class="login-title pa-0">
          Sign in
        </v-card-title>
        <v-card-text class="login-text pa-0">
          <p>
            Please enter your email and password
          </p>
        </v-card-text>

        <v-form @submit.prevent="submit">
          <v-col cols="12" class="pa-0">
            <Input 
              v-model="email"          
              type="email"
              label="Email"             
              :rules="[rules.required]"
            />
          </v-col>

          <v-col cols="12" class="pa-0">
            <Input 
              v-model="password"          
              type="password"
              label="Password"             
              :rules="[rules.required]"
            />
          </v-col>

          <v-card-actions class="pa-0">
            <v-btn block depressed color="#FF6600" class="white--text" type="submit" height="40px" nuxt to="/currencies"> Sign in </v-btn>
          </v-card-actions>
        </v-form>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import Input from '@/components/UI/Input.vue'

export default {
  components: {
    Input
  },
  name: 'LoginPage',
  data: () => ({
    email: '',
    password: null,
    showPass: false,
    rules: {
      required: value => !!value || 'Required',
      min: v => v && v.length >= 8 || 'Min 8 characters',
    },
  })
}
</script>

<style lang="sass" scoped>
.login-form
  border-radius: 8px

.login-title
  font-weight: 700
  font-size: 22px

.login-text
  font-size: 14px

// .v-text-field.v-text-field--solo .v-input__control input
//     border-color: red !important

// .v-application div.v-text-field--outlined
//     color: transparent !important

// .v-text-field--outlined.v-input--is-focused fieldset, .v-text-field--outlined.v-input--has-state fieldset
//     border-color: #1976d2 !important
</style>
