CREATE TABLE [dbo].[Category] (
    [Id]    INT           NOT NULL,
    [Name]  NVARCHAR (50) NULL,
    [NameF] NVARCHAR (50) NULL,
    PRIMARY KEY CLUSTERED ([Id] ASC)
);

DELETE [dbo].[Category]

INSERT INTO [dbo].[Category] ([Id], [Name], [NameF]) VALUES (1, N'Appetizers', N'Entrées')
INSERT INTO [dbo].[Category] ([Id], [Name], [NameF]) VALUES (2, N'Soup and Noodles', N'Soupe et Nuilles')
INSERT INTO [dbo].[Category] ([Id], [Name], [NameF]) VALUES (3, N'Grilled', N'Grillades')
INSERT INTO [dbo].[Category] ([Id], [Name], [NameF]) VALUES (4, N'Meals', N'Repas')
INSERT INTO [dbo].[Category] ([Id], [Name], [NameF]) VALUES (5, N'Speciallities', N'Spécialités')
INSERT INTO [dbo].[Category] ([Id], [Name], [NameF]) VALUES (6, N'Beverages', N'Breuvages')

CREATE TABLE [dbo].[Food] (
    [Id]         INT           NOT NULL,
    [Name]       NVARCHAR (50) NULL,
    [NameF]      NVARCHAR (50) NULL,
    [CategoryId] INT           NULL,
    PRIMARY KEY CLUSTERED ([Id] ASC)
);

DELETE [dbo].[Food]

