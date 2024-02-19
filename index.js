const toggleModeButton=document.getElementById('toggleMode');
const body=document.body;

//check user's preference from localStorage
let isDarkMode=localStorage.getItem('darkMode')==='enabled';

//apply initial mode
if (isDarkMode)
{
    enableDarkMode();
}

else{
    disableDarkMode();
}

//toggle when button is clicked

toggleModeButton.addEventListener('click',()=>{
    if(isDarkMode)
    {
        disableDarkMode();
    }
    else{
        enableDarkMode()
    }
});

function  enableDarkMode()
{
    body.classList.add('dark-mode');
    localStorage.setItem('darkMode','enabled');
    isDarkMode=true;
}

function  disableDarkMode()
{
    body.classList.remove('dark-mode');
    localStorage.setItem('darkMode','null');
    isDarkMode=false;
}