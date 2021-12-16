<template>
  <div class="m-popup">
    <div class="m-row">
      <div id="dlgPopup" class="m-dialog-modal" style="display: none">
        <div class="m-dialog">
          <!-- DIALOG HEADER -->
          <div class="m-dialog-header">
            <!-- DIALOG HEADER Left -->

            <div class="m-dialog-header-left">
              <div class="m-dialog-title">Thông tin nhân viên</div>
              <div class="m-dialog-checklist">
                <div class="m-dialog-checklist-content">
                  <input type="checkbox" /> Là khách hàng <br />
                </div>
                <div class="m-dialog-checklist-content">
                  <input type="checkbox" /> Là nhà cung cấp <br />
                </div>
              </div>
            </div>
            <!-- DIALOG HEADER right -->

            <div class="m-dialog-header-right">
              <div id="m-dialog-help" class="m-dialog-help"></div>
              <div
                id="m-dialog-close"
                class="m-dialog-close"
                @click="btnCancelOnClick"
              ></div>
            </div>
          </div>
          <!-- DIALOG CONTENT -->
          <div class="m-dialog-content">
            <div class="m-dialog-content-line">
              <div class="m-dialog-content-line-side">
                <div class="m-dialog-content-box">
                  <div class="m-dialog-content-box-tittle">
                    Mã <strong>*</strong>
                  </div>
                  <input
                    style="width: 135px"
                    type="text"
                    name=""
                    id="m-employeeCode-txt"
                    class="m-input"
                    fieldName="EmployeeCode"
                    v-model="customer.CustomerCode"
                  />
                  <div
                    class="m-input-alert-error"
                    style="display: none; left: 5%"
                  >
                    Mã không được để trống
                  </div>
                </div>
                <div class="m-dialog-content-box">
                  <div class="m-dialog-content-box-tittle">
                    Tên <strong>*</strong>
                  </div>
                  <input
                    type="text"
                    name=""
                    id="m-employeeFullName-txt"
                    class="m-input"
                    fieldName="EmployeeName"
                    v-model="customer.FullName"
                  />
                  <div class="m-input-alert-error" style="display: none">
                    Tên không được để trống
                  </div>
                </div>
              </div>
              <div class="m-dialog-content-line-side">
                <div class="m-dialog-content-box">
                  <div class="m-dialog-content-box-tittle">Ngày sinh</div>
                  <input
                    type="date"
                    name=""
                    id="m-employeeDateOfBirth-txt"
                    class="m-input"
                    fieldName="DateOfBirth"
                    :value="
                      customer.DateOfBirth
                        | formatYYYYMMDD(customer.DateOfBirth)
                    "
                  />
                </div>
                <div class="m-dialog-content-box">
                  <div class="m-dialog-content-box-tittle">Giới tính</div>
                  <div
                    id="m-employeeGender-txt"
                    class="m-dialog-content-box-radio"
                    fieldName="Gender"
                  >
                    <input
                      type="radio"
                      radio
                      class="gender"
                      name="gender"
                      value="1"
                    />Nam
                    <input
                      type="radio"
                      radio
                      class="gender"
                      name="gender"
                      value="0"
                    />Nữ
                    <input
                      type="radio"
                      radio
                      class="gender"
                      name="gender"
                      value="2"
                    />Khác
                  </div>
                </div>
              </div>
            </div>
            <div class="m-dialog-content-line">
              <div class="m-dialog-content-line-side">
                <div class="m-dialog-content-box">
                  <div class="m-dialog-content-box-tittle">
                    Đơn vị <strong>*</strong>
                  </div>

                  <!-- <combobox id="m-employeeDepartmentId-txt" api="http://amis.manhnv.net/api/v1/Departments" proppertyDisplay="DepartmentName" propertyValue="DepartmentId" fieldName="DepartmentId">
                                    </combobox> -->
                  <div
                    class="m-input-alert-error"
                    style="display: none; top: 70%; left: 25%"
                  >
                    Đơn vị không được để trống
                  </div>
                </div>
              </div>
              <div
                class="m-dialog-content-line-side"
                style="margin-bottom: 10px"
              >
                <div class="m-dialog-content-box">
                  <div class="m-dialog-content-box-tittle">Số CMND</div>
                  <input
                    type="number"
                    name=""
                    id=""
                    class="m-input"
                    fieldName="IdentityNumber"
                    v-model="customer.PhoneNumber"
                  />
                </div>
                <div class="m-dialog-content-box">
                  <div class="m-dialog-content-box-tittle">Ngày cấp</div>
                  <input
                    style="width: 134px"
                    type="date"
                    name=""
                    id=""
                    class="m-input"
                    fieldName="IdentityDate"
                  />
                </div>
              </div>
            </div>
            <div class="m-dialog-content-line">
              <div class="m-dialog-content-line-side">
                <div class="m-dialog-content-box">
                  <div class="m-dialog-content-box-tittle">Chức danh</div>
                  <input
                    type="text"
                    name=""
                    id="m-employeePositionId-txt"
                    class="m-input m-full-side"
                    fieldName="EmployeePosition"
                  />
                  <!-- <combobox id="m-employeePositionId-txt" api="http://amis.manhnv.net/api/v1/Positions" proppertyDisplay="PositionName" propertyValue="PositionId" fieldName="PositionId">
                                    </combobox> -->
                </div>
              </div>
              <div class="m-dialog-content-line-side">
                <div class="m-dialog-content-box">
                  <div class="m-dialog-content-box-tittle">Nơi cấp</div>
                  <input
                    type="text"
                    name=""
                    id=""
                    class="m-input m-full-side"
                    fieldName="IdentityPlace"
                  />
                </div>
              </div>
            </div>
            <div class="m-dialog-content-line">
              <div class="m-dialog-content-line-side">
                <div class="m-dialog-content-box">
                  <div class="m-dialog-content-box-tittle">Địa chỉ</div>
                  <input
                    type="text"
                    name=""
                    id="m-employeeAddress-txt"
                    class="m-input m-full-line"
                    fieldName="Address"
                  />
                </div>
              </div>
            </div>

            <div class="m-dialog-content-line">
              <div class="m-dialog-content-line-side">
                <div class="m-dialog-content-box">
                  <div class="m-dialog-content-box-tittle">ĐT di động</div>
                  <input
                    type="number"
                    name=""
                    id="m-employeePhone-txt"
                    class="m-input"
                    fieldName="PhoneNumber"
                  />
                </div>
                <div class="m-dialog-content-box">
                  <div class="m-dialog-content-box-tittle">ĐT cố định</div>
                  <input
                    type="tel"
                    name=""
                    id=""
                    class="m-input"
                    fieldName="TelephoneNumber"
                  />
                </div>
                <div class="m-dialog-content-box">
                  <div class="m-dialog-content-box-tittle">Email</div>
                  <input
                    type="email"
                    name=""
                    id="m-employeeEmail-txt"
                    class="m-input"
                    fieldName="Email"
                  />
                </div>
              </div>
            </div>

            <div class="m-dialog-content-line">
              <div class="m-dialog-content-line-side">
                <div class="m-dialog-content-box">
                  <div class="m-dialog-content-box-tittle">
                    Tài khoản ngân hàng
                  </div>
                  <input
                    type="number"
                    name=""
                    id=""
                    class="m-input"
                    fieldName="BankAccountNumber"
                  />
                </div>
                <div class="m-dialog-content-box">
                  <div class="m-dialog-content-box-tittle">Tên ngân hàng</div>
                  <input
                    type="text"
                    name=""
                    id=""
                    class="m-input"
                    fieldName="BankName"
                  />
                </div>
                <div class="m-dialog-content-box">
                  <div class="m-dialog-content-box-tittle">Chi nhánh</div>
                  <input
                    type="text"
                    name=""
                    id=""
                    class="m-input"
                    fieldName="BankBranchName"
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="m-dialog-footer">
            <div class="m-dialog-footer-left">
              <button
                id="m-d-f-close"
                class="m-btn m-btn-nobg m-btn-footer"
                @click="btnCancelOnClick"
              >
                Hủy
              </button>
            </div>
            <div class="m-dialog-footer-right">
              <button id="m-d-f-save" class="m-btn m-btn-footer">Cất</button>
              <button
                id="m-d-f-save-add"
                class="m-btn m-btn-footer"
                @click="btnSaveOnClick"
              >
                Cất và thêm
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";

