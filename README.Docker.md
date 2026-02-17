# Docker Commands for Kal-El Website

Ensure you are in the `website/kal-el` directory before running these commands:

### 1. Start & View (Launch)
To build the image and start the container in the background:
```powershell
docker compose up --build -d
```
*   **View the site:** Open [http://localhost:3000](http://localhost:3000) in your browser.
*   **View logs:** `docker compose logs -f` (Press `Ctrl+C` to exit logs)

### 2. Stop (Pause)
To stop the running containers without removing them (useful if you want to restart quickly later):
```powershell
docker compose stop
```
To restart them later:
```powershell
docker compose start
```

### 3. Stop & Remove (Reset)
To stop the containers and remove them (frees up ports, but keeps the images):
```powershell
docker compose down
```

### 4. Deprecate / Full Cleanup (Delete)
To stop everything and remove **containers**, **networks**, and the **images** created by this project (reclaim disk space):
```powershell
docker compose down --rmi all --volumes
```

### Troubleshooting
If you see permission errors or "port already in use":
1.  Run `docker compose down`
2.  Run `docker compose up --build -d`
