const electron = require('electron');
const url = require('url');
const path = require('path');
const { Menu } = require('electron');

const {app, BrowserWindow, ipcMain} = electron;

//Set ENV

process.env.NODE_ENV = "production";

let mainWindow;
let addWindow;
let Show1;

//Listen for app to be ready
app.on('ready',function(){
    //create new window
    mainWindow = new BrowserWindow({
        webPreferences: {
            nodeIntegration: true
        }
    });
    //Load html into window
    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname,'mainWindow.html'),
        protocol:'file',
        slashes: true
    }));
    // Quit app when closed
    mainWindow.on('closed', function(){
        app.quit();
    })
    // mainWindow.webContents.openDevTools();
    //Build Menu from templete
    const mainMenu = Menu.buildFromTemplate(mainMenuTemplate);
    // Insert menu
    Menu.setApplicationMenu(mainMenu);
});

// Handle create add window
function createAddWidow(){
    //create new window
    addWindow = new BrowserWindow({
        width: 600,
        height: 300,
        title:'Add Shopping List Item',
        webPreferences: {
            nodeIntegration: true
        }
    });
    //Load html into window
    addWindow.loadURL(url.format({
        pathname: path.join(__dirname,'addWindow.html'),
        protocol:'file',
        slashes: true
    }));
    //Garbage collection handle
    addWindow.on('close',function(){
        addWindow = null;
    });
}
//-------------------------------
// Handle create add window
function createShow(){
    //create new window
    Show1 = new BrowserWindow({
        width: 600,
        height: 300,
        title:'Add Shopping List Item',
        webPreferences: {
            nodeIntegration: true
        }
    });
    //Load html into window
    Show1.loadURL(url.format({
        pathname: path.join(__dirname,'show1.html'),
        protocol:'file',
        slashes: true
    }));
    //Garbage collection handle
    Show1.on('close',function(){
        Show1 = null;
    });
}
//Catch item:add
ipcMain.on('item:add',function(e, item){
mainWindow.webContents.send('item:add',item);
// addWindow.close();
});

//create Menu template
const mainMenuTemplate =[
    {
        label:'File',
        submenu:[
            {
                label: 'Add Item',
                click(){
                    createAddWidow();
                }
            },

            {
                label: 'Clear Item',
                click(){
                    mainWindow.webContents.send('item:clear');
                }
            },
            {
                label: 'Quit',
                accelerator: process.platform =='darwin' ?'Command+Q' : 'Ctrl+Q',
                click(){
                    app.quit();
                }
            },
            {
                label: 'King',
                submenu:[
                    {
                        label: 'Hello',
                    },
                    {
                        label: 'Welcome',
                    },
                    ]
                }
            ]
        },
        {
            label:'View',
            submenu:[
              {
                label:'Show1',
                click(){
                    createShow();
                }
              },
              {
                label:'Show2'
              }
            ]
        },
        {
            label:'Window'
        },
        {
            label:'Help'
        }
    ];

// if mac , add emty object to menu
if(process.platform == 'darwin'){
    mainMenuTemplate.unshift({});
}

//Add Developer tools item not in prod
if(process.env.NODE_ENV !== 'production'){
    mainMenuTemplate.push({
        label: 'Developer Tools',
        submenu:[
            {
                label: 'Toggle DevTools',
                accelerator: process.platform =='darwin' ?'Command+I' : 'Ctrl+I',
                click(item, focusedWindow){
                    focusedWindow.toggleDevTools();
                }
            },
            {
                role: 'reload'
            }
        ]
    });
}
