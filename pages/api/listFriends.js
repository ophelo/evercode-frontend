export default async function code(req, res) {
  res.status(200).json({
    files: [
      {
        _id: "5555",
        title: "Prova",
        language: "javascript",
        body: ["01"],
        description: "ebjbeqkfwbqqbwk",
        date: "16/12/2000",
      },
      {
        _id: "6666",
        title: "Test",
        language: "markdown",
        body: ["02"],
        description: "wgqebieqbgqebge",
        date: "16/12/2000",
      },
      {
        _id: "7777",
        title: "ciao",
        language: "markdown",
        body: ["03"],
        description: "PROPROPROPROVA",
        date: "16/12/2000",
      },
      {
        _id: "8888",
        title: "fileeeee",
        language: "javascript",
        body: ["04"],
        description: "hello132",
        date: "16/12/2000",
      },
      {
        _id: "0000",
        title: "file1",
        language: "javascript",
        body: ["01"],
        description: "ciao1",
        date: "16/12/2000",
      },
      {
        _id: "1111",
        title: "file2",
        language: "python",
        body: ["02"],
        description: "PROPROPROPROVA",
        date: "16/12/2000",
      },
      {
        _id: "2222",
        title: "file3",
        language: "javascript",
        body: ["03"],
        description: "PROERNWNIFW",
        date: "16/12/2000",
      },
      {
        _id: "3333",
        title: "file4",
        language: "python",
        body: ["04"],
        description: "Ok",
        date: "16/12/2000",
      },
    ],
  });
}
