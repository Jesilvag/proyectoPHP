<form class="formularioApuestas">
          <input type="text" ng-model="usuario.cedula"placeholder="Ingrese la cedula">
          <input type="text" ng-model="usuario.nombre"placeholder="Ingrese el nombre">
          <input type="text" ng-model="usuario.apellido"placeholder="Ingrese el apellido">
          <input type="text" ng-model="usuario.username"placeholder="Ingrese el username">
          <input type="password" ng-model="usuario.password"placeholder="Ingrese el password">
          
           
           <select ng-model="permiso" ng-options="permiso.acceso for permiso in permisos" ></select>
           <select ng-model="role" ng-options="rol.rol for rol in roles" ></select> 

           <button class="btn" ng-click="addUsuario()">Agregar Usuario</button> 
</form>
