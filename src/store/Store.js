import Vue from 'vue'
import Vuex from 'vuex'

import FindLove from './modules/findLove'
import Dialog from './modules/dialog'

import * as getters from './Getters'
import * as mutations from './Mutations'
import * as actions from './Actions'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    user: {
      id: 1,
      point: 0,
      carts: []
    },
    products: [
      {
        id: 1,
        name: 'melon love',
        price: 12000,
        point: 1,
        image: "../../public/assets/Product1.jpg",
        quantity: 1000
      },
      {
        id: 2,
        name: 'mango cup',
        price: 12000,
        point: 1,
        image: "../../public/assets/Product2.jpg",
        quantity: 1000
      },
      {
        id: 3,
        name: 'ice cream stick',
        price: 12000,
        point: 1,
        image: "../../public/assets/Product3.jpg",
        quantity: 1000
      },
      {
        id: 4,
        name: 'buffer ice',
        price: 50000,
        point: 1,
        image: "../../public/assets/Product4.jpg",
        quantity: 1000
      }
    ],
    listData: [
      {
        id: 1,
        name:  "Nguyễn Hoàng Bách",
        age: 23,
        work: "hust",
        location: "hà nội",
        image: "../../public/assets/avatar1.jpg"
      },
      {
        id: 2,
        name:  "Nguyễn Hoàng Hà",
        age: 23,
        work: "hust",
        location: "hà nội",
        image: "../../public/assets/avatar2.jpg"
      },
      {
        id: 3,
        name:  "Nguyễn Đ.K Hải",
        age: 23,
        work: "hust",
        location: "hà nội",
        image: "../../public/assets/avatar3.jpg"
      },
      {
        id: 4,
        name:  "Tạ Quyền Anh",
        age: 22,
        work: "hust",
        location: "hà nội",
        image: "../../public/assets/avatar4.jpg"
      }
    ]
  },
  getters,
  mutations,
  actions,
  modules: {
    FindLove,
    Dialog
  }
})
