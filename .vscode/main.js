class Book {
  constructor(
    title,
    author,
    copyDate,
    iSbn,
    numPages,
    numTimesCheckedOut,
    discarded
  ) {
    this.title = title;
    this.author = author;
    this.copyDate = copyDate;
    this.iSbn = iSbn;
    this.numPages = numPages;
    this.numTimesCheckedOut = numTimesCheckedOut;
    this.discarded = discarded;
  }
  checkout(uses = 1) {
    this.numTimesCheckedOut += uses;
  }
}

class Novel extends Book {
  constructor(
    title,
    author,
    copyDate,
    iSbn,
    numPages,
    numTimesCheckedOut,
    discarded
  ) {
    super(
      title,
      author,
      copyDate,
      iSbn,
      numPages,
      numTimesCheckedOut,
      discarded
    );
  }
  discard() {
    if (this.numTimesCheckedOut > 100) {
      this.discarded = "Yes";
    }
  }
}
const myNovel = new Novel(
  "Pride and Prejudice",
  "Jane Austen",
  1813,
  1111111111111,
  432,
  32,
  "No"
);

class Manual extends Book {
  constructor(
    title,
    author,
    copyDate,
    iSbn,
    numPages,
    numTimesCheckedOut,
    discarded
  ) {
    super(
      title,
      author,
      copyDate,
      iSbn,
      numPages,
      numTimesCheckedOut,
      discarded
    );
  }
  thrash(currentYear) {
    if (currentYear - this.copyDate > 5) {
      this.discarded = "Yes";
    }
  }
}
const myManual = new Manual(
  "Top Secret Shuttle Building Manual",
  "Redacted",
  2013,
  0000000000000,
  1147,
  1,
  "No"
);

myManual.thrash(2023);
console.log(myManual);

myNovel.checkout(5);
console.log(myNovel);
myNovel.discard();
