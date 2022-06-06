export default async function code(req, res) {
  res.status(200).json({
       result: [
            {
                "title": "prova1 ",
                "date": "16/12/2020", 
                "description": "ciao",
                "language": "c+",
            },
            {
                "title": "prova2 ",
                "date": "16/12/2020", 
                "description": "ciao",
                "language": "c+",
            },
            {
                "title": "prova3 ",
                "date": "16/12/2020", 
                "description": "ciao",
                "language": "c+",
            },
            {
                "title": "prova4 ",
                "date": "16/12/2020", 
                "description": "ciao",
                "language": "c+",
            },

       ] 
  
    })
};