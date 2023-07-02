<template>
  <div
    class="d-flex justify-content-center align-items-center"
    style="height: 100vh; background: #0000ff14"
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
        ADMIN LOGIN
      </p>
      <form @submit.prevent="login_as_admin">
        <div style="width: 80%; margin: auto">
          <input
            type="email"
            v-model="email"
            placeholder="Enter email"
            class="border ps-3"
            style="height: 40px; width: 100%; border-radius: 5px"
            required
          />
        </div>
        <div style="width: 80%; margin: auto; position: relative" class="mt-3">
          <input
            :type="show_ps ? 'text' : 'password'"
            v-model="password"
            placeholder="Enter password"
            class="border ps-3"
            style="
              height: 40px;
              width: 100%;
              border-radius: 5px;
              padding-right: 40px;
            "
            required
          />
          <!-- eye icons -->
          <div style="position: absolute; right: 0; top: 0px">
            <button
              class="btn"
              @click="
                () => {
                  this.show_ps = !this.show_ps;
                }
              "
            >
              <i class="fa-solid fa-eye" v-if="show_ps"></i>
              <i class="fa-solid fa-eye-slash" v-else></i>
            </button>
          </div>
        </div>

        <div class="d-flex justify-content-center mt-4">
          <button typ="submit" class="btn btn-success">Login</button>
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
      show_ps: false,
      email: '',
      password: '',
    };
  },
  methods:{
      login_as_admin(){
          let path = chaudharidasblogs.backen_root_path + 'users/admin/login'
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