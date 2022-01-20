$(function(){

	function isContainsStr(str, substr) {
		return str.indexOf(substr) >=0;
	}

	function getCurrentWebsiteDomain(){
		var protocol = window.location.protocol;
		var host = window.location.host;
		return protocol+"//"+host;
	}
	
	function prepareHtml(obj){
		var html="";
		html+='<a href="'+obj.url+'"  target="_blank" style="margin-right:15px;font-size:17px;">'+obj.title+'</a>';
		return html;
	}
	
	
	
	function getRecommend(link){
		$.ajax({
			 type:"POST",
			 url:link, 		 
	         timeout:3000,
			 success:function(data){
				var list = data.list;
				if(!!list){
					var html='';
					for(var i=0;i<list.length;i++){
						html+=prepareHtml(list[i]);
					}
					$("#recommendContent").append(html);
				}
			 },
			 error:function(data){
			 	console.log("time out..");
			 }   
		});
	}
	
	function baiduAd(){
		var src="https://cdn.jsdelivr.net/gh/pizcat/static@master/baidu_ad_20211206.png";
		var href="https://pan.baidu.com/wap/vip/user?active_svip=1y_auto&activetab=svip&from=shequn&activity_id=132686988468&ext=%7B%22bcode%22%3A%2283393974a85f1371883d3471a65c1e778b393975a85f147580393275a45c1076873b3177a0551573%22%7D";
		var html='<a href="'+href+'" rel="noopener noreferrer nofollow" target="_blank">'+
			'<img src="'+src+'" style="width:100%;">'+
		'</a>';
		var domain= getCurrentWebsiteDomain();
		if(!isContainsStr(domain,"bookmark")&&!isContainsStr(domain,"chulian") || true){
			$("#topBaiDuHandler").append(html);
		}
	}
	
	function kuakeAd(pagesize){
		var link="https://www.laisoyixia.com/api/cross/recommend/data?pagesize="+pagesize;

	}
	
	function recommendContent(pagesize){
		var link="https://www.laisoyixia.com/api/cross/recommend/data?pagesize="+pagesize;
		getRecommend(link);
	}
	
	//百度
	baiduAd();
	
	//夸克
	kuakeAd(40);
	
	//recommend
	recommendContent(10);
});