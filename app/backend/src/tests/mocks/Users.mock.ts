const user = {
    id: 1,
    username: 'username teste',
    role: 'user',
    email: 'email@test.com',
    password: 'passwordTest'
}

const validationLogin = {
  email: user.email,
  password: user.password
}

const invalidEmail = {
  email: 'email.com',
}

const validLogin = {
    email: user.email,
    password: 'secret_user',
  }

const invalidPasword = {
  email: user.email
}

export {
  user,
  validationLogin,
  invalidEmail,
  invalidPasword,
  validLogin
}