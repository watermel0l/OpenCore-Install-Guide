(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{280:function(e,t,a){e.exports=a.p+"assets/img/com-recovery.805dc41f.png"},281:function(e,t,a){e.exports=a.p+"assets/img/base-oc-folder.9a1a058a.png"},282:function(e,t,a){e.exports=a.p+"assets/img/com-efi-done.a6fb730e.png"},469:function(e,t,a){e.exports=a.p+"assets/img/open-cmd-current-folder.906148d4.gif"},470:function(e,t,a){e.exports=a.p+"assets/img/macrecovery-done.1b0960bc.png"},471:function(e,t,a){e.exports=a.p+"assets/img/basesystem-example.93778929.png"},472:function(e,t,a){e.exports=a.p+"assets/img/macrecovery-after.4c24ba88.jpg"},473:function(e,t,a){e.exports=a.p+"assets/img/DiskManagement.aac12f25.jpg"},474:function(e,t,a){e.exports=a.p+"assets/img/format-usb-rufus.43feba9e.png"},475:function(e,t,a){e.exports=a.p+"assets/img/bootice.f83b0859.png"},476:function(e,t,a){e.exports=a.p+"assets/img/restore-mbr.8e5164a9.png"},477:function(e,t,a){e.exports=a.p+"assets/img/restore-mbr-file.a0daa24a.png"},478:function(e,t,a){e.exports=a.p+"assets/img/restore-pbr.2635de6c.png"},479:function(e,t,a){e.exports=a.p+"assets/img/restore-pbr-file.cbf5dcf4.png"},480:function(e,t,a){e.exports=a.p+"assets/img/final-boot-file.a45bcbb9.png"},598:function(e,t,a){"use strict";a.r(t);var r=a(10),s=Object(r.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"making-the-installer-in-windows"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#making-the-installer-in-windows"}},[e._v("#")]),e._v(" Making the installer in Windows")]),e._v(" "),t("p",[e._v("While you don't need a fresh install of macOS to use OpenCore, some users prefer having a fresh slate with their boot manager upgrades.")]),e._v(" "),t("p",[e._v("To start you'll need the following:")]),e._v(" "),t("ul",[t("li",[t("p",[e._v("4GB USB Stick")])]),e._v(" "),t("li",[t("p",[e._v("For USB larger than 16 GB to format in FAT32 use "),t("a",{attrs:{href:"#rufus-method"}},[e._v("Rufus method")])])]),e._v(" "),t("li",[t("p",[t("a",{attrs:{href:"https://github.com/acidanthera/OpenCorePkg/releases",target:"_blank",rel:"noopener noreferrer"}},[e._v("macrecovery.py"),t("OutboundLink")],1)]),e._v(" "),t("ul",[t("li",[e._v("This will require "),t("a",{attrs:{href:"https://www.python.org/downloads/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Python 3 installed"),t("OutboundLink")],1)])])])]),e._v(" "),t("h2",{attrs:{id:"downloading-macos"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#downloading-macos"}},[e._v("#")]),e._v(" Downloading macOS")]),e._v(" "),t("p",[e._v("To grab legacy installers is super easy, first grab a copy of "),t("a",{attrs:{href:"https://github.com/acidanthera/OpenCorePkg/releases",target:"_blank",rel:"noopener noreferrer"}},[e._v("OpenCorePkg"),t("OutboundLink")],1),e._v(" and head to "),t("code",[e._v("/Utilities/macrecovery/")]),e._v(". Next, click next to the current folder path and type "),t("code",[e._v("cmd")]),e._v(" to open a Command Prompt in the current directory:")]),e._v(" "),t("p",[t("img",{attrs:{src:a(469),alt:""}})]),e._v(" "),t("p",[e._v("Now run one of the following depending on what version of macOS you want(Note these scripts rely on "),t("a",{attrs:{href:"https://www.python.org/downloads/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Python 3"),t("OutboundLink")],1),e._v(" support, please install if you haven't already):")]),e._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Lion (10.7):")]),e._v("\npy macrecovery.py "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-b")]),e._v(" Mac-2E6FAB96566FE58C "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-m")]),e._v(" 00000000000F25Y00 download\npy macrecovery.py "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-b")]),e._v(" Mac-C3EC7CD22292981F "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-m")]),e._v(" 00000000000F0HM00 download\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Mountain Lion (10.8):")]),e._v("\npy macrecovery.py "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-b")]),e._v(" Mac-7DF2A3B5E5D671ED "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-m")]),e._v(" 00000000000F65100 download\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Mavericks (10.9):")]),e._v("\npy macrecovery.py "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-b")]),e._v(" Mac-F60DEB81FF30ACF6 "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-m")]),e._v(" 00000000000FNN100 download\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Yosemite (10.10):")]),e._v("\npy macrecovery.py "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-b")]),e._v(" Mac-E43C1C25D4880AD6 "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-m")]),e._v(" 00000000000GDVW00 download\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# El Capitan (10.11):")]),e._v("\npy macrecovery.py "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-b")]),e._v(" Mac-FFE5EF870D7BA81A "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-m")]),e._v(" 00000000000GQRX00 download\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Sierra (10.12):")]),e._v("\npy macrecovery.py "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-b")]),e._v(" Mac-77F17D7DA9285301 "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-m")]),e._v(" 00000000000J0DX00 download\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# High Sierra (10.13)")]),e._v("\npy macrecovery.py "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-b")]),e._v(" Mac-7BA5B2D9E42DDD94 "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-m")]),e._v(" 00000000000J80300 download\npy macrecovery.py "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-b")]),e._v(" Mac-BE088AF8C5EB4FA2 "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-m")]),e._v(" 00000000000J80300 download\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Mojave (10.14)")]),e._v("\npy macrecovery.py "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-b")]),e._v(" Mac-7BA5B2DFE22DDD8C "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-m")]),e._v(" 00000000000KXPG00 download\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Catalina (10.15)")]),e._v("\npy macrecovery.py "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-b")]),e._v(" Mac-00BE6ED71E35EB86 "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-m")]),e._v(" 00000000000000000 download\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Big Sur (11)")]),e._v("\npy macrecovery.py "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-b")]),e._v(" Mac-42FD25EABCABB274 "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-m")]),e._v(" 00000000000000000 download\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Monterey (12)")]),e._v("\npy macrecovery.py "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-b")]),e._v(" Mac-FFE5EF870D7BA81A "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-m")]),e._v(" 00000000000000000 download\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Ventura (13)")]),e._v("\npy macrecovery.py "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-b")]),e._v(" Mac-4B682C642B45593E "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-m")]),e._v(" 00000000000000000 download\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Latest version")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# ie. Sonoma (14)")]),e._v("\npy macrecovery.py "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-b")]),e._v(" Mac-937A206F2EE63C01 "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-m")]),e._v(" 00000000000000000 download\n")])])]),t("ul",[t("li",[t("strong",[e._v("macOS 12 and above note")]),e._v(": As recent macOS versions introduce changes to the USB stack, it is highly advisable that you map your USB ports (with USBToolBox) before installing macOS.\n"),t("ul",[t("li",[t("span",{staticStyle:{color:"red"}},[e._v(" CAUTION: ")]),e._v(" With macOS 11.3 and newer, "),t("a",{attrs:{href:"https://github.com/dortania/bugtracker/issues/162",target:"_blank",rel:"noopener noreferrer"}},[e._v("XhciPortLimit is broken resulting in boot loops"),t("OutboundLink")],1),e._v(".\n"),t("ul",[t("li",[e._v("If you've already "),t("a",{attrs:{href:"https://dortania.github.io/OpenCore-Post-Install/usb/",target:"_blank",rel:"noopener noreferrer"}},[e._v("mapped your USB ports"),t("OutboundLink")],1),e._v(" and disabled "),t("code",[e._v("XhciPortLimit")]),e._v(", you can boot macOS 11.3+ without issues.")])])])])])]),e._v(" "),t("p",[e._v("This will take some time, however once you're finished you should get either BaseSystem or RecoveryImage files:")]),e._v(" "),t("p",[t("img",{attrs:{src:a(470),alt:""}})]),e._v(" "),t("table",[t("thead",[t("tr",[t("th",{staticStyle:{"text-align":"left"}},[e._v("BaseSystem")]),e._v(" "),t("th",{staticStyle:{"text-align":"left"}},[e._v("RecoveryImage")])])]),e._v(" "),t("tbody",[t("tr",[t("td",{staticStyle:{"text-align":"left"}},[t("img",{attrs:{src:a(471),alt:""}})]),e._v(" "),t("td",{staticStyle:{"text-align":"left"}},[t("img",{attrs:{src:a(472),alt:""}})])])])]),e._v(" "),t("p",[e._v("Now with our installer downloaded, we'll next want to format our USB.")]),e._v(" "),t("h2",{attrs:{id:"making-the-installer"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#making-the-installer"}},[e._v("#")]),e._v(" Making the installer")]),e._v(" "),t("p",[e._v("Here we'll be formatting our USB and adding macOS onto it, we have 2 options:")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"#disk-management-method"}},[e._v("Disk Management method")]),e._v(" "),t("ul",[t("li",[e._v("GUI Based, simplest way")]),e._v(" "),t("li",[e._v("Only UEFI systems are supported(ex. 2012+)")])])]),e._v(" "),t("li",[t("a",{attrs:{href:"#rufus-method"}},[e._v("Rufus method")]),e._v(" "),t("ul",[t("li",[e._v("GUI Based, simplest way")]),e._v(" "),t("li",[e._v("For larger USB drives(16GB+)")])])]),e._v(" "),t("li",[t("a",{attrs:{href:"#diskpart-method"}},[e._v("diskpart method")]),e._v(" "),t("ul",[t("li",[e._v("Command line based, little more work")]),e._v(" "),t("li",[e._v("Required for legacy systems(ie. non-UEFI, pre-2012)")])])])]),e._v(" "),t("h3",{attrs:{id:"disk-management-method"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#disk-management-method"}},[e._v("#")]),e._v(" Disk Management method")]),e._v(" "),t("p",[e._v("Simply open up Disk Management, and format your USB as FAT32:")]),e._v(" "),t("ol",[t("li",[e._v("Right click the Start Button on your task bar and select Disk Management.")]),e._v(" "),t("li",[e._v("You should see all of your partitions and disks. On the bottom half, you'll see your devices. Find your USB.")]),e._v(" "),t("li",[e._v("You'll want to format the USB to have a FAT32 partition.")])]),e._v(" "),t("ul",[t("li",[e._v("If you have multiple partitions on the USB, right click each partition and click Delete Volume for your USB (This will remove data, make sure you have backups and only remove partitions from your USB)\n"),t("ul",[t("li",[e._v('Right click the unallocated space and create a new simple volume. Make sure it is FAT32 and at least a gigabyte or two big. Name it "EFI".')])])]),e._v(" "),t("li",[e._v("Otherwise, right click the partition on the USB and click Format and set it to FAT32.")])]),e._v(" "),t("p",[t("img",{attrs:{src:a(473),alt:""}})]),e._v(" "),t("p",[e._v("Next, go to the root of this USB drive and create a folder called "),t("code",[e._v("com.apple.recovery.boot")]),e._v(". Then move the downloaded BaseSystem or RecoveryImage files. Please ensure you copy over both the .dmg and .chunklist files to this folder:")]),e._v(" "),t("p",[t("img",{attrs:{src:a(280),alt:""}})]),e._v(" "),t("p",[e._v("Now grab OpenCorePkg you downloaded earlier and open it:")]),e._v(" "),t("p",[t("img",{attrs:{src:a(281),alt:""}})]),e._v(" "),t("p",[e._v("Here we see both IA32(32 Bit CPUs) and X64(64 Bit CPUs) folders, choose the one that's most appropriate to your hardware and open it. Next grab the EFI folder inside and place this on the root of the USB drive along side com.apple.recovery.boot. Once done it should look like this:")]),e._v(" "),t("p",[t("img",{attrs:{src:a(282),alt:""}})]),e._v(" "),t("h3",{attrs:{id:"rufus-method"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#rufus-method"}},[e._v("#")]),e._v(" Rufus method")]),e._v(" "),t("ol",[t("li",[e._v("Download "),t("a",{attrs:{href:"https://rufus.ie/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Rufus"),t("OutboundLink")],1)]),e._v(" "),t("li",[e._v("Set the BOOT selection as not bootable")]),e._v(" "),t("li",[e._v("Set File System as Large FAT32")]),e._v(" "),t("li",[e._v("Click Start")]),e._v(" "),t("li",[e._v("Delete all file autorun in USB Drive partition")])]),e._v(" "),t("p",[t("img",{attrs:{src:a(474),alt:""}})]),e._v(" "),t("p",[e._v("Next, go to the root of this USB drive and create a folder called "),t("code",[e._v("com.apple.recovery.boot")]),e._v(". Then move the downloaded BaseSystem or RecoveryImage files. Please ensure you copy over both the .dmg and .chunklist files to this folder:")]),e._v(" "),t("p",[t("img",{attrs:{src:a(280),alt:""}})]),e._v(" "),t("p",[e._v("Now grab OpenCorePkg you downloaded earlier and open it:")]),e._v(" "),t("p",[t("img",{attrs:{src:a(281),alt:""}})]),e._v(" "),t("p",[e._v("Here we see both IA32(32 Bit CPUs) and X64(64 Bit CPUs) folders, choose the one that's most appropriate to your hardware and open it. Next grab the EFI folder inside and place this on the root of the USB drive along side com.apple.recovery.boot. Once done it should look like this:")]),e._v(" "),t("p",[t("img",{attrs:{src:a(282),alt:""}})]),e._v(" "),t("h3",{attrs:{id:"diskpart-method"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#diskpart-method"}},[e._v("#")]),e._v(" diskpart method")]),e._v(" "),t("details",{staticClass:"custom-block details"},[t("summary",[e._v("diskpart method")]),e._v(" "),t("p",[e._v("Press Windows + R and enter "),t("code",[e._v("diskpart")]),e._v(".")]),e._v(" "),t("p",[e._v("Now run the following:")]),e._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# List available disks")]),e._v("\nlist disk\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Select your disk(ie. disk 1)")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("select")]),e._v(" disk "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Format the drive")]),e._v("\nclean\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Convert to GPT")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Due to an odd bug with BOOTICE and DuetPkg, MBR disks will fail to boot")]),e._v("\nconvert gpt\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Create a new partition")]),e._v("\ncreate partition primary\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Select your partition")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v('# Running clean ensures we only have 1 partition so it will be "partition 1"')]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("select")]),e._v(" partition "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Format the drive as FAT32")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("format")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("fs")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("fat32 quick\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Assign a drive letter(ie. Drive E, ensure it's not currently in use)")]),e._v("\nASSIGN "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("LETTER")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("E\n")])])]),t("p",[e._v("Next, go to the root of this USB drive and create a folder called "),t("code",[e._v("com.apple.recovery.boot")]),e._v(". Then move the downloaded BaseSystem or RecoveryImage files. Please ensure you copy over both the .dmg and .chunklist files to this folder:")]),e._v(" "),t("p",[t("img",{attrs:{src:a(280),alt:""}})]),e._v(" "),t("p",[e._v("Now grab OpenCorePkg you downloaded earlier and open it:")]),e._v(" "),t("p",[t("img",{attrs:{src:a(281),alt:""}})]),e._v(" "),t("p",[e._v("Here we see both IA32(32 Bit CPUs) and X64(64 Bit CPUs) folders, choose the one that's most appropriate to your hardware and open it. Next grab the EFI folder inside and place this on the root of the USB drive along side com.apple.recovery.boot. Once done it should look like this:")]),e._v(" "),t("p",[t("img",{attrs:{src:a(282),alt:""}})]),e._v(" "),t("details",{staticClass:"custom-block details"},[t("summary",[e._v("Legacy Install Setup")]),e._v(" "),t("p",[e._v("If your firmware does not support UEFI, see below instructions:")]),e._v(" "),t("p",[e._v("To start, you'll need the following:")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://www.7-zip.org",target:"_blank",rel:"noopener noreferrer"}},[e._v("7-Zip"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://www.majorgeeks.com/files/details/bootice_64_bit.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("BOOTICE"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/acidanthera/OpenCorePkg/releases",target:"_blank",rel:"noopener noreferrer"}},[e._v("OpenCorePkg"),t("OutboundLink")],1)])]),e._v(" "),t("p",[e._v("Next, open up BOOTICE and ensure you've selected the right drive.")]),e._v(" "),t("p",[t("img",{attrs:{src:a(475),alt:""}})]),e._v(" "),t("p",[e._v('Next, enter "Process MBR" then select "Restore MBR" and select the '),t("strong",[e._v("boot0")]),e._v(" file from "),t("code",[e._v("Utilities/LegacyBoot/")]),e._v(" in OpenCorePkg:")]),e._v(" "),t("table",[t("thead",[t("tr",[t("th",{staticStyle:{"text-align":"left"}},[e._v("Restore MBR")]),e._v(" "),t("th",{staticStyle:{"text-align":"left"}},[e._v("Restore boot0 file")])])]),e._v(" "),t("tbody",[t("tr",[t("td",{staticStyle:{"text-align":"left"}},[t("img",{attrs:{src:a(476),alt:""}})]),e._v(" "),t("td",{staticStyle:{"text-align":"left"}},[t("img",{attrs:{src:a(477),alt:""}})])])])]),e._v(" "),t("p",[e._v('Then head back to the main screen and select "Process PBR" then "Restore PBR". From here, choose the '),t("strong",[e._v("boot1f32")]),e._v(" file from "),t("code",[e._v("Utilities/LegacyBoot/")]),e._v(" in OpenCorePkg:")]),e._v(" "),t("table",[t("thead",[t("tr",[t("th",{staticStyle:{"text-align":"left"}},[e._v("Restore PBR")]),e._v(" "),t("th",{staticStyle:{"text-align":"left"}},[e._v("Restore boot1f32 file")])])]),e._v(" "),t("tbody",[t("tr",[t("td",{staticStyle:{"text-align":"left"}},[t("img",{attrs:{src:a(478),alt:""}})]),e._v(" "),t("td",{staticStyle:{"text-align":"left"}},[t("img",{attrs:{src:a(479),alt:""}})])])])]),e._v(" "),t("p",[e._v("Once this is done, head back to your USB and do 1 final thing. Grab either the "),t("strong",[e._v("bootx64")]),e._v("(64 Bit CPUs) or "),t("strong",[e._v("bootia32")]),e._v("(32 Bit CPUs) file from "),t("code",[e._v("Utilities/LegacyBoot/")]),e._v(" and place it on the root of your drive. "),t("strong",[e._v("Rename this file to boot")]),e._v(" to ensure DuetPkg can properly:")]),e._v(" "),t("p",[t("img",{attrs:{src:a(480),alt:""}})])])]),e._v(" "),t("h2",{attrs:{id:"now-with-all-this-done-head-to-setting-up-the-efi-to-finish-up-your-work"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#now-with-all-this-done-head-to-setting-up-the-efi-to-finish-up-your-work"}},[e._v("#")]),e._v(" Now with all this done, head to "),t("RouterLink",{attrs:{to:"/installer-guide/opencore-efi.html"}},[e._v("Setting up the EFI")]),e._v(" to finish up your work")],1)])}),[],!1,null,null,null);t.default=s.exports}}]);