import baseURL from "../utils/baseURL.js";


const publicAssets = async () => {
  try {
    const assets = await fetch(baseURL, {
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    });

    if(!assets){
        throw new Error();
    }

    const jsonResponse = await assets.json();

    return jsonResponse;

  } catch (error) {
    console.log(error.message);
  }
};

export {publicAssets};