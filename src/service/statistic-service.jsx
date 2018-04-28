/*
* @Author: Rosen
* @Date:   2018-01-26 13:38:21
 * @Last Modified by: xiongjian
 * @Last Modified time: 2018-04-28 10:42:02
*/
import MUtil from 'util/mm.jsx'

const _mm = new MUtil();

class Statistic{
    // 首页数据统计
    getHomeCount(){
        return _mm.request({
            url: '/manage/statistic/base_count.do'
        });
    }
}

export default Statistic;