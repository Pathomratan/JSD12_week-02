use("sample_mflix");

db.movies.find(
{
    year: 1995,              // condition #1
    genres: "Action"         // condition #2  → implicit AND
  },
  { _id: 0, title: 1, year: 1, genres: 1 }   // projection
);

//db.movies.find(
  {
    $or: [
      { languages: "French" },
      { languages: "Spanish" }
    ]
  },
  { _id: 0, title: 1, languages: 1 }
);

db.movies.find(
  {
    year: { $gt: 2010 },                         
    $or: [
      { genres: "Drama" },                       
      { "imdb.rating": { $gte: 8 } }             
    ]
  },
  { _id: 0, title: 1, year: 1, genres: 1, "imdb.rating": 1 }
).limit(10);
