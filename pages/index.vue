<template>
  <v-row justify="center" align="center">
      <v-card flat class="rounded-lg pa-10 form-container">
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
            <Button 
              block
              type="submit"    
              nuxt to="/currencies"         
            > Sign in </Button>
          </v-card-actions>
        </v-form>
      </v-card>
  </v-row>
</template>

<script>
import Input from '@/components/UI/Input.vue';
import Button from '@/components/UI/Button.vue';

export default {
  components: {
    Input,
    Button
  },
  name: 'LoginPage',
  data: () => ({
    email: '',
    password: null,
    rules: {
      required: value => !!value || 'Required',
      min: v => v && v.length >= 8 || 'Min 8 characters',
    },
  })
}
</script>

<style lang="sass" scoped>
.form-container
  width: 400px

.login-form
  border-radius: 8px

.login-title
  font-weight: 700
  font-size: 22px

.login-text
  font-size: 14px

// .v-text-field.v-text-field--solo .v-input__control input
//     border-color: red !important
</style>
