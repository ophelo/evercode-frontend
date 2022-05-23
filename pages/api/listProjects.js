export default async function code(req, res) {
  res.status(200).json({
    files: [
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
        language: "javascript",
        body: ["02"],
        description: "ciao2",
        date: "16/12/2000",
      },
      {
        _id: "2222",
        title: "file3",
        language: "javascript",
        body: ["03"],
        description: "ciao3",
        date: "16/12/2000",
      },
      {
        _id: "3333",
        title: "file4",
        language: "javascript",
        body: ["04"],
        description: "ciao4",
        date: "16/12/2000",
      },
    ],
  });
}
