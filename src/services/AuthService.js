import CookieService from "./CookieService";

const expiresAt = 60 * 24;

class AuthService {
  handleLoginSuccess(response, remember) {
    if(!remember) {
      const options = { path: "/" };
      CookieService.set("access_token", response.access_token, options);
      return true;

    }

    let date = new Date();
    date.setTime(date.getTime() + expiresAt * 60 * 1000);
    const options = { path: "/", expires: date };

    CookieService.set("access_token", response.access_token, options);
    return true;
    
  }
}