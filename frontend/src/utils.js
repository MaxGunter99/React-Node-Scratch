
export function parseJwt(token) {
	try {
		const base64Payload = token.split(".")[1];
		const payload = atob(base64Payload); // decode Base64
		return JSON.parse(payload);
	} catch (e) {
		console.error("Failed to parse token", e);
		return null;
	}
}

export function isAuthenticated() {
	const token = localStorage.getItem("jwt");
	if (!token) {
        localStorage.removeItem("userData");
        return false;
    }

	const payload = parseJwt(token);
	if (!payload || !payload.exp) return false;

	const currentTime = Date.now() / 1000;
    const isAuthenticatedValue = payload.exp > currentTime
    if ( !isAuthenticatedValue ) {
        localStorage.removeItem("jwt");
        localStorage.removeItem("userData");
    }
	return isAuthenticatedValue;
}