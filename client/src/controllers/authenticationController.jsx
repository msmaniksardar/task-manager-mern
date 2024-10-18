export class Authenticate {
    static accessTokenKey = "accessToken";
    static accessToken = null;

    static setToken = (token) => {
        localStorage.setItem(this.accessTokenKey, JSON.stringify(token));
        
    }

    static getToken = () => {
        const token = localStorage.getItem(this.accessTokenKey);
        this.accessToken = JSON.parse(token);
        return this.accessToken;
    }

    static isLoggedIn = () => {
        // Check localStorage directly to ensure token presence
        return this.accessToken != null
    }

    static clearUser = () => {
        // Remove only the access token from localStorage
        localStorage.removeItem(this.accessTokenKey);
        this.accessToken = null; // Clear the stored access token in the class as well
    }
}
