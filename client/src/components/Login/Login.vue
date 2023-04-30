<template>
    <div class="container" id="container">
        <div class="form-container sign-in-container">
            <form @submit.prevent="handleSubmit">
                <h1>Sign in</h1>
                <div class="social-container">
                    <a href="#" class="social"><i class="fab fa-facebook-f"></i></a>
                    <a href="#" class="social"><i class="fab fa-google-plus-g"></i></a>
                    <a href="#" class="social"><i class="fab fa-linkedin-in"></i></a>
                </div>
                <span>or use your account</span>
                <input type="email" placeholder="Email" name="email" v-model="email" required />
                <input type="password" placeholder="Password" name="password" v-model="password" required />
                <a href="#">Forgot your password?</a>
                <button type="submit"  class="btnSubmit" name="btnSignIn">Sign In</button>
            </form>
        </div>
        <div class="overlay-container">
            <div class="overlay">
                <div class="overlay-panel overlay-left">
                    <h1>Welcome Back!</h1>
                    <p>To keep connected with us please login with your personal info</p>
                    <button class="ghost" id="signIn">Sign In</button>
                </div>
                <div class="overlay-panel overlay-right">
                    <h1>Hello, Users!</h1>
                    <p>Enter details and start journey with us</p>
                    <router-link :to="{name: 'register'}" class="ghost" id="signUp">Sign Up</router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'TheLogin',
    data() {
        return {
            email: '',
            password: ''
        }
    },
    methods: {
        handleSubmit() {
            this.$store.dispatch('loginUser', {
                email: this.email,
                password: this.password
            }).then(() => {
                this.$router.push({name: 'home'})
            })
        }
    }
}
</script>

<style scoped>
@import '@/assets/css/form.css';
</style>