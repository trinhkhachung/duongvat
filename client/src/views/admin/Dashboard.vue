<template>
  <div>
    <div class="sidebar">
      <h2>Xin chào Admin</h2>
      <ul>
        <li><a href="/admin" id="dashboardLink">Trang chủ Admin</a></li>
        <li><a href="/">Trang chủ sản phẩm</a></li>
        <li><a href="/product" id="productsLink">Sản phẩm</a></li>
        <li><a href="/usermanager" id="ordersLink">Người dùng</a></li>
        <li><a href="#" id="logoutBtn" @click="logout">Logout</a></li>
      </ul>
    </div>

    <div class="content" id="content"></div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

const logout = () => {
  localStorage.removeItem('authToken'); 
  router.push('/');
};
</script>


<style>
body {
    font-family: Arial, sans-serif;
    margin: 0;
  }
  
  .sidebar {
    height: 100%;
    width: 250px;
    position: fixed;
    top: 0;
    left: 0;
    background-color: #333;
    padding-top: 20px;
  }
  
  .sidebar h2 {
    color: #fff;
    text-align: center;
  }
  
  .sidebar ul {
    list-style-type: none;
    padding: 0;
  }
  
  .sidebar ul li {
    padding: 15px;
    margin-top: 10px;
  }
  
  .sidebar ul li a {
    color: #fff;
    text-decoration: none;
  }
  
  .sidebar ul li a:hover {
    background-color: #555;
  }
  
  .content {
    margin-left: 250px;
    padding: 20px;
  }
  
  h2 {
    text-align: center;
  }
  
  table {
    width: 100%;
    border-collapse: collapse;
  }
  
  th, td {
    border: 1px solid #ccc;
    padding: 8px;
    text-align: left;
  }
  
  th {
    background-color: #f2f2f2;
  }
  
  button {
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 5px;
    padding: 5px 10px;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #0056b3;
  }

  #productTable {
    width: 100%;
    border-collapse: collapse;
  }
  
  #productTable th, #productTable td {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: left;
  }
  
  #productTable th {
    background-color: #f2f2f2;
  }
  
  button {
    cursor: pointer;
  }

  .admin-container {
    margin-left: 250px;
  }

  /* Styles for the modal */
.modal {
    display: none;
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgba(0,0,0,0.4);
  }
  
  .modal-content {
    background-color: #fefefe;
    margin: 10% auto;
    padding: 20px;
    border: 1px solid #888;
    width: 80%;
  }
  
  .close {
    color: #aaa;
    float: right;
    font-size: 28px;
    font-weight: bold;
  }
  
  .close:hover,
  .close:focus {
    color: black;
    text-decoration: none;
    cursor: pointer;
  }
  
  #productTable {
    width: 100%;
    border-collapse: collapse;
    margin-bottom: 20px;
  }
  
  #productTable th, #productTable td {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: left;
  }
  
  #productTable th {
    background-color: #f2f2f2;
  }
  
  button {
    cursor: pointer;
  }
  
  /* Styles for the product form */
  #productForm {
    margin-bottom: 20px;
  }
  
  #productForm input[type="text"],
  #productForm input[type="number"],
  #productForm textarea {
    display: block;
    width: calc(100% - 16px);
    margin-bottom: 10px;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
  }
  
  #productForm button {
    display: block;
    width: 100%;
    background-color: #007bff;
    color: #fff;
    padding: 10px 0;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
  #productForm button:hover {
    background-color: #0056b3;
  }
</style>