import Vue from 'vue'
import App from './App.vue'
import router from "./router"
//import "@common/components"
import observer from "./observer"
import store from "@store"
Vue.prototype.$observer = observer;
import VueTouch from "vue-touch";
Vue.config.productionTip = false
Vue.use(VueTouch,{name:"v-touch"});

import { DropdownMenu, DropdownItem } from 'vant';
Vue.use(DropdownMenu).use(DropdownItem);

import { Collapse, CollapseItem } from 'vant';
Vue.use(Collapse).use(CollapseItem);



/*头部*/

import { NavBar } from 'vant';
Vue.use(NavBar);

/**地址-》购物车 */

import { AddressList } from 'vant';
Vue.use(AddressList);
/**复选 */
import { Checkbox, CheckboxGroup } from 'vant';
Vue.use(Checkbox).use(CheckboxGroup);
/**单元格 */
import { Cell, CellGroup } from 'vant';
Vue.use(Cell).use(CellGroup);

/*商品*/
import { Card } from 'vant';
Vue.use(Card);

/**button */
import { Button } from 'vant';
Vue.use(Button);
/**tag */
import { Tag } from 'vant';
Vue.use(Tag);

/**倒计时 */
import { CountDown } from 'vant';
Vue.use(CountDown);
/**提交订单 */
import { SubmitBar } from 'vant';
Vue.use(SubmitBar);

/**图片懒加载 */
import { Lazyload } from 'vant';
Vue.use(Lazyload);


import { Popup } from 'vant';
Vue.use(Popup);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
