var tar=0;
var body=document.querySelector("body");
body.addEventListener('scrollstart', function()
{
	if(body.scrollTop>0)
	{
		tar--;
	}
	else if(body.scrollDown>60)
	{
		tar++;
	}
	else
	{}
	if(tar<0)
	{
		tar=3;
	}
});