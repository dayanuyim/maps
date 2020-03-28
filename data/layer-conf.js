/*
               |- layer-grp.ts
layer-conf.js -|
               |- cookie.ts  <-> settings.ts
*/

/* 
SINICA WMTS
    https://gis.sinica.edu.tw/tileserver/
url template
    http://gis.sinica.edu.tw/tileserver/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER={Layer_ID}&STYLE=_null&TILEMATRIXSET=GoogleMapsCompatible&TILEMATRIX={z}&TILEROW={y}&TILECOL={x}&FORMAT=image/jpeg

1956-臺灣土地利用及林型圖 : 1956_Landuse
1944-美軍地形圖-1:50,000 : AM50K_1944
1945-美軍繪製臺灣城市地圖 : AMCityPlan_1945
1901-日治行政區-廳(1900年代) : Admin_1901a
1901-日治行政區-堡里(1900年代) : Admin_1901b
1901-日治行政區-街庄(1900年代) : Admin_1901c
1930-日治行政區-州廳(1930年代) : Admin_1930a
1930-日治行政區-郡市(1930年代) : Admin_1930b
1930-日治行政區-街庄(1930年代) : Admin_1930c
1905-日治臺灣圖-1:100,000 : JM100K_1905
1931-臺灣公共埤圳組合及水利組合灌溉排水區域圖 : JM1M_1931
1897-日治臺灣假製二十萬分一圖-1:200,000 : JM200K_1897
1897-日治臺灣假製二十萬分一圖(雙色複製版)-1:200,000 : JM200K_1897_new
1932-二十萬分一帝國圖(臺灣部分) : JM200K_1932
1904-日治臺灣堡圖(明治版)-1:20,000 : JM20K_1904
1921-日治臺灣堡圖(大正版)-1:20,000 : JM20K_1921
1921-日治地形圖-1:25,000 : JM25K_1921
1942-日治二萬五千分之一地形圖(昭和修正版) : JM25K_1942
1944-日治地形圖(航照修正版)-1:25,000 : JM25K_1944
1924-日治臺灣全圖(第二版)-1:300,000 : JM300K_1924
1934-日治臺灣全圖(第三版)-1:300,000 : JM300K_1934
1939-日治臺灣全圖(第五版)-1:300,000 : JM300K_1939
1899-日治臺灣全圖-1:400,000 : JM400K_1899
1936-五十萬分一輿地圖(臺灣部分)-1:500,000 : JM500K_1936
1916-日治蕃地地形圖-1:50,000 : JM50K_1916
1920-日治地形圖(總督府土木局)-1:50,000 : JM50K_1920
1924-日治地形圖(陸地測量部)-1:50,000 : JM50K_1924
1924-日治地形圖(陸地測量部)-1:50,000 : JM50K_1924_new
1914-日治官有林野圖(花蓮港廳) : Map_LSB1_Hualien
1914-日治官有林野圖(臺東廳) : Map_LSB1_Taitung
1987-臺灣地形圖-1:100,000 : TM100K_1987
1988-臺灣地區地形圖-1:250,000 : TM250K_1988
1989-臺灣經建1版地形圖-1:25,000 : TM25K_1989
1993-臺灣經建2版地形圖-1:25,000 : TM25K_1993
2001-臺灣經建3版地形圖-1:25,000 : TM25K_2001
2003-臺灣經建4版地形圖-1:25,000 : TM25K_2003
1956-臺灣地形圖-1:50,000 : TM50K_1956
1966-臺灣省水利工程、水文站及基準點位置圖 : TM50K_1966
1990-臺灣經建1版地形圖-1:50,000 : TM50K_1990
1996-臺灣經建2版地形圖-1:50,000 : TM50K_1996
2003-臺灣經建3版地形圖-1:50,000 : TM50K_2003
美軍航照影像(1945/6/17攝) : Taipei_aerialphoto_1945
*/

function sinica_url(id, fmt='jpeg'){
    return `http://gis.sinica.edu.tw/tileserver/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=${id}&STYLE=_null&TILEMATRIXSET=GoogleMapsCompatible&TILEMATRIX={z}&TILEROW={y}&TILECOL={x}&FORMAT=image/${fmt}`;
}

