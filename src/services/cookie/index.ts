import Cookies from "js-cookie";

export class CookieService{
    
    /**
     * Guardamos la cookie en el navegador
     * 
     * @param name 
     * @param value 
     * @param options opcional 
     */

    static saveCookie = (name: string, value: string, options?: Cookies.CookieAttributes) => {
        Cookies.set(name, value, options);
    }

    /**
     * Obtenemos la Cookie, en caso de existir
     * 
     * @param name 
     * @returns string || undefined
     */

    static getCookie = (name: string) : string | undefined => {
        return Cookies.get(name);
    }

    /**
     * Eliminamos la Cookie
     * 
     * @param name 
    */

    static deleteCookie = (name: string) => {
        Cookies.remove(name);
    }
}