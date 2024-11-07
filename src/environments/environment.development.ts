export const environment = {
    production:false,
    firebaseConfig : {
        apiKey: "AIzaSyAB21C_rA7ntbgLsB_VGJQqhxdc5kHmjd4",
        authDomain: "recetario-fda97.firebaseapp.com",
        projectId: "recetario-fda97",
        storageBucket: "recetario-fda97.firebasestorage.app",
        messagingSenderId: "674284180019",
        appId: "1:674284180019:web:d1dc68cb61bc879b808946",
        measurementId: "G-0RJ0RVGX1N"
      },
    api:{
        nationalities:'https://www.themealdb.com/api/json/v1/1/list.php?a=list',
        categories:'https://www.themealdb.com/api/json/v1/1/list.php?c=list',
        listByCategory:'https://www.themealdb.com/api/json/v1/1/filter.php?c=',
        listByNationality:'https://www.themealdb.com/api/json/v1/1/filter.php?a=',
        viewRecipe:'https://www.themealdb.com/api/json/v1/1/lookup.php?i='
    }
};
