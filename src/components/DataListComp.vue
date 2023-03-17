<template>
<div class="container">
<div class="top-div-class">
These details belong to employee
</div>
</div>
<div class="container">
 <table id="tableComponent" class="table table-bordered table-striped">
  <thead>
   <tr>
     <th v-for="dh in dataHeading" :key='dh'>{{dh}}</th>
    </tr>
  </thead>
  <tbody>
      <!-- Loop through the list get the each student data -->
      <tr v-for="item in data" :key='item.name'>
      <td v-for="dh in dataHeading" :key='dh'>{{item[dh]}}</td>
    </tr>
  </tbody>
</table> 
</div>
</template>

<script>
import employeeDetails from '../assets/data/employeeDetails.json';
export default {
 data(){
  return {data : employeeDetails,
  dataHeading :   Object.keys(employeeDetails[0])
  }
  }
}
</script>


<style scoped>
.top-div-class{
margin-bottom : 1%;
background-color : #9e9e9e;
}
</style>
