var music=document.getElementsByClassName('music')[0]
var netmusic=document.getElementById('netmusic')
music.addEventListener('click',function(){
	if(netmusic.style.display=='none'){
		netmusic.style.display='block'
	}else{
		netmusic.style.display='none'
	}
})


