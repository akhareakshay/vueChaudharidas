<template>
  <div>
      <header class="p-3 bg-dark text-white d-flex justify-content-between">
         <div style="width:45%; font-size:25px">
          चौधरीदास भजनावली 
         </div>
         <div style="width:55%">
          <ul class="list-inline d-flex justify-content-center mb-0" style="gap:30px; padding-left:25rem">
             <li class="list-inline-item"><router-link to="/"><button class="btn btn-dark" :class="$route.fullPath == '/' ? 'active' : ''"> होम </button></router-link></li>
             <li class="list-inline-item"><router-link to="/bhajan"><button class="btn btn-dark" :class="$route.fullPath == '/bhajan' ? 'active' : ''"> भजन </button></router-link></li>
             <li class="list-inline-item"><router-link to="/contact"><button class="btn btn-dark" :class="$route.fullPath == '/contact' ? 'active' : ''"> संपर्क </button></router-link></li>
             <li class="list-inline-item" v-if="validate"><router-link to="/saveblog"><button class="btn btn-dark" :class="$route.fullPath == '/saveblog' ? 'active' : ''"> Save Blog </button></router-link></li>
          </ul>
         </div>
      </header>
      <section>
          <!-- <div v-for="(category, index) in postCategoryList" :key="index">
             <button class="btn btn-light"> {{category}} </button>
          </div> -->
    <router-view></router-view>
      </section>
  </div>
</template>

<script>


export default {
computed:{
   validate(){
      return localStorage?.userDetails ? true : false
   }
}

}
</script>

<style>
.active{
   color: #fff;
   background-color: #424649;
   border-color: #373b3e;
}
</style>