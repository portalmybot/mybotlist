import Cookie from "universal-cookie";

const cookie = new Cookie();

class CookieService {
  get(key){
    return cookie.get(key)
  }

  set(key, value, options) {
    cookie.set(key, value, options);
  }

  remove(key) {
    cookie.remove(key);
  }
}

export default new CookieService();
