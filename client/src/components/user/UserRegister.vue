<template>
  <div class="register-container">
    <form id="formRegister" class="register-form" @submit.prevent="handleSubmit">
      <h3 class="text-center">Đăng ký tài khoản</h3>

      <div class="mb-3">
        <label for="userName" class="form-label">Họ và tên</label>
        <input
          v-model="userName"
          type="text"
          class="form-control"
          id="userName"
          placeholder="Nhập họ và tên"
        />
        <div v-if="errors.userName" class="text-danger">
          Tên không được để trống
        </div>
      </div>

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
          {{ errors.email }}
        </div>
      </div>

      <div class="mb-3">
        <label for="phone" class="form-label">Phone</label>
        <input
          v-model="phone"
          type="text"
          class="form-control"
          id="phone"
          placeholder="Nhập số điện thoại"
        />
        <div v-if="errors.phone" class="text-danger">
          {{ errors.phone }}
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

      <div class="mb-3">
        <label for="rePassword" class="form-label">Nhập lại mật khẩu</label>
        <input
          v-model="rePassword"
          type="password"
          class="form-control"
          id="rePassword"
          placeholder="Nhập lại mật khẩu"
        />
        <div v-if="errors.rePassword" class="text-danger">
          Mật khẩu nhập lại không khớp
        </div>
      </div>

      <div>
        <button type="submit" class="btn btn-primary w-100">
          Đăng ký
        </button>
      </div>

      <p class="text-center mt-2">
        Bạn đã có tài khoản?
        <a style="color: blue;" href="./login">Đăng nhập</a>
      </p>
    </form>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import axios from "axios"; // Thêm Axios

const router = useRouter();

// Biến lưu trữ dữ liệu của form
const userName = ref("");
const email = ref("");
const phone = ref(""); // thêm biến phone
const password = ref("");
const rePassword = ref("");

// Biến để lưu trạng thái lỗi
const errors = ref({
  userName: false,
  email: false,
  phone: false,
  password: false,
  rePassword: false,
});

// Hàm kiểm tra định dạng email
const validateEmail = (email) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};

// Hàm kiểm tra định dạng số điện thoại
const validatePhone = (phone) => {
  const regex = /^[0-9]{10}$/; // chỉ cho phép số điện thoại 10 chữ số
  return regex.test(phone);
};

// Hàm kiểm tra và xử lý submit
const handleSubmit = async () => {
  // Reset lỗi trước khi kiểm tra
  errors.value.userName = !userName.value;
  errors.value.email = !email.value;
  errors.value.phone = !phone.value || !validatePhone(phone.value);
  errors.value.password = !password.value;
  errors.value.rePassword = password.value !== rePassword.value;

  // Kiểm tra định dạng email
  if (!validateEmail(email.value)) {
    errors.value.email = "Vui lòng nhập email đúng định dạng";
  } else if (!email.value) {
    errors.value.email = "Email không được để trống";
  } else {
    errors.value.email = false; // Không có lỗi email
  }

  // Kiểm tra định dạng số điện thoại
  if (!validatePhone(phone.value)) {
    errors.value.phone = "Vui lòng nhập số điện thoại hợp lệ (10 chữ số)";
  } else if (!phone.value) {
    errors.value.phone = "Số điện thoại không được để trống";
  } else {
    errors.value.phone = false;
  }

  // Nếu có lỗi thì không gửi form
  if (
    errors.value.userName ||
    errors.value.email ||
    errors.value.phone ||
    errors.value.password ||
    errors.value.rePassword
  ) {
    return;
  }

  // Tạo đối tượng người dùng
  const newUser = {
    name: userName.value,
    email: email.value,
    phone: phone.value,
    password: password.value,
  };

  try {
    // Gửi dữ liệu lên server bằng axios POST
    const response = await axios.post("http://localhost:3000/users", newUser);
    console.log("Đăng ký thành công:", response.data);

    alert("Đăng kí thành công!")
    router.push("/login");
  } catch (error) {
    console.error("Đăng ký thất bại:", error);
  }
};
</script>



<style>
/* Đảm bảo form nằm giữa màn hình */
.register-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: white; /* Nền trắng */
}

/* Style cho form đăng ký */
.register-form {
  width: 100%;
  max-width: 400px;
  padding: 20px;
  background-color: white;
  border: none;
  box-shadow: none;
}

.text-danger {
  color: red;
  font-size: 0.875em;
}
</style>
