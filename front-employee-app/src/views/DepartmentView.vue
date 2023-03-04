<template>
  <div class="contenedor">
    <h2>Products</h2>
    <table >
        <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="product in products" :key="product.id">
          <td>{{ product.DepartmentId }}</td>
          <td>{{ product.DepartmentName }}</td>
          <td>
            <i @click="deleteDepartament(product.DepartmentId)" class="material-icons">delete</i> <!-- Icono de eliminar -->
            <i @click="editDepartament(product.DepartmentId)" class="material-icons">edit</i> <!-- Icono de editar -->

          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import 'material-design-icons/iconfont/material-icons.css';



export default {
  data() {
    return { 
      products: [],
    };
  },
  methods: {
    deleteDepartament(idDepartment){
    alert("Se va borrar el registro #"+ idDepartment);
    },
    editDepartament(idDepartment){
      alert("Se va editar el registro #"+ idDepartment);
    },
    fetchProducts() {
      fetch('http://localhost:8000/department')
        .then(response => response.json())
        .then(data => {
          this.products = data;
        })
        .catch(error => {
          console.error('Error fetching products:', error);
        });
    },
  },
  mounted() {
    this.fetchProducts();
  },
  
};
</script>

<style>
table {
border-collapse: collapse;
width: 100%;
color: black;
}


h2{
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 20px;
  color: rgb(29, 210, 210);
}
</style>

