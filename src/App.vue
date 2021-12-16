<template>
  <div id="app">
    <the-narbar />
    <div id="test">
      <the-header />
      <the-content />
    </div>
    <!-- <div id="misa" class="m-test">Công ty cổ phần MISA
      <input class="m-input" type="text" name="" id="" v-model="name">
      <label for="">{{upperNameMISA}}</label>
    </div> -->
  </div>
</template>
<script>
//B1: Import component
import TheNarbar from "./components/layout/TheNavbar.vue";
import TheHeader from "./components/layout/TheHeader.vue";
import TheContent from "./components/layout/TheContent.vue";

export default {
  name: "App",
  components: {
    TheNarbar,
    TheHeader,
    TheContent,
  },
  // 1.BeforeCreate:
  beforeCreate() {
    console.log("1.beforeCreate: ");
    console.log("Name: " + this.name);
    // var name = this.getName();
    // console.log("GetName: " + name);
  },
  // 2.Created
  created() {
    console.log("2.Created: ");
    console.log("Name: " + this.name);
    var name = this.getName();
    console.log("GetName: " + name);
  },
  // 3.beforeMount:
  beforeMount() {
    console.log("3.BeforeMount: ");
    console.log("Name: " + this.name);
    var name = this.getName();
    console.log("GetName: " + name);
    // Truy cap lay du lieu trong dom - khong lay duoc
    var el = document.getElementById("misa");
    console.log("Get element: ");
    console.log(el);
  },
  // 4.mounted:
  mounted() {
    console.log("4.Mounted: ");
    console.log("Name: " + this.name);
    var name = this.getName();
    console.log("GetName: " + name);
    // Truy cap lay du lieu trong dom -  lay duoc
    var el = document.getElementById("misa");
    console.log("Get element: ");
    console.log(el);
  },
  // 5.beforeUpdate:
  beforeUpdate() {
    console.log("5. BeforeUpdate:  ");
    console.log("Name: " + this.name);
    var name = this.getName();
    console.log("GetName: " + name);
    // Truy cap lay du lieu trong dom - lay duoc
    var el = document.getElementById("misa");
    console.log("Get element: ");
    console.log(el);
   
  },
  // 6.Update:
  updated() {
    console.log("6.Update:  ");
    console.log("Name: " + this.name);
    var name = this.getName();
    console.log("GetName: " + name);
    // Truy cap lay du lieu trong dom - lay duoc
    var el = document.getElementById("misa");
    console.log("Get element: ");
    console.log(el);
     if(this.name == '5')
    alert(5);
  },
  // computed
  computed: {
    upperNameMISA: function(){
      if (this.name.toUpperCase() == 'MISA') {
        return "MISA";
      }
      else{
        return this.name;
      }
    }
  },
  // Watch
  watch:{
    // Ten watch trung ten cua data 
    name:function(val){
      if (val.toUpperCase() == 'MISA') {
       alert('MISA');
      }
      
    }
  },
  data() {
    return {
      number: 1,
      name: "BAKA",
      customerCode: "KH001",
      Fullname: "Nguyễn Văn Mạnh",
    };
  },

  methods: {
    getName() {
      return "Nguyễn Văn Mạnh";
    },
  },
};
</script>

<style>
#app {
  display: flex;
}
#test {
  width: calc(100% - 178px);
}
#misa{
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: red;
  width: 300px;
  height: 300px;
  padding: 24px;
}
@import url("style/style.css");
</style>
