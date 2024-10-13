export default {
  /**
   * Загрузка товара
   * @param id
   * @return {Function}
   */
  load: id => {
    return async (dispatch, getState, services) => {
      try {
        const res = await services.api.request({
          url: `/api/v1/comments?fields=items(_id,text,dateCreate,author(profile(name)),parent(_id,_type),isDeleted),count&limit=*&search[parent]=${id}`,
        });
        // Товар загружен успешно
        dispatch({ type: 'SET_COMMENTS', items: res.data.result.items });
        console.log(res.data.result.items);
      } catch (e) {
        //Ошибка загрузки
        console.log(e.message);
      }
    };
  },
  addComment: commentData => {
    console.log(commentData);
    return async (dispatch, getState, services) => {
      const token = localStorage.getItem('token');
      const data = {
        text: commentData.commentText,
        parent: { _id: commentData.id, _type: commentData.type },
      };
      try {
        const res = await services.api.request({
          method: 'POST',
          url: `/api/v1/comments`,

          body: JSON.stringify(commentData),
        });
        dispatch({ type: 'ADD_COMMENT', payload: { data: { ...res.data.result } } });
      } catch (e) {
        // Ошибка добавления комментария
        console.error('Ошибка добавления комментария:', e.message);
      }
    };
  },
};
