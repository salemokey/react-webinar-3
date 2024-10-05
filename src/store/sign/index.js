import StoreModule from '../module';

/**
 * Состояние каталога - параметры фильтра и список товара
 */
class SignState extends StoreModule {
  /**
   * Начальное состояние
   * @return {Object}
   */
  initState() {
    return {
      isLoged: false,
      userData: {},
      token: '',
    };
  }

  async signIn({ login, password }) {
    console.log({ login, password });
    try {
      const response = await fetch('/api/v1/users/sign', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ login, password }),
      });
      if (response.ok) {
        const token = await response.json().token;
        localStorage.setItem('X-token', token);
        ('Авторизация успешна');
        this.setState({ ...this.getState(), isLoged: true, userData: json.result });
      } else {
        throw new Error('Ошибка авторизации');
      }
    } catch (error) {
      console.error('Ошибка авторизации:', error.message);
    }
  }
}
export default SignState;
