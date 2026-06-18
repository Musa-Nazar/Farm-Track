const signUpPattern = {
  farmName: { pattern: /^[\w]{3,10}/i },
  email: { pattern: /^[\w\d]{5,15}@[\w]{1,5}.com$/ },
  password: { pattern: /^[\w\d]{8}/ },
  confirmPassword: { pattern: /^[\w\d]{8}/ },
};

export default signUpPattern;
