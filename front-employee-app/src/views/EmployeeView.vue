<template>
    <div class="contenedor">
      <h2>Products</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Description</th>
            <th>Joined Date</th>
            <th>Photo</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="product in products" :key="product.id">
            <td>{{ product.EmployeeId }}</td>
            <td>{{ product.EmployeeName }}</td>
            <td>{{ product.Employee }}</td>
            <td>{{ product.DateOfJoining }}</td>
            <td>{{ product.PhotoFileName }}</td>
            <td>
            <i @click="deleteDepartament(product.EmployeeId)" class="material-icons">delete</i> <!-- Icono de eliminar -->
            <i @click="editDepartament(product.EmployeeId)" class="material-icons">edit</i> <!-- Icono de editar -->

          </td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        products: [],
      };
    },
    methods: {
      deleteDepartament(idEmployee){
        alert("Se va borrar el registro #"+ idEmployee);
      },
      editDepartament(idEmployee){
        alert("Se va editar el registro #"+ idEmployee);
      },
      fetchProducts() {
        fetch('http://localhost:8000/employee')
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
.contenedor {
    margin: 0 auto;
    width: 100%;
    max-width: 800px;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-shadow: 0px 2px 5px #ccc;
    text-align: center;
}
h2{
    font-size: 32px;
    font-weight: bold;
    margin-bottom: 20px;
    color: rgb(29, 210, 210);
}
</style>
  
