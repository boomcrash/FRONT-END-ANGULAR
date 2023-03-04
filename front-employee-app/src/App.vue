<script setup>
import router from './router';

</script>

<template>
  

    <div id="app" class="container" style="flex-direction: column; display: flex; width: 400%; background-color: white;">
      <div style="display: flex; flex-direction: column; color: black;">
        <h3 class="d-flex justify-content-center" >
              VUE JS FRONT END
            </h3>
            <h5 class="d-flex justify-content-center">
              PORTAL DE ADMINISTRACION DE EMPLEADOS
            </h5>
      </div>
          <div>

          
            <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
              <ul class="navbar-nav">
                <li class="nav-item m-1">
                  <router-link class="btn btn-light btn-outline-primary" to="/home">Inicio</router-link>
                </li>
                <li class="nav-item m-1">
                  <router-link class="btn btn-light btn-outline-primary" to="/department">Departmento</router-link>
                </li>
                <li class="nav-item m-1">
                  <router-link class="btn btn-light btn-outline-primary" to="/employee">Empleado</router-link>
                </li>
              </ul>
            </nav>
          </div>
          <div class="router">
            <router-view></router-view>
          </div>
      </div>

</template>

<style>
.pre-container{
  background-color: #f8f9fa;
  padding: 1rem;
  margin-top: 5rem;
}
.router{
  margin-top: 5rem;
}
</style>
