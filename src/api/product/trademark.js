// 引入request 
import request from '@/utils/request'
// 公共的根路径地址
const api_name = `/admin/product/baseTrademark`
export default {
  // 根据关键字搜索品牌信息列表数据
  findBaseTrademarkByKeyword(keyword){
    return request({
      url:`${api_name}/findBaseTrademarkByKeyword/${keyword}`,
      method:'GET'
    })
    // return request.get(`${api_name}/findBaseTrademarkByKeyword/${keyword}`)
  }
}


// GET /admin/product/baseTrademark/getTrademarkList
// getTrademarkList

// DELETE /admin/product/baseTrademark/remove/{id}
// 删除BaseTrademark

// POST /admin/product/baseTrademark/save
// 新增BaseTrademark

// PUT /admin/product/baseTrademark/update
// 修改BaseTrademark

// GET /admin/product/baseTrademark/{page}/{limit}