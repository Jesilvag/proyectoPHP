<section>
  <form class="formularioApuestas">
    <select ng-options="loteria.nombre for loteria in loterias" ng-model="loteria" ng-change="mostrarSeries()">
                  
    </select>
    <div class="loteria">
     <input class="numero" ng-model="apuesta.numeroApuesta" name="numero" type="text" 
     value="" placeholder="Ingresa el numero" required pattern="[0-9]{2,5}" />
     <select class="serie" required ng-options="loteriaSerie.numSerie for loteriaSerie in loteriasSeries" ng-model="loteriaSerie" >
       
     </select>
   </div>
   <input ng-model="apuesta.valorApuesta" class="apuesta" name="apuesta" type="number" min="100" value="" placeholder="Valor de la Apuesta"  />

   <input class="premio" ng-model="apuesta.premio" name="premio" readonly="readonly"  type="number" min="0" value="" placeholder="Premio"  />
   <button class="btn" ng-click="hacerApuesta()">Hacer Apuesta</button>
 </form>


 <table class="usertable">
  <tr>
    <th>Numero</th>
    <th>Serie</th>		
    <th>Loteria</th>
    <th>Fecha</th>
    <th>Apuesta</th>		
    <th>Premio</th>
  </tr>
  <tr ng-repeat="apuesta in apuestas">
    <td>{{apuesta.numeroApuesta}}</td>
    <td>{{apuesta.serie}}</td>
    <td>{{apuesta.loteria.nombre}}</td>
    <td>{{apuesta.fecha|date:'yyyy-MM-dd HH:mm:ss'}}</td>
    <td>{{apuesta.valorApuesta}}</td>		
    <td>{{apuesta.premio}}</td>
  </tr>
  
  
</table>
<div class="confirmar">
<label >Total:${{totalApuesta}}</label> 

<button name="btnConfirmar" ng-click="agregarTransaccion()"class="btn">Confirmar</button>
</div>
</section>


