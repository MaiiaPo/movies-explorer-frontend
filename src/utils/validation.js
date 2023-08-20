import { nameRegx, emailRegx } from './constants'
export function validateName(name) {
  if (name !== undefined) {
    if (name.length === 0) {
      return { invalid: true, message: 'Поле должно быть заполнено' };
    } else if (name.length < 2) {
      return { invalid: true, message: 'Имя должно быть больше, чем из 1 символ' };
    } else if (nameRegx.test(name.toLowerCase())) {
      return { invalid: false, message: '' };
    } else if (!nameRegx.test(name.toLowerCase())) {
      return {invalid: true, message: 'Некорректный ввод'};
    }
  } else {
    return { invalid: true, message: '' };
  }
}

export function validateEmail(email) {
  if (email !== undefined) {
    if (email.length === 0) {
      return { invalid: true, message: 'Поле должно быть заполнено' };
    } else if (emailRegx.test(email.toLowerCase())) {
      return { invalid: false, message: '' };
    } else if (!emailRegx.test(email.toLowerCase())) {
      return { invalid: true, message: 'Некорректный ввод' };
    }
  } else {
    return { invalid: true, message: '' };
  }
}

export function validatePassword(password) {
  if (password !== undefined) {
    if (password.length === 0) {
      return { invalid: true, message: 'Поле должно быть заполнено' };
    } else if (password.length < 8) {
      return {invalid: true, message: 'Пароль должен быть не менее 8 символов'};
    } else if (password.length >= 8 && password.length <= 20) {
      return {invalid: false, message: ''};
    }
  } else {
    return { invalid: true, message: '' };
  }
}
