import LoginProcess from './login_progress';

/**
 * @function
 * @param  signUpInfo {userId, password}
 */
const SignupProgress = (signUpInfo) => {
  console.log('🚀signUpInfo', signUpInfo);
  const LoginInfo = {
    userId: signUpInfo.userId,
    password: signUpInfo.password,
  };

  LoginProcess(LoginInfo);
};

export default SignupProgress;
