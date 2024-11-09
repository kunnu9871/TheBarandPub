import baseURL from "../utils/baseURL.js";
 
// creating a new user account.....
const register = async (formData) => {
  try {
    const registerResponse = await fetch(
      `${baseURL}user/register`,
      {
        method: "POST",
        body: formData,
      }
    );

    // console.log(registerResponse)
    const jsonResponse = await registerResponse.json();
    return jsonResponse;
  } catch (error) {
      console.log(error)
  }
};

// login if user already have account......
const login = async (bodyData) => {
  try {
    const queryParams = new URLSearchParams(bodyData).toString();

    const loginResponse = await fetch(
      `${baseURL}user/login?${queryParams}`,
      {
        method: "GET",
        headers: {
          "content-type": "application/json",
        },
      }
    );

    const jsonResponse = await loginResponse.json();

    if (!loginResponse.ok) {
      return jsonResponse;
    }

    if (loginResponse.ok) {
      return jsonResponse;
    }
  } catch (error) {
    return error;
  }
};

export { register, login };