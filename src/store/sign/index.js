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
      isLogged: false,
      name: null,
      phone: null,
      email: null,
      token: null,
      errorServer: null,
    };
  }

  async signIn(login, password) {
    console.log({ login, password });
    try {
      const response = await fetch('/api/v1/users/sign', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ login: login, password: password }),
      });
      if (response.ok) {
        const json = await response.json();
        const token = json.result.token;
        localStorage.setItem('token', token);
        ('Авторизация успешна');
        this.setState(
          {
            ...this.getState(),
            token: token,
            isLogged: true,
            name: json.result.user.profile.name,
            phone: json.result.user.profile.phone,
            email: json.result.user.email,
          },
          console.log(localStorage.getItem('token')),
        );
      } else {
        this.setState({ errorServer: 'error' });
        throw new Error('Ошибка авторизации');
      }
    } catch (error) {
      console.error('Ошибка авторизации:', error.message);
    }
  }

  async exitUser() {
    localStorage.removeItem('token');
    this.setState({
      isLogged: false,
      name: '',
      phone: '',
      email: '',
    });
  }

  async getUser() {
    const token = localStorage.getItem('token');
    this.setState({
      waiting: true,
    });
    try {
      const response = await fetch('/api/v1/users/self?fields=*', {
        headers: {
          'X-Token': token,
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        const { error } = await response.json();
        throw new Error(error.message);
      } else {
        const json = await response.json();
        console.log(json.result);
        this.setState({
          ...this.getState(),
          isLogged: true,
          name: json.result.profile.name,
          phone: json.result.profile.phone,
          email: json.result.email,
        });
      }
    } catch (e) {
      this.setState({
        waiting: false,
      });
      console.error(e);
    }
  }
}
export default SignState;
