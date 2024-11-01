<template>
  <div class="login-container">
    <h2>Admin Login</h2>
    <form @submit.prevent="handleSubmit" id="loginForm">
      <input v-model="username" type="text" id="username" placeholder="Username" required />
      <input v-model="password" type="password" id="password" placeholder="Password" required />
      <button type="submit">Login</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter()
const username = ref('');
const password = ref('');


const handleSubmit = () => {
  // Check username and password
  if (username.value === "admin" && password.value === "admin123") {
    alert('Đăng nhập thành công');
    router.push('/admin')

    
  }else {
    alert("Thông tin tài khoản hoặc mật khẩu không chính xác");
  }
};
</script>

<style>
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
}

.login-container {
  width: 500px;
  margin: 100px auto;
  padding: 20px;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

h2 {
  font-weight: 600;
  font-size: 23px;
  text-align: center;
}

form {
  margin-top: 20px;
}

input {
  width: 100%;
  padding: 11px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

button {
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}
</style>
