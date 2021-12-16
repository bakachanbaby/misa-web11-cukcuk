<template>
  <div class="content">
    <!-- CONTENT TITTLE -->
    <div class="m-content-tittle">
      <!-- Content tittle left -->
      <div class="m-tittle-left">
        <div class="m-tittle-l-text">Nhân viên</div>
      </div>
      <!-- Content tittle right -->
      <div class="m-tittle-right">
        <div class="m-row">
          <!-- <base-btn /> -->
          <button id="m-btn-add-ele" class="m-btn" @click="btnAddOnClick">
            <div class="m-btn-text">Thêm mới nhân viên</div>
          </button>
        </div>
      </div>
    </div>

    <!-- CONTENT TABLE -->
    <div class="m-content-table">
      <!-- Content search -->
      <div class="m-content-search">
        <div class="m-content-search-left">
          <div class="m-row m-l-search">
            <input
              type="text"
              class="m-input m-input-search"
              name=""
              id="txtSearch"
              placeholder="Tìm theo mã, tên nhân viên"
            />
          </div>
        </div>
        <div id="btnRefresh" class="m-content-search-right"></div>
      </div>

      <!-- Content table -->
      <div class="m-row m-content-table-box">
        <div class="m-grid">
          <table id="tbdlEmloyeesList" class="m-table" border="1">
            <thead>
              <tr>
                <th class="text-align-center" style="width: 50px">STT</th>
                <th class="text-align-center" style="width: 50px">
                  <input type="checkbox" />
                </th>
                <th class="text-align-left" style="width: 150px">
                  Mã nhân viên
                </th>
                <th class="text-align-left">Tên nhân viên</th>
                <th class="text-align-center" style="width: 100px">Giới tính</th>
                <th class="text-align-center" style="width: 120px">
                  Ngày sinh
                </th>
                <th class="text-align-center" style="width: 120px">Số Đt</th>
                <th class="text-align-center" style="width: 200px">
                  Chi nhánh tk ngân hàng
                </th>
                <th class="text-align-center" style="width: 100px">
                  Chức năng
                </th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="(c, i) in customers"
                :key="c.CustomerId"
                @dblclick="rowOnDblClick(c.CustomerId)"
              >
                <td class="text-align-center">{{ i + 1 }}</td>
                <td class="text-align-center"><input type="checkbox" /></td>
                <td class="text-align-left">{{ c.CustomerCode }}</td>
                <td class="text-align-left">{{ c.FullName }}</td>
                <td class="text-align-left">{{ c.GenderName }}</td>
                <!-- <td class="text-align-center">
                  {{ formatDataComputed }}
                </td> -->
                <!-- methods -->
                <td class="text-align-center">
                  {{ formatDate(c.DateOfBirth) }}
                </td>
                <!-- filters -->
                <!-- <td class="text-align-center">
                  {{ c.DateOfBirth | formatDate(c.DateOfBirth) }}
                </td> -->
                <td class="text-align-left">{{ c.PhoneNumber }}</td>
                <td class="text-align-left">{{ c.Address }}</td>
                <td class="text-align-left">
                  <div class="m-content-table-row-setting">
                    <div class="m-c-t-r-box">
                      <div
                        id="m-c-t-r-icon-btn"
                        class="m-content-table-row-setting-text"
                      >
                        Sửa
                      </div>
                      <div
                        id="m-c-t-r-icon-down"
                        class="m-content-table-row-icon"
                      ></div>
                    </div>
                    <div class="m-c-t-r-data">
                      <div class="m-c-t-r-item" value="1">Nhân bản</div>
                      <div
                        id=""
                        class="m-c-t-r-item m-c-t-r-activate"
                        value="2"
                      >
                        Xóa
                      </div>
                      <div class="m-c-t-r-item" value="3">Ngừng sử dụng</div>
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <!-- Content paging -->
      <div class="m-paging">
        <div class="m-paging-left">
          Tổng số: <strong id="totalRecord"> 8 </strong> bản ghi
        </div>
        <div class="m-paging-right">
          <select class="m-combobox combobox-count" name="" id="cbxPageSize">
            <option value="10">10 bản ghi / trang</option>
            <option value="20">20 bản ghi / trang</option>
            <option value="30">30 bản ghi / trang</option>
            <option value="50">50 bản ghi / trang</option>
            <option value="100">100 bản ghi / trang</option>
          </select>
          <div class="m-paging-hover m-paging-prev">Trước</div>
          <div class="m-paging-number">
            <div class="m-paging-hover page-number page-number-active">1</div>
          </div>
          <div class="m-paging-hover m-paging-next">Sau</div>
        </div>
      </div>
    </div>
    <CustomerDetail :customerId="customerIdSelected" />
  </div>
</template>
<script>
// import BaseBtn from "../base/BaseBtn.vue";
import axios from "axios";
import CustomerDetail from "../../view/customer/CustomerDetail.vue";
export default {
  components: {
    CustomerDetail,
    //   BaseBtn
  },
  comments: {
    // BaseBtn,
  },
  created() {
    var me = this;
    // Goi api lay du lieu:
    axios
      .get("http://cukcuk.manhnv.net/api/v1/Customerss")
      .then(function (e) {
        console.log(e);
        me.customers = e.data;
      })
      .catch(function (e) {
        console.log(e);
      });
  },
  computed: {
    formatDataComputed(val) {
      if (val) {
        const dateOfBirth = new Date(val);
        let day = dateOfBirth.getDate();
        day = day < 10 ? `0${day}` : day;
        let month = dateOfBirth.getMonth() + 1;
        month = month < 10 ? `0${month}` : month;
        let year = dateOfBirth.getFullYear();
        return `${day}/${month}/${year}`;
      } else return "";
    },
  },
  methods: {
    formatDate(val) {
      if (val) {
        const dateOfBirth = new Date(val);
        let day = dateOfBirth.getDate();
        day = day < 10 ? `0${day}` : day;
        let month = dateOfBirth.getMonth() + 1;
        month = month < 10 ? `0${month}` : month;
        let year = dateOfBirth.getFullYear();
        return `${day}/${month}/${year}`;
      } else return "";
    },
    btnAddOnClick: function () {
      document.getElementById("dlgPopup").style.display = "block";
    },
    rowOnDblClick: function (customerId) {
      this.customerIdSelected = customerId;
      document.getElementById("dlgPopup").style.display = "block";

      // alert(customerId)
    },
  },
  filters: {
    formatDate(val) {
      if (val) {
        const dateOfBirth = new Date(val);
        let day = dateOfBirth.getDate();
        day = day < 10 ? `0${day}` : day;
        let month = dateOfBirth.getMonth() + 1;
        month = month < 10 ? `0${month}` : month;
        let year = dateOfBirth.getFullYear();
        return `${day}/${month}/${year}`;
      } else return "";
    },
  },
  data() {
    return {
      customerIdSelected: null,
      dateOfBirth: null,
      customers: null,
    };
  },
};
</script>
<style scoped>
</style>