import Vue from 'vue';
//配置路由
import VueRouter from 'vue-router'
Vue.use(VueRouter);
//1.创建组件
import Index from '@/views/index'
import Home from '@/views/home'
import Login from '@/views/login'
import NotFound from '@/views/404'
import UpdatePassword from '@/views/update-password'
import pay from '@/views/pay'
import register from '@/views/register'
import center from '@/views/center'
    import news from '@/views/modules/news/list'
    import xueshuzhutileixing from '@/views/modules/xueshuzhutileixing/list'
    import discusslunwen from '@/views/modules/discusslunwen/list'
    import xueshuhuodong from '@/views/modules/xueshuhuodong/list'
    import shujutongji from '@/views/modules/shujutongji/list'
    import forum from '@/views/modules/forum/list'
    import lunwen from '@/views/modules/lunwen/list'
    import yonghu from '@/views/modules/yonghu/list'
    import huodongbaoming from '@/views/modules/huodongbaoming/list'
    import discussxueshuhuodong from '@/views/modules/discussxueshuhuodong/list'
    import config from '@/views/modules/config/list'
    import huodongleixing from '@/views/modules/huodongleixing/list'
    import newstype from '@/views/modules/newstype/list'


//2.配置路由   注意：名字
export const routes = [{
    path: '/',
    name: '系统首页',
    component: Index,
    children: [{
      // 这里不设置值，是把main作为默认页面
      path: '/',
      name: '系统首页',
      component: Home,
      meta: {icon:'', title:'center', affix: true}
    }, {
      path: '/updatePassword',
      name: '修改密码',
      component: UpdatePassword,
      meta: {icon:'', title:'updatePassword'}
    }, {
      path: '/pay',
      name: '支付',
      component: pay,
      meta: {icon:'', title:'pay'}
    }, {
      path: '/center',
      name: '个人信息',
      component: center,
      meta: {icon:'', title:'center'}
    }
      ,{
	path: '/news',
        name: '公告信息',
        component: news
      }
      ,{
	path: '/xueshuzhutileixing',
        name: '学术主题类型',
        component: xueshuzhutileixing
      }
      ,{
	path: '/discusslunwen',
        name: '论文评论',
        component: discusslunwen
      }
      ,{
	path: '/xueshuhuodong',
        name: '学术活动',
        component: xueshuhuodong
      }
      ,{
	path: '/shujutongji',
        name: '数据统计',
        component: shujutongji
      }
      ,{
	path: '/forum',
        name: '学术论坛',
        component: forum
      }
      ,{
	path: '/lunwen',
        name: '论文',
        component: lunwen
      }
      ,{
	path: '/yonghu',
        name: '用户',
        component: yonghu
      }
      ,{
	path: '/huodongbaoming',
        name: '活动报名',
        component: huodongbaoming
      }
      ,{
	path: '/discussxueshuhuodong',
        name: '学术活动评论',
        component: discussxueshuhuodong
      }
      ,{
	path: '/config',
        name: '轮播图管理',
        component: config
      }
      ,{
	path: '/huodongleixing',
        name: '活动类型',
        component: huodongleixing
      }
      ,{
	path: '/newstype',
        name: '公告信息分类',
        component: newstype
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {icon:'', title:'login'}
  },
  {
    path: '/register',
    name: 'register',
    component: register,
    meta: {icon:'', title:'register'}
  },
  {
    path: '*',
    component: NotFound
  }
]
//3.实例化VueRouter  注意：名字
const router = new VueRouter({
  mode: 'hash',
  /*hash模式改为history*/
  routes // （缩写）相当于 routes: routes
})
const originalPush = VueRouter.prototype.push
//修改原型对象中的push方法
VueRouter.prototype.push = function push(location) {
   return originalPush.call(this, location).catch(err => err)
}
export default router;
