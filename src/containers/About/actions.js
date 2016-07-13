/*
 * About Actions
 *
 */

 const requestLike = ()=>{
 	return {
 		type: 'REQUEST_LIKE'
 	}
 }
 const receiveLike = (dispatch)=>{
 	return {
 		type: 'RECEIVE_LIKE'
 	}
 }
 const like = (dispatch)=>{
    return (dispatch)=>{
	 	dispatch(requestLike())
        setTimeout(()=>{
        	dispatch(receiveLike())
        },2000)
    }
}

export {like}