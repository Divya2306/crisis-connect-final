const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/medical_main');
const doctor = mongoose.model('doctors', {doctor_id: Number,name: String,speciality: String, hospital: String, state: String, contact: Number});
const doctors=[{doctor_id: 101,name: "Dr. Hrithik Bhagat",speciality: "Heart Surgeon",hospital: "Max Hospital", state: "Delhi",contact: 9839012378},
{doctor_id: 102,name: "Dr. Hrithik Bhagat",speciality: "Cardiac Surgeon",hospital: "Fortis Escorts", state: "Delhi",contact: 9889012378},
{doctor_id: 103,name: "Dr. Dhruv Gupta",speciality: "Neurologist",hospital: "Deen Dayal Upadhyaya Hospital", state: "Delhi",contact: 9839012314},
{doctor_id: 104,name: "Dr. Kushagra Bansal",speciality: "Orthopedist",hospital: "madan mohan hospital", state: "Delhi",contact: 8721312378},
{doctor_id: 105,name: "Dr. Srishti Garg",speciality: "oncologist",hospital: "Max Hospital", state: "Delhi",contact: 9839679018},
{doctor_id: 106,name: "Dr. Divya",speciality: "psychiatrist",hospital: "Lok Nayak Hospital", state: "Delhi",contact: 9839012314},
{doctor_id: 107,name: "Dr. Nancy Soni",speciality: "cardiac Surgeon",hospital: "Kamla Nehru", state: "Himachal Pradesh",contact: 8878012378},
{doctor_id: 108,name: "Dr. Mohit Garg",speciality: "orthpedist Surgeon",hospital: "Surya Hospital", state: "Himachal Pradesh",contact: 8809012378},
{doctor_id: 109,name: "Dr. Chiranshu Agarwal",speciality: "Neurologist",hospital: "Fortis Hospital Kangra", state: "Himachal Pradesh",contact: 9839456178},
{doctor_id: 110,name: "Dr. Kamal Garg",speciality: "Oncologist",hospital: "Kullu Valley Hospital", state: "Himachal Pradesh",contact: 98457812378},
{doctor_id: 111,name: "Dr. Shivam Singh",speciality: "Cardiac Surgeon",hospital: "Kamla Nehru Hospital", state: "Himachal Pradesh",contact: 8675012378},
{doctor_id: 112,name: "Dr. Rythm Srivastava",speciality: "Neurologist",hospital: "Surya Hospital", state: "Himachal Pradesh",contact: 8907012378},
{doctor_id: 113,name: "Dr. Hrithika Bhagat",speciality: "Heart Surgeon",hospital: "Guru Teg Bahadur Sahib Hospital", state: "Punjab",contact: 9839012378},
{doctor_id: 114,name: "Dr. Dhruv Aggarwal",speciality: "Heart Surgeon",hospital: "Silver Oaks Hospital", state: "Punjab",contact: 9839012378},
{doctor_id: 115,name: "Dr. Gopal Singh",speciality: "Neurologist",hospital: "Fortis Hospital", state: "Punjab",contact: 9834567678},
{doctor_id: 116,name: "Dr. Hritik Gupta",speciality: "ENT",hospital: "DMC Ludhiana Hospital", state: "Punjab",contact: 9839012378},
{doctor_id: 117,name: "Dr. Kushagra Sharma",speciality: "Dermatologist",hospital: "Civil Hospital", state: "Punjab",contact: 9839045678},
{doctor_id: 118,name: "Dr. Himanshu soin",speciality: "Heart Surgeon",hospital: "Kalra Multi Speciality Hospital", state: "Punjab",contact: 9839012378},
{doctor_id: 119,name: "Dr. Chiranshu Gupta",speciality: "psychiatrist",hospital: "Aykai Hospital", state: "Punjab",contact: 9839016189},
{doctor_id: 120,name: "Dr. Keshav Rana",speciality: "Anesthesiologists",hospital: "Apollo Hospital", state: "Gujarat",contact: 6306782378},
{doctor_id: 121,name: "Dr. Shivangi Joshi",speciality: "Cardiologists",hospital: "Ashaktashram Hospital", state: "Gujarat",contact: 9839037878},
{doctor_id: 122,name: "Dr. Dhritika",speciality: "Heart Surgeon",hospital: "Panchshil Hospital", state: "Gujarat",contact: 9820568378},
{doctor_id: 123,name: "Dr. Kamal Dixit",speciality: "Neurologist",hospital: "Maitreya Hospital", state: "Gujarat",contact: 9812084378},
{doctor_id: 124,name: "Dr. Aibad Khan",speciality: "ENT",hospital: "Orkid Hospital", state: "Gujarat",contact: 9856923758},
{doctor_id: 125,name: "Dr. Divya Malhotra",speciality: "Dermatologist",hospital: "Lifeline Multispeciality Hospital", state: "Gujarat",contact: 9805602378}];
doctor.collection.insertMany(doctors, function (err, docs) {
    if (err){
        return console.error(err);
    } else {
      console.log("Multiple documents inserted to Collection");
    }
  });
