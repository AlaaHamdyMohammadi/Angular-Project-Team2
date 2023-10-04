export interface ICourse {
  _id: number;
  title: String;
  subTitle: String;
  price: number;
  description: String;
  priceType: String;
  BestSeller: String;
  photo: any;
  updated?: String;
  instructor: String;
  content: String;

  rating: Number;
  duration: Number;
  DiscountPrice: Number;
  percentageDis: Number;
  timeDis: Number;
  NumRating: Number;
  lectures: Number;
  articles: Number;
  exercises: Number;
  resources: Number;
  sections: Number;
  // ContentSection?:  Array<Object>,
  NumStd?: Number;
  // learn?:  Array<Object>,
  // requirements?:  Array<Object>,
  // instructorId: { type: mongoose.Schema.ObjectId, ref: "User" },
  subCategory: number;
  categoryId?: number;
}
