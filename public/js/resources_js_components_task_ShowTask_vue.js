"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_task_ShowTask_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/task/ShowTask.vue?vue&type=script&lang=js":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/task/ShowTask.vue?vue&type=script&lang=js ***!
  \*******************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//import User_error_block from "@/components/elements/user_error_block.vue";

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "ShowTask",
  //    components: {User_error_block},
  data: function data() {
    return {
      task: null,
      categories: [],
      result: {
        'result': null,
        'message': null
      }
    };
  },
  mounted: function mounted() {
    this.getTaskById();
    this.getCategories();
  },
  methods: {
    editTask: function editTask(data, mess) {
      var _this = this;
      axios.patch('/api/tasks/' + this.task.id, data).then(function (response) {
        _this.result = {
          'result': 'ok',
          'message': mess
        };
      })["catch"](function (error) {
        _this.result = {
          'result': 'error',
          'message': error.response.data.message
        };
      })["finally"](function () {
        setTimeout(function () {
          _this.result = {
            'result': null,
            'message': null
          };
        }, 4000);
      });
    },
    editTitle: function editTitle() {
      if (this.$refs.newTitle.textContent !== this.task.title) {
        this.task.title = this.$refs.newTitle.textContent;
        this.editTask({
          title: this.$refs.newTitle.textContent
        }, 'Изменено название задачи');
      }
    },
    editDescription: function editDescription() {
      if (this.$refs.newDescription.textContent !== this.task.description) {
        this.task.description = this.$refs.newDescription.textContent;
        this.editTask({
          description: this.$refs.newDescription.textContent
        }, 'Изменено описание задачи ');
      }
    },
    updateCategory: function updateCategory() {
      this.editTask({
        category_id: this.task.category_id
      }, 'изменена категория задачи');
    },
    getCategories: function getCategories() {
      var _this2 = this;
      axios.get('/api/categories').then(function (response) {
        console.log(response.data);
        _this2.categories = response.data;
      })["catch"](function (error) {
        console.error('Ошибка получения категорий', error);
      });
    },
    getTaskById: function getTaskById() {
      var _this3 = this;
      axios.get('/api/tasks/' + this.$route.params.id).then(function (response) {
        _this3.task = response.data;
      })["catch"](function (error) {
        console.error('Ошибка получения проекта', error);
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/task/ShowTask.vue?vue&type=template&id=5906e951":
/*!***********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/task/ShowTask.vue?vue&type=template&id=5906e951 ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  key: 0
};
var _hoisted_2 = {
  "class": "d-flex justify-content-center mt-4"
};
var _hoisted_3 = {
  "class": "container mt-3 w-75"
};
var _hoisted_4 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h3", null, "Описание задачи", -1 /* HOISTED */);
var _hoisted_5 = {
  "class": "d-flex flex-column justify-content-center"
};
var _hoisted_6 = {
  "class": "d-flex align-items-center"
};
var _hoisted_7 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "d-grid col-2"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", null, "Категория задачи:")], -1 /* HOISTED */);
var _hoisted_8 = ["value"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return $data.task ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("header", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h1", {
    contenteditable: "true",
    ref: "newTitle",
    onBlur: _cache[0] || (_cache[0] = function () {
      return $options.editTitle && $options.editTitle.apply($options, arguments);
    })
  }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.task.title), 545 /* TEXT, NEED_HYDRATION, NEED_PATCH */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [_hoisted_4, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
    "class": "mr-5",
    contenteditable: "true",
    ref: "newDescription",
    onBlur: _cache[1] || (_cache[1] = function () {
      return $options.editDescription && $options.editDescription.apply($options, arguments);
    })
  }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.task.description), 545 /* TEXT, NEED_HYDRATION, NEED_PATCH */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [_hoisted_7, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("select", {
    "class": "form-control w-25 border-transparent",
    onChange: _cache[2] || (_cache[2] = function () {
      return $options.updateCategory && $options.updateCategory.apply($options, arguments);
    }),
    "onUpdate:modelValue": _cache[3] || (_cache[3] = function ($event) {
      return $data.task.category_id = $event;
    })
  }, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.categories, function (category) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("option", {
      value: category.id
    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(category.title), 9 /* TEXT, PROPS */, _hoisted_8);
  }), 256 /* UNKEYED_FRAGMENT */))], 544 /* NEED_HYDRATION, NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelSelect, $data.task.category_id]])])])])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true);
}

/***/ }),

/***/ "./resources/js/components/task/ShowTask.vue":
/*!***************************************************!*\
  !*** ./resources/js/components/task/ShowTask.vue ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ShowTask_vue_vue_type_template_id_5906e951__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ShowTask.vue?vue&type=template&id=5906e951 */ "./resources/js/components/task/ShowTask.vue?vue&type=template&id=5906e951");
/* harmony import */ var _ShowTask_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ShowTask.vue?vue&type=script&lang=js */ "./resources/js/components/task/ShowTask.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_ShowTask_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_ShowTask_vue_vue_type_template_id_5906e951__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/components/task/ShowTask.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/components/task/ShowTask.vue?vue&type=script&lang=js":
/*!***************************************************************************!*\
  !*** ./resources/js/components/task/ShowTask.vue?vue&type=script&lang=js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ShowTask_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ShowTask_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ShowTask.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/task/ShowTask.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/components/task/ShowTask.vue?vue&type=template&id=5906e951":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/task/ShowTask.vue?vue&type=template&id=5906e951 ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ShowTask_vue_vue_type_template_id_5906e951__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ShowTask_vue_vue_type_template_id_5906e951__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ShowTask.vue?vue&type=template&id=5906e951 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/task/ShowTask.vue?vue&type=template&id=5906e951");


/***/ })

}]);