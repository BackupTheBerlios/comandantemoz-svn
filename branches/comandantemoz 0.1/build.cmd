@jar32 a -r comandantemoz.jar comandantemoz\*.*

set x=comandantemoz
md build\chrome
cd chrome
..\7za a -tzip "%x%.jar" * -r -mx=0
move "%x%.jar" ..\build\chrome
cd ..
copy install.* build
cd build
..\7za a -tzip "%x%.xpi" * -r -mx=9
move "%x%.xpi" ..
cd ..
rd build /s/q
pause