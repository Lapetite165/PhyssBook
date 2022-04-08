//Ces données ont servi de base de données pour le test de l'application avant qu'il y ait le back-end

import { getImageFromApi } from "../API/TMDBAPI"

export const AssoData = [
   {
      id:1,
      title:"Comit'ss Trad'ss",
      peksTitle:"Comité des Traditions",
      previewImage:"",
      overview:"Le comit'ss est responsable de la PTT et de tout ce qui est en lien avec les traditions au tabagn'ss.",
      color:['red', 'black'],
      font:'Helvetica',
      calendarId:undefined,
      members:[
         {
            id:11,
            title:'FT Com',
            bucque:'Lex',
            famss:'    B',
            name:'Lucas Texeiro',
            description:'Le FT Com ne fait rien de ses journées, il adore le Ricard et se met des turbos cuites tous les jours.',
            image:getImageFromApi(null)

         },
         {
            id:12,
            title:"FT Vie à l'Ec'ss",
            bucque:"Toud'ÿla",
            famss:'M',
            name:'Etienne Chataignon',
            description:'',
            image:getImageFromApi(null)
         },
         {
            id:13,
            title:"FT Manip",
            bucque:"K&l&trad's",
            famss:'®',
            name:'Léa Laguenny',
            description:'',
            image:getImageFromApi(null)
         },
         {
            id:14,
            title:"FT Harpag'ss/Matos",
            bucque:"K'zor",
            famss:'Á',
            name:'Célia Baux',
            description:'',
            image:getImageFromApi(null)
         },
         {
            id:15,
            title:'MT',
            bucque:'Foürchep',
            famss:'V',
            name:'Aurélien Coupeau',
            description:'',
            image:getImageFromApi(null)
         }
      ]
   },
   {
      id:2,
      title:"GaSole",
      peksTitle:'GaSole Bordeaux',
      previewImage:"",
      overview:"GaSole est l'association environnementale et solidaire du campus. Elle organise les évènements liés à l’environnement et les actions solidaires. Notre but est de sensibiliser les PG aux enjeux concernant ces thématiques et de leur proposer des façons d’agir à notre échelle pour avoir un impact positif.",
      color:'#CDFFF1',
      font:'Zagot',
      calendarId:undefined,
      members:[
         {
         id:21,
         title:'Zi',
         bucque:"Va'o",
         famss:'0',
         name:'Amélie Charbonnel',
         description:'',
         image:''
        },
        {
           id:22,
           title:"ViZi",
           bucque:"T't",
           famss:'79',
           name:'Marie Béraudi',
           description:'',
           image:''
        },
        {
           id:23,
           title:"Harpag'ss",
           bucque:"Poütr",
           famss:'39',
           name:'Tristan Alexandre',
           description:'',
           image:''
        },
        {
           id:24,
           title:"Matos",
           bucque:"L&gro",
           famss:'77',
           name:'Octave Bonnet',
           description:'',
           image:''
        },
        {
           id:25,
           title:'Com',
           bucque:'Leman',
           famss:'6',
           name:'Jean Cordier',
           description:'',
           image:''
        },
        {
         id:26,
         title:'Maraude',
         bucque:'Tcho²',
         famss:'100-118-147',
         name:'Michel Tchouprina',
         description:'',
         image:''
         }
      ]
   },
   {
      id:3,
      title:"Comit'ss",
      image_preview:"",
      overview:"Figure emblèmatique de la vie au Tabagn'ss' de Bordel'ss, le Comit'ss gère la PTT et reste actif tout au long de l'an'ss",
      members:[{
           id:1,
           title:'FT Com',
           bucque:'Lex',
           famss:'35-90-110-158',
           name:'Lucas Texeiro',
           description:'',
           image:''

        },
        {
           id:2,
           title:"FT Vie à l'Ec'ss",
           bucque:'ToudAMla',
           famss:'47',
           name:'Etienne Chataignon',
           description:'',
           image:''
        },
        {
           id:3,
           title:"FT Manip",
           bucque:"K&l&trad's",
           famss:'5!-62',
           name:'Léa Laguenny',
           description:'',
           image:''
        },
        {
           id:4,
           title:"FT Harpag'ss",
           bucque:"K'zor",
           famss:'143',
           name:'Célia Baux',
           description:'',
           image:''
        },
        {
           id:5,
           title:'MT',
           bucque:'Foürchep',
           famss:'57-142',
           name:'Aurélien Coupeau',
           description:'',
           image:''
        }]
   },
   {
      id:4,
      title:"Comit'ss",
      image_preview:"",
      overview:"Figure emblèmatique de la vie au Tabagn'ss' de Bordel'ss, le Comit'ss gère la PTT et reste actif tout au long de l'an'ss",
      members:[{
           id:11,
           title:'FT Com',
           bucque:'Lex',
           famss:'35-90-110-158',
           name:'Lucas Texeiro',
           description:'',
           image:''

        },
        {
           id:12,
           title:"FT Vie à l'Ec'ss",
           bucque:'ToudAMla',
           famss:'47',
           name:'Etienne Chataignon',
           description:'',
           image:''
        },
        {
           id:13,
           title:"FT Manip",
           bucque:"K&l&trad's",
           famss:'5!-62',
           name:'Léa Laguenny',
           description:'',
           image:''
        },
        {
           id:14,
           title:"FT Harpag'ss",
           bucque:"K'zor",
           famss:'143',
           name:'Célia Baux',
           description:'',
           image:''
        },
        {
           id:15,
           title:'MT',
           bucque:'Foürchep',
           famss:'57-142',
           name:'Aurélien Coupeau',
           description:'',
           image:''
        }]
   },
   {
      id:5,
      title:"Comit'ss",
      image_preview:"",
      overview:"Figure emblèmatique de la vie au Tabagn'ss' de Bordel'ss, le Comit'ss gère la PTT et reste actif tout au long de l'an'ss",
      members:[{
           id:11,
           title:'FT Com',
           bucque:'Lex',
           famss:'35-90-110-158',
           name:'Lucas Texeiro',
           description:'',
           image:''

        },
        {
           id:12,
           title:"FT Vie à l'Ec'ss",
           bucque:'ToudAMla',
           famss:'47',
           name:'Etienne Chataignon',
           description:'',
           image:''
        },
        {
           id:13,
           title:"FT Manip",
           bucque:"K&l&trad's",
           famss:'5!-62',
           name:'Léa Laguenny',
           description:'',
           image:''
        },
        {
           id:14,
           title:"FT Harpag'ss",
           bucque:"K'zor",
           famss:'143',
           name:'Célia Baux',
           description:'',
           image:''
        },
        {
           id:15,
           title:'MT',
           bucque:'Foürchep',
           famss:'57-142',
           name:'Aurélien Coupeau',
           description:'',
           image:''
        }]
   },
   {
      id:6,
      title:"Comit'ss",
      image_preview:"",
      overview:"Figure emblèmatique de la vie au Tabagn'ss' de Bordel'ss, le Comit'ss gère la PTT et reste actif tout au long de l'an'ss",
      members:[{
           id:11,
           title:'FT Com',
           bucque:'Lex',
           famss:'35-90-110-158',
           name:'Lucas Texeiro',
           description:'',
           image:''

        },
        {
           id:12,
           title:"FT Vie à l'Ec'ss",
           bucque:'ToudAMla',
           famss:'47',
           name:'Etienne Chataignon',
           description:'',
           image:''
        },
        {
           id:13,
           title:"FT Manip",
           bucque:"K&l&trad's",
           famss:'5!-62',
           name:'Léa Laguenny',
           description:'',
           image:''
        },
        {
           id:14,
           title:"FT Harpag'ss",
           bucque:"K'zor",
           famss:'143',
           name:'Célia Baux',
           description:'',
           image:''
        },
        {
           id:15,
           title:'MT',
           bucque:'Foürchep',
           famss:'57-142',
           name:'Aurélien Coupeau',
           description:'',
           image:''
        }]
   },
   {
      id:7,
      title:"Comit'ss",
      image_preview:"",
      overview:"Figure emblèmatique de la vie au Tabagn'ss' de Bordel'ss, le Comit'ss gère la PTT et reste actif tout au long de l'an'ss",
      members:[{
           id:11,
           title:'FT Com',
           bucque:'Lex',
           famss:'35-90-110-158',
           name:'Lucas Texeiro',
           description:'',
           image:''

        },
        {
           id:12,
           title:"FT Vie à l'Ec'ss",
           bucque:'ToudAMla',
           famss:'47',
           name:'Etienne Chataignon',
           description:'',
           image:''
        },
        {
           id:13,
           title:"FT Manip",
           bucque:"K&l&trad's",
           famss:'5!-62',
           name:'Léa Laguenny',
           description:'',
           image:''
        },
        {
           id:14,
           title:"FT Harpag'ss",
           bucque:"K'zor",
           famss:'143',
           name:'Célia Baux',
           description:'',
           image:''
        },
        {
           id:15,
           title:'MT',
           bucque:'Foürchep',
           famss:'57-142',
           name:'Aurélien Coupeau',
           description:'',
           image:''
        }]
   },
   {
      id:8,
      title:"Comit'ss",
      image_preview:"",
      overview:"Figure emblèmatique de la vie au Tabagn'ss' de Bordel'ss, le Comit'ss gère la PTT et reste actif tout au long de l'an'ss",
      members:[{
           id:11,
           title:'FT Com',
           bucque:'Lex',
           famss:'35-90-110-158',
           name:'Lucas Texeiro',
           description:'',
           image:''

        },
        {
           id:12,
           title:"FT Vie à l'Ec'ss",
           bucque:'ToudAMla',
           famss:'47',
           name:'Etienne Chataignon',
           description:'',
           image:''
        },
        {
           id:13,
           title:"FT Manip",
           bucque:"K&l&trad's",
           famss:'5!-62',
           name:'Léa Laguenny',
           description:'',
           image:''
        },
        {
           id:14,
           title:"FT Harpag'ss",
           bucque:"K'zor",
           famss:'143',
           name:'Célia Baux',
           description:'',
           image:''
        },
        {
           id:15,
           title:'MT',
           bucque:'Foürchep',
           famss:'57-142',
           name:'Aurélien Coupeau',
           description:'',
           image:''
        }]
   },
   {
      id:9,
      title:"Comit'ss",
      image_preview:"",
      overview:"Figure emblèmatique de la vie au Tabagn'ss' de Bordel'ss, le Comit'ss gère la PTT et reste actif tout au long de l'an'ss",
      members:[{
           id:11,
           title:'FT Com',
           bucque:'Lex',
           famss:'35-90-110-158',
           name:'Lucas Texeiro',
           description:'',
           image:''

        },
        {
           id:12,
           title:"FT Vie à l'Ec'ss",
           bucque:'ToudAMla',
           famss:'47',
           name:'Etienne Chataignon',
           description:'',
           image:''
        },
        {
           id:13,
           title:"FT Manip",
           bucque:"K&l&trad's",
           famss:'5!-62',
           name:'Léa Laguenny',
           description:'',
           image:''
        },
        {
           id:14,
           title:"FT Harpag'ss",
           bucque:"K'zor",
           famss:'143',
           name:'Célia Baux',
           description:'',
           image:''
        },
        {
           id:15,
           title:'MT',
           bucque:'Foürchep',
           famss:'57-142',
           name:'Aurélien Coupeau',
           description:'',
           image:''
        }]
   },
   {
      id:10,
      title:"Comit'ss",
      image_preview:"",
      overview:"Figure emblèmatique de la vie au Tabagn'ss' de Bordel'ss, le Comit'ss gère la PTT et reste actif tout au long de l'an'ss",
      members:[{
           id:11,
           title:'FT Com',
           bucque:'Lex',
           famss:'35-90-110-158',
           name:'Lucas Texeiro',
           description:'',
           image:''

        },
        {
           id:12,
           title:"FT Vie à l'Ec'ss",
           bucque:'ToudAMla',
           famss:'47',
           name:'Etienne Chataignon',
           description:'',
           image:''
        },
        {
           id:13,
           title:"FT Manip",
           bucque:"K&l&trad's",
           famss:'5!-62',
           name:'Léa Laguenny',
           description:'',
           image:''
        },
        {
           id:14,
           title:"FT Harpag'ss",
           bucque:"K'zor",
           famss:'143',
           name:'Célia Baux',
           description:'',
           image:''
        },
        {
           id:15,
           title:'MT',
           bucque:'Foürchep',
           famss:'57-142',
           name:'Aurélien Coupeau',
           description:'',
           image:''
        }]
   },
   {
      id:11,
      title:"Comit'ss",
      image_preview:"",
      overview:"Figure emblèmatique de la vie au Tabagn'ss' de Bordel'ss, le Comit'ss gère la PTT et reste actif tout au long de l'an'ss",
      members:[{
           id:11,
           title:'FT Com',
           bucque:'Lex',
           famss:'35-90-110-158',
           name:'Lucas Texeiro',
           description:'',
           image:''

        },
        {
           id:12,
           title:"FT Vie à l'Ec'ss",
           bucque:'ToudAMla',
           famss:'47',
           name:'Etienne Chataignon',
           description:'',
           image:''
        },
        {
           id:13,
           title:"FT Manip",
           bucque:"K&l&trad's",
           famss:'5!-62',
           name:'Léa Laguenny',
           description:'',
           image:''
        },
        {
           id:14,
           title:"FT Harpag'ss",
           bucque:"K'zor",
           famss:'143',
           name:'Célia Baux',
           description:'',
           image:''
        },
        {
           id:15,
           title:'MT',
           bucque:'Foürchep',
           famss:'57-142',
           name:'Aurélien Coupeau',
           description:'',
           image:''
        }]
   },
   {
      id:12,
      title:"Comit'ss",
      image_preview:"",
      overview:"Figure emblèmatique de la vie au Tabagn'ss' de Bordel'ss, le Comit'ss gère la PTT et reste actif tout au long de l'an'ss",
      members:[{
           id:11,
           title:'FT Com',
           bucque:'Lex',
           famss:'35-90-110-158',
           name:'Lucas Texeiro',
           description:'',
           image:''

        },
        {
           id:12,
           title:"FT Vie à l'Ec'ss",
           bucque:'ToudAMla',
           famss:'47',
           name:'Etienne Chataignon',
           description:'',
           image:''
        },
        {
           id:13,
           title:"FT Manip",
           bucque:"K&l&trad's",
           famss:'5!-62',
           name:'Léa Laguenny',
           description:'',
           image:''
        },
        {
           id:14,
           title:"FT Harpag'ss",
           bucque:"K'zor",
           famss:'143',
           name:'Célia Baux',
           description:'',
           image:''
        },
        {
           id:15,
           title:'MT',
           bucque:'Foürchep',
           famss:'57-142',
           name:'Aurélien Coupeau',
           description:'',
           image:''
        }]
   },
   {
      id:13,
      title:"Comit'ss",
      image_preview:"",
      overview:"Figure emblèmatique de la vie au Tabagn'ss' de Bordel'ss, le Comit'ss gère la PTT et reste actif tout au long de l'an'ss",
      members:[{
           id:11,
           title:'FT Com',
           bucque:'Lex',
           famss:'35-90-110-158',
           name:'Lucas Texeiro',
           description:'',
           image:''

        },
        {
           id:12,
           title:"FT Vie à l'Ec'ss",
           bucque:'ToudAMla',
           famss:'47',
           name:'Etienne Chataignon',
           description:'',
           image:''
        },
        {
           id:13,
           title:"FT Manip",
           bucque:"K&l&trad's",
           famss:'5!-62',
           name:'Léa Laguenny',
           description:'',
           image:''
        },
        {
           id:14,
           title:"FT Harpag'ss",
           bucque:"K'zor",
           famss:'143',
           name:'Célia Baux',
           description:'',
           image:''
        },
        {
           id:15,
           title:'MT',
           bucque:'Foürchep',
           famss:'57-142',
           name:'Aurélien Coupeau',
           description:'',
           image:''
        }]
   }
   ]

