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
      login: '',
      password: '',
    };
  }

  handleLoginChange(event) {
    const { value } = event.target;
    this.setState({ ...this.getState(), login: value });
  }

  handlePasswordChange(event) {
    const { value } = event.target;
    this.setState({ ...this.getState(), password: value });
  }

  handleSubmit(event) {
    event.preventDefault(); // Предотвращаем стандартную отправку формы
    const { login, password } = this.getState(); // Получаем текущие значения состояния
    this.login(login, password); // Обновляем состояние с логином и паролем
    this.signIn(); // Вызываем метод signIn
  }

  async signIn() {
    try {
      const response = await fetch('/api/v1/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          login: this.state.login,
          password: this.state.password,
        }),
      });
      if (response.ok) {
        // Запоминаем токен в localStorage
        const token = await response.json().token;
        localStorage.setItem('token', token);
        // Переходим на главную страницу
        window.location.href = '/';
        ('Авторизация успешна');
      } else {
        throw new Error('Ошибка авторизации');
      }
    } catch (error) {
      console.error('Ошибка авторизации:', error.message);
    }
  }
}
export default SignState;
