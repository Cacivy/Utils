var music=document.getElementsByClassName('music')[0]
var netmusic=document.getElementById('netmusic')
music.addEventListener('click',function(){
	if(netmusic.style.display=='none'){
		netmusic.style.display='block'
	}else{
		netmusic.style.display='none'
	}
})

document.getElementsByTagName('iframe')[0].setAttribute('src','http://music.163.com/outchain/player?type=0&id=51317149&auto=1&height=430')

