use("sample_mflix");

//db.movies.find({}).sort( { runtime : -1 }).limit(5)
//db.movies.find({ runtime : { $lt: 60 } }) .sort( { runtime : -1 }).limit(5)
//db.movies.find({ year : { $gt: 1954 , $lt: 1966 } }) .sort( { year : 1 }).limit(3)

db.movies.aggregate([
{
    $match: {
        year: { $gt: 1954 , $lt: 1966 }
    }
},
{
    $sort: {
        year: 1
    }
},
{
    $limit: 3
}
]);

//db.movies.find({ released: { $gte: ISODate("1995-01-01T00:00:00Z") , $lt: ISODate("2000-01-01T00:00:00Z") } }).count()