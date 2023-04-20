<template>
    <div class="container" id="container">
        <div class="form-container sign-in-container">
            <form>
                <h1>Create Account</h1>
                <div class="social-container">
                    <a href="#" class="social"><i class="fab fa-facebook-f"></i></a>
                    <a href="#" class="social"><i class="fab fa-google-plus-g"></i></a>
                    <a href="#" class="social"><i class="fab fa-linkedin-in"></i></a>
                </div>
                <span>or use your email for registration</span>
                <input type="text" placeholder="Name" name="userName" required />
                <input type="email" placeholder="Email" name="userEmail" required />
                <input type="password" placeholder="Password" name="userPass" required />
                <input type="password" placeholder="Repeat Password" name="userRePass" required />
                <input type="hidden" value="user-avt-deafault2.png" name="image">
                <button type="submit" class="btnSignup" name="btnRegister">Sign Up</button>
            </form>
        </div>
        <div class="overlay-container">
            <div class="overlay">
                <div class="overlay-panel overlay-right">
                    <h1>Welcome Back!</h1>
                    <p>To keep connected with us please login with your personal info</p>
                    <button class="ghost" id="signIn">Sign In</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'TheRegister',
}
</script>

<style scoped>
@import '@/assets/css/form.css';
</style>