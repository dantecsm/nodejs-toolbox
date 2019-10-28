@echo off
node --max-old-space-size=25600 format.js %~nx1
echo 数据转换完成!
pause