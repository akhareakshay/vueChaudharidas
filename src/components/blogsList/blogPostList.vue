<template>
  <div>
      <header class="p-3 bg-dark text-white d-flex justify-content-between">
         <div style="width:45%; font-size:25px">
          चौधरीदास भजनावली 
         </div>
         <div style="width:55%">
          <ul class="list-inline d-flex justify-content-center mb-0" style="gap:30px; padding-left:25rem">
             <li class="list-inline-item"><router-link to="/"><button class="btn btn-dark"> होम </button></router-link></li>
             <li class="list-inline-item"><router-link to="/bhajan"><button class="btn btn-dark"> भजन </button></router-link></li>
             <li class="list-inline-item"><router-link to="/"><button class="btn btn-dark"> संपर्क </button></router-link></li>
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
import axios from 'axios'
import chaudharidasblogs from '../../service/chadharidasblogs'

export default {

    data(){
        return {
         blogPostsDataList:[],
         postCategoryList:[]
        }
    }, 
    methods:{
        getAllBlogs(){
            axios
            .get(chaudharidasblogs.backen_root_path+"blogposts/list")
            .then((response) =>{
                console.log("here : "+response);
                if(response.status == 200){
                    this.blogPostsDataList = response.data;
                    console.log(this.blogPostsDataList);
                    for(let i=0; i<this.blogPostsDataList.length; i++){
                        console.log(this.blogPostsDataList[i].postCategoryId.name);
                        this.postCategoryList.push(this.blogPostsDataList[i].postCategoryId.name);
                    }
                }
            });

        }
    },
    mounted(){
        this.getAllBlogs();
    }

}
</script>

<style>

</style>