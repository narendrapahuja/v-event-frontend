var serverUrl = 'https://v3beta.lightinfosys.com'; // Server URL
  var apiUrl = 'https://v3beta.lightinfosys.com'
  var url_extension = '/assist';
  var api_extension = '/bot'
  var bot_id = 121 //40 //121
  var main_script = document.createElement('script');
  main_script.setAttribute("type","text/javascript");



  main_script.setAttribute("src", serverUrl + url_extension +"/js/main.js");

  if (main_script.readyState) {
      main_script.onreadystatechange = function () { // For old versions of IE
        if (this.readyState == 'complete' || this.readyState == 'loaded') {
          cb();
        }
      };
  } else {
    main_script.onload = cb;
  }
  function cb() {

  }
  (document.getElementsByTagName("head")[0]).appendChild(main_script);

  var account_id = 14
  /*edit params here*/
  var paramsObject = {
      "Region": ""
  }


function Externaljs(){
  var bot = new NLPbot();
  console.log("hello world")

  // to destroy bot call bot.destroy();
}