export default {
  name: "CustomerDetail",

  methods: {
    btnCancelOnClick: function () {
      document.getElementById("dlgPopup").style.display = "none";
    },
    dateChange: function () {
      var datePicked = event.target.value;
      this.customer.dateOfBirth = new Date(datePicked);
    },
    btnSaveOnClick: function () {
      var me = this;
      // Build customer:
      let inputs = document.querySelectorAll('#dlgPopup .m-dialog-content-box .m-input');
      // console.log(inputs);
      for (const input of inputs) {
        let fieldName = input.getAttribute('fieldName');
        let value = input.value;
        me.customer[fieldName] = value;
      }
      
      if (this.customerId == null) {
        axios
          .post("http://cukcuk.manhnv.net/api/v1/Customerss", me.customer)
          .then(function (res) {
            // me.customer = res.data;
            console.log(res);
            document.getElementById("dlgPopup").style.display = "none";
          })
          .catch(function (res) {
            console.log(res);
            document.getElementById("dlgPopup").style.display = "none";
          });
      } else {
        axios
          .put(`http://cukcuk.manhnv.net/api/v1/Customerss/${me.customerId}`, me.customer)
          .then(function () {
            document.getElementById("dlgPopup").style.display = "none";
          })
          .catch(function (res) {
            console.log(res);
            document.getElementById("dlgPopup").style.display = "none";
          });
      }
    },
  },
  watch: {
    customerId: function (val) {
      console.log(val);
      var me = this;
      if (val != null) {
        // Goi api lay du lieu tuong ung voi khach hang
        axios
          .get(`http://cukcuk.manhnv.net/api/v1/Customerss/${val}`)
          .then(function (res) {
            me.customer = res.data;
          })
          .catch(function (res) {
            console.log(res);
          });
      }
    },
  },
  filters: {
    formatYYYYMMDD(val) {
      // console.log(val);
      if (val) {
        const dateOfBirth = new Date(val);
        let day = dateOfBirth.getDate();
        day = day < 10 ? `0${day}` : day;
        let month = dateOfBirth.getMonth() + 1;
        month = month < 10 ? `0${month}` : month;
        let year = dateOfBirth.getFullYear();
        return `${year}-${month}-${day}`;
      } else return "";
    },
  },
  beforeDestroy() {
    //   Reset lại giá trị id
    this.customerId = null;
  },
  props: ["customerId"],
  data() {
    return {
      customer: {},
      //   customerId: null,
    };
  },
};
</script>