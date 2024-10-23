// creating a new user account.....
const register = async (bodyData) => {
  const registerResponse = await fetch("http://localhost:3000/user/register", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(bodyData),
  });

  // console.log(registerResponse)
  const jsonResponse = await registerResponse.json();
  return jsonResponse;
};

// login if user already have account......
const login = async (bodyData) => {
  try {
    const queryParams = new URLSearchParams(bodyData).toString();

    const loginResponse = await fetch(
      `http://localhost:3000/user/login?${queryParams}`,
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
    };

    if (loginResponse.ok) {
      return jsonResponse;
    };
    
  } catch (error) {

    return error;
  }
};


export { register, login };
