
        let text = document.getElementById("txt");
        let btn1 = document.getElementById("Btn");

        text.addEventListener('keydown', onkey);
        btn1.addEventListener('click', clickon);
        function onkey(event) {
            console.log(event); 
        }

        function clickon() 
        {
            alert("This is to click on");
        }

        //  this will work while refreshing.
        window.addEventListener('load',loadin)
        function loadin()
        {
            alert("THis is too load.")
        }

        //  fired when the entire web page has been loaded.  after refreshed