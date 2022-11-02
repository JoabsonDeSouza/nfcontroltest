interface LoginProps {
  email: string;
  password: string;
}

export const loginService = async ({ email, password }: LoginProps) => {
  console.log('password', password);

  try {
    if (!email.includes('teste@teste.com') && !password.includes('teste')) {
      throw Error();
    }
    return { email, password };
  } catch (error) {
    throw Error();
  }
};

export const createUserService = async ({ email, password }: LoginProps) => {
  try {
    return { email, password };
  } catch (error) {
    console.log(error);
    throw Error();
  }
};
