(function(){
    angular.module('soupebolApp').factory('foodService',[foodService]);

    function foodService(){
        return{
            getAllFood:function(){
                return getAllFood();
            },
            getAllCategories:function(){

            },
            getFoodById:function(){

            }
        }
    }

    function getAllFood(){

        var allFood=
        [
            {
                "food": {
                    "id": 2,
                    "name": "Green papaya salad with grilled beef",
                    "nameF": "Salade de papaye verte avec goeuf grillé",
                    "categoryId": 1
                }, "categoryId": 1, "categoryName": "Appetizers", "categoryNameF": "Entrées"
            }, {
                "food": {
                    "id": 3,
                    "name": "Cold Spring rolls (shrimp and chicken)",
                    "nameF": "Rouleaux de printemps froid(crevettes et poulet)",
                    "categoryId": 1
                }, "categoryId": 1, "categoryName": "Appetizers", "categoryNameF": "Entrées"
            }, {
                "food": {
                    "id": 4,
                    "name": "Imperial rolls (minced chicken and vegetables)",
                    "nameF": "Rouleaux impériaux (poulet émincé et légumes)",
                    "categoryId": 1
                }, "categoryId": 1, "categoryName": "Appetizers", "categoryNameF": "Entrées"
            }, {
                "food": {"id": 5, "name": "Fried vegetable rolls", "nameF": "Rouleaux frits aux légumes", "categoryId": 1},
                "categoryId": 1,
                "categoryName": "Appetizers",
                "categoryNameF": "Entrées"
            }, {
                "food": {"id": 6, "name": "Hunan dumplings", "nameF": "Raviolis à la sauce Hunan", "categoryId": 1},
                "categoryId": 1,
                "categoryName": "Appetizers",
                "categoryNameF": "Entrées"
            }, {
                "food": {"id": 41, "name": "Salt & pepper tofu", "nameF": "Tofu sel et poivre", "categoryId": 1},
                "categoryId": 1,
                "categoryName": "Appetizers",
                "categoryNameF": "Entrées"
            }, {
                "food": {
                    "id": 9,
                    "name": "Rare beef Tonkinese soup",
                    "nameF": "Soupe tonkinoise au boeuf saignant",
                    "categoryId": 2
                }, "categoryId": 2, "categoryName": "Soup and Noodles", "categoryNameF": "Soupe et Nuilles"
            }, {
                "food": {"id": 11, "name": "Chicken Tonkinese soup", "nameF": "Soupe tonkinoise au poulet", "categoryId": 2},
                "categoryId": 2,
                "categoryName": "Soup and Noodles",
                "categoryNameF": "Soupe et Nuilles"
            }, {
                "food": {"id": 12, "name": "Seafood noodle soup", "nameF": "Soupe aux fruits de mer", "categoryId": 2},
                "categoryId": 2,
                "categoryName": "Soup and Noodles",
                "categoryNameF": "Soupe et Nuilles"
            }, {
                "food": {
                    "id": 13,
                    "name": "Vegetable noodle soup (chicken soup base)",
                    "nameF": "Soupe aux légumes (bouillon de poulet)",
                    "categoryId": 2
                }, "categoryId": 2, "categoryName": "Soup and Noodles", "categoryNameF": "Soupe et Nuilles"
            }, {
                "food": {"id": 14, "name": "Wonton noodle soup", "nameF": "Soupe wonton et nouilles", "categoryId": 2},
                "categoryId": 2,
                "categoryName": "Soup and Noodles",
                "categoryNameF": "Soupe et Nuilles"
            }, {
                "food": {
                    "id": 15,
                    "name": "Chicken Tom Yam noodle soup",
                    "nameF": "Soupe Tom yam au poulet et nouilles",
                    "categoryId": 2
                }, "categoryId": 2, "categoryName": "Soup and Noodles", "categoryNameF": "Soupe et Nuilles"
            }, {
                "food": {
                    "id": 16,
                    "name": "Seafood Tom Yam noodle soup",
                    "nameF": "Soupe Tom yam aux fruits de mer et nouilles",
                    "categoryId": 2
                }, "categoryId": 2, "categoryName": "Soup and Noodles", "categoryNameF": "Soupe et Nuilles"
            }, {
                "food": {
                    "id": 21,
                    "name": "Grilled shrimp with vermicelli",
                    "nameF": "Crevettes grillées avec vermicelles",
                    "categoryId": 3
                }, "categoryId": 3, "categoryName": "Grilled", "categoryNameF": "Grillades"
            }, {
                "food": {
                    "id": 22,
                    "name": "Grilled chicken with vermicelli",
                    "nameF": "Poulet grillé avec vermicelles",
                    "categoryId": 3
                }, "categoryId": 3, "categoryName": "Grilled", "categoryNameF": "Grillades"
            }, {
                "food": {
                    "id": 23,
                    "name": "Grilled beef with vermicelli",
                    "nameF": "Boeuf grillé avec vermicelles",
                    "categoryId": 3
                }, "categoryId": 3, "categoryName": "Grilled", "categoryNameF": "Grillades"
            }, {
                "food": {
                    "id": 24,
                    "name": "Grilled shrimp with steamed rice",
                    "nameF": "Crevettes grillées avec riz vapeur",
                    "categoryId": 3
                }, "categoryId": 3, "categoryName": "Grilled", "categoryNameF": "Grillades"
            }, {
                "food": {
                    "id": 25,
                    "name": "Grilled chicken with steamed rice",
                    "nameF": "Poulet grillé avec riz vapeur",
                    "categoryId": 3
                }, "categoryId": 3, "categoryName": "Grilled", "categoryNameF": "Grillades"
            }, {
                "food": {
                    "id": 26,
                    "name": "Grilled beef with steamed rice",
                    "nameF": "Boeuf grillé avec riz vapeur",
                    "categoryId": 3
                }, "categoryId": 3, "categoryName": "Grilled", "categoryNameF": "Grillades"
            }, {
                "food": {"id": 27, "name": "General Tao chicken", "nameF": "Poulet General Tao", "categoryId": 4},
                "categoryId": 4,
                "categoryName": "Meals",
                "categoryNameF": "Repas"
            }, {
                "food": {
                    "id": 28,
                    "name": "Stir-fried chicken with mixed vegetables",
                    "nameF": "Poulet et légumes assortis sautés",
                    "categoryId": 4
                }, "categoryId": 4, "categoryName": "Meals", "categoryNameF": "Repas"
            }, {
                "food": {"id": 29, "name": "Crispy lemon chicken", "nameF": "Poulet croustillan au citron", "categoryId": 4},
                "categoryId": 4,
                "categoryName": "Meals",
                "categoryNameF": "Repas"
            }, {
                "food": {"id": 30, "name": "Stir-fried beef and broccoli", "nameF": "Boeuf sauté au brocoli", "categoryId": 4},
                "categoryId": 4,
                "categoryName": "Meals",
                "categoryNameF": "Repas"
            }, {
                "food": {"id": 31, "name": "Szechuan style shrimp", "nameF": "Crevettes à la széchuan", "categoryId": 4},
                "categoryId": 4,
                "categoryName": "Meals",
                "categoryNameF": "Repas"
            }, {
                "food": {
                    "id": 32,
                    "name": "Szechuan pepper shrimp",
                    "nameF": "Crevettes à la széchuan aux poivrons",
                    "categoryId": 4
                }, "categoryId": 4, "categoryName": "Meals", "categoryNameF": "Repas"
            }, {
                "food": {
                    "id": 33,
                    "name": "Stir-fried shrimp with mixed vegetables",
                    "nameF": "Crevettes et légumes assortis sautés",
                    "categoryId": 4
                }, "categoryId": 4, "categoryName": "Meals", "categoryNameF": "Repas"
            }, {
                "food": {"id": 42, "name": "General Tao vegetarian", "nameF": "Végétarien General Tao", "categoryId": 4},
                "categoryId": 4,
                "categoryName": "Meals",
                "categoryNameF": "Repas"
            }, {
                "food": {"id": 43, "name": "Black pepper beef", "nameF": "Boeuf au poivre noir", "categoryId": 4},
                "categoryId": 4,
                "categoryName": "Meals",
                "categoryNameF": "Repas"
            }, {
                "food": {
                    "id": 34,
                    "name": "Canonese Chow Mein (with chicken & shrimp)",
                    "nameF": "Chow Mein à la cantonnaise (poulet et crevettes)",
                    "categoryId": 5
                }, "categoryId": 5, "categoryName": "Speciallities", "categoryNameF": "Spécialités"
            }, {
                "food": {"id": 38, "name": "Vegetable fried rice", "nameF": "Riz frit aux légumes", "categoryId": 5},
                "categoryId": 5,
                "categoryName": "Speciallities",
                "categoryNameF": "Spécialités"
            }, {
                "food": {"id": 39, "name": "Thai style fried rice", "nameF": "Riz frit style Thaï", "categoryId": 5},
                "categoryId": 5,
                "categoryName": "Speciallities",
                "categoryNameF": "Spécialités"
            }, {
                "food": {
                    "id": 40,
                    "name": "House fried rice (chicken and shrimp)",
                    "nameF": "Riz frit maison (poulet et crevettes)",
                    "categoryId": 5
                }, "categoryId": 5, "categoryName": "Speciallities", "categoryNameF": "Spécialités"
            }, {
                "food": {"id": 51, "name": "Green tea", "nameF": "Thé vert", "categoryId": 6},
                "categoryId": 6,
                "categoryName": "Beverages",
                "categoryNameF": "Breuvages"
            }, {
                "food": {"id": 52, "name": "Perrier", "nameF": "Perrier", "categoryId": 6},
                "categoryId": 6,
                "categoryName": "Beverages",
                "categoryNameF": "Breuvages"
            }, {
                "food": {
                    "id": 54,
                    "name": "Coke, Diet Coke, Ginger Ale and Sprite (can)",
                    "nameF": "Coke, Coke diète, Ginger Ale et 7up (cannette)",
                    "categoryId": 6
                }, "categoryId": 6, "categoryName": "Beverages", "categoryNameF": "Breuvages"
            }, {
                "food": {"id": 55, "name": "Virgin Caesar", "nameF": "César sans alcool", "categoryId": 6},
                "categoryId": 6,
                "categoryName": "Beverages",
                "categoryNameF": "Breuvages"
            }, {
                "food": {"id": 56, "name": "Virgin Colada", "nameF": "Colada sans alcool", "categoryId": 6},
                "categoryId": 6,
                "categoryName": "Beverages",
                "categoryNameF": "Breuvages"
            }, {
                "food": {"id": 57, "name": "Lychees", "nameF": "Lychees", "categoryId": 6},
                "categoryId": 6,
                "categoryName": "Beverages",
                "categoryNameF": "Breuvages"
            }, {
                "food": {
                    "id": 58,
                    "name": "Fried banana with ice cream",
                    "nameF": "Banane Frite avec crème glacée",
                    "categoryId": 6
                }, "categoryId": 6, "categoryName": "Beverages", "categoryNameF": "Breuvages"
            }, {
                "food": {"id": 59, "name": "Ice cream", "nameF": "Crème glacée", "categoryId": 6},
                "categoryId": 6,
                "categoryName": "Beverages",
                "categoryNameF": "Breuvages"
            }];
        return allFood;
    }
})();
