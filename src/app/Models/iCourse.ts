export interface ICourse {
  _id: number;
  title: string;
  subTitle: string;
  price: number;
  description: string;
  priceType: string;
  BestSeller: string;
  photo: any;
  updated?: string;
  instructor: string;
  content: string;

  rating: number;
  duration: number;
  DiscountPrice: number;
  percentageDis: number;
  timeDis: number;
  NumRating: number;
  lectures: number;
  articles: number;
  exercises: number;
  resources: number;
  sections: number;
  // ContentSection?:  Array<Object>,
  NumStd?: number;
  // learn?:  Array<Object>,
  // requirements?:  Array<Object>,
  // instructorId: { type: mongoose.Schema.ObjectId, ref: "User" },
  subCategory: number;
  categoryId?: number;
}
