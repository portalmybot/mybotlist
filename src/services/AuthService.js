import CookieService from "./CookieService";
const expiresAt = 60 * 168; //dias

class AuthService {
  handleLoginSuccess(response, remember) {
    if(!remember) {
      const options = { path: "/", /* secure: true, httpOnly: true */ };
      CookieService.set("access_token", response.access_token, options);

      return true;

    }

    let date = new Date();
    date.setTime(date.getTime() + expiresAt * 60 * 1000);
    const options = { path: "/", expires: date,/*  secure: true, httpOnly: true */ };

    CookieService.set("access_token", response.access_token, options);
    return true;

  }
}

export default new AuthService();