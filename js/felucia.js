Vue.component('mission', {
	data: function () {
		return {
		isMobile: false,
		squads: [
		//---------------------------------------------------------------------------------------------------------------------------------DS SQUADS
			{	
				id: 0,
				name: 'Sith Empire',
				toons: ['darth_revan', 'bastila_shan_(fallen)', 'hk-47', 'sith_marauder', 'darth_malak']
			},
			{
				id: 1,
				name: 'First Order',
				toons: ['kylo_ren_(unmasked)', 'kylo_ren', 'first_order_executioner', 'first_order_officer', 'first_order_stormtrooper'],
			},
			{
				id: 2,
				name: 'Bounty Hunters',
				toons: ['bossk','jango_fett', 'boba_fett', 'dengar', 'cad_bane']
			},
			{
				id: 3,
				name: 'Empire',
				toons: ['emperor_palpatine', 'darth_vader', 'grand_admiral_thrawn', 'grand_moff_tarkin', 'tie_fighter_pilot'  ]
			},
			{
				id: 4,
				name: 'Night Sisters',
				toons: ['mother_talzin', 'asajj_ventress', 'nightsister_zombie', 'old_daka', 'nightsister_spirit' ]
			},
			{
				id: 5,
				name: 'Sith Triumvirate',
				toons: ['darth_traya', 'darth_sion', 'darth_nihilus', 'sith_empire_trooper', 'count_dooku']
			},
			{
				id: 6,
				name: 'Separatist Droids',
				toons: ['general_grievous', 'b2_super_battle_droid', 'b1_battle_droid', 'droideka', 'ig100_magnaguard']
			},
			{
				id: 7,
				name: 'Geonosians',
				toons: ['geonosian_brood_alpha', 'geonosian_soldier', 'geonosian_spy', 'poggle_the_lesser', 'sun_fac']
			},
			{
				id: 8,
				name: 'Nute team',
				toons: ['nute_gunrey', 'b1_battle_droid', 'b2_super_battle_droid', 'droideka', 'ig100_magnaguard' ]
			},
			{
				id: 9,
				name: 'Dooku + Asajj',
				toons: ['count_dooku', 'asajj_ventress']
			},
			{
				id: 10,
				name: 'Poggle Geos',
				toons: ['poggle_the_lesser', 'geonosian_soldier', 'geonosian_spy', 'sun_fac', 'geonosian_brood_alpha']
			},
			{
				id: 11,
				name: 'Chimaera standard',
				toons: ['hound\'s_tooth', 'imperial_tie_fighter', 'tie_silencer', 'xanadu_blood', 'emperor\'s_shuttle']
			},
			{
				id: 12,
				name: 'Executrix standard',
				toons: ['sun_fac\'s_geonosian_starfighter', 'geonosian_spy_starfighter', 'geonosian_soldier\'s_starfighter', 'gauntlet_starfighter', 'slave_i' ]
			},
			{
				id: 13,
				name: 'Chimaera bugs (without Hound\'s Tooth)',
				toons: ['sun_fac\'s_geonosian_starfighter', 'geonosian_spy_starfighter', 'geonosian_soldier\'s_starfighter', 'gauntlet_starfighter', 'slave_i']
			},
			{
				id: 14,
				name: 'Nightsisters without Asajj',
				toons: ['mother_talzin',  'nightsister_zombie', 'old_daka', 'nightsister_spirit', 'talia' ]
			},
			{
				id: 15,
				name: 'Sith Triumvirate without Dooku',
				toons: ['darth_traya', 'darth_sion', 'darth_nihilus', 'sith_empire_trooper', 'sith_assassin']
			},
			{
				id: 16,
				name: 'Test squad',
				toons: ['count_dooku', 'general_grievous', 'b2_super_battle_droid', 'nute_gunrey', 'b1_battle_droid']
			},
			{
				id: 17,
				name: 'Executrix without Hound\'s Tooth',
				toons: ['b-28_extinction-class_bomber', 'emperor\'s_shuttle', 'sith_fighter', 'tie_advanced_x1', 'xanadu_blood']
			},
			{
				id: 18,
				name: 'Chimaera with Hound\'s Tooth and bugs',
				toons: ['hound\'s_tooth', 'geonosian_spy_starfighter', 'geonosian_soldier\'s_starfighter', 'sun_fac\'s_geonosian_starfighter', 'gauntlet_starfighter', 'slave_i']
			},
			
			//---------------------------------------------------------------------------------------------------------------------------------LS SQUADS
			{
				id: 19, 
				name: 'LS test squad',
				toons: ['ahsoka_tano_(fulcrum)','ahsoka_tano_(fulcrum)','ahsoka_tano_(fulcrum)','ahsoka_tano_(fulcrum)','ahsoka_tano_(fulcrum)',] //hands down best character
			},
			{
				id: 20, //Use once points are updated
				name: 'LS test squad',
				toons: ['ahsoka_tano','ahsoka_tano','ahsoka_tano','ahsoka_tano','ahsoka_tano',] 
			},
			{
				id: 21, 
				name: 'Required: GAS and Snips (21k+ Power)',
				toons: ['general_skywalker','ahsoka_tano','noone','noone','noone'] 
			},
			{
				id: 22, 
				name: 'Required: Kenobi and Clones (21k+ Power)',
				toons: ['general_kenobi','cc-2224__cody_', 'clone_sergeant_-_phase_i','noone','noone'] 
			},
			{
				id: 23,
				name: 'Shaak-ti and Clones (22k+ Power)',
				toons: ['shaak_ti', 'arc_trooper', 'ct-21-0408__echo_', 'ct-5555__fives_', 'ct-7567__rex_']
				
			},
			{
				id: 24,
				name: 'Unknown',
				toons: ['unknown', 'unknown','unknown','unknown','unknown',]
				
			},
			{
				id:25,
				name: 'Required: Galactic Republic Jedi (23k+ Power)',
				toons: ['ki-adi-mundi', 'shaak_ti', 'gl_kenobi', 'mace_windu', 'aayla_secura',]
             },			
             {
                id:26,
                name: 'Kenobi Negotiator Fleet w/o Y-Wing',
                toons: ['negotiator', 'anakin\'s_eta-2_starfighter','ahsoka_tano\'s_jedi_starfighter', 'umbaran_starfighter', 'plo_koon\'s_jedi_starfighter', 'clone_sergeant\'s_arc-170', 'rex\'s_arc-170', 'jedi_consular\'s_starfighter']
             },
             {
                id:27,
                name: 'Home One Fleet',
                toons: ['han\'s_millennium_falcon'],
             },
              {
                id:28,
                name: 'Padme Republic  (Required: Padme and Galactic Republic )',
                toons: ['padmé_amidala','jedi_knight_anakin','general_kenobi','c-3po', 'ahsoka_tano'],
             },
             {
				id:29,
				name: 'Jedi Training Rey',
				toons: ['rey_(jedi_training)', 'c-3po', 'r2-d2', 'finn', 'bb-8'],
				 
			 },
			 {
				id:30,
				name: 'JKR Jedi (Required: Jedi)',
				toons: ['jedi_knight_revan', 'bastila_shan', 'jolee_bindo', 'hermit_yoda', 'grand_master_yoda'],
				 
			 },
			 {
                id:31,
                name: 'Kenobi Negotiator Fleet',
                toons: ['negotiator', 'anakin\'s_eta-2_starfighter','BTL-B_Y-wing_Starfighter', 'umbaran_starfighter', 'plo_koon\'s_jedi_starfighter', 'clone_sergeant\'s_arc-170', 'rex\'s_arc-170', 'ahsoka_tano\'s_jedi_starfighter',]
             },
             {
                id:32,
                name: 'Kenobi Negotiator Fleet - CS start (see video)',
                toons: ['negotiator', 'anakin\'s_eta-2_starfighter', 'clone_sergeant\'s_arc-170', 'umbaran_starfighter','ahsoka_tano\'s_jedi_starfighter', 'plo_koon\'s_jedi_starfighter', 'rex\'s_arc-170', 'jedi_consular\'s_starfighter']
             },
             {
				id:33,
				name: 'JKL Lead (Required: Jedi)',
				toons: ['jedi_knight_luke_skywalker', 'hermit_yoda', 'obi-wan_kenobi_(old_ben)', 'grand_master_yoda', 'aayla_secura'],
			 },
			 {
				id: 34,
				name: 'Shaak-ti Lead Clones',
				toons: ['shaak_ti', 'arc_trooper', 'ct-21-0408__echo_', 'ct-7567__rex_', 'ct-5555__fives_']
				
			},
			{
				id: 35,
				name: 'GAS Lead Clones',
				toons: ['general_skywalker', 'arc_trooper', 'ct-21-0408__echo_', 'ct-7567__rex_', 'ct-5555__fives_']
				
			},
			{
                id:36,
                name: 'Padme Republic  (Required: Galactic Republic)',
                toons: ['padmé_amidala','jedi_knight_anakin','general_kenobi','c-3po', 'ahsoka_tano'],
             },
             {
                id:37,
                name: 'Padme Republic' ,
                toons: ['padmé_amidala','jedi_knight_anakin','general_kenobi','c-3po', 'ahsoka_tano'],
             },
             {
				id: 38,
				name: 'Required: Galactic Republic Jedi, 22k+ Power',
				toons: ['general_kenobi', 'jedi_knight_anakin','grand_master_yoda','ahsoka_tano','barriss_offee',]
				
			},
			{
				id: 39,
				name: 'Unknown (Required: Jedi, 23k+ Power)',
				toons: ['unknown', 'unknown','unknown','unknown','unknown',]
				
			},
			{
				id: 40,
				name: 'Required: GAS & 501st, 23k+ Power',
				toons: ['general_skywalker', 'ct-21-0408__echo_','ct-7567__rex_','arc_trooper','ct-5555__fives_',]
				
			},
			{
				id: 41,
				name: 'Required: Galactic Republic, Padme, JKA, GK, 23k+ Power',
				toons: ['padmé_amidala', 'jedi_knight_anakin','general_kenobi','commander_ahsoka_tano','gl_kenobi',]
				
			},
			{
				id: 42,
				name: 'Resistance (GL Rey or oFinn Lead) (variants available)',
				toons: ['gl_rey', 'resistance_hero_finn','resistance_hero_poe','amilyn_holdo','rey_(jedi_training)',]
				
			},
			 {
				id:43,
				name: 'JKR Jedi with GAS (Required: Jedi)',
				toons: ['jedi_knight_revan', 'bastila_shan', 'jolee_bindo', 'general_skywalker', 'grand_master_yoda'],
				 
			 },
			 {
				id:44,
				name: 'Rebels (Either CLS or oROLO Lead)',
				toons: ['commander_luke_skywalker', 'chewbacca', 'han_solo', 'threepio_&_chewie', 'c-3po'],
			 },
			 {
				id:45,
				name: 'Rebel Fighters',
				toons: ['mon_mothma', 'pao', 'hoth_rebel_scout', 'cara_dune', 'kyle_katarn_o'],
				 
			 },
			 {
				 id:46,
				 name: 'Galactic Legend Luke (Required: Jedi) (variants available)',
				 toons: [ 'jedi_knight_luke_skywalker','gl_luke','hermit_yoda','jolee_bindo','jedi_knight_revan',],
			 },
			 {
				 id:47,
				 name: 'Galactic Legend Luke (Required: Jedi, 23k+ Power) (variants available)',
				 toons: ['jedi_knight_luke_skywalker','gl_luke','hermit_yoda','jolee_bindo','jedi_knight_revan',],
			 },
			 {
				 id:48,
				 name: 'Galactic Legend Luke (Required: Jedi) (variants available)',
				 toons: ['jedi_knight_luke_skywalker','gl_luke', 'hermit_yoda','jolee_bindo','jedi_knight_revan',],
			 },
			 {
                id:49,
                name: 'Padme Republic Without Snips (Required: Galactic Republic)',
                toons: ['padmé_amidala','jedi_knight_anakin','general_kenobi','c-3po', 'barriss_offee'],
             },
             {
				id: 50,
				name: 'Shaak-ti Lead Clones (Required: Galactic Republic)',
				toons: ['shaak_ti', 'arc_trooper', 'ct-21-0408__echo_', 'ct-7567__rex_', 'ct-5555__fives_']
				
			 },
			 {
				id: 51,
				name: 'Home One Rebel Fleet',
				toons: ['home_one', 'han\'s_millennium_falcon', 'biggs_darklighter\'s_x-wing', 'bistan\'s_u-wing', 'rebel_y-wing', 'phantom_ii', 'cassian\'s_u-wing','ghost']
				
		 	 },
		 	 {
				id: 52,
				name: 'Raddus Resistance Fleet',
				toons: ['raddus','poe_dameron\'s_x-wing','rey\'s_millennium_falcon', 'biggs_darklighter\'s_x-wing', 'han\'s_millennium_falcon', 'ebon_hawk', "lando\'s_millennium_falcon","resistance_x-wing"]
				
		 	 },
             {
                id:53,
                name: 'Padme Republic (Required: Padme, Galactic Republic 16.5k+ Power)',
                toons: ['padmé_amidala','jedi_knight_anakin','general_kenobi','c-3po', 'ahsoka_tano'],
             },
             {
				id: 54,
				name: 'Shaak-ti Lead Clones (Required: Galactic Republic, 21k+ Power)',
				toons: ['shaak_ti', 'arc_trooper', 'ct-21-0408__echo_', 'ct-7567__rex_', 'ct-5555__fives_']
				
			 },
             {
                id:55,
                name: 'Padme Republic Without Snips (Required: Galactic Republic, 21k+ Power)',
                toons: ['padmé_amidala','jedi_knight_anakin','general_kenobi','commander_ahsoka_tano', 'r2-d2'],
             },
             {
				 id:56,
				 name: 'Galactic Legend Luke (Required: Jedi, 21k+ Power) (variants available)',
				 toons: [ 'jedi_knight_luke_skywalker','gl_luke','hermit_yoda','jolee_bindo','jedi_knight_revan',],
			 },
			 {
				id:57,
				name: 'JKL Lead (Required: Jedi, 21k+ Power)',
				toons: ['jedi_knight_luke_skywalker', 'hermit_yoda', 'obi-wan_kenobi_(old_ben)', 'grand_master_yoda', 'aayla_secura'],
			 },
			 {
				id:58,
				name: 'JKR Jedi (Required: Jedi, 21k+ Power)',
				toons: ['jedi_knight_revan', 'bastila_shan', 'jolee_bindo', 'hermit_yoda', 'grand_master_yoda'],
				 
			 },
			 {
				 id:59,
				 name: 'Galactic Legend Luke (Required: Jedi, 22k+ Power) (variants available)',
				 toons: [ 'jedi_knight_luke_skywalker','gl_luke','hermit_yoda','jolee_bindo','jedi_knight_revan',],
			 },
			 {
				id:60,
				name: 'JKL Lead (Required: Jedi, 22k+ Power)',
				toons: ['jedi_knight_luke_skywalker', 'hermit_yoda', 'obi-wan_kenobi_(old_ben)', 'grand_master_yoda', 'aayla_secura'],
			 },
			 {
				id:61,
				name: 'JKR Jedi (Required: Jedi, 22k+ Power)',
				toons: ['jedi_knight_revan', 'bastila_shan', 'jolee_bindo', 'hermit_yoda', 'grand_master_yoda'],
				 
			 },
			 {
				id:62,
				name: 'JKR Jedi with GAS (Required: Jedi, 22k+ Power)',
				toons: ['jedi_knight_revan', 'bastila_shan', 'jolee_bindo', 'general_skywalker', 'grand_master_yoda'],
				 
			 },
			 {
                id:63,
                name: 'Padme Republic With CAT (Required: Padme, Galactic Republic 16.5k+ Power)',
                toons: ['padmé_amidala','jedi_knight_anakin','general_kenobi','commander_ahsoka_tano', 'r2-d2'],
             },
             {
				id: 64,
				name: 'Required: Galactic Republic, Padme, JKA, GK, 23k+ Power',
				toons: ['padmé_amidala', 'jedi_knight_anakin','general_kenobi','ahsoka_tano','commander_ahsoka_tano',]
				
  			 },
			 {
				id: 65,
				name: 'Galactic Legend Kenobi (Required: Jedi) (Variants Available)',
				toons: ['gl_kenobi', 'general_skywalker','ahsoka_tano','aayla_secura','mace_windu',]
				
			 },
			 {
				id: 66,
				name: 'Galactic Legend Kenobi (Required: Jedi, 21k+ Power) (Variants Available)',
				toons: ['gl_kenobi', 'general_kenobi','grand_master_yoda','aayla_secura','mace_windu',]
				
			 },
             {
				id: 67,
				name: 'Galactic Legend Kenobi (Required: Jedi, 22k+ Power) (Variants Available)',
				toons: ['gl_kenobi', 'general_skywalker','aayla_secura','general_kenobi','ahsoka_tano',]
				
			 },
			 {
				id: 68,
				name: 'Galactic Legend Kenobi (Required: GR Jedi, 22k+ Power) (Variants Available)',
				toons: ['gl_kenobi', 'general_skywalker','aayla_secura','mace_windu','ahsoka_tano',]
				
			 },
			 {
				id: 69,
				name: 'Galactic Legend Kenobi (Required: GR, 21k+ Power) (Variants Available)',
				toons: ['gl_kenobi', 'mace_windu','commander_ahsoka_tano','aayla_secura','padmé_amidala',]
				
			 },
			 {
				id: 70,
				name: 'Bad Batch (22k+ Power)',
				toons: ['hunter', 'echo','wrecker','tech','omega',]
				
			 },
			 {
				id: 71,
				name: 'Padme 501st (Required Padme, Galactic Republic 16.5k+ Power )',
				toons: ['padmé_amidala','arc_trooper', 'ct-21-0408__echo_', 'ct-7567__rex_', 'ct-5555__fives_']
				
			 },
             {
                id:72,
                name: 'Padme Republic',
                toons: ['padmé_amidala','jedi_knight_anakin','general_kenobi','commander_ahsoka_tano', 'r2-d2'],
             },
             {
                id:73,
                name: 'Lord Vader (solo)',
                toons: ['gl_vader','noone','noone','noone','noone']
             },
             {
                id:74,
                name: 'Jabba the Hutt',
                toons: ['gl_jabba','krrsantan','skiff_lando','boba_fett','boushh'],
                video: "https://youtu.be/k_Msldf_jqA?t=165"
             },
             {
                id:75,
                name: 'Rey + Scoundrals',
                toons: ['gl_rey','hondo_ohnaka','ig-11','kuiil','dash_rendar']
             },
             {
                id:76,
                name: 'Bounty Hunters + Hondo',
                toons: ['bossk','hondo_ohnaka','jango_fett','the_mandalorian','greef_karga']
             },
             {
                id:77,
                name: 'Executor',
                toons: ['executor','hound\'s_tooth','razor_crest','xanadu_blood','slave_i','ig-2000'],
                video: 'https://youtu.be/4qAsN4u5Ejo?t=467'
             },
             {
                id:78,
                name: 'Unknown Young Lando Team',
                toons: ['unknown','unknown','unknown','unknown','young_lando_calrissian',]
             },
             {
				id: 79,
				name: 'Palpatine and Empire',
				toons: ['emperor_palpatine', 'darth_vader', 'mara_jade_teh','grand_admiral_thrawn','admiral_piett']
				
			 },
			 {
				id: 80,
				name: 'Palp w/Empire or Starkiller',
				toons: ['emperor_palpatine', 'starkiller', 'mara_jade_teh','visas_marr','barriss_offee'],
				video: "https://youtu.be/4qAsN4u5Ejo?t=283"
				
			 },
			 {
				 id:81,
				 name: 'Galactic Legend Rey (variants available)',
				 toons: ['gl_rey','resistance_hero_finn','resistance_hero_poe','r2-d2','amilyn_holdo'],
			 },
             {
                id:82,
                name: 'Inquisitors',
                toons: ['grand_inquisitor', 'seventh_sister', 'ninth_sister', 'fifth_brother','eighth_brother']
             },
             {
				id: 83,
				name: 'Rey/Gas 501st',
				toons: ['gl_rey', 'ct-21-0408__echo_','ct-7567__rex_','arc_trooper','ct-5555__fives_',],
				video: "https://www.youtube.com/watch?v=PaU-AA1Re3Q"
				
			 },
			 {
				id: 84,
				name: 'Malevolence Fleet',
				toons: ['malevolence', 'hyena_bomber', 'vulture_droid','sun_fac\'s_geonosian_starfighter', 'geonosian_spy_starfighter', 'geonosian_soldier\'s_starfighter'],
                video: 'https://youtu.be/4qAsN4u5Ejo?t=538'
				
			},
             
             



		],
		enemies: [
		'B2 Rocket Droid',//0
		'Command Battle Droid',//1
	    'Count Dooku', //2
	    'General Grevious',//3
	    'General Kalani',//4
	    'Geonosian Brood Alpha', //5
	    'Jango Fett',//6
	    'Nute Gunray', //7	
	    'Poggle the Lesser',//8
	    'Reek',//9
	    'T-Series Tactical Droid',//10
	    'Wat Tambor', //11 
	    'Executrix',//12
	    'Malevolence',//13
	    'Chimaera',//14        
	    'Nexu',//15 
	    'Hound\'s Tooth',//16	
        'Wave 1: Wat Tambor (L), Nute Gunray, Poggle the Lesser',
        'Wave 2: Jedi Master Kenobi',
        'Wave 1: Command Battle Droid (L), 2x Magnaguard, B2, B1, Droideka',
        "Wave 2: Nute Gunray (L), 2x Magnaguard, 2x B2, Security Battle Droid",//20
        "Wave 2: Wat Tambor (L), 2x Magnaguard, 2x B2, Security Battle Droid",
        "Wave 2: Geonosian Brood Alpha (L), Geo Spy, Geo Soldier, Poggle, Sun Fac",
        "Malevolence, Hyena Bomber, Vulture Droid, Geo Starfighter",
        "Malevolence, Sun Fac's Starfigher, Geo Spy's Starfighter, Geo Starfighter",
        "Wave 1: Geonosian Brood Alpha (L), Geo Spy, Geo Soldier, Poggle, Sun Fac",//25
        "Wave 2: Nexu",
        "Wave 1: Geonosian Brood Alpha, Geonosian Soldier, Reek",
        "Wave 1: Acklay",
        "Wave 1: 3x Partisan Fighter, 2x Rebel Spy",
        "Wave 2: Kanan Jarrus (L), Ezra Bridger, Chopper, Rex, Partisan Fighter",//30
        "Wave 1: Stormtrooper Commander (L), Stormtrooper, Tie Pilot, Recon Trooper, Scout Trooper",
        "Wave 2: Imperial Officer (L), Stormtrooper Commander, Stormtrooper, Tie Pilot, Recon Trooper, Scout Trooper",
        "Executrix, Tie Advanced X1, Tie Bomber, Tie Fighter, Tie Interceptor (R)",
        "Unknown",
        "Wave 2: General Veers (L), Colonel Starck, Stormtrooper Commander, 2x Stormtrooper, Tie Pilot",//35
        "Wave 1: Mob Enforcer (L), Cartel Spy, 2x Cartel Bruiser, Cartel Saboteur",
        "Wave 2: Qi'ra (L), Young Han, Cartel Bruiser, Cartel Spy, Cartel Saboteur ",
        "Chimaera, Tie Advanced X1, Tie Bomber, Tie Fighter, Tie Interceptor (R)",
        "Wave 1: Pirate Leader (L), Pirate Enforcer, Pirate Saboteur, Pirate Spy, Pirate Bruiser",//39
        "Wave 2: Hondo Ohnaka (L), Pirate Enforcer, Pirate Saboteur, Pirate Spy, Pirate Bruiser",//40
        "Wave 1: Imperial Officer (L), Stormtrooper Commander, Stormtrooper, Recon Trooper, Range Trooper",
        "Wave 2: Imperial Officer (L), Stormtrooper Commander, Stormtrooper, Recon Trooper, Range Trooper, Scout Trooper",
        "Wave 2: Grand Moff Tarkin (L), Imperial Officer, Stormtrooper Commander, Stormtrooper, Recon Trooper, Range Trooper",
        "Wave 2: Iden Versio (L), Stormtrooper Commander, Stormtrooper, Recon Trooper, Range Trooper, Scout Trooper",
		],
		platoons: [
        ["Scythe",	"7",
"Commander Ahsoka Tano",	"6","Boba Fett, Scion of Jango",	"5","Darth Malgus",	"5","General Skywalker",	"4","Maul",	"4","Rebel Officer Leia Organa",	"4",
"Ben Solo",	"3","Grand Inquisitor",	"3","Jedi Knight Luke Skywalker",	"3",
"Razor Crest",	"3","TIE/IN Interceptor Prototype",	"3","Embo",	"2","Sith Eternal Emperor",	"2","Wat Tambor",	"2","Aayla Secura",	"1","Admiral Ackbar",	"1","Bastila Shan",	"1","BT-1",	"1","Cassian's U-wing",	"1","Count Dooku",	"1",
"Darth Malak",	"1","Death Trooper",	"1","Emperor's Shuttle",	"1","General Hux",	"1","General Kenobi",	"1","General Veers",	"1",
"Han Solo",	"1","Hermit Yoda",	"1","Imperial Probe Droid",	"1","Jawa",	"1","Jedi Master Luke Skywalker",	"1","Ki-Adi-Mundi",	"1","Kuiil",	"1","L3-37",	"1","Lando Calrissian",	"1","Logray",	"1",
"Lord Vader",	"1","Outrider",	"1","Plo Koon's Jedi Starfighter",	"1","Rey",	"1","Sana Starros",	"1","Sith Trooper",	"1","Snowtrooper",	"1",
"Starkiller",	"1","Supreme Leader Kylo Ren",	"1","The Mandalorian",	"1","Threepio & Chewie",	"1","Zaalbar",	"1",       
        ]
		],
		guides:[
		'See also: 50 Shards of Kam Discord Server',
		'Its Just Ian Modding and Strategy: www.youtube.com/watch?v=9eLKxWumn_Y',
		'McMole2 Defeat the Reek: www.youtube.com/watch?v=ktfNTjiUiGY',
		'Mikayas Sky & Ahsoka guide www.youtube.com/watch?v=rWu4qahiA-g',
		'BitDynasty GAS + Ahsoka guide: www.youtube.com/watch?v=mV7PPNRL2Nc',
		'Z-Gaming JTR with C3P0: www.youtube.com/watch?v=rOqVwTLFMOE',//5
		'DBofficial G10 SARGE guide: www.youtube.com/watch?v=QPfu0URQliU&',//6
		'Warrior SWGOH Livestream t/s 10:06: www.youtube.com/watch?v=YAP5s-bavXE',//7
		'Bulldog g12 JKL destorys LS geo tb: www.youtube.com/watch?v=g_co0UtkMvA',//8
		],
        modifiers:[
        'At the beginning of battle, each side summons a random Corellian Engineering Cargo Ship. At the start of their turn, Cargo Ships gain Protection Over Time (10%) for 1 turn.',
        'Coaxium: +25% Critical Damage and Speed; -15% Accuracy; will be critically hit if able; enemies can ignore Taunt to target this character; if this character is defeated by a status effect, Coaxium will not be granted to anyone'
        ],
        notes:[
        'With Lord Vader\'s ultimate ability, this can be done on full auto',
        'Unclear if this is even possible right now',
        "Currently Bugged!",
        "A variation of most GL lineups should also work"
        ],
        reqs:[
        'Lord Vader (Relic 5+)',
        '5x Dark Side or Neutral (Relic 5+)',
        'Dark Side Ships (7-Star), Scythe',
        'Dark Side Ships (7-Star)',
        '5x Dark Side or Neutral (Relic 6+)',//4
        '5x Geonosian (Relic 7+)',//5
        '5x characters (Relic 5+)',
        '5x characters (Relic 5+), Doctor Aphra',
        '5x characters (Relic 5+), Jabba the Hutt',
        '5x characters (Relic 5+), Qi\'ra, Young Han Solo',
        'Lando\'s Millenium Falcon (7-Star)',//10
        'Ships (7-Star)',
        '5x characters (Relic 6+)',
        "5x characters (Relic 6+), Young Lando Calrissian",
        "5x characters (Relic 6+), Hondo Ohnaka",
        "5x characters (Relic 6+), Jabba the Hutt",//15
        ],
		platims:[
        'Phase 2 Mixed Felucia (Self)',
        'Phase 3 Mixed Tatooine'
		],
		missions: [{
			id: 0,
			name: 'c1',
			type: 'usual',
			position: 'left',
			rewards: [
				'Wave 1: 125,000',
                'Wave 2: 250,000'
				],
            preferredSquads: [74],//jabba
			dangerousEnemies: [41,42],
            reqs: [15],
			},	{
			id: 1,
			name: 'c2',
			type: 'usual',
			position: 'right',
			rewards: [
				'Wave 1: 125,000',
                'Wave 2: 250,000'
				],
			preferredSquads: [78],//lando
			dangerousEnemies: [41,44],
            reqs: [13],
			}, {
			id: 2,
			name: 'c3',
			type: 'usual',
			position: 'left',
			rewards: [
				'Wave 1: 125,000',
                'Wave 2: 250,000'
				],
            preferredSquads: [83,82,44,80],//generic
			dangerousEnemies: [39,40],
            reqs: [12],
            notes: [3]
			},
			{
			id: 4,
			name: 'c5',
			type: 'usual',
			position: 'right',
			rewards: [
				'Wave 1: 125,000',
                'Wave 2: 250,000'
				],
            preferredSquads: [75,76],//hondo
			dangerousEnemies: [41,43],
            reqs: [14],
			}, 
			
			{
			id: 5,
			name: 'c6',
			type: 'fleet',
			position: 'left',
			rewards: [
				'Wave 1: 500,000',
				],
				preferredSquads: [77,84,31],
				dangerousEnemies: [38],
            reqs: [11],
			}, 
            {
			id: 6,
			name: 'c7',
			type: 'deploy',
			position: 'right',
            stars: [
               '1 Star: 148,125,000',
               '2 Stars: 237,000,000',
               '3 Stars: 316,000,000',
               '3 Stars after maximum preload: 167,875,000 ',
            ]
			}, 
			{id: 30, name: 'm2', type: 'platoon', position: 'left',preqs:["Characters: Relic 6","Ships: 7-Star"], requiredToons: [0], platzones: [0,1]}
		],
		selectedMission: '',
		seen: false,
	}
	},
	template: '#mission',
	methods: {
		mq () {
			this.isMobile = window.matchMedia('(max-width: 600px)').matches;
		},	
        hide: function() {
			    this.seen = false;
		}
	},
})

let app = new Vue({
	el: '#app',
	data: {
		isVisible: false
	},
});
