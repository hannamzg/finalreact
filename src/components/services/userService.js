import httpService, {setCommonHeader} from "./httpServicse";
import jwtDecode from "jwt-decode";

const TOKEN_KEY = "token";
setTokenHeader();

function getJWT(){
  return localStorage.getItem(TOKEN_KEY);
}

export function setTokenHeader(){
  setCommonHeader("x-auth-token", getJWT());
}

export function createUser(user) {
  return httpService.post("/users", user);
}

export async function loginUser(credentials){
  const{ data} = await httpService.post("/auth",credentials);

  localStorage.setItem(TOKEN_KEY,data.token);
  setTokenHeader();
}

export function logout(){
  localStorage.removeItem(TOKEN_KEY);
  setTokenHeader();
}

export function getUser(){
  try{
    const token = getJWT();
    return jwtDecode(token);
  }
  catch{
    return
  }
}

const usersService = {
  createUser,
  loginUser,
  logout,
  getJWT,
  getUser,
};

export default usersService;