INSERT INTO [dbo].[Food] ([CategoryId],[Id], [NameF], [Name]) VALUES (1,2,N'Salade de papaye verte avec goeuf grillé',N'Green papaya salad with grilled beef')
INSERT INTO [dbo].[Food] ([CategoryId],[Id], [NameF], [Name]) VALUES (1,3,N'Rouleaux de printemps froid(crevettes et poulet)',N'Cold Spring rolls (shrimp and chicken)')
INSERT INTO [dbo].[Food] ([CategoryId],[Id], [NameF], [Name]) VALUES (1,4,N'Rouleaux impériaux (poulet émincé et légumes)',N'Imperial rolls (minced chicken and vegetables)')
INSERT INTO [dbo].[Food] ([CategoryId],[Id], [NameF], [Name]) VALUES (1,5,N'Rouleaux frits aux légumes',N'Fried vegetable rolls')
INSERT INTO [dbo].[Food] ([CategoryId],[Id], [NameF], [Name]) VALUES (1,6,N'Raviolis à la sauce Hunan',N'Hunan dumplings')
INSERT INTO [dbo].[Food] ([CategoryId],[Id], [NameF], [Name]) VALUES (1,41,N'Tofu sel et poivre',N'Salt & pepper tofu')
INSERT INTO [dbo].[Food] ([CategoryId],[Id], [NameF], [Name]) VALUES (2,8,N'Soupe tonkinoise au boeuf(boeuf saignant, boulettes en tendon)',N'Beef Tonkinese special(rare beef, meatballs and soft tendon)')
INSERT INTO [dbo].[Food] ([CategoryId],[Id], [NameF], [Name]) VALUES (2,9,N'Soupe tonkinoise au boeuf saignant',N'Rare beef Tonkinese soup')
INSERT INTO [dbo].[Food] ([CategoryId],[Id], [NameF], [Name]) VALUES (2,11,N'Soupe tonkinoise au poulet',N'Chicken Tonkinese soup')
INSERT INTO [dbo].[Food] ([CategoryId],[Id], [NameF], [Name]) VALUES (2,12,N'Soupe aux fruits de mer',N'Seafood noodle soup')
INSERT INTO [dbo].[Food] ([CategoryId],[Id], [NameF], [Name]) VALUES (2,13,N'Soupe aux légumes (bouillon de poulet)',N'Vegetable noodle soup (chicken soup base)')
INSERT INTO [dbo].[Food] ([CategoryId],[Id], [NameF], [Name]) VALUES (2,14,N'Soupe wonton et nouilles',N'Wonton noodle soup')
INSERT INTO [dbo].[Food] ([CategoryId],[Id], [NameF], [Name]) VALUES (2,15,N'Soupe Tom yam au poulet et nouilles',N'Chicken Tom Yam noodle soup')
INSERT INTO [dbo].[Food] ([CategoryId],[Id], [NameF], [Name]) VALUES (2,16,N'Soupe Tom yam aux fruits de mer et nouilles',N'Seafood Tom Yam noodle soup')
INSERT INTO [dbo].[Food] ([CategoryId],[Id], [NameF], [Name]) VALUES (3,21,N'Crevettes grillées avec vermicelles',N'Grilled shrimp with vermicelli')
INSERT INTO [dbo].[Food] ([CategoryId],[Id], [NameF], [Name]) VALUES (3,22,N'Poulet grillé avec vermicelles',N'Grilled chicken with vermicelli')
INSERT INTO [dbo].[Food] ([CategoryId],[Id], [NameF], [Name]) VALUES (3,23,N'Boeuf grillé avec vermicelles',N'Grilled beef with vermicelli')
INSERT INTO [dbo].[Food] ([CategoryId],[Id], [NameF], [Name]) VALUES (3,24,N'Crevettes grillées avec riz vapeur',N'Grilled shrimp with steamed rice')
INSERT INTO [dbo].[Food] ([CategoryId],[Id], [NameF], [Name]) VALUES (3,25,N'Poulet grillé avec riz vapeur',N'Grilled chicken with steamed rice')
INSERT INTO [dbo].[Food] ([CategoryId],[Id], [NameF], [Name]) VALUES (3,26,N'Boeuf grillé avec riz vapeur',N'Grilled beef with steamed rice')
INSERT INTO [dbo].[Food] ([CategoryId],[Id], [NameF], [Name]) VALUES (4,27,N'Poulet General Tao',N'General Tao chicken')
INSERT INTO [dbo].[Food] ([CategoryId],[Id], [NameF], [Name]) VALUES (4,42,N'Végétarien General Tao',N'General Tao vegetarian')
INSERT INTO [dbo].[Food] ([CategoryId],[Id], [NameF], [Name]) VALUES (4,28,N'Poulet et légumes assortis sautés',N'Stir-fried chicken with mixed vegetables')
INSERT INTO [dbo].[Food] ([CategoryId],[Id], [NameF], [Name]) VALUES (4,29,N'Poulet croustillan au citron',N'Crispy lemon chicken')
INSERT INTO [dbo].[Food] ([CategoryId],[Id], [NameF], [Name]) VALUES (4,30,N'Boeuf sauté au brocoli',N'Stir-fried beef and broccoli')
INSERT INTO [dbo].[Food] ([CategoryId],[Id], [NameF], [Name]) VALUES (4,43,N'Boeuf au poivre noir',N'Black pepper beef')
INSERT INTO [dbo].[Food] ([CategoryId],[Id], [NameF], [Name]) VALUES (4,31,N'Crevettes à la széchuan',N'Szechuan style shrimp')
INSERT INTO [dbo].[Food] ([CategoryId],[Id], [NameF], [Name]) VALUES (4,32,N'Crevettes à la széchuan aux poivrons',N'Szechuan pepper shrimp')
INSERT INTO [dbo].[Food] ([CategoryId],[Id], [NameF], [Name]) VALUES (4,33,N'Crevettes et légumes assortis sautés',N'Stir-fried shrimp with mixed vegetables')
INSERT INTO [dbo].[Food] ([CategoryId],[Id], [NameF], [Name]) VALUES (5,34,N'Chow Mein à la cantonnaise (poulet et crevettes)',N'Canonese Chow Mein (with chicken & shrimp)')
INSERT INTO [dbo].[Food] ([CategoryId],[Id], [NameF], [Name]) VALUES (5,35,N'Pansit (vermicelles sautés aux crevettes, poulet et légumes)',N'Pansit (vermicelli sautéed with shrimp, chicken and vegetables)')
INSERT INTO [dbo].[Food] ([CategoryId],[Id], [NameF], [Name]) VALUES (5,36,N'Pad thaï (nouilles style thaï avec poulet et crevettes)',N'Pad Thai (Thai style noodles with chicken & shrimp)')
INSERT INTO [dbo].[Food] ([CategoryId],[Id], [NameF], [Name]) VALUES (5,37,N'Nouilles de riz sauté à la Singapour (poulet et crevettes)',N'Singapore rice noodles (chicken & shrimp)')
INSERT INTO [dbo].[Food] ([CategoryId],[Id], [NameF], [Name]) VALUES (5,38,N'Riz frit aux légumes',N'Vegetable fried rice')
INSERT INTO [dbo].[Food] ([CategoryId],[Id], [NameF], [Name]) VALUES (5,39,N'Riz frit style Thaï',N'Thai style fried rice')
INSERT INTO [dbo].[Food] ([CategoryId],[Id], [NameF], [Name]) VALUES (5,40,N'Riz frit maison (poulet et crevettes)',N'House fried rice (chicken and shrimp)')
INSERT INTO [dbo].[Food] ([CategoryId],[Id], [NameF], [Name]) VALUES (6,51,N'Thé vert',N'Green tea')
INSERT INTO [dbo].[Food] ([CategoryId],[Id], [NameF], [Name]) VALUES (6,52,N'Perrier',N'Perrier')
INSERT INTO [dbo].[Food] ([CategoryId],[Id], [NameF], [Name]) VALUES (6,53,N'Jus (orange, pommes, ananas, cranberges et clamato)',N'Jiuce (orange, apple, pinapple, cranberry and clamato)')
INSERT INTO [dbo].[Food] ([CategoryId],[Id], [NameF], [Name]) VALUES (6,54,N'Coke, Coke diète, Ginger Ale et 7up (cannette)',N'Coke, Diet Coke, Ginger Ale and Sprite (can)')
INSERT INTO [dbo].[Food] ([CategoryId],[Id], [NameF], [Name]) VALUES (6,55,N'César sans alcool',N'Virgin Caesar')
INSERT INTO [dbo].[Food] ([CategoryId],[Id], [NameF], [Name]) VALUES (6,56,N'Colada sans alcool',N'Virgin Colada')
INSERT INTO [dbo].[Food] ([CategoryId],[Id], [NameF], [Name]) VALUES (6,57,N'Lychees',N'Lychees')
INSERT INTO [dbo].[Food] ([CategoryId],[Id], [NameF], [Name]) VALUES (6,58,N'Banane Frite avec crème glacée',N'Fried banana with ice cream')
INSERT INTO [dbo].[Food] ([CategoryId],[Id], [NameF], [Name]) VALUES (6,59,N'Crème glacée',N'Ice cream')