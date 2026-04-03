use("sample_mflix");

//db.theaters.find({ "location.address.state" : "AL" }).count()
//db.theaters.find({ "location.address.city" : "Quinta" }).count()
db.theaters.findOne({ "location.address.city" : "LA Quinta" })