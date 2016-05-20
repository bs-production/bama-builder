# How To Use The Bama Builder 

Example Site: http://devtest5.basementsite.com/

## Install NodeJS
https://nodejs.org/en/


## Install NPM
```
sudo npm install npm -g
```

## Download The Zip 

### Edit
- Footer.html - hardcode your links (Remember to always use /pagename.html)
- hero-cred.html - add links to your credibility 
- nav.html - Update the nav with your sites services and links
- why-choose.html - checkmarks with images 
- services-box.html - this is a list of all the icons and blups. 
- main-message.html - This iss where you would build out your main message. Currently, just an empty div with a background image as a placeholder

### Update Gulpfile.js 
- favicon, umbrealla, logo, bbb - just update images to the new path use the CMS file manager to get image URLS(http://images.domain.com)


### Content 
Update the text with what is in WORD doc you get from borders 
- toptext - Section above the services icons
- chooseus - Why Homowners Choose Us Text 
- ussupporting - Text blow check boxes
- satisy -  Text below the video

### Open up Terminal 
- Navigate to the folder - type cd  and then follow these instructions http://osxdaily.com/2011/03/02/drag-drop-finder-items-into-the-terminal-for-their-full-path/  - just drag your folder into the terminal 
- next type sudo npm install - This is going to install all the goodies we need. 
- next type "gulp mega-build" 

## New index 
- Inside the build folder there will be a brand new file you can copy into your borders file. 
- Copy the index.html into the borders in the CMS 
- Grab the template.css and style.css from devtest30 in the CMS
