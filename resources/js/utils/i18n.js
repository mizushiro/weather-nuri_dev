/**
 * Multi-language (i18n) Manager for Weather Nuri
 * Supports Korean ('kr'), English ('en'), and extensible registration for future languages (e.g., 'ja', 'zh').
 */

const STORAGE_KEY = 'weather_nuri_lang';
const DEFAULT_LANG = 'kr';

/**
 * Language metadata registry
 */
const LANGUAGE_META = {
  kr: {
    code: 'kr',
    htmlLang: 'ko',
    label: 'KR',
    name: '한국어',
  },
  en: {
    code: 'en',
    htmlLang: 'en',
    label: 'EN',
    name: 'English',
  },
};

/**
 * Semantic key-based & exact Korean text-based dictionaries.
 * Future languages can be added via `i18n.registerLanguage(langCode, dict, meta)`.
 */
const DICTIONARIES = {
  kr: {
    keys: {
      'common.kr': 'KR',
      'common.en': 'EN',
      'common.close': '창닫기',
      'common.close_short': '닫기',
      'common.reset': '초기화',
      'common.apply': '적용하기',
      'common.confirm': '확인',
      'common.cancel': '취소',
      'common.more': '더보기',
      'common.search': '검색',
      'common.Bookmark': '즐겨찾기',
      'common.recent_searches': '최근 검색어',
      'common.delete_all': '전체삭제',
      'common.delete': '삭제',
      'common.DirectInput': '직접입력',
      'filter.title': '전체메뉴',
      'filter.search_placeholder': '도로명, 지번, 건물명, 초성검색',
      'filter.animation': '애니메이션',
      'filter.wind_animation': '풍향 애니매이션',
      'filter.wind_vector': '바람벡터',
      'filter.none': '없음',
      'filter.wind': '바람',
      'filter.wave': '파도',
      'filter.Density': '밀도',
      'filter.Speed': '속도',
      'filter.Tail': '꼬리',
      'filter.Brightness': '밝기',
      'filter.Size': '크기',
      'filter.ai_numerical': 'AI / 수치모델',
      'filter.numerical_model': '수치모델',
      'filter.forecast': '예보',
      'filter.warning': '특보',
      'filter.observation': '관측',
      'filter.weather': '날씨',
      'filter.temp_wind_rain_cloud': '기온 / 바람 / 강수 / 구름',
      'filter.warning_radar_sat': '특보 / 레이더 / 위성 / 낙뢰',
      'filter.marine': '해양',
      'filter.snow': '눈',
      'filter.aviation': '항공',
      'filter.ultra_short_forecast': '초단기 예측',
      'filter.short_forecast': '단기예보',
      'filter.medium_forecast': '중기예보',
      'map.title': '날씨지도 | 날씨누리',
      'map.weather_map': '날씨지도',
      'map.thematic_map': '주제별 지도',
      'map.bookmark_region': '관심지역',
      'map.current_location': '현재위치',
      'map.ultra_short_forecast': '초단기예보',
      'map.short_forecast': '단기예보',
      'map.medium_forecast': '중기예보',
      'map.climate': '기후',
      'map.Timeline.date': '날짜',
      'map.Timeline.time': '시각',
    },
    texts: {},
  },
  en: {
    keys: {
      'common.kr': 'KR',
      'common.en': 'EN',
      'common.close': 'Close window',
      'common.close_short': 'Close',
      'common.reset': 'Reset',
      'common.apply': 'Apply',
      'common.confirm': 'Confirm',
      'common.cancel': 'Cancel',
      'common.more': 'More',
      'common.search': 'Search',
      'common.Bookmark': 'Bookmarks',
      'common.recent_searches': 'Recent Searches',
      'common.delete_all': 'Clear All',
      'common.delete': 'Delete',
      'common.DirectInput': 'Direct Input',
      'filter.title': 'All Menu',
      'filter.search_placeholder': 'Road name, lot number, building name',
      'filter.animation': 'Animation',
      'filter.wind_animation': 'Wind Animation',
      'filter.wind_vector': 'Wind Vector',
      'filter.none': 'None',
      'filter.wind': 'Wind',
      'filter.wave': 'Wave',
      'filter.Density': 'Density',
      'filter.Speed': 'Speed',
      'filter.Tail': 'Tail',
      'filter.Brightness': 'Brightness',
      'filter.Size': 'Size',
      'filter.ai_numerical': 'AI / NWP Model',
      'filter.numerical_model': 'NWP Model',
      'filter.forecast': 'Forecast',
      'filter.warning': 'Warning',
      'filter.observation': 'Observation',
      'filter.weather': 'Weather',
      'filter.temp_wind_rain_cloud': 'Temp / Wind / Precip / Cloud',
      'filter.warning_radar_sat': 'Warning / Radar / Sat / Lightning',
      'filter.marine': 'Marine',
      'filter.snow': 'Snow',
      'filter.aviation': 'Aviation',
      'filter.ultra_short_forecast': 'Very Short-range Forecast',
      'filter.short_forecast': 'Short-range Forecast',
      'filter.medium_forecast': 'Medium-range Forecast',
      'map.title': 'Weather Map | Weather Nuri',
      'map.weather_map': 'Weather Map',
      'map.thematic_map': 'Thematic Map',
      'map.bookmark_region': 'Favorite Locations',
      'map.current_location': 'Current Location',
      'map.ultra_short_forecast': 'Very Short-range',
      'map.short_forecast': 'Short-range',
      'map.medium_forecast': 'Medium-range',
      'map.climate': 'Climate',
      'map.Timeline.date': 'Date',
      'map.Timeline.time': 'Time',
    },
    texts: {
      // Titles & App Names
      '날씨지도 | 날씨누리': 'Weather Map | Weather Nuri',
      '날씨누리': 'Weather Nuri',
      '날씨지도': 'Weather Map',
      '주제별 지도': 'Thematic Map',
      '기상청': 'KMA',
      '기상청 날씨누리': 'KMA Weather Nuri',
      '기상청 기후정보포털': 'KMA Climate Information Portal',
      '기상청 기상자료개방포털': 'KMA Open MET Data Portal',
      '책임운영기관 국립기상과학원': 'National Institute of Meteorological Sciences',
      '탄소중립포털': 'Carbon Neutrality Portal',
      '세계기상정보서비스': 'World Weather Information Service',
      '날씨누리 - 커스텀 시간 범위 슬라이더 테스트': 'Weather Nuri - Custom Time Range Slider Test',
      '날씨누리 - 주간 날씨 타임라인 가이드': 'Weather Nuri - Weekly Weather Timeline Guide',

      // Common UI & Actions
      '전체메뉴': 'All Menu',
      '전체필터': 'All Filters',
      '메뉴열고닫기': 'Toggle Menu',
      '창닫기': 'Close window',
      '닫기': 'Close',
      '설정 닫기': 'Close Settings',
      '기후요소 닫기': 'Close Climate Element',
      '지상 닫기': 'Close Surface',
      '50 인덱스 닫기': 'Close 50 Index',
      '범레설정 닫기': 'Close Legend Settings',
      '계절별 닫기': 'Close Seasonal',
      '초기화': 'Reset',
      '적용하기': 'Apply',
      '적용': 'Apply',
      '확인': 'Confirm',
      '취소': 'Cancel',
      '더보기': 'More',
      '검색': 'Search',
      '검색하기': 'Search',
      '삭제': 'Delete',
      '전체삭제': 'Clear All',
      '수정': 'Edit',
      '댓글': 'Comment',
      '답글': 'Reply',
      '등록': 'Submit',
      '설정': 'Settings',
      '범례': 'Legend',
      '범례설정': 'Legend Settings',
      '범레설정': 'Legend Settings',
      '색상 설정': 'Color Settings',
      '최소': 'Min',
      '최대': 'Max',
      '최저': 'Min',
      '최고': 'Max',
      '분리': 'Split',
      '분히': 'Split',
      '비교': 'Compare',
      '비교 분할': 'Split Comparison',
      '편차비교': 'Anomaly Comparison',
      '비교지도': 'Comparison Map',
      '지도 비교': 'Compare Map',
      '왼쪽 선택': 'Select Left',
      '오른쪽 선택': 'Select Right',
      '확대': 'Zoom In',
      '축소': 'Zoom Out',
      '평면': '2D',
      '입체': '3D',
      '시간선택': 'Select Time',
      '년도 선택': 'Select Year',
      '옵션 선택': 'Select Option',
      '재생': 'Play',
      '실행': 'Play',
      '일시정지': 'Pause',
      '자동재생 정지': 'Pause Autoplay',
      '자동재생 시작': 'Start Autoplay',
      '이전': 'Previous',
      '다음': 'Next',
      '오늘': 'Today',
      '현재': 'Current',
      '켜짐': 'On',
      '꺼짐': 'Off',
      '예': 'Yes',
      '아니오': 'No',
      '직접입력': 'Direct Input',
      '단위': 'Unit',
      '고도': 'Altitude',
      '간격': 'Interval',
      '자료시점': 'Data Time',
      '자료시점 선택': 'Select Data Period',
      '시점': 'Time Period',
      '지역선택': 'Select Region',
      '선택': 'Select',
      '전체': 'All',
      '공유': 'Share',
      '저장': 'Save',
      '다운로드': 'Download',
      '테이블표 보기': 'View Table',
      '차트 영역': 'Chart Area',
      '지동': 'Map Area',
      '안내지도': 'Guide Map',
      '플레이스홀더': 'Placeholder',
      '컬러선택': 'Select Color',
      '구분': 'Category',
      '업데이트': 'Updated',

      // Search & Location
      '도로명, 지번, 건물명, 초성검색': 'Road name, lot number, building name',
      '읍,면,동 정보 조회': 'Search town / neighborhood',
      '검색어를 입력하세요': 'Enter search keyword',
      '검색어를 입력해주세요.': 'Please enter a search term.',
      '즐겨찾기': 'Bookmarks',
      '즐겨찾기 추가': 'Add to Bookmarks',
      '최근 검색어': 'Recent Searches',
      '관심지역': 'Favorite Locations',
      '현재위치': 'Current Location',
      '현위치': 'Current Location',
      '위치': 'Location',
      '명칭': 'Name',
      '도로명': 'Road Name',
      '지번': 'Lot Number',
      '서울특별시': 'Seoul',
      '울진': 'Uljin',
      '하남 나무고아원': 'Hanam Tree Orphanage',
      '경기 하남시 미사동 607': '607 Misa-dong, Hanam-si, Gyeonggi-do',
      '쥬라리움 하남점': 'Zoorarium Hanam',
      '경기 하남시 망월동 1143 - 26': '1143-26 Mangwol-dong, Hanam-si, Gyeonggi-do',
      '두산시(Gitdaebong)': 'Dusan-si (Gitdaebong)',
      '금당리(Geumdang-ri)': 'Geumdang-ri',
      '중남리(Jungnam-ri)': 'Jungnam-ri',
      '서상면(Seosang-myeon)': 'Seosang-myeon',
      '대전광역시 동구 가양동': 'Gayang-dong, Dong-gu, Daejeon',
      '대전광역시 서구 둔산동': 'Dunsan-dong, Seo-gu, Daejeon',
      '대전광역시 유성구 가정동': 'Gajeong-dong, Yuseong-gu, Daejeon',
      '대전광역시 중구 은행동': 'Eunhaeng-dong, Jung-gu, Daejeon',
      '대전광역시 대덕구 오정동': 'Ojeong-dong, Daedeok-gu, Daejeon',
      '전라남도': 'Jeollanam-do',
      '전라남도(광양소방서장)': 'Jeollanam-do (Gwangyang Fire Station)',
      '전라남도강진군청': 'Gangjin County Office, Jeollanam-do',
      '전라남도강진교육지원청': 'Gangjin Office of Education, Jeollanam-do',
      '전라남도인재개발원': 'Jeollanam-do Human Resources Development Institute',
      '전라남도인재개발원본관': 'Jeollanam-do HRD Institute Main Bldg',
      '전라남도인재개발원행복관': 'Jeollanam-do HRD Institute Haengbok Hall',
      '전라남도 고흥군 고흥읍 흥양길 20': '20 Heungyang-gil, Goheung-eup, Goheung-gun, Jeollanam-do',
      '전라남도 나주시 건재로 130-13 (대호동)': '130-13 Geonjae-ro, Naju-si, Jeollanam-do (Daeho-dong)',
      '전라남도 강진군 강진읍 교촌리 1': '1 Gyochon-ri, Gangjin-eup, Gangjin-gun, Jeollanam-do',
      '전라남도 강진군 강진읍 교촌리 10': '10 Gyochon-ri, Gangjin-eup, Gangjin-gun, Jeollanam-do',
      '전라남도 강진군 강진읍 교촌리 100-1': '100-1 Gyochon-ri, Gangjin-eup, Gangjin-gun, Jeollanam-do',
      '전라남도 강진군 강진읍 교촌리 101': '101 Gyochon-ri, Gangjin-eup, Gangjin-gun, Jeollanam-do',
      '전라남도 강진군 강진읍 교촌리 102-1': '102-1 Gyochon-ri, Gangjin-eup, Gangjin-gun, Jeollanam-do',
      '전라남도 강진군 강진읍 교촌리 102-2': '102-2 Gyochon-ri, Gangjin-eup, Gangjin-gun, Jeollanam-do',
      '전라남도 강진군 강진읍 교촌리 103': '103 Gyochon-ri, Gangjin-eup, Gangjin-gun, Jeollanam-do',
      '전라남도 강진군 강진읍 교촌리 104': '104 Gyochon-ri, Gangjin-eup, Gangjin-gun, Jeollanam-do',
      '전라남도 강진군 강진읍 교촌리 106': '106 Gyochon-ri, Gangjin-eup, Gangjin-gun, Jeollanam-do',
      '특별시/광역시': 'Metropolitan City',
      '시/군/구': 'City / County / District',
      '읍/면/동': 'Town / Township / Neighborhood',
      '위도': 'Latitude',
      '경도': 'Longitude',

      // Filter & Map Controls (filter.html, map.html, dropdowns)
      '애니메이션': 'Animation',
      '풍향 애니매이션': 'Wind Animation',
      '풍향 애니메이션': 'Wind Animation',
      '풍향 에니메이션 / 강하게': 'Wind Animation / Strong',
      '바람벡터': 'Wind Vector',
      '없음': 'None',
      '정상': 'Normal',
      '강하게': 'Strong',
      '약하게': 'Weak',
      '빠르게': 'Fast',
      '느리게': 'Slow',
      '어둡게': 'Dark',
      '얇게': 'Thin',
      '바람': 'Wind',
      '파도': 'Wave',
      '밀도': 'Density',
      '속도': 'Speed',
      '꼬리': 'Tail',
      '밝기': 'Brightness',
      '크기': 'Size',
      '투명도': 'Opacity',
      '중첩': 'Overlay',
      '중첩해제': 'Clear Overlay',
      '등압선': 'Isobars',
      '등온선': 'Isotherms',
      '구름강조RGB': 'Cloud-Enhanced RGB',
      '전선 (기상학)': 'Fronts (Meteorology)',
      '거리측정': 'Measure Distance',
      '레이어': 'Layers',
      '배경지도': 'Base Map',
      '일반지도': 'Standard Map',
      '위성지도': 'Satellite Map',
      '어두운지도': 'Dark Map',
      '밝은지도': 'Light Map',

      // Models & Forecast Categories
      'AI / 수치모델': 'AI / NWP Model',
      '수치모델': 'NWP Model',
      '수치예보': 'Numerical Forecast',
      '동네예보': 'Local Forecast',
      '해상 예측': 'Marine Forecast',
      '재생에너지': 'Renewable Energy',
      '영향예보': 'Impact Forecast',
      '일 통계': 'Daily Statistics',
      '예보·예측': 'Forecast · Prediction',
      '관측·통계': 'Observation · Statistics',
      '초단기 예측': 'Very Short-range Forecast',
      '초단기예측': 'Very Short-range Forecast',
      '초단기예보': 'Very Short-range Forecast',
      '초단기': 'Very Short-range',
      '단기예보': 'Short-range Forecast',
      '단기': 'Short-range',
      '중기예보': 'Medium-range Forecast',
      '중기': 'Medium-range',
      '기후': 'Climate',
      '예보': 'Forecast',

      // Weather Elements & Categories
      '날씨': 'Weather',
      '기온 / 바람 / 강수 / 구름': 'Temp / Wind / Precip / Cloud',
      '특보 / 레이더 / 위성 / 낙뢰': 'Warning / Radar / Sat / Lightning',
      '해양': 'Marine',
      '눈': 'Snow',
      '관측': 'Observation',
      '항공': 'Aviation',
      '기온': 'Temperature',
      '기온요소 상세': 'Temperature Element Details',
      '체감온도': 'Apparent Temp',
      '풍속': 'Wind Speed',
      '풍향/풍속': 'Wind Dir/Speed',
      '돌풍': 'Wind Gust',
      '기압': 'Pressure',
      '해면기압': 'Sea Level Pressure',
      '습도': 'Humidity',
      '상대습도': 'Relative Humidity',
      '강수량': 'Precipitation',
      '강수': 'Precipitation',
      '강수강도': 'Precip Intensity',
      '1시간 강수량': '1h Precipitation',
      '3시간 강수량': '3h Precipitation',
      '6시간 강수량': '6h Precipitation',
      '12시간 강수량': '12h Precipitation',
      '24시간 강수량': '24h Precipitation',
      '누적강수량': 'Accumulated Precip',
      '강수형태': 'Precipitation Type',
      '하늘상태': 'Sky Condition',
      '구름량': 'Cloud Cover',
      '구름': 'Cloud Cover',
      '구름량(전운량)': 'Cloud Cover (Total)',
      '운량': 'Cloud Cover',
      '전운량': 'Total Cloud Cover',
      '하층운': 'Low Cloud',
      '중층운': 'Mid Cloud',
      '상층운': 'High Cloud',
      '특보': 'Warning',
      '기상특보': 'Weather Warning',
      '예비특보': 'Preliminary Warning',
      '레이더': 'Radar',
      '위성': 'Satellite',
      '기상위성': 'Weather Satellite',
      '낙뢰': 'Lightning',
      '유의파고': 'Significant Wave Height',
      '최대파고': 'Maximum Wave Height',
      '파주기': 'Wave Period',
      '파향': 'Wave Direction',
      '해류': 'Ocean Current',
      '수온': 'Water Temperature',
      '해수면': 'Sea Surface',
      '해수면온도': 'Sea Surface Temp',
      '해수면 온도': 'Sea Surface Temp',
      '해수면고도': 'Sea Surface Height',
      '표층염분': 'Surface Salinity',
      '해빙': 'Sea Ice',
      '해빙면적': 'Sea Ice Area',
      '해빙두께': 'Sea Ice Thickness',
      '신적설': 'New Snowfall',
      '적설량': 'Snow Depth',
      '적설': 'Snow Depth',
      '눈깊이': 'Snow Depth',
      '눈밀도': 'Snow Density',
      '안개': 'Fog',
      '박무': 'Mist',
      '연무': 'Haze',
      '시정': 'Visibility',
      '운고': 'Cloud Base Height',
      '황사': 'Asian Dust',
      '자외선': 'UV Index',
      '대기정체': 'Air Stagnation',
      '일사량': 'Solar Radiation',
      '대기질': 'Air Quality',
      '미세먼지': 'Fine Dust (PM10)',
      '초미세먼지': 'Ultrafine Dust (PM2.5)',
      '오존': 'Ozone (O3)',
      '온실가스': 'Greenhouse Gas',
      '이산화탄소 배출량': 'CO2 Emissions',
      '메탄 방출량': 'Methane Emissions',
      '이산화탄소 농도': 'CO2 Concentration',
      '메탄 농도': 'Methane Concentration',
      '50 인덱스': '50 Index',

      // Altitude / Pressure Level Options (option1.html - option11.html)
      '지상': 'Surface',
      '지상 2m': '2m Above Ground',
      '지상 10m': '10m Above Ground',
      '지상 80m': '80m Above Ground',
      '지상 100m': '100m Above Ground',

      // Side Panel & Weather Tables (map.html)
      '날짜': 'Date',
      '시각': 'Time',
      '시간': 'Time',
      '하루': '1 Day',
      '강수확률': 'Precip Prob.',
      '강수확률(%)': 'Precip Prob. (%)',
      '강수량(mm)': 'Precip (mm)',
      '신적설(cm)': 'Snowfall (cm)',
      '기온(℃)': 'Temp (℃)',
      '체감(℃)': 'Feels Like (℃)',
      '체감온도(℃)': 'Feels Like (℃)',
      '최저기온(℃)': 'Min Temp (℃)',
      '최고기온(℃)': 'Max Temp (℃)',
      '2.0℃ 평균기온(℃)': '2.0℃ Mean Temp (℃)',
      '1.5℃ 평균기온(℃)': '1.5℃ Mean Temp (℃)',
      '편차 평균기온(℃)': 'Anomaly Mean Temp (℃)',
      '풍향': 'Wind Dir',
      '풍속(m/s)': 'Wind (m/s)',
      '바람(m/s)': 'Wind (m/s)',
      '습도(%)': 'Humidity (%)',
      '파고(m)': 'Wave (m)',
      '월별 평년기후': 'Monthly Climate Normals',
      '월별기후자료': 'Monthly Climate Data',
      '평년기온': 'Normal Temp',
      '평년강수량': 'Normal Precip',
      '평균기온': 'Mean Temp',
      '최고기온': 'Max Temp',
      '최저기온': 'Min Temp',
      '지상기온': 'Surface Temp',
      '일교차': 'Diurnal Temp Range',
      '폭염일수': 'Heatwave Days',
      '여름일수': 'Summer Days',
      '열대야일수': 'Tropical Nights',
      '한파일수': 'Cold Wave Days',
      '결빙일수': 'Frost Days',
      '식물성장기간': 'Growing Season Length',
      '온난일': 'Warm Days',
      '온난일계속기간': 'Warm Spell Duration',
      '최대온난일계속기간': 'Max Warm Spell Duration',
      '온난야': 'Warm Nights',
      '일최고기온연최대': 'Annual Max of Daily Max Temp',
      '일최저기온연최대': 'Annual Max of Daily Min Temp',
      '강수현상없음': 'No Precip',
      '맑음': 'Clear',
      '맑음(밤)': 'Clear (Night)',
      '구름조금': 'Mostly Clear',
      '구름많음': 'Mostly Cloudy',
      '구름많음(밤)': 'Mostly Cloudy (Night)',
      '흐림': 'Cloudy',
      '비': 'Rain',
      '비/눈': 'Rain/Snow',
      '비 · 눈': 'Rain · Snow',
      '비 또는 눈': 'Rain or Snow',
      '눈 또는 비': 'Snow or Rain',
      '소나기': 'Shower',
      '빗방울': 'Raindrops',
      '빗방울 · 눈날림': 'Raindrops · Drifting Snow',
      '눈날림': 'Drifting Snow',
      '가끔 비, 한때 비': 'Occasional Rain',
      '가끔 눈, 한때 눈': 'Occasional Snow',
      '가끔 비 또는 눈, 한때 비 또는 눈': 'Occasional Rain or Snow',
      '가끔 눈 또는 비, 한때 눈 또는 비': 'Occasional Snow or Rain',
      '약': 'Light',
      '강': 'Strong',
      '매우강': 'Very Strong',

      // Wind directions
      '북': 'N',
      '북북동': 'NNE',
      '북동': 'NE',
      '동북동': 'ENE',
      '동': 'E',
      '동남동': 'ESE',
      '남동': 'SE',
      '남남동': 'SSE',
      '남': 'S',
      '남남서': 'SSW',
      '남서': 'SW',
      '서남서': 'WSW',
      '서': 'W',
      '서북서': 'WNW',
      '북서': 'NW',
      '북북서': 'NNW',

      // Weekdays & Months & Periods
      '일': 'Sun',
      '월': 'Mon',
      '화': 'Tue',
      '수': 'Wed',
      '목': 'Thu',
      '금': 'Fri',
      '토': 'Sat',
      '연별': 'Annual',
      '계절별': 'Seasonal',
      '월별': 'Monthly',
      '일별': 'Daily',
      '봄': 'Spring',
      '여름': 'Summer',
      '가을': 'Autumn',
      '겨울': 'Winter',
      '1월': 'Jan',
      '2월': 'Feb',
      '3월': 'Mar',
      '4월': 'Apr',
      '5월': 'May',
      '6월': 'Jun',
      '7월': 'Jul',
      '8월': 'Aug',
      '9월': 'Sep',
      '10월': 'Oct',
      '11월': 'Nov',
      '12월': 'Dec',

      // Climate Change Scenario Pages & Dialogs
      '기후변화 상황지도': 'Climate Change Situational Map',
      '기후변화 상황지도 소개': 'About Climate Change Situational Map',
      '기후변화 상황판': 'Climate Change Dashboard',
      '우리동네 기후변화': 'Local Climate Change',
      '기후위기 영향정보': 'Climate Crisis Impact Info',
      '기후변화 지도서비스': 'Climate Change Map Service',
      '종합기후변화감시정보': 'Comprehensive Climate Monitoring',
      '대기(조성)': 'Atmosphere (Composition)',
      '기후·기후변화 관측정보': 'Climate Observation Info',
      '분석지원': 'Analysis Support',
      '기후위기 적응대책 지원': 'Climate Adaptation Support',
      '행정구역별 순위': 'Ranking by District',
      '기상청 국가 기후변화 표준 시나리오': 'KMA National Climate Change Standard Scenario',
      '기상청 국가 기후변화': 'KMA National Climate Change',
      '표준 시나리오': 'Standard Scenario',
      '열린마당': 'Community',
      '사용자 가이드': 'User Guide',
      '공자사항': 'Notices',
      '공지사항': 'Notices',
      '자료실': 'Resources',
      '남한상세': 'South Korea Detail',
      '관측지점별': 'By Observation Station',
      '온난화수준별': 'By Warming Level',
      '시나리오': 'Scenario',
      '기후변화 시나리오': 'Climate Change Scenario',
      '기후요소': 'Climate Element',
      '극한기후지수': 'Extreme Climate Index',
      '과거 재현자료': 'Historical Reproduction Data',
      '과거 재분석 자료': 'Historical Reanalysis Data',
      '과거 재분석자료 200hpa': 'Historical Reanalysis Data 200hPa',
      '과거 재분석 자료 2024년 12월': 'Historical Reanalysis Data Dec 2024',
      'NOAA(눈덮임)': 'NOAA (Snow Cover)',
      'NOAA (눈덮임)': 'NOAA (Snow Cover)',
      '행정구역별': 'By Administrative District',
      '행정구역별 전체필터': 'Administrative District Filter',
      '유역별': 'By River Basin',
      '유역별 전체필터': 'River Basin Filter',
      '지점별': 'By Station',
      '지점별 전체필터': 'Station Filter',
      '동아시아': 'East Asia',
      '동아시아 전체필터': 'East Asia Filter',
      '전지구 평면': 'Global 2D',
      '전지구 평면 전체필터': 'Global 2D Filter',
      '전지구 입체': 'Global 3D',
      '전지구 입체 전체필터': 'Global 3D Filter',
      '현재기후': 'Current Climate',
      '21세기 전반기': 'Early 21st Century',
      '21세기 중반기': 'Mid 21st Century',
      '21세기 후반기': 'Late 21st Century',
      '21세기 전반기(2021~2040)': 'Early 21st Century (2021~2040)',
      '21세기 중반기(2041~2060)': 'Mid 21st Century (2041~2060)',
      '21세기 후반기(2081~2100)': 'Late 21st Century (2081~2100)',
      'SSP 시나리오 21세기 전중후 평균기온 - 전국': 'SSP Scenario 21st Century Mean Temp - National',
      '상세보기': 'View Details',
      '시계열 영상': 'Time-Series Video',
      '시계열 동영상': 'Time-Series Video',
      '미니맵': 'Minimap',
      '데이터 다운로드': 'Data Download',
      '오픈 API': 'Open API',
      '다운로드 / 오픈API': 'Download / Open API',
      '시나리오 상세설명': 'Scenario Details',
      '소속구분': 'Affiliation',
      '정부부처 및 소속기관': 'Government Ministry / Agency',
      '공공기관': 'Public Institution',
      '개인': 'Individual',
      '학계(대학 등)': 'Academia (University, etc.)',
      '연구기관(출연기관 등)': 'Research Institute',
      '민간(산업계 등)': 'Private Sector (Industry, etc.)',
      '활용구분': 'Purpose of Use',
      '정책수립': 'Policy Making',
      '용역사업수행': 'Project Execution',
      '학술·연구(논문작성 등)': 'Academic / Research (Thesis, etc.)',
      '교육자료': 'Educational Material',
      '내부업무수행': 'Internal Business',
      '상품서비스 개발': 'Product / Service Development',
      '기타': 'Other',
      '활용 목적 및 계획': 'Purpose and Plan of Use',
      '데이터 사용 목적 및 계획을 작성하여 주시기 바랍니다.': 'Please describe your purpose and plan for using the data.',

      // Member / Auth Pages (html/join/*)
      '로그인': 'Log In',
      '로그아웃': 'Log Out',
      '회원가입': 'Sign Up',
      '회원가입 완료': 'Registration Complete',
      '아이디': 'User ID',
      '비밀번호': 'Password',
      '비밀번호 확인': 'Confirm Password',
      '새 비밀번호': 'New Password',
      '새 비밀번호 확인': 'Confirm New Password',
      '아이디 찾기': 'Find ID',
      '비밀번호 찾기': 'Find Password',
      '아이디/비밀번호 찾기': 'Find ID / Password',
      '아이디 저장': 'Remember ID',
      '자동 로그인': 'Stay Signed In',
      '이름': 'Name',
      '이메일': 'Email',
      '휴대폰 번호': 'Mobile Number',
      '전화번호': 'Phone Number',
      '인증': 'Verification',
      '인증번호': 'Verification Code',
      '인증번호 발송': 'Send Code',
      '인증번호 확인': 'Verify Code',
      '중복확인': 'Check Duplicate',
      '카카오 간편인증': 'Kakao Quick Auth',
      '네이버 간편인증': 'Naver Quick Auth',
      '약관동의': 'Terms Agreement',
      '전체동의': 'Agree to All',
      '이용약관': 'Terms of Use',
      '정보입력': 'Enter Information',
      '가입완료': 'Complete',
      '개인정보 처리방침': 'Privacy Policy',
      '개인정보 수집 및 이용 동의': 'Consent to Collection and Use of Personal Information',
      '[필수]': '[Required]',
      '필수': 'Required',
      '선택동의': 'Optional',
      '동의합니다.': 'I Agree.',
      '동의하지 않습니다.': 'I Do Not Agree.',
      '다음단계': 'Next Step',
      '이전단계': 'Previous Step',
      '메인으로': 'Go to Main',
      '로그인 후 댓글을 입력하실 수 있습니다.': 'Please log in to write a comment.',
      '개인정보 보호를 위해 비밀번호 5회 이상 오류 시 비밀번호 재설정이 필요합니다.': 'For privacy protection, password reset is required after 5 failed attempts.',
      '비밀번호는 주기적(3개월)으로 변경하고, 서비스 이용 후 반드시 로그아웃하시기 바랍니다.': 'Please change your password periodically (every 3 months) and log out after using the service.',
      '아이디는 영문, 숫자를 조합한 4~12자입니다.': 'User ID must be 4–12 characters combining letters and numbers.',
      '비밀번호는 문자, 숫자, 특수문자를 조합한 9~16자 입니다.': 'Password must be 9–16 characters combining letters, numbers, and special characters.',
      '영문, 숫자 조합 4~12자': '4–12 characters (letters and numbers)',
      '문자, 숫자, 특수문자 조합 9~16자': '9–16 characters (letters, numbers, symbols)',
      '아이디를 찾기 위해 인증 방법을 선택해주세요.': 'Please select a verification method to find your ID.',
      '비밀번호를 찾기 위해 인증 방법을 선택해주세요.': 'Please select a verification method to find your password.',
      '비밀번호를 찾으려는 아이디를 입력해주세요.': 'Please enter the ID for which you want to find the password.',
      '입력하신 정보와 일치하는 아이디가 없습니다.': 'No ID matches the information you entered.',
      '사용가능한 아이디 입니다.': 'This ID is available.',
      '기후와 환경 정보를 빠르고 간편하게 확인해보세요.': 'Check climate and environmental information quickly and easily.',
      '홍길동님의 아이디는': 'Hong Gil-dong, your ID is',
      '입니다.': '.',
      '홍길동': 'Hong Gil-dong',
      '님의 비밀번호를 변경해주세요.': ', please change your password.',
      '제 1 조  (목적)': 'Article 1 (Purpose)',
      '다음의 이용약관은 기후변화 상황지도 이용 서비스에 관한 규정 사항입니다.': 'The following Terms of Use govern the use of the Climate Change Situational Map service.',
      '만 14세 미만의 어린이는 부모 등 법정 대리인의 동의를 얻은 후에 서비스 이용을 신청하여야 합니다.': 'Children under 14 must obtain consent from a parent or legal guardian before applying to use the service.',

      // Guide & Markup List Pages
      '입체전체필터1': '3D Full Filter 1',
      '입체전체필터2': '3D Full Filter 2',
      'fullType[입체전체필터1]': 'fullType [3D Full Filter 1]',
      'fullType[입체전체필터2]': 'fullType [3D Full Filter 2]',
      'hover 툴팁': 'Hover Tooltip',
      'click 툴팁': 'Click Tooltip',
      'click 툴팁2': 'Click Tooltip 2',
      '대한항공': 'Korean Air',
      '날씨222': 'Weather 222',
      '는 옛 브라우저 호환성을 고려한 방식이며,': 'is for legacy browser compatibility, and',
      '최신 브라우저에서는': 'in modern browsers',
      'window.scrollY만으로 충분합니다.': 'window.scrollY alone is sufficient.',
      '는 옛 브라우저 호환성을 고려한 방식이며, 대부분의 최신 브라우저에서는 window.scrollY만으로 충분합니다.': 'is for legacy browser compatibility; in most modern browsers, window.scrollY alone is sufficient.',
      '제목2': 'Title 2',
      '간략한 소개 및 기능에 대한 설명': 'Brief introduction and description of features',
      'TimeRange 신규 기능 테스트 데모': 'TimeRange New Features Test Demo',
      'TimeRange 컴포넌트 개발 가이드': 'TimeRange Component Development Guide',
      '1. 생성자 옵션 (Constructor Options)': '1. Constructor Options',
      '2. 동적 API 메서드 (Dynamic Methods)': '2. Dynamic API Methods',
      '3. 코드 적용 예시': '3. Code Examples',
      '옵션명': 'Option',
      '타입': 'Type',
      '설명': 'Description',
      '이벤트 발생 로그가 여기에 출력됩니다.': 'Event logs will be displayed here.',
      '주간 날씨 타임라인 (TimeTimeline)': 'Weekly Weather Timeline (TimeTimeline)',
    },
  },
};

