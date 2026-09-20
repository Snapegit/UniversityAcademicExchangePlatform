import VueRouter from 'vue-router'

//引入组件
import Index from '../pages'
import Home from '../pages/home/home'
import Login from '../pages/login/login'
import Register from '../pages/register/register'
import Center from '../pages/center/center'
import Forum from '../pages/forum/list'
import ForumAdd from '../pages/forum/add'
import ForumDetail from '../pages/forum/detail'
import MyForumList from '../pages/forum/myForumList'
import Storeup from '../pages/storeup/list'
import News from '../pages/news/news-list'
import NewsDetail from '../pages/news/news-detail'
import payList from '../pages/pay'

import yonghuList from '../pages/yonghu/list'
import yonghuDetail from '../pages/yonghu/detail'
import yonghuAdd from '../pages/yonghu/add'
import xueshuzhutileixingList from '../pages/xueshuzhutileixing/list'
import xueshuzhutileixingDetail from '../pages/xueshuzhutileixing/detail'
import xueshuzhutileixingAdd from '../pages/xueshuzhutileixing/add'
import huodongleixingList from '../pages/huodongleixing/list'
import huodongleixingDetail from '../pages/huodongleixing/detail'
import huodongleixingAdd from '../pages/huodongleixing/add'
import xueshuhuodongList from '../pages/xueshuhuodong/list'
import xueshuhuodongDetail from '../pages/xueshuhuodong/detail'
import xueshuhuodongAdd from '../pages/xueshuhuodong/add'
import lunwenList from '../pages/lunwen/list'
import lunwenDetail from '../pages/lunwen/detail'
import lunwenAdd from '../pages/lunwen/add'
import huodongbaomingList from '../pages/huodongbaoming/list'
import huodongbaomingDetail from '../pages/huodongbaoming/detail'
import huodongbaomingAdd from '../pages/huodongbaoming/add'
import shujutongjiList from '../pages/shujutongji/list'
import shujutongjiDetail from '../pages/shujutongji/detail'
import shujutongjiAdd from '../pages/shujutongji/add'
import newstypeList from '../pages/newstype/list'
import newstypeDetail from '../pages/newstype/detail'
import newstypeAdd from '../pages/newstype/add'
import discussxueshuhuodongList from '../pages/discussxueshuhuodong/list'
import discussxueshuhuodongDetail from '../pages/discussxueshuhuodong/detail'
import discussxueshuhuodongAdd from '../pages/discussxueshuhuodong/add'
import discusslunwenList from '../pages/discusslunwen/list'
import discusslunwenDetail from '../pages/discusslunwen/detail'
import discusslunwenAdd from '../pages/discusslunwen/add'

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
	return originalPush.call(this, location).catch(err => err)
}

//配置路由
export default new VueRouter({
	routes:[
		{
      path: '/',
      redirect: '/index/home'
    },
		{
			path: '/index',
			component: Index,
			children:[
				{
					path: 'home',
					component: Home
				},
				{
					path: 'center',
					component: Center,
				},
				{
					path: 'pay',
					component: payList,
				},
				{
					path: 'forum',
					component: Forum
				},
				{
					path: 'forumAdd',
					component: ForumAdd
				},
				{
					path: 'forumDetail',
					component: ForumDetail
				},
				{
					path: 'myForumList',
					component: MyForumList
				},
				{
					path: 'storeup',
					component: Storeup
				},
				{
					path: 'news',
					component: News
				},
				{
					path: 'newsDetail',
					component: NewsDetail
				},
				{
					path: 'yonghu',
					component: yonghuList
				},
				{
					path: 'yonghuDetail',
					component: yonghuDetail
				},
				{
					path: 'yonghuAdd',
					component: yonghuAdd
				},
				{
					path: 'xueshuzhutileixing',
					component: xueshuzhutileixingList
				},
				{
					path: 'xueshuzhutileixingDetail',
					component: xueshuzhutileixingDetail
				},
				{
					path: 'xueshuzhutileixingAdd',
					component: xueshuzhutileixingAdd
				},
				{
					path: 'huodongleixing',
					component: huodongleixingList
				},
				{
					path: 'huodongleixingDetail',
					component: huodongleixingDetail
				},
				{
					path: 'huodongleixingAdd',
					component: huodongleixingAdd
				},
				{
					path: 'xueshuhuodong',
					component: xueshuhuodongList
				},
				{
					path: 'xueshuhuodongDetail',
					component: xueshuhuodongDetail
				},
				{
					path: 'xueshuhuodongAdd',
					component: xueshuhuodongAdd
				},
				{
					path: 'lunwen',
					component: lunwenList
				},
				{
					path: 'lunwenDetail',
					component: lunwenDetail
				},
				{
					path: 'lunwenAdd',
					component: lunwenAdd
				},
				{
					path: 'huodongbaoming',
					component: huodongbaomingList
				},
				{
					path: 'huodongbaomingDetail',
					component: huodongbaomingDetail
				},
				{
					path: 'huodongbaomingAdd',
					component: huodongbaomingAdd
				},
				{
					path: 'shujutongji',
					component: shujutongjiList
				},
				{
					path: 'shujutongjiDetail',
					component: shujutongjiDetail
				},
				{
					path: 'shujutongjiAdd',
					component: shujutongjiAdd
				},
				{
					path: 'newstype',
					component: newstypeList
				},
				{
					path: 'newstypeDetail',
					component: newstypeDetail
				},
				{
					path: 'newstypeAdd',
					component: newstypeAdd
				},
				{
					path: 'discussxueshuhuodong',
					component: discussxueshuhuodongList
				},
				{
					path: 'discussxueshuhuodongDetail',
					component: discussxueshuhuodongDetail
				},
				{
					path: 'discussxueshuhuodongAdd',
					component: discussxueshuhuodongAdd
				},
				{
					path: 'discusslunwen',
					component: discusslunwenList
				},
				{
					path: 'discusslunwenDetail',
					component: discusslunwenDetail
				},
				{
					path: 'discusslunwenAdd',
					component: discusslunwenAdd
				},
			]
		},
		{
			path: '/login',
			component: Login
		},
		{
			path: '/register',
			component: Register
		},
	]
})
