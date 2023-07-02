<template>
<div>
  <header>
    <div class="mb-2 d-flex justify-content-center " style="width:100%; font-size:45px">
      भजन
    </div>
  </header>
  <div class="mx-auto border p-3" style="width:75%; ">
    <div style="display: flex; flex-wrap: wrap;">
      <div v-for="(category, index) in postCategoryList" :key="index" style="width:25%" class="p-2">
            <button class="btn btn-light" style="width:100%"> {{category}} </button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import axios from 'axios'
import chaudharidasblogs from '../service/chadharidasblogs'

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