/**
 * Pattern-based translators for dynamic or composite Korean strings
 */
const PATTERN_TRANSLATORS = {
  en: [
    // e.g. "[기온] 지상 2m" or "[풍속] 850hPa"
    {
      regex: /^\[([^\]]+)\]\s*(.+)$/,
      replace: (_, category, rest) => {
        const tCat = translateTextSync(category.trim(), 'en');
        const tRest = translateTextSync(rest.trim(), 'en');
        return `[${tCat}] ${tRest}`;
      },
    },
    // e.g. "지상 2m", "지상 10m"
    {
      regex: /^지상\s*(\d+\s*m)$/i,
      replace: (_, h) => `${h} Above Ground`,
    },
    // e.g. "05. 24 목" or "05.24 목"
    {
      regex: /^(\d{2}\.\s*\d{2})\s*([일월화수목금토])$/,
      replace: (_, datePart, dayKo) => {
        const dayMap = { 일: 'Sun', 월: 'Mon', 화: 'Tue', 수: 'Wed', 목: 'Thu', 금: 'Fri', 토: 'Sat' };
        return `${datePart} ${dayMap[dayKo] || dayKo}`;
      },
    },
    // e.g. "2026.07.15 수" or "2026-07-15 수"
    {
      regex: /^(\d{4}[.-]\d{2}[.-]\d{2})\s*([일월화수목금토])$/,
      replace: (_, datePart, dayKo) => {
        const dayMap = { 일: 'Sun', 월: 'Mon', 화: 'Tue', 수: 'Wed', 목: 'Thu', 금: 'Fri', 토: 'Sat' };
        return `${datePart} ${dayMap[dayKo] || dayKo}`;
      },
    },
    // e.g. "23시", "00시"
    {
      regex: /^(\d{1,2})시$/,
      replace: (_, hh) => `${String(hh).padStart(2, '0')}:00`,
    },
    // e.g. "1일", "15일"
    {
      regex: /^(\d{1,2})일$/,
      replace: (_, dd) => `Day ${dd}`,
    },
    // e.g. "1시간", "3시간", "48시간"
    {
      regex: /^(\d+)\s*시간$/,
      replace: (_, h) => `${h}h`,
    },
    // e.g. "2025년"
    {
      regex: /^(\d{4})년$/,
      replace: (_, yyyy) => `${yyyy}`,
    },
    // e.g. "2025년 5월" or "1988년 12월"
    {
      regex: /^(\d{4})년\s*(\d{1,2})월$/,
      replace: (_, yyyy, mm) => {
        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        const mIdx = parseInt(mm, 10) - 1;
        return `${months[mIdx] || mm} ${yyyy}`;
      },
    },
    // e.g. "36°29'북 / 127°39'동" or "37°34'북 / 126°58'동 / 10:00 2026.04.29, Asia/Seoul (UTC+9)"
    {
      regex: /([0-9°'"\s.]+)북\s*\/\s*([0-9°'"\s.]+)동(.*)/,
      replace: (_, lat, lon, tail) => `${lat.trim()}N / ${lon.trim()}E${tail || ''}`,
    },
    // e.g. "해발고도 : 35m" or "(해발고도 : 35m)"
    {
      regex: /해발고도\s*:\s*([0-9.]+m)/,
      replace: (_, elev) => `Elevation: ${elev}`,
    },
    // e.g. "초단기: 8일(금) 09:40, 동네예보: 8일(금) 08:00"
    {
      regex: /^초단기:\s*(\d+)일\(([일월화수목금토])\)\s*([0-9:]+),\s*동네예보:\s*(\d+)일\(([일월화수목금토])\)\s*([0-9:]+)$/,
      replace: (_, d1, w1, t1, d2, w2, t2) => {
        const dayMap = { 일: 'Sun', 월: 'Mon', 화: 'Tue', 수: 'Wed', 목: 'Thu', 금: 'Fri', 토: 'Sat' };
        return `Nowcast: ${d1} (${dayMap[w1] || w1}) ${t1}, Local Forecast: ${d2} (${dayMap[w2] || w2}) ${t2}`;
      },
    },
    // e.g. "초단기예보:9월 18일 13시 20분, 단기예보: 9월 18일 11시"
    {
      regex: /초단기예보\s*:\s*(\d+)월\s*(\d+)일\s*(\d+)시\s*(\d+)분,\s*단기예보\s*:\s*(\d+)월\s*(\d+)일\s*(\d+)시/,
      replace: (_, m1, d1, h1, min1, m2, d2, h2) => {
        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        const mon1 = months[parseInt(m1, 10) - 1] || m1;
        const mon2 = months[parseInt(m2, 10) - 1] || m2;
        return `Very Short-range: ${mon1} ${d1}, ${String(h1).padStart(2, '0')}:${String(min1).padStart(2, '0')}, Short-range: ${mon2} ${d2}, ${String(h2).padStart(2, '0')}:00`;
      },
    },
    // e.g. "초단기: 10분 간격, +6시간" or "초단기예보: 1시간 간격, +6시간"
    {
      regex: /^(초단기예보|초단기|단기예보|단기|중기예보|중기)\s*:\s*(.+)$/,
      replace: (_, prefix, details) => {
        const pMap = {
          초단기예보: 'Very Short-range',
          초단기: 'Nowcast',
          단기예보: 'Short-range',
          단기: 'Short-range',
          중기예보: 'Medium-range',
          중기: 'Medium-range',
        };
        const d = details
          .replace(/(\d+)분\s*간격/g, '$1 min interval')
          .replace(/(\d+)시간\s*간격/g, '$1h interval')
          .replace(/(\d+)일\s*간격/g, '$1d interval')
          .replace(/\+(\d+)시간/g, '+$1h')
          .replace(/\+(\d+)일/g, '+$1d');
        return `${pMap[prefix] || prefix}: ${d}`;
      },
    },
    // e.g. "날짜:1, 시각:3 (전체:6)"
    {
      regex: /^날짜:(\d+),\s*시각:(\d+)\s*\(전체:(\d+)\)$/,
      replace: (_, dIdx, tIdx, fIdx) => `Date:${dIdx}, Time:${tIdx} (Total:${fIdx})`,
    },
    // e.g. "range1 최소 -50" / "range1 최대 50"
    {
      regex: /^(range\d*)\s*최소\s*(.+)$/i,
      replace: (_, r, val) => `${r} Min ${val}`,
    },
    {
      regex: /^(range\d*)\s*최대\s*(.+)$/i,
      replace: (_, r, val) => `${r} Max ${val}`,
    },
  ],
};

// WeakMap to store original Korean text of DOM Text nodes for lossless switching
const originalTextNodeMap = new WeakMap();
let originalDocTitle = null;

/**
 * Translate a single Korean string into target language synchronously
 */
function translateTextSync(rawText, lang) {
  if (!rawText || typeof rawText !== 'string') return rawText;
  if (lang === 'kr') return rawText;

  const dict = DICTIONARIES[lang];
  if (!dict) return rawText;

  const trimmed = rawText.trim();
  if (!trimmed) return rawText;

  // 1. Direct lookup in texts dictionary
  if (dict.texts && Object.prototype.hasOwnProperty.call(dict.texts, trimmed)) {
    const translated = dict.texts[trimmed];
    return rawText.replace(trimmed, translated);
  }

  // 2. Direct lookup in keys dictionary
  if (dict.keys && Object.prototype.hasOwnProperty.call(dict.keys, trimmed)) {
    const translated = dict.keys[trimmed];
    return rawText.replace(trimmed, translated);
  }

  // 3. Pattern-based lookup
  const patterns = PATTERN_TRANSLATORS[lang];
  if (Array.isArray(patterns)) {
    for (const rule of patterns) {
      if (rule.regex.test(trimmed)) {
        const replaced = trimmed.replace(rule.regex, rule.replace);
        return rawText.replace(trimmed, replaced);
      }
    }
  }

  return rawText;
}

export const i18n = {
  currentLang: DEFAULT_LANG,
  _observer: null,
  _initialized: false,

  /**
   * Register a new language or extend an existing language dictionary.
   * Designed for seamless future language additions (e.g., 'ja', 'zh', 'es').
   * @param {string} langCode - e.g. 'ja'
   * @param {object} dictionary - { keys: {...}, texts: {...}, patterns: [...] }
   * @param {object} meta - { htmlLang: 'ja', label: 'JP', name: '日本語' }
   */
  registerLanguage(langCode, dictionary = {}, meta = {}) {
    const code = String(langCode).toLowerCase();
    LANGUAGE_META[code] = {
      code,
      htmlLang: meta.htmlLang || code,
      label: meta.label || code.toUpperCase(),
      name: meta.name || code.toUpperCase(),
    };
    if (!DICTIONARIES[code]) {
      DICTIONARIES[code] = { keys: {}, texts: {} };
    }
    if (dictionary.keys) {
      Object.assign(DICTIONARIES[code].keys, dictionary.keys);
    }
    if (dictionary.texts) {
      Object.assign(DICTIONARIES[code].texts, dictionary.texts);
    }
    if (Array.isArray(dictionary.patterns)) {
      PATTERN_TRANSLATORS[code] = (PATTERN_TRANSLATORS[code] || []).concat(dictionary.patterns);
    }
  },

  /**
   * Get list of supported language codes
   */
  getSupportedLanguages() {
    return Object.keys(LANGUAGE_META);
  },

  /**
   * Get current language code ('kr', 'en', ...)
   */
  getLanguage() {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved && LANGUAGE_META[saved.toLowerCase()]) {
        return saved.toLowerCase();
      }
    } catch (e) {
      // Ignore storage errors
    }
    return this.currentLang || DEFAULT_LANG;
  },

  /**
   * Translate by semantic key or raw Korean text
   */
  t(keyOrText, lang = this.currentLang) {
    const targetLang = (lang || this.getLanguage()).toLowerCase();
    const dict = DICTIONARIES[targetLang];
    if (dict && dict.keys && Object.prototype.hasOwnProperty.call(dict.keys, keyOrText)) {
      return dict.keys[keyOrText];
    }
    if (targetLang === 'kr' && DICTIONARIES.kr.keys[keyOrText]) {
      return DICTIONARIES.kr.keys[keyOrText];
    }
    return translateTextSync(keyOrText, targetLang);
  },

  /**
   * Reverse lookup or normalize text back to Korean key/text (useful for icon lookup in map.html)
   */
  toKorean(text) {
    if (!text) return text;
    const trimmed = String(text).trim();
    for (const lang of Object.keys(DICTIONARIES)) {
      if (lang === 'kr') continue;
      const textsMap = DICTIONARIES[lang]?.texts || {};
      for (const [koText, translated] of Object.entries(textsMap)) {
        if (translated === trimmed) {
          return koText;
        }
      }
      const keysMap = DICTIONARIES[lang]?.keys || {};
      for (const [key, translated] of Object.entries(keysMap)) {
        if (translated === trimmed && DICTIONARIES.kr.keys[key]) {
          return DICTIONARIES.kr.keys[key];
        }
      }
    }
    const aboveGroundMatch = trimmed.match(/^(\d+\s*m)\s+Above Ground$/i);
    if (aboveGroundMatch) {
      return `지상 ${aboveGroundMatch[1]}`;
    }
    const bracketMatch = trimmed.match(/^\[([^\]]+)\]\s*(.+)$/);
    if (bracketMatch) {
      return `[${this.toKorean(bracketMatch[1])}] ${this.toKorean(bracketMatch[2])}`;
    }
    return trimmed;
  },

  /**
   * Switch active language and update the entire DOM
   * @param {string} langCode - 'kr' | 'en' | ...
   */
  setLanguage(langCode) {
    if (!langCode) return;
    const normalized = String(langCode).toLowerCase();
    const targetLang = LANGUAGE_META[normalized] ? normalized : DEFAULT_LANG;

    this.currentLang = targetLang;
    try {
      localStorage.setItem(STORAGE_KEY, targetLang);
    } catch (e) {
      // Ignore localStorage quota/privacy errors
    }

    // Update <html lang="..."> and data-lang attribute
    const meta = LANGUAGE_META[targetLang] || LANGUAGE_META[DEFAULT_LANG];
    if (document.documentElement) {
      document.documentElement.setAttribute('lang', meta.htmlLang);
      document.documentElement.setAttribute('data-lang', targetLang);
    }

    // Translate document title
    if (typeof document !== 'undefined') {
      if (originalDocTitle === null) {
        originalDocTitle = document.title;
      }
      document.title = targetLang === 'kr'
        ? originalDocTitle
        : translateTextSync(originalDocTitle, targetLang);
    }

    // Translate DOM
    if (document.body) {
      this.translateRoot(document.body, targetLang);
      this.syncLanguageControls(document.body, targetLang);
    }

    // Dispatch global custom event for components that need custom updates
    if (typeof window !== 'undefined') {
      window.dispatchEvent(
        new CustomEvent('languagechange', {
          detail: { lang: targetLang, meta },
        })
      );
    }
  },

  /**
   * Translate all elements and text nodes inside a root container
   */
  translateRoot(root = document.body, lang = this.currentLang) {
    if (!root) return;
    const targetLang = (lang || this.getLanguage()).toLowerCase();

    // 1. Elements with explicit [data-i18n]
    const i18nElements = root.querySelectorAll ? root.querySelectorAll('[data-i18n]') : [];
    i18nElements.forEach((el) => {
      const key = el.getAttribute('data-i18n');
      if (!key) return;
      if (!el.hasAttribute('data-i18n-orig-text')) {
        el.setAttribute('data-i18n-orig-text', el.textContent.trim());
      }
      if (targetLang === 'kr') {
        const orig = el.getAttribute('data-i18n-orig-text');
        el.textContent = DICTIONARIES.kr.keys[key] || orig || el.textContent;
      } else {
        el.textContent = this.t(key, targetLang);
      }
    });

    // 2. Attributes: placeholder, aria-label, title, label, alt
    const attrNames = ['placeholder', 'aria-label', 'title', 'label', 'alt'];
    if (root.querySelectorAll) {
      const selector = attrNames.map((a) => `[${a}], [data-i18n-${a}]`).join(', ');
      const attrElements = root.querySelectorAll(selector);
      attrElements.forEach((el) => {
        attrNames.forEach((attr) => {
          const explicitKey = el.getAttribute(`data-i18n-${attr}`);
          const origAttrName = `data-i18n-orig-${attr}`;
          const currentVal = el.getAttribute(attr);

          if (currentVal !== null && !el.hasAttribute(origAttrName)) {
            el.setAttribute(origAttrName, currentVal);
          }

          const origVal = el.getAttribute(origAttrName);
          if (explicitKey) {
            el.setAttribute(
              attr,
              targetLang === 'kr' ? (origVal || this.t(explicitKey, 'kr')) : this.t(explicitKey, targetLang)
            );
          } else if (origVal) {
            el.setAttribute(
              attr,
              targetLang === 'kr' ? origVal : translateTextSync(origVal, targetLang)
            );
          }
        });
      });
    }

    // 3. Walk all text nodes for automatic dictionary & pattern translation
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
      acceptNode(node) {
        const parent = node.parentElement;
        if (!parent) return NodeFilter.FILTER_REJECT;
        const tag = parent.tagName;
        if (tag === 'SCRIPT' || tag === 'STYLE' || tag === 'NOSCRIPT' || tag === 'TEXTAREA' || tag === 'CODE' || tag === 'PRE') {
          return NodeFilter.FILTER_REJECT;
        }
        if (parent.hasAttribute('data-i18n') || parent.hasAttribute('data-no-i18n')) {
          return NodeFilter.FILTER_REJECT;
        }
        if (!node.nodeValue || !node.nodeValue.trim()) {
          return NodeFilter.FILTER_REJECT;
        }
        return NodeFilter.FILTER_ACCEPT;
      },
    });

    const textNodes = [];
    let currentNode = walker.nextNode();
    while (currentNode) {
      textNodes.push(currentNode);
      currentNode = walker.nextNode();
    }

    textNodes.forEach((node) => {
      if (!originalTextNodeMap.has(node)) {
        const rawVal = node.nodeValue;
        const match = rawVal ? rawVal.match(/^(\s*)([\s\S]*?)(\s*)$/) : null;
        const canonicalVal = match
          ? `${match[1]}${this.toKorean(match[2])}${match[3]}`
          : rawVal;
        originalTextNodeMap.set(node, canonicalVal);
      }
      const origText = originalTextNodeMap.get(node);
      if (targetLang === 'kr') {
        if (node.nodeValue !== origText) {
          node.nodeValue = origText;
        }
      } else {
        const translated = translateTextSync(origText, targetLang);
        if (node.nodeValue !== translated) {
          node.nodeValue = translated;
        }
      }
    });
  },

  /**
   * Synchronize all language radio buttons and dropdown button labels
   */
  syncLanguageControls(root = document.body, lang = this.currentLang) {
    if (!root || !root.querySelectorAll) return;
    const targetLang = (lang || this.getLanguage()).toLowerCase();
    const meta = LANGUAGE_META[targetLang] || LANGUAGE_META[DEFAULT_LANG];

    // 1. Sync mobile filter.html language radios & PC languageSelect.html radios
    const langInputs = root.querySelectorAll(
      'input[name="filter-radio-language"], input[name="radio-languageSelect"], input[data-lang-switch]'
    );
    langInputs.forEach((input) => {
      const inputLang = this._resolveInputLang(input);
      if (inputLang) {
        input.checked = inputLang === targetLang;
      }
    });

    // 2. Sync PC header language dropdown button text (e.g. KR / EN)
    const langDropdownBtns = document.querySelectorAll('[data-dropdown-button="languageSelect"] .btn-text');
    langDropdownBtns.forEach((span) => {
      span.textContent = meta.label;
    });
  },

  /**
   * Resolve language code from a radio/button element
   */
  _resolveInputLang(el) {
    if (!el) return null;
    const dataLang = el.getAttribute('data-lang') || el.getAttribute('data-lang-switch');
    if (dataLang && LANGUAGE_META[dataLang.toLowerCase()]) {
      return dataLang.toLowerCase();
    }
    const val = (el.value || '').trim().toLowerCase();
    if (val && LANGUAGE_META[val]) {
      return val;
    }
    if (el.id === 'filter-radio-language1-1' || el.id === 'radio-languageSelect-1') return 'kr';
    if (el.id === 'filter-radio-language1-2' || el.id === 'radio-languageSelect-2') return 'en';

    // Check associated label text
    if (el.id) {
      const label = document.querySelector(`label[for="${el.id}"]`);
      if (label) {
        const labelText = label.textContent.trim().toLowerCase();
        if (labelText === 'kr' || labelText === 'ko') return 'kr';
        if (labelText === 'en') return 'en';
        if (LANGUAGE_META[labelText]) return labelText;
      }
    }
    return null;
  },

  /**
   * Initialize event delegation and DOM observer
   */
  init() {
    this.currentLang = this.getLanguage();

    if (!this._initialized) {
      this._initialized = true;

      // Delegate change events for language radio inputs (filter.html, languageSelect.html, etc.)
      document.addEventListener(
        'change',
        (e) => {
          const target = e.target;
          if (!target) return;
          if (
            target.name === 'filter-radio-language' ||
            target.name === 'radio-languageSelect' ||
            target.hasAttribute('data-lang-switch')
          ) {
            const lang = this._resolveInputLang(target);
            if (lang) {
              this.setLanguage(lang);
            }
          }
        },
        true
      );

      // Delegate click events for any [data-lang-switch] buttons
      document.addEventListener('click', (e) => {
        const btn = e.target.closest ? e.target.closest('[data-lang-switch]') : null;
        if (btn && btn.tagName !== 'INPUT') {
          const lang = this._resolveInputLang(btn);
          if (lang) {
            this.setLanguage(lang);
          }
        }
      });

      // Listen for localStorage changes across iframes/tabs (e.g., markup-list.html preview iframe)
      window.addEventListener('storage', (e) => {
        if (e.key === STORAGE_KEY && e.newValue) {
          this.setLanguage(e.newValue);
        }
      });

      // Observe dynamic DOM additions (dialogs, dropdowns, tabs, timeline)
      if (typeof MutationObserver !== 'undefined' && document.body) {
        this._observer = new MutationObserver((mutations) => {
          const currentLang = this.getLanguage();
          for (const mutation of mutations) {
            if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
              mutation.addedNodes.forEach((node) => {
                if (node.nodeType === Node.ELEMENT_NODE) {
                  if (currentLang !== 'kr') {
                    this.translateRoot(node, currentLang);
                  }
                  this.syncLanguageControls(node, currentLang);
                } else if (node.nodeType === Node.TEXT_NODE && node.parentElement) {
                  this.translateRoot(node.parentElement, currentLang);
                }
              });
            }
          }
        });
        this._observer.observe(document.body, {
          childList: true,
          subtree: true,
        });
      }
    }

    // Apply current language on init
    this.setLanguage(this.currentLang);
  },
};
