#!/bin/bash
NODE=`which node || which nodejs`

$NODE enyo/tools/deploy.js -v -o deploy/org.webosports.app.settings || exit 1

adb push deploy/org.webosports.app.settings /usr/palm/applications/org.webosports.app.settings

adb shell luna-send -n 1 luna://com.palm.applicationManager/rescan {}
adb shell systemctl restart luna-next
