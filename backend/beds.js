const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/medical_main');

const bed = mongoose.model('beds', {Hospital_id: Number,name: String,tot_free_beds: Number, tot_freeCritical_beds: Number, tot_freeNonCritical_Beds: Number,price: String, contact: Number,state: String,latitude: Number,longitude: Number});
const beds=[{Hospital_id: 1,name: "Adarsh Hospital" ,tot_free_beds: 25,tot_freeCritical_beds:8,tot_freeNonCritical_Beds:17,price:"8000-10000",contact: 8141405248,state:"Gujarat",latitude:18.4652,longitude:73.8355},
{Hospital_id: 2,name: "Apollo Hospital" ,tot_free_beds: 50,tot_freeCritical_beds:15,tot_freeNonCritical_Beds:35,price:"10000-12000",contact: 7966701800,state:"Gujarat",latitude:23.2156,longitude:72.6369},
{Hospital_id: 3,name: "Ashaktashram Hospital" ,tot_free_beds: 40,tot_freeCritical_beds:11,tot_freeNonCritical_Beds:29,price:"12000-13000",contact:2612422060,state:"Gujarat",latitude:21.2090,longitude:72.8311},
{Hospital_id: 4,name: "Panchshil Hospital" ,tot_free_beds: 20,tot_freeCritical_beds:5,tot_freeNonCritical_Beds:15,price:"6000-8000",contact:  9925463483,state:"Gujarat",latitude:23.0941,longitude:72.5896},
{Hospital_id: 5,name: "Maitreya Hospital" ,tot_free_beds: 47,tot_freeCritical_beds:15,tot_freeNonCritical_Beds:32,price:"9000-10000",contact: 8238229900,state:"Gujarat",latitude:21.1538,longitude:72.7783},
{Hospital_id: 6,name: "Orkid Hospital" ,tot_free_beds: 33,tot_freeCritical_beds:13,tot_freeNonCritical_Beds:20,price:"12000-13000",contact: 1145644500,state:"Gujarat",latitude:20.6174,longitude:72.9289},
{Hospital_id: 7,name: "Lifeline Multispeciality Hospital" ,tot_free_beds: 50,tot_freeCritical_beds:20,tot_freeNonCritical_Beds:30,price:"13000-14000",contact: 9099733366,state:"Gujarat",latitude:21.2156,longitude:72.7920},
{Hospital_id: 8,name: "Jeevan Raksha Hospital" ,tot_free_beds: 32,tot_freeCritical_beds:16,tot_freeNonCritical_Beds:16,price:"5000-9000",contact: 181236666,state:"Gujarat",latitude:28.01505,longitude:73.3342},
{Hospital_id: 9,name: "C J Hospital" ,tot_free_beds: 15,tot_freeCritical_beds:5,tot_freeNonCritical_Beds:10,price:"5000-8000",contact: 2752220882,state:"Gujarat",latitude:22.7290,longitude:71.6341},
{Hospital_id: 10,name: "Medico Multi Speciality Hospital" ,tot_free_beds: 23,tot_freeCritical_beds:13,tot_freeNonCritical_Beds:10,price:"8000-10000",contact: 2752221008,state:"Gujarat",latitude:21.1829,longitude: 72.8315},

{Hospital_id: 11,name: "Max Speciality Hospital" ,tot_free_beds: 25,tot_freeCritical_beds:8,tot_freeNonCritical_Beds:17,price:"8000-10000",contact: 9355020370,state:"Delhi",latitude:28.6329,longitude:77.3090},
{Hospital_id: 12,name: "Max Saket Hospital" ,tot_free_beds: 50,tot_freeCritical_beds:15,tot_freeNonCritical_Beds:35,price:"10000-12000",contact: 1126515050,state:"Delhi",latitude:28.5275,longitude:77.2120},
{Hospital_id: 13,name: "Rajiv Gandhi Super Speciality Hospital" ,tot_free_beds: 45,tot_freeCritical_beds:20,tot_freeNonCritical_Beds:25,price:"14000-16000",contact: 1122890604,state:"Delhi",latitude:28.6894,longitude:77.3164},
{Hospital_id: 14,name: "Fortis Escorts Hospital" ,tot_free_beds: 36,tot_freeCritical_beds:18,tot_freeNonCritical_Beds:18,price:"18000-20000",contact: 7669584409,state:"Delhi",latitude:28.5607,longitude:77.2739},
{Hospital_id: 15,name: "Madan Mohan Malviya Hospital" ,tot_free_beds: 57,tot_freeCritical_beds:23,tot_freeNonCritical_Beds:34,price:"2000-4000",contact: 1126689999,state:"Delhi",latitude:28.5353,longitude:77.2138},
{Hospital_id: 16,name: "Lok Nayak Hospital" ,tot_free_beds: 78,tot_freeCritical_beds:47,tot_freeNonCritical_Beds:31,price:"2000-4000",contact: 1123232400,state:"Delhi",latitude:28.6389,longitude:77.2382},
{Hospital_id: 17,name: "AIIMS Delhi Hospital" ,tot_free_beds: 67,tot_freeCritical_beds:30,tot_freeNonCritical_Beds:37,price:"8000-10000",contact: 1126588500,state:"Delhi",latitude:28.5672,longitude:77.2100},
{Hospital_id: 18,name: "Indraprastha Apollo Hospital" ,tot_free_beds: 91,tot_freeCritical_beds:55,tot_freeNonCritical_Beds:36,price:"6000-8000",contact: 1126925858,state:"Delhi",latitude:28.5413,longitude:77.2832},
{Hospital_id: 19,name: "Deen Dayal Upadhyaya Hospital" ,tot_free_beds: 88,tot_freeCritical_beds:41,tot_freeNonCritical_Beds:47,price:"4000-8000",contact: 1125400336,state:"Delhi",latitude:28.6280,longitude:1123},
{Hospital_id: 20,name: "Lal Bahadur Speciality Hospital" ,tot_free_beds: 26,tot_freeCritical_beds:9,tot_freeNonCritical_Beds:17,price:"8000-10000",contact: 9355020370,state:"Delhi",latitude:28.6182,longitude:77.3120},

{Hospital_id: 21,name: "Fortis Hospital Kangra" ,tot_free_beds: 25,tot_freeCritical_beds:8,tot_freeNonCritical_Beds:17,price:"8000-10000",contact: 9567234154,state:"Himachal Pradesh",latitude:28.1160,longitude:77.2821},
{Hospital_id: 22,name: "Kamla Nehru Hospital" ,tot_free_beds: 50,tot_freeCritical_beds:15,tot_freeNonCritical_Beds:35,price:"10000-12000",contact: 1126515050,state:"Himachal Pradesh",latitude:28.4590,longitude:77.8614},
{Hospital_id: 23,name: "Surya Hospital Nurpur" ,tot_free_beds: 45,tot_freeCritical_beds:20,tot_freeNonCritical_Beds:25,price:"14000-16000",contact: 1122890604,state:"Himachal Pradesh",latitude:32.2075,longitude:75.9115},
{Hospital_id: 24,name: "kullu valley" ,tot_free_beds: 36,tot_freeCritical_beds:18,tot_freeNonCritical_Beds:18,price:"18000-20000",contact: 7669584409,state:"Himachal Pradesh",latitude:31.9440,longitude:75.1101},
{Hospital_id: 25,name: "shree balaji hospital" ,tot_free_beds: 57,tot_freeCritical_beds:23,tot_freeNonCritical_Beds:34,price:"2000-4000",contact: 1126689999,state:"Himachal Pradesh",latitude:32.1149,longitude: 76.2795},
{Hospital_id: 26,name: "Delek Hospital" ,tot_free_beds: 78,tot_freeCritical_beds:47,tot_freeNonCritical_Beds:31,price:"2000-4000",contact: 1123232400,state:"Himachal Pradesh",latitude:32.2254,longitude:76.3227},
{Hospital_id: 27,name: "City Hospital" ,tot_free_beds: 67,tot_freeCritical_beds:30,tot_freeNonCritical_Beds:37,price:"8000-10000",contact: 1126588500,state:"Himachal Pradesh",latitude:32.1249,longitude:76.2957},
{Hospital_id: 28,name: "Sia Ram Hospital" ,tot_free_beds: 91,tot_freeCritical_beds:55,tot_freeNonCritical_Beds:36,price:"6000-8000",contact: 1126925858,state:"Himachal Pradesh",latitude: 31.3729,longitude:76.7491},
{Hospital_id: 29,name: "Jagriti Hospital" ,tot_free_beds: 88,tot_freeCritical_beds:41,tot_freeNonCritical_Beds:47,price:"4000-8000",contact: 1125400336,state:"Himachal Pradesh",latitude: 31.7092,longitude:76.9320},
{Hospital_id: 30,name: "Lal Bahadur Speciality Hospital" ,tot_free_beds: 26,tot_freeCritical_beds:9,tot_freeNonCritical_Beds:17,price:"8000-10000",contact: 9355020370,state:"Himachal Pradesh",latitude:31.4342,longitude:77.4183},

{Hospital_id: 31,name: "Guru Teg Bahadur Sahib Hospital" ,tot_free_beds: 25,tot_freeCritical_beds:8,tot_freeNonCritical_Beds:17,price:"8000-10000",contact: 1612453916,state:"Punjab",latitude:30.8902,longitude:75.8355},
{Hospital_id: 32,name: "Silver Oaks Hospital" ,tot_free_beds: 50,tot_freeCritical_beds:15,tot_freeNonCritical_Beds:35,price:"10000-12000",contact: 01722211303,state:"Punjab",latitude:30.71557,longitude:76.719246},
{Hospital_id: 33,name: "Fortis Hospital" ,tot_free_beds: 40,tot_freeCritical_beds:11,tot_freeNonCritical_Beds:29,price:"12000-13000",contact:161-5222222,state:"Punjab",latitude:28.4576,longitude:77.0739},
{Hospital_id: 34,name: "DMC Ludhiana Hospital" ,tot_free_beds: 20,tot_freeCritical_beds:5,tot_freeNonCritical_Beds:15,price:"6000-8000",contact: 9815555100,state:"Punjab",latitude:30.9166,longitude:75.8357},
{Hospital_id: 35,name: "Civil Hospital" ,tot_free_beds: 47,tot_freeCritical_beds:15,tot_freeNonCritical_Beds:32,price:"9000-10000",contact: 1612665003,state:"Punjab",latitude:30.9065,longitude:75.8596},
{Hospital_id: 36,name: "Kalra Multi Speciality Hospital" ,tot_free_beds: 33,tot_freeCritical_beds:13,tot_freeNonCritical_Beds:20,price:"12000-13000",contact: 8437482000,state:"Punjab",latitude:28.653767,longitude:77.14564},
{Hospital_id: 37,name: "Aykai Hospital" ,tot_free_beds: 50,tot_freeCritical_beds:20,tot_freeNonCritical_Beds:30,price:"13000-14000",contact: 1615252525,state:"Punjab",latitude:30.9078,longitude:75.8863},
{Hospital_id: 38,name: "Capitol Hospital" ,tot_free_beds: 32,tot_freeCritical_beds:16,tot_freeNonCritical_Beds:16,price:"5000-9000",contact: 181236666,state:"Punjab",latitude:31.3646,longitude:75.5969},
{Hospital_id: 39,name: "Amandeep Hospital" ,tot_free_beds: 15,tot_freeCritical_beds:5,tot_freeNonCritical_Beds:10,price:"5000-8000",contact: 7527000036,state:"Punjab",latitude:31.6345,longitude:74.8590},
{Hospital_id: 40,name: "Florem Hospital" ,tot_free_beds: 23,tot_freeCritical_beds:13,tot_freeNonCritical_Beds:10,price:"8000-10000",contact: 7710306161,state:"Punjab",latitude:31.6711,longitude:74.8943}];
bed.collection.insertMany(beds, function (err, docs) {
    if (err){ 
        return console.error(err);
    } else {
      console.log("Multiple documents inserted to Collection");
