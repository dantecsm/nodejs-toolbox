@echo off
node --max-old-space-size=25600 合并.js %~nx1 %~nx2 %~nx3 %~nx4 %~nx5 %~nx6 %~nx7 %~nx8 %~nx9
echo 合并完成
pause