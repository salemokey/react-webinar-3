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
  addComment: (author, id, type, commentText) => {
    return async (dispatch, getState, services) => {
      const token = localStorage.getItem('token');

      try {
        const res = await services.api.request({
          url: '/api/v1/comments',
          method: 'POST',
          headers: { token },
          body: JSON.stringify({
            text: commentText,
            parent: { _id: id, _type: type },
          }),
        });
      } catch (e) {
        // Ошибка добавления комментария
        console.error('Ошибка добавления комментария:', e.message);
      }
    };
  },
};

