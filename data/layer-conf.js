/*
               |- layer-repo.ts
layer-conf.js -|
               |- opt.ts  <-> settings.ts
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

function sinica_url_old(id, fmt='jpeg'){
    return `http://gis.sinica.edu.tw/tileserver/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=${id}&STYLE=_null&TILEMATRIXSET=GoogleMapsCompatible&TILEMATRIX={z}&TILEROW={y}&TILECOL={x}&FORMAT=image/${fmt}`;
}

function sinica_url(id, fmt='png'){
    return `https://gis.sinica.edu.tw/tileserver/file-exists.php?img=${id}-${fmt}-{z}-{x}-{y}`;
}

function nlsc(id){
    return `https://wmts.nlsc.gov.tw/wmts/${id}/default/EPSG:3857/{z}/{y}/{x}`;
}

function jp_gsi(id, fmt)
{
    return `https://cyberjapandata.gsi.go.jp/xyz/${id}/{z}/{x}/{y}.${fmt}`;
}

function happyman(id){
    return `https://rs.happyman.idv.tw/map/${id}/{z}/{x}/{y}.png`;
}

function happyman2(id){
    return `https://tile.happyman.idv.tw/mp/wmts/${id}/gm_grid/{z}/{x}/{y}.png`;
}

function happyman3(id){
    return `https://tile.happyman.idv.tw/map/${id}/{z}/{x}/{y}.png`;
}

export default
[
    {
        id: 'GRID_WGS84',
        legend: true,
        type: 'grid',
        url: 'wgs84',
        desc: 'WGS84經緯度格線(度分秒)',
        checked: false,
        opacity: 1.0,
    },
    {
        id: 'GRID_WGS84_NUM',
        legend: true,
        type: 'grid',
        url: 'wgs84-num',
        desc: 'WGS84經緯度格線(數字)',
        checked: false,
        opacity: 1.0,
    },
    {
        id: 'GRID_TWD67',
        legend: true,
        type: 'grid',
        url: 'twd67',
        desc: 'TWD67二度分帶格線',
        checked: true,
        opacity: 1.0,
    },
    {
        id: 'GRID_TWD97',
        legend: true,
        type: 'grid',
        url: 'twd97',
        desc: 'TWD97二度分帶格線',
        checked: false,
        opacity: 1.0,
    },
    /*
    {
        id: 'COUNTRIES',
        legend: true,
        type: 'json',
        url: '/data/countries.json',
        desc: '全球國界',
        checked: false,
        opacity: 1.0,
    },
    {
        id: 'TW_COUNTIES',
        legend: true,
        type: 'json',
        url: '/data/taiwan-counties.json',
        desc: '台灣縣界',
        checked: false,
        opacity: 1.0,
    },
    */
    {
        id: 'TOWN',
        legend: true,
        type: 'xyz',
        url: nlsc('TOWN'),
        desc: '鄉鎮區界',
        checked: false,
        opacity: 1.0,
    },
    {
        id: 'Village',
        legend: true,
        type: 'xyz',
        url: nlsc('Village'),
        desc: '村里界',
        checked: false,
        opacity: 1.0,
    },
    /*
    {
        id: 'GPX_SAMPLE',
        legend: true,
        type: 'gpx',
        url: '/data/sample.gpx',
        desc: '測試GPX',
        checked: false,
        opacity: 1.0,
    },
    */
    {
        id: 'HM_GPXTRACK',
        legend: true,
        type: 'xyz',
        //url: happyman('gpxtrack'),
        //url: happyman2('happyman'),
        url: happyman3('gpxtrack'),
        desc: '地圖產生器航跡',
        checked: false,
        opacity: 1.0,
    },
    {
        id: 'Admin_1930a',
        legend: true,
        type: 'xyz',
        url: sinica_url('Admin_1930a'),
        desc: '1930-日治行政區-州廳',
        checked: false,
        opacity: 1.0,
    },
    {
        id: 'Admin_1930b',
        legend: true,
        type: 'xyz',
        url: sinica_url('Admin_1930b'),
        desc: '1930-日治行政區-郡市',
        checked: false,
        opacity: 1.0,
    },
    {
        id: 'Admin_1930c',
        legend: true,
        type: 'xyz',
        url: sinica_url('Admin_1930c'),
        desc: '1930-日治行政區-街庄',
        checked: false,
        opacity: 1.0,
    },
    {
        id: 'EMAP2',
        legend: true,
        type: 'xyz',
        url: nlsc('EMAP2'),
        desc: '通用地圖(標誌)',
        checked: true,
        opacity: 1.0,
    },
    {
        id: 'ConvenienceStore',
        legend: true,
        type: 'xyz',
        url: nlsc('ConvenienceStore'),
        desc: '便利商店',
        checked: false,
        opacity: 1.0,
    },
    /*
    {
        id: 'SCHOOL',
        legend: true,
        type: 'xyz',
        url: nlsc('SCHOOL'),
        desc: '學校',
        checked: false,
        opacity: 1.0,
    },
    {
        id: 'LUIMAP',
        legend: true,
        type: 'xyz',
        url: nlsc('LUIMAP'),
        desc: '國土利用現況',
        checked: false,
        opacity: 1.0,
    },
    */
    {
        id: 'Canal',
        legend: true,
        type: 'wms',
        url: 'https://www.iacloud.ia.gov.tw/servergate/sgsgate.ashx/WMS/canal_public',
        layers: 'canal_public',
        desc: '農田水利灌排渠道系統圖',
        checked: false,
        opacity: 1.0,
    },
    {
        id: 'ForestRoad81',
        desc: '林道分布圖81條',
        legend: true,
        type: 'kml',
        url: '/data/forest_road_81.kml',
        interactable: true,
        checked: false,
        opacity: 1.0,
    },
    //--------------------------------------------------------------------------------------
    {
        id: 'RUDY',
        legend: false,
        type: 'xyz',
        url: [
            //url: 'http://rudy-daily.tile.basecamp.tw/{z}/{x}/{y}.png',
            //'https://rudy-tile.basecamp.tw/{z}/{x}/{y}.png',
            happyman3('rudy'),
        ],
        desc: '魯地圖',
        checked: true,
        opacity: 1.0,
    },
    {
        id: 'RUDY_PRINT',
        legend: false,
        type: 'xyz',
        //url: happyman('moi_osm'),
        //url: happyman2('rudy_twmap'),
        url: happyman3('moi_osm'),
        desc: '魯地圖(印刷)',
        checked: false,
        opacity: 1.0,
    },
    {
        id: 'EMAP5',
        legend: false,
        type: 'xyz',
        url: nlsc('EMAP5'),
        desc: '通用地圖',
        checked: false,
        opacity: 1.0,
    },
    {
        id: 'NLSC_PHOTO_MIX',
        legend: false,
        type: 'xyz',
        url: nlsc('PHOTO_MIX'),
        desc: '通用地圖(空照+等高線)',
        checked: false,
        opacity: 1.0,
    },
    {
        id: 'NLSC_PHOTO2',
        legend: false,
        type: 'xyz',
        url: nlsc('PHOTO2'),
        desc: '通用地圖(空照)',
        checked: false,
        opacity: 1.0,
    },
    /*
    {
        id: 'HP_ATIS',
        legend: false,
        type: 'xyz',
        url: happyman('atis'),
        desc: '農航所(空照)',
        checked: false,
        opacity: 1.0,
    },
    //*/
    {
        id: 'B25000',
        legend: false,
        type: 'xyz',
        url: nlsc('B25000'),
        desc: '經建版地形圖25K',
        checked: false,
        opacity: 1.0,
    },
    {
        id: 'OSM',
        legend: false,
        type: 'osm',
        url: undefined,
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
        url: jp_gsi('std', 'png'),
        desc: '日本地理院',
        checked: false,
        opacity: 1.0,
    },
    {
        id: 'JP_GSI_PHOTO',
        legend: false,
        type: 'xyz',
        url: jp_gsi('seamlessphoto', 'jpg'),
        desc: '日本地理院(空照)',
        checked: false,
        opacity: 1.0,
    },
    {
        id: 'TM25K_1989',
        legend: false,
        type: 'xyz',
        url: sinica_url('TM25K_1989', 'jpg'),
        desc: '1989-經建一版',
        checked: false,
        opacity: 1.0,
    },
    {
        id: 'TM25K_1993',
        legend: false,
        type: 'xyz',
        url: sinica_url('TM25K_1993', 'jpg'),
        desc: '1993-經建二版',
        checked: false,
        opacity: 1.0,
    },
    {
        id: 'TM25K_2001',
        legend: false,
        type: 'xyz',
        url: sinica_url('TM25K_2001', 'jpg'),
        desc: '2001-經建三版',
        checked: false,
        opacity: 1.0,
    },
    {
        id: 'TM25K_2003',
        legend: false,
        type: 'xyz',
        url: sinica_url('TM25K_2003', 'jpg'),
        desc: '2003-經建四版',
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
        url: sinica_url('JM50K_1924_new'),
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
    {
        id: 'JM200K_1897_new',
        legend: false,
        type: 'xyz',
        url: sinica_url('JM200K_1897_new', 'png'),
        desc: '1987-日治臺灣假製(雙色複製版)',
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
