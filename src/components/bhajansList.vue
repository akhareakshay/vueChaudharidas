<template>
  <div>
    <div class="mx-auto border p-3 mt-3" style="width: 75%" v-if="bhajanCategory">
      <div style="display: flex; flex-wrap: wrap">
        <div
          v-for="(category, index) in postCategoryList"
          :key="index"
          style="width: 25%"
          class="p-2"
        >
          <button
            class="btn btn-light"
            style="width: 100%"
            @click="showBhajans(category.id, category.name)"
          >
            {{ category.name }}
          </button>
        </div>
      </div>
    </div>
    <div v-else class="d-flex pt-2 px-2" style="">
      <div style="width: 25%;max-height: calc(100vh - 80px);overflow: auto; padding-right: 15px;">
        <div v-for="(bhajan, index) in bhajanList" :key="index">
          <div>
            <button
              class="btn btn-light"
              style="width: 100%; text-align: left"
              @click="viewBhajan(bhajan.content)"
            >
              <span class="pe-4">{{ index + 1 }}</span>
              <span> {{ bhajan.title }} </span>
            </button>
          </div>
        </div>
      </div>
      <div style="width: 75%" v-show="bhajanContent">
        <div ref="bhajanContent" class="showing_bhajan_div"></div>
      </div>
      <div v-if="!bhajanContent" class="nobhajans">
        Bhajans will show over here
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import chaudharidasblogs from "../service/chadharidasblogs";

export default {
  data() {
    return {
      postCategoryList: [],
      category: [],
      bhajanList: [],
      bhajanCategory: true,
      bhajanContent: "",
    };
  },
  methods: {
    getAllBlogs() {
      axios
        .get(chaudharidasblogs.backen_root_path + "postcategory/list")
        .then((response) => {
          console.log("here : " + response.data);
          if (response.status == 200) {
            this.postCategoryList = response.data;
            // this.category = [];
            // console.log(this.postCategoryList);
            // for(let i=0; i<this.postCategoryList.length; i++){
            //     console.log(this.postCategoryList[i].name);
            //     this.category.push(this.postCategoryList[i].name);
            // }
          }
        });
    },
    showBhajans(categoryId,categoryName) {
      var data = {
        category: {
          id: categoryId,
          name: categoryName,
        },
      };
      console.log("payload : "+data);
      axios
        .post(chaudharidasblogs.backen_root_path + "blogposts/search", data)
        .then((response) => {
          if (response.status == 200) {
            this.bhajanCategory = false;
            console.log("dataa : " + response.data);
            this.bhajanList = response.data;
          }
        });
    },
    viewBhajan(bhajan) {
      this.bhajanContent = bhajan;
      this.$refs.bhajanContent.innerHTML = bhajan;
    },
  },
  mounted() {
    this.getAllBlogs();
  },
};
</script>

<style>
.nobhajans{
  height: calc(100vh - 120px);
    width: 75%;
    justify-content: center;
    display: flex;
    align-items: center;
    border: 3px dashed #ddd;
    border-radius: 5px;
    font-size: 20px;
    color: #a4a4a4;
}
.showing_bhajan_div{
  text-align: center;
    user-select: none;
    height: calc(100vh - 90px);
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    border: 3px dashed #ddd;
    border-radius: 5px;
    overflow: auto;
    padding: 5px;
    background: #21252912;
    flex-wrap: wrap;
}
</style>