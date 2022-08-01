const PRUEBA_KO = '1234'

const RESPONSE_OK = { status: 200 }
const RESPONSE_KO = { status: 401 }

const submitForm = (pass, repass, optionalQuestion) => {
  return new Promise((resolve, reject) =>
    setTimeout(
      () => (pass !== PRUEBA_KO ? resolve(RESPONSE_OK) : reject(RESPONSE_KO)),
      3000,
    ),
  )
}

export { submitForm }
