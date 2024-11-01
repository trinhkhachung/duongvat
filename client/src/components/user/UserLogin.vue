<template>
  <div class="login-container">
    <form id="formLogin" class="login-form" @submit.prevent="handleSubmit">
      <h3 class="text-center">Đăng nhập tài khoản</h3>

      <div class="mb-3">
        <label for="email" class="form-label">Email</label>
        <input
          v-model="email"
          type="text"
          class="form-control"
          id="email"
          placeholder="Nhập email"
        />
        <div v-if="errors.email" class="text-danger">
          Email không được để trống
        </div>
      </div>

      <div class="mb-3">
        <label for="password" class="form-label">Mật khẩu</label>
        <input
          v-model="password"
          type="password"
          class="form-control"
          id="password"
          placeholder="Nhập mật khẩu"
        />
        <div v-if="errors.password" class="text-danger">
          Mật khẩu không được để trống
        </div>
      </div>

      <div style="color: red;" v-if="showError" id="alertError" class="alert alert-danger" role="alert">
        {{ errorMessage }}
      </div>

      <div>
        <button type="submit" class="btn btn-primary w-100">
          Đăng nhập
        </button>
      </div>

      <p class="text-center mt-2">
        Bạn chưa có tài khoản?
        <a style="color: blue;" href="./register">Đăng ký</a>
      </p>
    </form>
  </div>
</template>

<script setup>
import { ref } from "vue";
import axios from "axios";
import { useRouter } from "vue-router"; // Import useRouter

// Biến lưu trữ email, password và trạng thái lỗi
const email = ref("");
const password = ref("");
const showError = ref(false);
const errorMessage = ref("");

// Biến lưu trạng thái lỗi
const errors = ref({
  email: false,
  password: false,
});

const router = useRouter(); // Khởi tạo router

// Hàm xử lý đăng nhập
const handleSubmit = async () => {
  // Kiểm tra các trường nhập liệu
  errors.value.email = !email.value;
  errors.value.password = !password.value;
  showError.value = false;
  errorMessage.value = "";

  // Nếu có lỗi, dừng không gửi yêu cầu
  if (errors.value.email || errors.value.password) {
    return;
  }

  try {
    // Lấy danh sách người dùng từ API
    const response = await axios.get("http://localhost:3000/users");
    const users = response.data;

    // Tìm người dùng có email và password khớp
    const user = users.find(
      (user) => user.email === email.value && user.password === password.value
    );

    if (!user) {
      // Không tìm thấy người dùng
      showError.value = true;
      errorMessage.value = "Email hoặc mật khẩu không đúng.";
    } else if (user.isBlocked) {
      // Người dùng bị chặn
      showError.value = true;
      errorMessage.value = "Tài khoản của bạn đã bị chặn. Vui lòng liên hệ quản trị viên.";
    } else {
      // Đăng nhập thành công
      alert("Đăng nhập thành công!");
      router.push("/"); // Điều hướng về trang chủ
    }
  } catch (error) {
    console.error("Lỗi khi đăng nhập:", error);
    showError.value = true;
    errorMessage.value = "Đã xảy ra lỗi. Vui lòng thử lại sau.";
  }
};
</script>

<style>
/* CSS như bạn đã cung cấp */
h3 {
  font-weight: 600;
  font-size: 23px;
  text-align: center;
}
button {
  margin-top: 15px;
}
input {
  height: 40px;
  padding: 13px;
  margin-top: 10px;
}
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 200px;
  border: none;
  box-shadow: none;
}
.login-form {
  width: 100%;
  max-width: 500px;
  padding: 20px;
  border: none;
  box-shadow: none;
}
.text-danger {
  color: red;
  font-size: 0.875em;
}
</style>
