
start-frontend:
	cd frontend && npm start

start-backend:
	cd backend && node index.js

# PRETTIER

prettier-check:
	npx prettier . -c

prettier-format:
	npx prettier . -w

