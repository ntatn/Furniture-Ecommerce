<template>
    <div class="container" id="container">
        <div class="form-container sign-in-container">
            <form @submit.prevent="handleSubmit">
                <h1>Create Account</h1>
                <div class="social-container">
                    <a href="#" class="social"><i class="fab fa-facebook-f"></i></a>
                    <a href="#" class="social"><i class="fab fa-google-plus-g"></i></a>
                    <a href="#" class="social"><i class="fab fa-linkedin-in"></i></a>
                </div>
                <span>or use your email for registration</span>
                <input type="text" placeholder="Name" v-model="username" name="userName" required />
                <input type="email" placeholder="Email" v-model="email" name="userEmail" required />
                <input type="password" placeholder="Password" v-model="password" name="userPass" required />
                <input type="password" placeholder="Repeat Password" name="userRePass" required />
                <button type="submit" class="btnSignup" name="btnRegister">Sign Up</button>
            </form>
        </div>
        <div class="overlay-container">
            <div class="overlay">
                <div class="overlay-panel overlay-right">
                    <h1>Welcome Back!</h1>
                    <p>To keep connected with us please login with your personal info</p>
                    <router-link :to="{name: 'login'}" class="ghost" id="signIn">Sign In</router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'TheRegister',
    data() {
        return {
            username: '',
            email: '',
            password: ''
        }
    },
    methods: {
        async handleSubmit() {
            this.$store.dispatch('registerUser', {
                name: this.username,
                email: this.email,
                password: this.password
            }).then(() => {
                this.$router.push({name: 'login'})
            })
        }

    }
}
</script>

<style scoped>
@import '@/assets/css/form.css';
</style>