function sinica_url2(id, fmt='png'){
    return `http://gis.sinica.edu.tw/tileserver/file-exists.php?img=${id}-${fmt}-{z}-{x}-{y}`;
}

export default
[
    /*
    {
        id: 'COUNTRIES',
        legend: true,
        type: 'json',
        url: 'https://raw.githubusercontent.com/dayanuyim/trekkr/master/app/data/countries.json',
        desc: '全球國界',
        checked: false,
        opacity: 1.0,
    },
    */
    {
        id: 'TW_COUNTIES',
        legend: true,
        type: 'json',
        url: 'https://raw.githubusercontent.com/dayanuyim/trekkr/master/app/data/taiwan-counties.json',
        desc: '台灣縣界',
        checked: false,
        opacity: 1.0,
    },
    /*
    {
        id: 'GPX_SAMPLE',
        legend: true,
        type: 'gpx',
        url: 'https://raw.githubusercontent.com/dayanuyim/trekkr/master/app/data/sample.gpx',
        desc: '測試GPX',
        checked: false,
        opacity: 1.0,
    },
    */
    /* TODO: enable this
    {
        id: 'HAPPYMAN_GPX',
        legend: true,
        type: 'xyz',
        url: 'http://rs.happyman.idv.tw/map/gpxtrack/{z}/{x}/{y}.png',
        desc: '地圖產生器航跡',
        checked: false,
        opacity: 1.0,
    },
    */
    {
        id: 'Admin_1930a',
        legend: true,
        type: 'xyz',
        url: sinica_url2('Admin_1930a'),
        desc: '1930-日治行政區-州廳',
        checked: false,
        opacity: 1.0,
    },
    {
        id: 'Admin_1930b',
        legend: true,
        type: 'xyz',
        url: sinica_url2('Admin_1930b'),
        desc: '1930-日治行政區-郡市',
        checked: false,
        opacity: 1.0,
    },
    {
        id: 'Admin_1930c',
        legend: true,
        type: 'xyz',
        url: sinica_url2('Admin_1930c'),
        desc: '1930-日治行政區-街庄',
        checked: false,
        opacity: 1.0,
    },
    {
        id: 'NLSC_LG',
        legend: true,
        type: 'xyz',
        url: 'http://wmts.nlsc.gov.tw/wmts/EMAP2/default/EPSG:3857/{z}/{y}/{x}',
        desc: '通用地圖(標誌)',
        checked: true,
        opacity: 1.0,
    },
    {
        id: 'RUDY',
        legend: false,
        type: 'xyz',
        url: 'http://rudy.tile.basecamp.tw/{z}/{x}/{y}.png',
        //url: 'http://rudy-daily.tile.basecamp.tw/{z}/{x}/{y}.png',
        //url: 'https://rs.happyman.idv.tw/map/rudy/{z}/{x}/{y}.png',
        desc: '魯地圖',
        checked: true,
        opacity: 1.0,
    },
    {
        id: 'NLSC',
        legend: false,
        type: 'xyz',
        url: 'http://wmts.nlsc.gov.tw/wmts/EMAP5/default/EPSG:3857/{z}/{y}/{x}',
        desc: '通用地圖',
        checked: false,
        opacity: 1.0,
    },
    {
        id: 'NLSC_PHOTO',
        legend: false,
        type: 'xyz',
        url: 'http://wmts.nlsc.gov.tw/wmts/PHOTO2/default/EPSG:3857/{z}/{y}/{x}',
        desc: '通用地圖(空照)',
        checked: false,
        opacity: 1.0,
    },
    /* TODO: enable this
    {
        id: 'ARASI_PHOTO',
        legend: false,
        type: 'xyz',
        url: 'http://rs.happyman.idv.tw/map/atis/{z}/{x}/{y}.png',
        desc: '農航所(空照)',
        checked: false,
        opacity: 1.0,
    },
    */
    {
        id: 'OSM',
        legend: false,
        type: 'osm',
        url: '',
        desc: 'OSM開放街圖',
        checked: false,
        opacity: 1.0,
    },
    /*
    {
        id: 'OSM_',
        legend: false,
        type: 'xyz',
        url: 'https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png',
        desc: 'OSM開放街圖',
        checked: false,
        opacity: 1.0,
    },
    */
    {
        id: 'TAIPEI_URBAN',
        legend: false,
        type: 'xyz',
        url: 'http://www.historygis.udd.gov.taipei/arcgis/rest/services/Urban/EMap/MapServer/WMTS/tile/1.0.0/Urban_EMap/default/GoogleMapsCompatible/{z}/{y}/{x}',
        desc: '臺北市電子地圖',
        checked: false,
        opacity: 1.0,
    },
    {
        id: 'JP_GSI',
        legend: false,
        type: 'xyz',
        url: 'https://cyberjapandata.gsi.go.jp/xyz/std/{z}/{x}/{y}.png',
        desc: '日本地理院',
        checked: false,
        opacity: 1.0,
    },
    {
        id: 'JP_GSI_PHOTO',
        legend: false,
        type: 'xyz',
        url: 'https://cyberjapandata.gsi.go.jp/xyz/seamlessphoto/{z}/{x}/{y}.jpg',
        desc: '日本地理院(空照)',
        checked: false,
        opacity: 1.0,
    },
    {
        id: 'TM25K_2001',
        legend: false,
        type: 'xyz',
        url: sinica_url2('TM25K_2001', 'jpg'),
        desc: '2001-經建三版',
        checked: false,
        opacity: 1.0,
    },
    {
        id: 'JM20K_1904',
        legend: false,
        type: 'xyz',
        url: sinica_url('JM20K_1904', 'jpeg'),
        desc: '1904-臺灣堡圖(明治版)',
        checked: false,
        opacity: 1.0,
    },
    {
        id: 'JM100K_1905',
        legend: false,
        type: 'xyz',
        url: sinica_url('JM100K_1905', 'png'),
        desc: '1905-日治臺灣圖',
        checked: false,
        opacity: 1.0,
    },
    {
        id: 'JM50K_1916',
        legend: false,
        type: 'xyz',
        url: sinica_url('JM50K_1916', 'jpeg'),
        desc: '1916-日治蕃地地形圖',
        checked: false,
        opacity: 1.0,
    },
    {
        id: 'JM50K_1920',
        legend: false,
        type: 'xyz',
        url: sinica_url('JM50K_1920', 'png'),
        desc: '1920-日治地形圖(總督府土木局)',
        checked: false,
        opacity: 1.0,
    },
    {
        id: 'JM20K_1921',
        legend: false,
        type: 'xyz',
        url: sinica_url('JM20K_1921', 'jpeg'),
        desc: '1921-臺灣堡圖(大正版)',
        checked: false,
        opacity: 1.0,
    },
    {
        id: 'JM25K_1921',
        legend: false,
        type: 'xyz',
        url: sinica_url('JM25K_1921', 'jpeg'),
        desc: '1921-日治地形圖',
        checked: false,
        opacity: 1.0,
    },
    {
        id: 'JM50K_1924_new',
        legend: false,
        type: 'xyz',
        url: sinica_url2('JM50K_1924_new'),
        desc: '1924-日治地形圖(陸地測量部)',
        checked: false,
        opacity: 1.0,
    },
    {
        id: 'AM50K_1944',
        legend: false,
        type: 'xyz',
        url: sinica_url('AM50K_1944', 'png'),
        desc: '1944-美軍地形圖',
        checked: false,
        opacity: 1.0,
    },
    {
        id: 'AMCityPlan_1945',
        legend: false,
        type: 'xyz',
        url: sinica_url('AMCityPlan_1945', 'png'),
        desc: '1945-美軍繪製臺灣城市圖',
        checked: false,
        opacity: 1.0,
    },
    {
        id: 'TM50K_1956',
        legend: false,
        type: 'xyz',
        url: sinica_url('TM50K_1956', 'jpeg'),
        desc: '1956-臺灣地形圖',
        checked: false,
        opacity: 1.0,
    },
    {
        id: 'TM100K_1987',
        legend: false,
        type: 'xyz',
        url: sinica_url('TM100K_1987', 'png'),
        desc: '1987-臺灣地形圖',
        checked: false,
        opacity: 1.0,
    },
    /* template for copy
    {
        id: '',
        legend: false,
        type: 'xyz',
        url: '',
        desc: '',
        checked: false,
        opacity: 1.0,
    },
    */
];