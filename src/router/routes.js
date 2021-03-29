/* Layout */
import Layout from '@/layout'
export const constantRoutes = [
  // 登录的路由对象
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },
  // 404 的路由对象
  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },
  // Layout 路由对象
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [{
      path: 'dashboard',
      name: 'Dashboard',
      component: () => import('@/views/dashboard/index'),
      meta: { title: '首页', icon: 'dashboard' }
    }]
  },
  // 商品管理路由
  {
    name: 'Product', // 为了后期的路由权限
    path: '/product',
    redirect: 'product/category/list',
    component: Layout,
    meta: { title: '商品管理', icon: 'el-icon-s-shop' },
    children: [
      // 分类管理
      {
        name: 'Category',
        path: 'category/list',
        component: () => import('@/views/product/category/list'),
        meta: { title: '分类管理' }
      },
      // 品牌管理
      {
        name: 'Trademark',
        path: 'trademark/list',
        component: () => import('@/views/product/trademark/list'),
        meta: { title: '品牌管理' }
      },
      // 平台属性管理
      {
        name: 'Attr',
        path: 'attr/list',
        component: () => import('@/views/product/attr/list'),
        meta: { title: '平台属性管理' }
      },
      // SPU管理
      {
        name: 'SPU',
        path: 'spu/list',
        component: () => import('@/views/product/spu/list'),
        meta: { title: 'SPU管理' }
      },
      // SKU管理
      {
        name: 'SKU',
        path: 'sku/list',
        component: () => import('@/views/product/sku/list'),
        meta: { title: 'SKU管理' }
      },

    ]
  },


  // 必须的放在最后
  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]