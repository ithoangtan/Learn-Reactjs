import * as taskApis from "../apis/task.api";
import * as taskConstants from "./../constants/task.module";

export const fetchListTask = () => {
   return {
      type: taskConstants.FETCH_TASK
   };
};

export const fetchListTaskSuccess = data => {
   return {
      type: taskConstants.FETCH_TASK_SUCCESS,
      payload: {
         // Thường đi làm thì người ta hay gọi
         //data gửi kèm trong actions là payload ở vị trí này
         data
      }
   };
};

export const fetchListTaskError = error => {
   return {
      type: taskConstants.FETCH_TASK_FAILED,
      payload: {
         error
      }
   };
};
/**
 * B1: fetch isTaskRequesr()
 * B2: ResetL state tasks --> []
 * B3: Khi API thành công thì vào then:
 * fetchListTaskSucces (data response)
 *
 */
export const fetchListTaskRequest = () => {
   return dispatch => {
      dispatch(fetchListTask()); //reset state tasks-->[]
      taskApis
         .getListTask()
         .then(resp => {
            const { data } = resp;
            console.log("data: ", data);
            dispatch(fetchListTaskSuccess(data));
         })
         .catch(error => {
            dispatch(fetchListTaskError(error));
            console.log("error: ", error);
         });
   };
};
