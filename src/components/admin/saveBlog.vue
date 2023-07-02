<template>
  <div
    class="d-flex justify-content-center align-items-center"
    style="height: calc(100vh - 70px); background: #0000ff14"
  >
    <div
      class="p-4"
      style="
        width: 40%;
        border-radius: 5px;
        background: #fff;
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
      "
    >
      <p
        class="pt-2"
        style="text-align: center; font-size: 20px; font-weight: 600"
      >
        SAVE BLOG
      </p>
      <form @submit.prevent="saveblog">
        <div style="width: 80%; margin: auto;">
          <input style="height: 40px; width: 100%; border-radius: 5px;"
          placeholder="Enter title" class="border ps-3" type="text" v-model="title" required/>
        </div>
        <div style="width: 80%; margin: auto; position: relative" class="mt-3">
           <select
              class="border ps-3"
            style="height: 40px; width: 100%; border-radius: 5px"
            v-model="category"
            @change="categorychanged"
            >
              <option value="">Choose category</option>
              <option value="newcategory">Add new category</option>
          </select>
          <input style="height: 38px; width: 95%; border-radius: 5px; position: absolute; top: 1px;left: 1px;"
          placeholder="Enter new category" class="border ps-3" type="text" v-model="new_category_value" v-if="newcategory_ip" />
        </div>
        <div style="width: 80%; margin: auto; position: relative" class="mt-3">
         <select
              class="border ps-3"
            style="height: 40px; width: 100%; border-radius: 5px"
            v-model="author_name"
            @change="author_name_changed"
            >
              <option value="">Choose author</option>
              <option value="newauthor">Add new author</option>
          </select>
          <input style="height: 38px; width: 95%; border-radius: 5px; position: absolute; top: 1px;left: 1px;"
          placeholder="Enter new author" class="ps-3" type="text" v-model="new_author_value" v-if="newauthor_ip">
        </div>
        <div style="width: 80%; margin: auto; position: relative" class="mt-3">
            <textarea v-model="content" class="border p-2" style="width: 100%; border-radius: 5px;min-height: 120px;" placeholder="Enter content"></textarea>
        </div>

        <div class="d-flex justify-content-center mt-4">
          <button typ="submit" class="btn btn-success">Save</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import chaudharidasblogs from "../../service/chadharidasblogs";
export default {
  data() {
    return {
      category: '',
      newcategory_ip: false,
      new_category_value: '',
      author_name: '',
      newauthor_ip: false,
      new_author_value: '',
      title: '',
    };
  },
  methods:{
      categorychanged(event){
          if(event.target.value == 'newcategory'){
              this.newcategory_ip = true;
          }
          else{
              this.newcategory_ip = false;
              this.new_category_value = ''
          }
      },
      author_name_changed(event){
          if(event.target.value == 'newauthor'){
              this.newauthor_ip = true;
          }
          else{
              this.newauthor_ip = false;
              this.new_author_value = ''
          }
      },
      saveblog(){
          let path = chaudharidasblogs.backen_root_path + 'blogposts/saveorupdate'
          let body = {
              email: this.email,
              password: this.password
          }
          axios.post(path,body).then((res)=>{
              if(res.status == '200'){
                  localStorage.setItem('userDetails', res.data)
                  this.$router.push('/')
              }
              else{
                  alert('something went wrong')
              }
          })

      }
  }
};
</script>

<style>
</style>