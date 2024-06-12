const ap = new APlayer({
  container: document.getElementById('global-player'),
	fixed: false,
	mini: false,
	theme: '#FADFA3',
	loop: 'all',
	order: 'random',
	preload: 'auto',
	volume: 0.7,
	mutex: true,
	listFolded: true,
	listMaxHeight: 90,
	lrcType: 3,
	autoplay: false,
	audio: [
		{
			'name': 'Last Dance',
			'artist': '伍佰 & China Blue',
			'url': 'https://jiangdeatlas.github.io/Jiang/Last Dance-伍佰 And China Blue.mp3',
			'cover': 'https://jiangdeatlas.github.io/Jiang/image/Last Dance.jpg',
			'lrc': ''
		},
		{
			'name': 'Hymn for the Weekend',
			'artist': 'Coldplay&Beyoncé',
			'url': 'https://jiangdeatlas.github.io/Jiang/Hymn for the Weekend - Coldplay&Beyoncé.mp3',
			'cover': 'https://jiangdeatlas.github.io/Jiang/image/Hymn For The Weekend.jpg',
			'lrc': 'https://jiangdeatlas.github.io/Jiang/lrc/Hymn For The Weekend - Coldplay,Beyoncé.lrc'
		},
		{
			'name': '这世界那么多人',
			'artist': '莫文蔚',
			'url': 'https://jiangdeatlas.github.io/Jiang/这世界那么多人 - 莫文蔚.mp3',
			'cover': 'https://jiangdeatlas.github.io/Jiang/image/这世界那么多人.jpg',
			'lrc': 'https://jiangdeatlas.github.io/Jiang/lrc/这世界那么多人 - 莫文蔚.lrc'
		},
		{
			'name': '心太软',
			'artist': '任贤齐',
			'url': 'https://jiangdeatlas.github.io/Jiang/心太软 - 任贤齐.mp3',
			'cover': 'https://jiangdeatlas.github.io/Jiang/image/心太软.jpg',
			'lrc': 'https://jiangdeatlas.github.io/Jiang/lrc/心太软 - 任贤齐.lrc'
		},
		{
			'name': '沙漠骆驼',
			'artist': '展展与罗罗',
			'url': 'https://jiangdeatlas.github.io/Jiang/沙漠骆驼 - 展展与罗罗.mp3',
			'cover': 'https://jiangdeatlas.github.io/Jiang/image/沙漠骆驼.jpg',
			'lrc': 'https://jiangdeatlas.github.io/Jiang/lrc/沙漠骆驼 - 展展与罗罗.lrc'
		},
		{
			'name': '如愿',
			'artist': '王菲',
			'url': 'https://jiangdeatlas.github.io/Jiang/如愿 - 王菲.mp3',
			'cover': 'https://jiangdeatlas.github.io/Jiang/image/如愿.jpg',
			'lrc': 'https://jiangdeatlas.github.io/Jiang/lrc/如愿 - 王菲.lrc'
		},				
		{
			'name': '如果爱下去',
			'artist': '张靓颖',
			'url': 'https://jiangdeatlas.github.io/Jiang/如果爱下去 - 张靓颖.mp3',
			'cover': 'https://jiangdeatlas.github.io/Jiang/image/如果爱下去.jpg',
			'lrc': 'https://jiangdeatlas.github.io/Jiang/lrc/如果爱下去 - 张靓颖.lrc'
		},
		{
			'name': '开始懂了',
			'artist': '孙燕姿',
			'url': 'https://jiangdeatlas.github.io/Jiang/开始懂了 - 孙燕姿.mp3',
			'cover': 'https://jiangdeatlas.github.io/Jiang/image/开始懂了.jpg',
			'lrc': 'https://jiangdeatlas.github.io/Jiang/lrc/开始懂了 - 孙燕姿.lrc'
		},
		{
			'name': '编号89757',
			'artist': '林俊杰',
			'url': 'https://jiangdeatlas.github.io/Jiang/编号89757 - 林俊杰.mp3',
			'cover': 'https://jiangdeatlas.github.io/Jiang/image/编号89757.jpg',
			'lrc': 'https://jiangdeatlas.github.io/Jiang/lrc/编号89757 - 林俊杰.lrc'
		},
		{
			'name': '爱得太迟',
			'artist': '古巨基',
			'url': 'https://jiangdeatlas.github.io/Jiang/爱得太迟 - 古巨基.mp3',
			'cover': 'https://jiangdeatlas.github.io/Jiang/image/爱得太迟.jpg',
			'lrc': 'https://jiangdeatlas.github.io/Jiang/lrc/爱得太迟 - 古巨基.lrc'
		},
		{
			'name': 'X',
			'artist': '林俊杰',
			'url': 'https://jiangdeatlas.github.io/Jiang/X - 林俊杰.mp3',
			'cover': 'https://jiangdeatlas.github.io/Jiang/image/X.jpg',
			'lrc': 'https://jiangdeatlas.github.io/Jiang/lrc/X - 林俊杰.lrc'
		},
		{
			'name': 'Who Says',
			'artist': 'Selena Gomez&The Scene',
			'url': 'https://jiangdeatlas.github.io/Jiang/Who Says - Selena Gomez&The Scene.mp3',
			'cover': 'https://jiangdeatlas.github.io/Jiang/image/Who Says.jpg',
			'lrc': 'https://jiangdeatlas.github.io/Jiang/lrc/Who Says - Selena Gomez&The Scene.lrc'
		},	
		{
			'name': 'A Sky Full Of Stars',
			'artist': 'Coldplay',
			'url': 'https://jiangdeatlas.github.io/Jiang/A Sky Full Of Stars - Coldplay.mp3',
			'cover': 'https://jiangdeatlas.github.io/Jiang/image/A Sky Full Of Stars.jpg',
			'lrc': 'https://jiangdeatlas.github.io/Jiang/lrc/A Sky Full Of Stars - Coldplay.lrc'
		},	
		{
			'name': '内线',
			'artist': '许嵩',
			'url': 'https://jiangdeatlas.github.io/Jiang/内线 - 许嵩.mp3',
			'cover': 'https://jiangdeatlas.github.io/Jiang/image/许嵩.jpg',
			'lrc': 'https://jiangdeatlas.github.io/Jiang/lrc/内线 - 许嵩.lrc'
		},	
		{
			'name': '杀死那个石家庄人',
			'artist': '万能青年旅店',
			'url': 'https://jiangdeatlas.github.io/Jiang/杀死那个石家庄人 - 万能青年旅店.mp3',
			'cover': 'https://jiangdeatlas.github.io/Jiang/image/杀死那个石家庄人.jpg',
			'lrc': 'https://jiangdeatlas.github.io/Jiang/lrc/杀死那个石家庄人 - 万能青年旅店.lrc'
		},	
		{
			'name': '一直很安静',
			'artist': '阿桑',
			'url': 'https://jiangdeatlas.github.io/Jiang/一直很安静-《仙剑奇侠传》插曲 - 阿桑.mp3',
			'cover': 'https://jiangdeatlas.github.io/Jiang/image/一直很安静.jpg',
			'lrc': 'https://jiangdeatlas.github.io/Jiang/lrc/一直很安静-《仙剑奇侠传》插曲 - 阿桑.lrc'
		},		
		{
			'name': '惊鸿一面',
			'artist': '许嵩&黄龄',
			'url': 'https://jiangdeatlas.github.io/Jiang/惊鸿一面 - 许嵩&黄龄.mp3',
			'cover': 'https://jiangdeatlas.github.io/Jiang/image/惊鸿一面.jpg',
			'lrc': 'https://jiangdeatlas.github.io/Jiang/lrc/惊鸿一面 - 许嵩&黄龄.lrc'
		},		
		{
			'name': '偿还',
			'artist': '邓丽君',
			'url': 'https://jiangdeatlas.github.io/Jiang/偿还 (国语) - 邓丽君.mp3',
			'cover': 'https://jiangdeatlas.github.io/Jiang/image/偿还.jpg',
			'lrc': 'https://jiangdeatlas.github.io/Jiang/lrc/偿还 (国语) - 邓丽君.lrc'
		},
		{
			'name': '千百度',
			'artist': '许嵩',
			'url': 'https://jiangdeatlas.github.io/Jiang/千百度 - 许嵩.mp3',
			'cover': 'https://jiangdeatlas.github.io/Jiang/image/千百度.jpg',
			'lrc': 'https://jiangdeatlas.github.io/Jiang/lrc/千百度 - 许嵩.lrc'
		},
		{
			'name': '善变(Live)',
			'artist': '孙楠',
			'url': 'https://jiangdeatlas.github.io/Jiang/善变(Live) - 孙楠.mp3',
			'cover': 'https://jiangdeatlas.github.io/Jiang/image/善变(Live).jpg',
			'lrc': 'https://jiangdeatlas.github.io/Jiang/lrc/善变(Live) - 孙楠.lrc'
		},
		{
			'name': 'Melody',
			'artist': '陶喆',
			'url': 'https://jiangdeatlas.github.io/Jiang/Melody - 陶喆.mp3',
			'cover': 'https://jiangdeatlas.github.io/Jiang/image/Melody.jpg',
			'lrc': 'https://jiangdeatlas.github.io/Jiang/lrc/Melody - 陶喆.lrc'
		},
		{
			'name': '庐州月',
			'artist': '许嵩',
			'url': 'https://jiangdeatlas.github.io/Jiang/庐州月 - 许嵩.mp3',
			'cover': 'https://jiangdeatlas.github.io/Jiang/image/庐州月.jpg',
			'lrc': 'https://jiangdeatlas.github.io/Jiang/lrc/庐州月 - 许嵩.lrc'
		},
		{
			'name': 'Letting Go',
			'artist': '蔡健雅',
			'url': 'https://jiangdeatlas.github.io/Jiang/Letting Go - 蔡健雅.mp3',
			'cover': 'https://jiangdeatlas.github.io/Jiang/image/Letting Go.jpg',
			'lrc': 'https://jiangdeatlas.github.io/Jiang/lrc/Letting Go - 蔡健雅.lrc'
		},
		{
			'name': '温柔',
			'artist': '五月天&孙燕姿',
			'url': 'https://jiangdeatlas.github.io/Jiang/温柔.mp3',
			'cover': 'https://jiangdeatlas.github.io/Jiang/image/温柔.jpg',
			'lrc': 'https://jiangdeatlas.github.io/Jiang/lrc/温柔.lrc'
		},
		{
			'name': '你必须在一个荒唐的夜，骑着摩托穿过下雨的街',
			'artist': '风子',
			'url': 'https://jiangdeatlas.github.io/Jiang/你必须在一个荒唐的夜，骑着摩托穿过下雨的街 - 风子.mp3',
			'cover': 'https://jiangdeatlas.github.io/Jiang/image/你必须在一个荒唐的夜，骑着摩托穿过下雨的街.jpg',
			'lrc': 'https://jiangdeatlas.github.io/Jiang/lrc/你必须在一个荒唐的夜，骑着摩托穿过下雨的街 - 风子.lrc'
		},
		{
			'name': 'Forever Young',
			'artist': '艾怡良',
			'url': 'https://jiangdeatlas.github.io/Jiang/Forever Young - 艾怡良.mp3',
			'cover': 'https://jiangdeatlas.github.io/Jiang/image/Forever Young.jpg',
			'lrc': 'https://jiangdeatlas.github.io/Jiang/lrc/Forever Young - 艾怡良.lrc'
		},
		{
			'name': '嘉宾 (Live)',
			'artist': '孙楠',
			'url': 'https://jiangdeatlas.github.io/Jiang/嘉宾 (Live) - 孙楠.mp3',
			'cover': 'https://jiangdeatlas.github.io/Jiang/image/嘉宾 (Live).jpg',
			'lrc': 'https://jiangdeatlas.github.io/Jiang/lrc/嘉宾 (Live) - 孙楠.lrc'
		},
		{
			'name': '清明雨上',
			'artist': '许嵩',
			'url': 'https://jiangdeatlas.github.io/Jiang/清明雨上 - 许嵩.mp3',
			'cover': 'https://jiangdeatlas.github.io/Jiang/image/清明雨上.jpg',
			'lrc': 'https://jiangdeatlas.github.io/Jiang/lrc/清明雨上 - 许嵩.lrc'
		},
		{
			'name': '爱，很简单',
			'artist': '陶喆',
			'url': 'https://jiangdeatlas.github.io/Jiang/爱，很简单 - 陶喆.mp3',
			'cover': 'https://jiangdeatlas.github.io/Jiang/image/爱，很简单.jpg',
			'lrc': 'https://jiangdeatlas.github.io/Jiang/lrc/爱，很简单 - 陶喆.lrc'
		},
		{
			'name': '安和桥',
			'artist': '宇西',
			'url': 'https://jiangdeatlas.github.io/Jiang/安和桥 - 宇西.mp3',
			'cover': 'https://jiangdeatlas.github.io/Jiang/image/安和桥.jpg',
			'lrc': 'https://jiangdeatlas.github.io/Jiang/lrc/安和桥 - 宇西.lrc'
		},
		{
			'name': '有桃花',
			'artist': '许嵩',
			'url': 'https://jiangdeatlas.github.io/Jiang/有桃花 - 许嵩.mp3',
			'cover': 'https://jiangdeatlas.github.io/Jiang/image/有桃花.jpg',
			'lrc': 'https://jiangdeatlas.github.io/Jiang/lrc/有桃花 - 许嵩.lrc'
		},
		{
			'name': 'Havana',
			'artist': 'Camila Cabello,Young Thug',
			'url': 'https://jiangdeatlas.github.io/Jiang/Havana - Camila Cabello,Young Thug.mp3',
			'cover': 'https://jiangdeatlas.github.io/Jiang/image/Havana.jpg',
			'lrc': 'https://jiangdeatlas.github.io/Jiang/lrc/Havana - Camila Cabello,Young Thug.lrc'
		},
		{
			'name': '不为谁而作的歌',
			'artist': '林俊杰',
			'url': 'https://jiangdeatlas.github.io/Jiang/不为谁而作的歌 - 林俊杰.mp3',
			'cover': 'https://jiangdeatlas.github.io/Jiang/image/不为谁而作的歌.jpg',
			'lrc': 'https://jiangdeatlas.github.io/Jiang/lrc/不为谁而作的歌 - 林俊杰.lrc'
		},
		{
			'name': 'Oh Father',
			'artist': 'Bodhi Jones',
			'url': 'https://jiangdeatlas.github.io/Jiang/Oh Father - Bodhi Jones.mp3',
			'cover': 'https://jiangdeatlas.github.io/Jiang/image/Oh Father.jpg',
			'lrc': 'https://jiangdeatlas.github.io/Jiang/lrc/Oh Father - Bodhi Jones.lrc'
		},
		{
			'name': '单人旅途',
			'artist': '许嵩',
			'url': 'https://jiangdeatlas.github.io/Jiang/单人旅途 - 许嵩.mp3',
			'cover': 'https://jiangdeatlas.github.io/Jiang/image/单人旅途.jpg',
			'lrc': 'https://jiangdeatlas.github.io/Jiang/lrc/单人旅途 - 许嵩.lrc'
		},
  ],
});
