
run-frontend:
	cd frontend && npm start

run-backend:
	cd backend && node index.js


# PRETTIER
check-prettier:
	npx prettier . -c

run-prettier:
	npx prettier . -w


# HOSTING
run-ngrok:
	ngrok http http://localhost:3000 
	# VIEW IT HERE https://dashboard.ngrok.com/endpoints