export const DevData = [
   {
      id:1,
      title:"ZiTelek'ss",
      bucque:"Le'Yo",
      famss:'Ð', //165
      name:'Yohan Nicolay',
      description:'',
      image:''

   },
   {
      id:2,
      title:"Zi² Telek'ss",
      bucque:"O'TT",
      famss:'W', //58
      name:'Samuel Theron',
      description:'',
      image:''
   },
   {
      id:3,
      title:"Zi Com Asso",
      bucque:"Viniton",
      famss:'U', //56
      name:'Loïc Bethiot',
      description:'',
      image:''
   }
]

export const PostData =[
   {
      id:1876345783,
      title:"508",
      organizers:[
         {
            title:"Comit'ss Trad'ss"
         },
         {
            title:"ZiEk'r"
         }
      ],
      overview:"C'est une manip 1000 trad'ss préparée par le Comit'ss et les ZiEk'r pour fêter la moitié de la vie à l'Ec'ss des Anciens.",
      previewImage:getImageFromApi(null),
      backgroundImage:getImageFromApi(null),
      postImages:getImageFromApi(null),
      viewability:{anciens:true, puntos:false} ,
      startingDate:Date.now(),
      endingDate:Date.now()
   },
   {
      id:285792,
      title:"Zi² Telek'ss",
      bucque:"O'TT",
      famss:'58',
      name:'Samuel Theron',
      description:'',
      image:''
   },
   {
      id:33280,
      title:"Zi Com Asso",
      bucque:"K&l&trad's",
      famss:'5!-62',
      name:'Loïc Bethiot',
      description:'',
      image:''
   },
   {
      id:4689,
      title:"ZiTelek'ss infern'ss",
      bucque:"Le'yo",
      famss:'165',
      name:'Yohan Nicolay',
      description:'',
      image:''

   },
   {
      id:56948239,
      title:"Zi² Telek'ss",
      bucque:"O'TT",
      famss:'58',
      name:'Samuel Theron',
      description:'',
      image:''
   },
   {
      id:6904674,
      title:"Zi Com Asso",
      bucque:"K&l&trad's",
      famss:'5!-62',
      name:'Loïc Bethiot',
      description:'',
      image:''
   },
   {
      id:793528,
      title:"ZiTelek'ss infern'ss",
      bucque:"Le'yo",
      famss:'165',
      name:'Yohan Nicolay',
      description:'',
      image:''

   },
   {
      id:88562730,
      title:"Zi² Telek'ss",
      bucque:"O'TT",
      famss:'58',
      name:'Samuel Theron',
      description:'',
      image:''
   },
   {
      id:9609347,
      title:"Zi Com Asso",
      bucque:"K&l&trad's",
      famss:'5!-62',
      name:'Loïc Bethiot',
      description:'',
      image:''
   }
]