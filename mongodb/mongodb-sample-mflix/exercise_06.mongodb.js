use("sample_mflix");

db.movies.find({ countries: { $in: ["USA"] } , year : { $gt: 1950 , $lte: 1970 } })
//db.movies.find({ genres: { $all: ["Drama", "History"] }, released : { $gt: ISODate("1970-01-01T00:00:00Z")} }).count()
//db.movies.find({ cast: "Roy L. McCardell" }).count()
//db.movies.find({ directors: "Hal Roach" }).count()
//db.movies.find({ directors: { $in: ["Hal Roach"] } });
//db.movies.find({ directors: { $in: ["Hal Roach"] } }, { title: 1, "awards.wins": 1, _id: 0 });