exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('neighborhood').del()
    .then(() => knex('zipcode').del())
    .then(() => knex('city').del())
    .then(() => knex('metro').del())
    .then(() => knex('state').del())
    .then(() => knex('state').insert(states, '*'))
    .then(data => Promise.all(
      metros.map((metro) => {
        metro.state_id = data.find(state => state.abbr === metro.state).id;
        return knex('metro').insert(metro);
      })
    ))
};


 const states = [
  {
    collected_on: '2017-06-30',
    name: 'California',
    size_rank: 1,
    median_rent: 2438,
    monthly_change: 0.00287947346770876,
    quarterly_change: 0.0107794361525705,
    yearly_change: 0.0370055295618886,
    abbr: 'CA'
  },
  {
    collected_on: '2017-06-30',
    name: 'Texas',
    size_rank: 2,
    median_rent: 1415,
    monthly_change: 0.00283486888731396,
    quarterly_change: 0.00354609929078014,
    yearly_change: -0.00211565585331453,
    abbr: 'TX'
  },
  {
    collected_on: '2017-06-30',
    name: 'New York',
    size_rank: 3,
    median_rent: 2179,
    monthly_change: -0.00183234081539166,
    quarterly_change: -0.00683682771194166,
    yearly_change: 0.00137867647058824,
    abbr: 'NY',

  },
  {
    collected_on: '2017-06-30',
    name: 'Florida',
    size_rank: 4,
    median_rent: 1543,
    monthly_change: 0,
    quarterly_change: 0.00129785853341986,
    yearly_change: 0.017139090309822,
    abbr: 'FL',
  },
  {
    collected_on: '2017-06-30',
    name: 'Illinois',
    size_rank: 5,
    median_rent: 1467,
    monthly_change: 0.00479452054794521,
    quarterly_change: 0.00824742268041237,
    yearly_change: -0.0154362416107383,
    abbr: 'IL',

  },
  {
    collected_on: '2017-06-30',
    name: 'Pennsylvania',
    size_rank: 6,
    median_rent: 1213,
    monthly_change: 0.000825082508250825,
    quarterly_change: 0,
    yearly_change: -0.0146222583265638,
    abbr: 'PA',

  },
  {
    collected_on: '2017-06-30',
    name: 'Ohio',
    size_rank: 7,
    median_rent: 1092,
    monthly_change: 0.00459981600735971,
    quarterly_change: 0.0120481927710843,
    yearly_change: 0.00459981600735971,
    abbr: 'OH',

  },
  {
    collected_on: '2017-06-30',
    name: 'Michigan',
    size_rank: 8,
    median_rent: 1109,
    monthly_change: -0.000900900900900901,
    quarterly_change: -0.0018001800180018,
    yearly_change: 0.0259019426456984,
    abbr: 'MI',
  },
  {
    collected_on: '2017-06-30',
    name: 'Georgia',
    size_rank: 9,
    median_rent: 1222,
    monthly_change: 0.00576131687242798,
    quarterly_change: 0.0115894039735099,
    yearly_change: 0.0208855472013367,
    abbr: 'GA',
  },
  {
    collected_on: '2017-06-30',
    name: 'North Carolina',
    size_rank: 10,
    median_rent: 1162,
    monthly_change: 0.00345423143350604,
    quarterly_change: 0.00606060606060606,
    yearly_change: 0.00780572419774501,
    abbr: 'NC',

  },
  {
    collected_on: '2017-06-30',
    name: 'New Jersey',
    size_rank: 11,
    median_rent: 2037,
    monthly_change: 0.000491159135559921,
    quarterly_change: 0.000491159135559921,
    yearly_change: -0.000490677134445535,
    abbr: 'NJ',

  },
  {
    collected_on: '2017-06-30',
    name: 'Virginia',
    size_rank: 12,
    median_rent: 1491,
    monthly_change: 0.000671140939597315,
    quarterly_change: 0.00336473755047106,
    yearly_change: 0.000671140939597315,
    abbr: 'VA',

  },
  {
    collected_on: '2017-06-30',
    name: 'Washington',
    size_rank: 13,
    median_rent: 1736,
    monthly_change: 0.00696055684454756,
    quarterly_change: 0.0181818181818182,
    yearly_change: 0.0624235006119951,
    abbr: 'WA',
  },
  {
    collected_on: '2017-06-30',
    name: 'Massachusetts',
    size_rank: 14,
    median_rent: 2181,
    monthly_change: 0.00275862068965517,
    quarterly_change: 0.00692520775623269,
    yearly_change: 0.0244246124941287,
    abbr: 'MA',
  },
  {
    collected_on: '2017-06-30',
    name: 'Indiana',
    size_rank: 15,
    median_rent: 1084,
    monthly_change: 0.0037037037037037,
    quarterly_change: 0.00743494423791822,
    yearly_change: 0.0102516309412861,
    abbr: 'IN',
  },
  {
    collected_on: '2017-06-30',
    name: 'Arizona',
    size_rank: 16,
    median_rent: 1280,
    monthly_change: 0.00549882168106834,
    quarterly_change: 0.0142630744849445,
    yearly_change: 0.0223642172523962,
    abbr: 'AZ',
  },
  {
    collected_on: '2017-06-30',
    name: 'Tennessee',
    size_rank: 17,
    median_rent: 1124,
    monthly_change: 0.00536672629695885,
    quarterly_change: 0.0107913669064748,
    yearly_change: 0.015356820234869,
    abbr: 'TN',
  },
  {
    collected_on: '2017-06-30',
    name: 'Missouri',
    size_rank: 18,
    median_rent: 1006,
    monthly_change: 0.00199203187250996,
    quarterly_change: 0.00399201596806387,
    yearly_change: -0.00592885375494071,
    abbr: 'MO',

  },
  {
    collected_on: '2017-06-30',
    name: 'Maryland',
    size_rank: 19,
    median_rent: 1755,
    monthly_change: 0.00114090131203651,
    quarterly_change: 0,
    yearly_change: -0.00622876557191393,
    abbr: 'MD',

  },
  {
    collected_on: '2017-06-30',
    name: 'Wisconsin',
    size_rank: 20,
    median_rent: 1160,
    monthly_change: -0.00514579759862779,
    quarterly_change: -0.00599828620394173,
    yearly_change: 0.00607111882046834,
    abbr: 'WI',

  },
  {
    collected_on: '2017-06-30',
    name: 'Minnesota',
    size_rank: 21,
    median_rent: 1418,
    monthly_change: 0.00282885431400283,
    quarterly_change: 0.00997150997150997,
    yearly_change: 0.0143061516452074,
    abbr: 'MN',
  },
  {
    collected_on: '2017-06-30',
    name: 'Colorado',
    size_rank: 22,
    median_rent: 1816,
    monthly_change: 0.00498063087991146,
    quarterly_change: 0.00888888888888889,
    yearly_change: 0.0105731775180857,
    abbr: 'CO',
  },
  {
    collected_on: '2017-06-30',
    name: 'Alabama',
    size_rank: 23,
    median_rent: 994,
    monthly_change: 0.00100704934541793,
    quarterly_change: 0.00302724520686176,
    yearly_change: -0.00699300699300699,
    abbr: 'AL',

  },
  {
    collected_on: '2017-06-30',
    name: 'South Carolina',
    size_rank: 24,
    median_rent: 1196,
    monthly_change: 0.000836820083682008,
    quarterly_change: 0.00928270042194093,
    yearly_change: 0.0101351351351351,
    abbr: 'SC',
  },
  {
    collected_on: '2017-06-30',
    name: 'Louisiana',
    size_rank: 25,
    median_rent: 1262,
    monthly_change: 0.00158730158730159,
    quarterly_change: 0.00317965023847377,
    yearly_change: -0.0284834488067744,
    abbr: 'LA',

  },
  {
    collected_on: '2017-06-30',
    name: 'Kentucky',
    size_rank: 26,
    median_rent: 1042,
    monthly_change: 0,
    quarterly_change: 0.000960614793467819,
    yearly_change: 0.00968992248062015,
    abbr: 'KY',

  },
  {
    collected_on: '2017-06-30',
    name: 'Oregon',
    size_rank: 27,
    median_rent: 1645,
    monthly_change: 0.00182704019488429,
    quarterly_change: 0.0098219766728054,
    yearly_change: 0.0326428123038293,
    abbr: 'OR',
  },
  {
    collected_on: '2017-06-30',
    name: 'Oklahoma',
    size_rank: 28,
    median_rent: 947,
    monthly_change: -0.00105485232067511,
    quarterly_change: -0.00210748155953635,
    yearly_change: -0.0482412060301508,
    abbr: 'OK',

  },
  {
    collected_on: '2017-06-30',
    name: 'Connecticut',
    size_rank: 29,
    median_rent: 1699,
    monthly_change: -0.00234879624192601,
    quarterly_change: -0.00351906158357771,
    yearly_change: -0.0139291932675566,
    abbr: 'CT',

  },
  {
    collected_on: '2017-06-30',
    name: 'Iowa',
    size_rank: 30,
    median_rent: 1043,
    monthly_change: -0.000957854406130268,
    quarterly_change: 0,
    yearly_change: -0.0333642261353105,
    abbr: 'IA',

  },
  {
    collected_on: '2017-06-30',
    name: 'Mississippi',
    size_rank: 31,
    median_rent: 1039,
    monthly_change: -0.000961538461538462,
    quarterly_change: 0.00192864030858245,
    yearly_change: -0.0316868592730662,
    abbr: 'MS',

  },
  {
    collected_on: '2017-06-30',
    name: 'Arkansas',
    size_rank: 32,
    median_rent: 932,
    monthly_change: 0.0021505376344086,
    quarterly_change: 0.0021505376344086,
    yearly_change: -0.0168776371308017,
    abbr: 'AR',

  },
  {
    collected_on: '2017-06-30',
    name: 'Kansas',
    size_rank: 33,
    median_rent: 1046,
    monthly_change: 0.00191570881226054,
    quarterly_change: 0.0175097276264591,
    yearly_change: -0.00570342205323194,
    abbr: 'KS',

  },
  {
    collected_on: '2017-06-30',
    name: 'Utah',
    size_rank: 34,
    median_rent: 1450,
    monthly_change: 0.00694444444444444,
    quarterly_change: 0.013986013986014,
    yearly_change: 0.0327635327635328,
    abbr: 'UT',
  },
  {
    collected_on: '2017-06-30',
    name: 'Nevada',
    size_rank: 35,
    median_rent: 1295,
    monthly_change: 0.00154679040989946,
    quarterly_change: 0.00465477114041893,
    yearly_change: 0.018882769472856,
    abbr: 'NV',
  },
  {
    collected_on: '2017-06-30',
    name: 'New Mexico',
    size_rank: 36,
    median_rent: 1172,
    monthly_change: -0.00170357751277683,
    quarterly_change: -0.00424808836023789,
    yearly_change: -0.0118043844856661,
    abbr: 'NM',

  },
  {
    collected_on: '2017-06-30',
    name: 'West Virginia',
    size_rank: 37,
    median_rent: 900,
    monthly_change: -0.00442477876106195,
    quarterly_change: -0.00771775082690187,
    yearly_change: -0.00662251655629139,
    abbr: 'WV',

  },
  {
    collected_on: '2017-06-30',
    name: 'Nebraska',
    size_rank: 38,
    median_rent: 1251,
    monthly_change: 0.00562700964630225,
    quarterly_change: 0.00562700964630225,
    yearly_change: 0.00887096774193548,
    abbr: 'NE',

  },
  {
    collected_on: '2017-06-30',
    name: 'Idaho',
    size_rank: 39,
    median_rent: 1192,
    monthly_change: 0.004212299915754,
    quarterly_change: 0.0110262934690416,
    yearly_change: 0.0614425645592164,
    abbr: 'ID',
  },
  {
    collected_on: '2017-06-30',
    name: 'Hawaii',
    size_rank: 40,
    median_rent: 2431,
    monthly_change: -0.00082203041512536,
    quarterly_change: 0.0057923045097228,
    yearly_change: 0.0192872117400419,
    abbr: 'HI',
  },
  {
    collected_on: '2017-06-30',
    name: 'Maine',
    size_rank: 41,
    median_rent: 1353,
    monthly_change: 0.0142428785607196,
    quarterly_change: 0.0504658385093168,
    yearly_change: 0.066193853427896,
    abbr: 'ME',
  },
  {
    collected_on: '2017-06-30',
    name: 'New Hampshire',
    size_rank: 42,
    median_rent: 1625,
    monthly_change: 0.00184956843403206,
    quarterly_change: 0.00556930693069307,
    yearly_change: 0.015625,
    abbr: 'NH',
  },
  {
    collected_on: '2017-06-30',

    name: 'Rhode Island',
    size_rank: 43,
    median_rent: 1598,
    monthly_change: 0.00188087774294671,
    quarterly_change: 0,
    yearly_change: 0.00629722921914358,
    abbr: 'RI',

  },
  {
    collected_on: '2017-06-30',
    name: 'Montana',
    size_rank: 44,
    median_rent: 1247,
    monthly_change: 0.00564516129032258,
    quarterly_change: 0.0129975629569456,
    yearly_change: 0.0204582651391162,
    abbr: 'MT',
  },
  {
    collected_on: '2017-06-30',
    name: 'Delaware',
    size_rank: 45,
    median_rent: 1385,
    monthly_change: 0.00727272727272727,
    quarterly_change: 0.0131675201170446,
    yearly_change: -0.0355153203342618,
    abbr: 'DE',

  },
  {
    collected_on: '2017-06-30',
    name: 'South Dakota',
    size_rank: 46,
    median_rent: 1203,
    monthly_change: 0.00166527893422148,
    quarterly_change: 0.0212224108658744,
    yearly_change: 0.00669456066945607,
    abbr: 'SD',

  },
  {
    collected_on: '2017-06-30',
    name: 'Alaska',
    size_rank: 47,
    median_rent: 1759,
    monthly_change: 0.00170842824601367,
    quarterly_change: 0.0062929061784897,
    yearly_change: -0.0195094760312152,
    abbr: 'AK',

  },
  {
    collected_on: '2017-06-30',
    name: 'North Dakota',
    size_rank: 48,
    median_rent: 1334,
    monthly_change: 0.0175438596491228,
    quarterly_change: 0.0430023455824863,
    yearly_change: -0.0140428677014043,
    abbr: 'ND',

  },
  {
    collected_on: '2017-06-30',
    name: 'Vermont',
    size_rank: 49,
    median_rent: 1590,
    monthly_change: 0.0082435003170577,
    quarterly_change: 0.0426229508196721,
    yearly_change: 0.0205391527599487,
    abbr: 'VT',
  },
  {
    collected_on: '2017-06-30',
    name: 'District of Columbia',
    size_rank: 50,
    median_rent: 2647,
    monthly_change: 0.00493545937737282,
    quarterly_change: 0.0165130568356375,
    yearly_change: 0.0343884329816335,
    abbr: 'DC',
  },
  {
    collected_on: '2017-06-30',
    name: 'Wyoming',
    size_rank: 51,
    median_rent: 1163,
    monthly_change: -0.00342759211653813,
    quarterly_change: -0.00598290598290598,
    yearly_change: -0.0791765637371338,
    abbr: 'WY',
  },
];

 const metros = [
  {
    collected_on: '2017-06-30',
    name: 'New York, NY',
    state: 'NY',
    size_rank: 1,
    median_rent: 2376,
    monthly_change: 0.0008424599831508,
    quarterly_change: -0.00419111483654652,
    yearly_change: -0.0157415078707539,
  },
  {
    collected_on: '2017-06-30',
    name: 'Los Angeles-Long Beach-Anaheim, CA',
    state: 'CA',
    size_rank: 2,
    median_rent: 2682,
    monthly_change: 0.00562429696287964,
    quarterly_change: 0.0128398791540786,
    yearly_change: 0.0415533980582524,
  },
  {
    collected_on: '2017-06-30',
    name: 'Chicago, IL',
    state: 'IL',
    size_rank: 3,
    median_rent: 1638,
    monthly_change: 0.00429184549356223,
    quarterly_change: 0.0123609394313968,
    yearly_change: -0.00364963503649635,
  },
  {
    collected_on: '2017-06-30',
    name: 'Dallas-Fort Worth, TX',
    state: 'TX',
    size_rank: 4,
    median_rent: 1584,
    monthly_change: 0.00253164556962025,
    quarterly_change: 0.00956022944550669,
    yearly_change: 0.0285714285714286,
  },
  {
    collected_on: '2017-06-30',
    name: 'Philadelphia, PA',
    state: 'PA',
    size_rank: 5,
    median_rent: 1567,
    monthly_change: 0.00255918106206014,
    quarterly_change: 0.0012779552715655,
    yearly_change: -0.00885515496521189,
  },
];

 const cities = [
  {
    collected_on: '2017-06-30',
    name: 'New York',
    state: 'NY',
    metro: 'New York',
    county: 'Queens',
    size_rank: 0,
    median_rent: 2333,
    monthly_change: 0.00214776632302406,
    quarterly_change: 0.00214776632302406,
    yearly_change: -0.00384286934244236,
  },
  {
    collected_on: '2017-06-30',
    name: 'Los Angeles',
    state: 'CA',
    metro: 'Los Angeles-Long Beach-Anaheim',
    county: 'Los Angeles',
    size_rank: 1,
    median_rent: 2790,
    monthly_change: 0.00504322766570605,
    quarterly_change: 0.0112359550561798,
    yearly_change: 0.0391061452513966,
  },
  {
    collected_on: '2017-06-30',
    name: 'Chicago',
    state: 'IL',
    metro: 'Chicago',
    county: 'Cook',
    size_rank: 2,
    median_rent: 1642,
    monthly_change: 0.00612745098039216,
    quarterly_change: 0.0148331273176761,
    yearly_change: -0.0243612596553773,
  },
  {
    collected_on: '2017-06-30',
    name: 'Philadelphia',
    state: 'PA',
    metro: 'Philadelphia',
    county: 'Philadelphia',
    size_rank: 4,
    median_rent: 1207,
    monthly_change: -0.00165425971877585,
    quarterly_change: -0.0090311986863711,
    yearly_change: -0.00984413453650533,
  },
  {
    collected_on: '2017-06-30',
    name: 'Yonkers',
    state: 'NY',
    metro: 'New York',
    county: 'Westchester',
    size_rank: 147,
    median_rent: 2545,
    monthly_change: -0.00508209538702111,
    quarterly_change: -0.00235201881615053,
    yearly_change: 0.0208584035298837,
  },
  {
    collected_on: '2017-06-30',
    name: 'Town of Poughkeepsie',
    state: 'NY',
    metro: 'New York',
    county: 'Dutchess',
    size_rank: 435,
    median_rent: 1738,
    monthly_change: 0.00115207373271889,
    quarterly_change: 0.00753623188405797,
    yearly_change: -0.000575043128234618,
  },
  {
    collected_on: '2017-06-30',
    name: 'Long Beach',
    state: 'CA',
    metro: 'Los Angeles-Long Beach-Anaheim',
    county: 'Los Angeles',
    size_rank: 35,
    median_rent: 2423,
    monthly_change: 0.00414421881475342,
    quarterly_change: 0.0121136173767753,
    yearly_change: 0.0399141630901288,
  },
  {
    collected_on: '2017-06-30',
    name: 'Anaheim',
    state: 'CA',
    metro: 'Los Angeles-Long Beach-Anaheim',
    county: 'Orange',
    size_rank: 52,
    median_rent: 2681,
    monthly_change: 0.00562640660165041,
    quarterly_change: 0.0166856276071293,
    yearly_change: 0.0517850137308749,
  },
  {
    collected_on: '2017-06-30',
    name: 'Santa Ana',
    state: 'CA',
    metro: 'Los Angeles-Long Beach-Anaheim',
    county: 'Orange',
    size_rank: 53,
    median_rent: 2528,
    monthly_change: 0.0039714058776807,
    quarterly_change: 0.0103916866506795,
    yearly_change: 0.0247263883259019,
  },
  {
    collected_on: '2017-06-30',
    name: 'Aurora',
    state: 'IL',
    metro: 'Chicago',
    county: 'Kane',
    size_rank: 152,
    median_rent: 1537,
    monthly_change: 0.00457516339869281,
    quarterly_change: 0.00457516339869281,
    yearly_change: 0.00260926288323549,
  },
  {
    collected_on: '2017-06-30',
    name: 'Naperville',
    state: 'IL',
    metro: 'Chicago',
    county: 'Du Page',
    size_rank: 177,
    median_rent: 2342,
    monthly_change: 0.00256849315068493,
    quarterly_change: 0.00817907877744296,
    yearly_change: 0.014291901255955,
  },
  {
    collected_on: '2017-06-30',
    name: 'Joliet',
    state: 'IL',
    metro: 'Chicago',
    county: 'Will',
    size_rank: 245,
    median_rent: 1341,
    monthly_change: 0.00374251497005988,
    quarterly_change: 0.0090293453724605,
    yearly_change: -0.0303687635574837,
  },
  {
    collected_on: '2017-06-30',
    name: 'Dallas',
    state: 'TX',
    metro: 'Dallas-Fort Worth',
    county: 'Dallas',
    size_rank: 9,
    median_rent: 1412,
    monthly_change: 0.0056980056980057,
    quarterly_change: 0.0114613180515759,
    yearly_change: 0.0436067997043607,
  },
  {
    collected_on: '2017-06-30',
    name: 'Fort Worth',
    state: 'TX',
    metro: 'Dallas-Fort Worth',
    county: 'Tarrant',
    size_rank: 15,
    median_rent: 1387,
    monthly_change: 0.00144404332129964,
    quarterly_change: 0.00507246376811594,
    yearly_change: 0.0251293422025129,
  },
  {
    collected_on: '2017-06-30',
    name: 'Arlington',
    state: 'TX',
    metro: 'Dallas-Fort Worth',
    county: 'Tarrant',
    size_rank: 48,
    median_rent: 1458,
    monthly_change: 0.00344115622849277,
    quarterly_change: 0.00482425913163336,
    yearly_change: 0.023876404494382,
  },
  {
    collected_on: '2017-06-30',
    name: 'Plano',
    state: 'TX',
    metro: 'Dallas-Fort Worth',
    county: 'Collin',
    size_rank: 70,
    median_rent: 1988,
    monthly_change: 0.00556398583712696,
    quarterly_change: 0.0132517838939857,
    yearly_change: 0.017921146953405,
  },
  {
    collected_on: '2017-06-30',
    name: 'West Chester',
    state: 'PA',
    metro: 'Philadelphia',
    county: 'Chester',
    size_rank: 353,
    median_rent: 2217,
    monthly_change: 0.00180750112968821,
    quarterly_change: 0.000902934537246049,
    yearly_change: 0.00772727272727273,
  },
  {
    collected_on: '2017-06-30',
    name: 'Bensalem',
    state: 'PA',
    metro: 'Philadelphia',
    county: 'Bucks',
    size_rank: 786,
    median_rent: 1669,
    monthly_change: 0.000599520383693046,
    quarterly_change: -0.00417661097852029,
    yearly_change: 0.0090689238210399,
  },
];

 const neighborhoods = [
  {
    collected_on: '2017-06-30',
    name: 'Upper West Side',
    state: 'NY',
    metro: 'New York',
    county: 'New York',
    city: 'New York',
    size_rank: 3,
    median_rent: 3771,
    monthly_change: 0.000796178343949045,
    quarterly_change: -0.00763157894736842,
    yearly_change: -0.0656590683845392,
  },
  {
    collected_on: '2017-06-30',
    name: 'Upper East Side',
    state: 'NY',
    metro: 'New York',
    county: 'New York',
    city: 'New York',
    size_rank: 6,
    median_rent: 3489,
    monthly_change: 0.00345125107851596,
    quarterly_change: -0.00171673819742489,
    yearly_change: -0.0493188010899183,
  },
  {
    collected_on: '2017-06-30',
    name: 'Sherman Oaks',
    state: 'CA',
    metro: 'Los Angeles-Long Beach-Anaheim',
    county: 'Los Angeles',
    city: 'Los Angeles',
    size_rank: 4,
    median_rent: 3610,
    monthly_change: 0.00222098833981122,
    quarterly_change: 0.00669269380925823,
    yearly_change: 0.0264429911856696,
  },
  {
    collected_on: '2017-06-30',
    name: 'East New York',
    state: 'NY',
    metro: 'New York',
    county: 'Kings',
    city: 'New York',
    size_rank: 8,
    median_rent: 2217,
    monthly_change: -0.00627521290900941,
    quarterly_change: -0.0155417406749556,
    yearly_change: -0.0133511348464619,
  },
  {
    collected_on: '2017-06-30',
    name: 'Southeast Los Angeles',
    state: 'CA',
    metro: 'Los Angeles-Long Beach-Anaheim',
    county: 'Los Angeles',
    city: 'Los Angeles',
    size_rank: 10,
    median_rent: 2314,
    monthly_change: 0.0113636363636364,
    quarterly_change: 0.0484821024014499,
    yearly_change: 0.144977733795151,
  },
  {
    collected_on: '2017-06-30',
    name: 'Logan Square',
    state: 'IL',
    metro: 'Chicago',
    county: 'Cook',
    city: 'Chicago',
    size_rank: 63,
    median_rent: 1682,
    monthly_change: 0.00778909526662672,
    quarterly_change: 0.0187764990914597,
    yearly_change: 0.00839328537170264,
  },
  {
    collected_on: '2017-06-30',
    name: 'Oxford Circle',
    state: 'PA',
    metro: 'Philadelphia',
    county: 'Philadelphia',
    city: 'Philadelphia',
    size_rank: 120,
    median_rent: 1124,
    monthly_change: -0.000888888888888889,
    quarterly_change: -0.00706713780918728,
    yearly_change: 0.015356820234869,
  },
  {
    collected_on: '2017-06-30',
    name: 'Northeast Dallas',
    state: 'TX',
    metro: 'Dallas-Fort Worth',
    county: 'Dallas',
    city: 'Dallas',
    size_rank: 0,
    median_rent: 1736,
    monthly_change: 0.00404858299595142,
    quarterly_change: 0.00462962962962963,
    yearly_change: 0.00988947062245491,
  },
];

 const zipcodes = [
  {
    collected_on: '2017-06-30',
    name: 08030,
    state: 'NJ',
    metro: 'Philadelphia',
    county: 'Camden',
    city: 'Gloucester city',
    size_rank: 7948,
    median_rent: 1357,
    monthly_change: -0.0166666666666667,
    quarterly_change: -0.0307142857142857,
    yearly_change: 0.0311550151975684,
  },
  {
    collected_on: '2017-06-30',
    name: 10025,
    state: 'NY',
    metro: 'New York',
    county: 'New York',
    city: 'New York',
    size_rank: 0,
    median_rent: 3522,
    monthly_change: -0.0033955857385399,
    quarterly_change: -0.00732807215332582,
    yearly_change: -0.0421539298341039,
  },
  {
    collected_on: '2017-06-30',
    name: 11375,
    state: 'NY',
    metro: 'New York',
    county: 'Queens',
    city: 'New York',
    size_rank: 14,
    median_rent: 2160,
    monthly_change: -0.00277008310249307,
    quarterly_change: 0.000463177396943029,
    yearly_change: -0.0335570469798658,
  },
  {
    collected_on: '2017-06-30',
    name: 75070,
    state: 'TX',
    metro: 'Dallas-Fort Worth',
    county: 'Collin',
    city: 'McKinney',
    size_rank: 10,
    median_rent: 1928,
    monthly_change: 0.000518941359626362,
    quarterly_change: -0.00258665287118469,
    yearly_change: 0.00678851174934726,
  },
  {
    collected_on: '2017-06-30',
    name: 90250,
    state: 'CA',
    metro: 'Los Angeles-Long Beach-Anaheim',
    county: 'Los Angeles',
    city: 'Hawthorne',
    size_rank: 19,
    median_rent: 2566,
    monthly_change: 0.00666928207140055,
    quarterly_change: 0.0142292490118577,
    yearly_change: 0.0334273056786146,
  },
  {
    collected_on: '2017-06-30',
    name: 60657,
    state: 'IL',
    metro: 'Chicago',
    county: 'Cook',
    city: 'Chicago',
    size_rank: 1,
    median_rent: 1885,
    monthly_change: 0.00479744136460554,
    quarterly_change: 0.00802139037433155,
    yearly_change: -0.0421747967479675,
  },
];