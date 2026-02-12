@echo off
echo ========================================
echo   StockSync - Starting Application
echo ========================================
echo.

echo [1/3] Checking MongoDB...
echo Make sure MongoDB is running!
echo.

echo [2/3] Starting Backend Server...
start "StockSync Backend" cmd /k "cd server && npm run dev"
timeout /t 3 /nobreak >nul

echo [3/3] Starting Frontend...
start "StockSync Frontend" cmd /k "cd client && npm run dev"

echo.
echo ========================================
echo   Application Starting!
echo ========================================
echo.
echo Backend:  http://localhost:5000
echo Frontend: http://localhost:5173
echo.
echo Press any key to exit this window...
pause >nul
