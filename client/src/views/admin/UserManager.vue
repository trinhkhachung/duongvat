<template>
  <div>
    <Dashboard></Dashboard>
    <div class="admin-container">
      <h2>Người dùng</h2>
      <table id="productTable">
        <thead>
          <tr>
            <th>ID</th>
            <th>Tên</th>
            <th>Email</th>
            <th>Password</th>
            <th>Phone Number</th>
            <th>Hoạt động</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in users" :key="user.id">
            <td>{{ user.id }}</td>
            <td>{{ user.name }}</td>
            <td>{{ user.email }}</td>
            <td>{{ user.password }}</td>
            <td>{{ user.phone }}</td>
            <td>
              <button @click="toggleBlockUser(user)">
                {{ user.isBlocked ? 'Bỏ chặn' : 'Chặn' }}
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
import Dashboard from './Dashboard.vue';
import { ref, onMounted } from "vue";
import axios from "axios"; // Import Axios

// Tạo biến lưu trữ danh sách người dùng
const users = ref([]);

// Hàm lấy dữ liệu từ API khi component được mount
const fetchUsers = async () => {
  try {
    const response = await axios.get("http://localhost:3000/users");
    users.value = response.data; // Lưu dữ liệu người dùng vào biến users
  } catch (error) {
    console.error("Lỗi khi lấy dữ liệu người dùng:", error);
  }
};

// Gọi hàm fetchUsers khi component được mount
onMounted(() => {
  fetchUsers();
});

// Hàm xử lý chặn/bỏ chặn người dùng
const toggleBlockUser = async (user) => {
  try {
    // Cập nhật trạng thái chặn/bỏ chặn
    const updatedUser = { ...user, isBlocked: !user.isBlocked };
    await axios.put(`http://localhost:3000/users/${user.id}`, updatedUser);
    
    // Cập nhật lại danh sách người dùng sau khi thay đổi
    fetchUsers();
  } catch (error) {
    console.error("Lỗi khi chặn/bỏ chặn người dùng:", error);
  }
};
</script>

<style>

.admin-container {
  padding: 20px;
}
table {
  width: 100%;
  border-collapse: collapse;
  margin: 20px 0;
}
th, td {
  padding: 10px;
  text-align: left;
  border-bottom: 1px solid #ddd;
}
th {
  background-color: #f2f2f2;
}
button {
  margin-right: 5px;
  padding: 5px 10px;
  cursor: pointer;
}
</style>
