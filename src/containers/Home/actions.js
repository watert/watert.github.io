/*
 * Home Actions
 *
 */

const setPage = (page=0)=>{
    var data = [1,2,3,4,5].map((num)=>page*5+num)
    return {
        type:'SET_DATA',
        payload:{
        	data,
        	pageInfo:{total:10, page:page, pageSize:5}
        }
        
    }
}

export {setPage}