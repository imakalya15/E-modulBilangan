function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5qUhIp4CZHh":
        Script1();
        break;
  }
}

function Script1()
{
  var audio = document.getElementById('bgSong');
audio.src="backsound.mp3";
audio.load();
audio.play();
}

