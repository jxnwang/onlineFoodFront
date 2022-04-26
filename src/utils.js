//these functions are used to communicate with backend
////they have the same structure
export const login = (credential) => {
    
    const loginUrl = `/login?username=${credential.username}&password=${credential.password}`;
    //build a string
    //then fetch -> this function is on window, a global function
    return fetch(loginUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",//this is to include cookie
    }).then((response) => {
        // .then because fetch will not return instantly. The following
        //will start after the response is received.
      if (response.status < 200 || response.status >= 300) {
        throw Error("Fail to log in");
      }
      //multiple .then can be added
    });
  };
  
  export const signup = (data) => {
    const signupUrl = "/signup";
  
    return fetch(signupUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((response) => {
      if (response.status < 200 || response.status >= 300) {
        throw Error("Fail to sign up");
      }
    });
  };
  
  export const getMenus = (restId) => {
    return fetch(`/restaurant/${restId}/menu`).then((response) => {
      if (response.status < 200 || response.status >= 300) {
        throw Error("Fail to get menus");
      }
  
      return response.json();
    });
  };
  
  export const getRestaurants = () => {
    return fetch("/restaurants").then((response) => {
      if (response.status < 200 || response.status >= 300) {
        throw Error("Fail to get restaurants");
      }
  
      return response.json();
    });
  };
  
  export const getCart = () => {
    return fetch("/cart").then((response) => {
      if (response.status < 200 || response.status >= 300) {
        throw Error("Fail to get shopping cart data");
      }
  
      return response.json();
    });
  };
  
  export const checkout = () => {
    return fetch("/checkout").then((response) => {
      if (response.status < 200 || response.status >= 300) {
        throw Error("Fail to checkout");
      }
    });
  };
  
  export const addItemToCart = (itemId) => {
    return fetch(`/order/${itemId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    }).then((response) => {
      if (response.status < 200 || response.status >= 300) {
        throw Error("Fail to add menu item to shopping cart");
      }
    });
  };