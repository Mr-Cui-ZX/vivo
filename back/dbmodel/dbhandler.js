var mongoose=require("mongoose");
var Schema=mongoose.Schema;

var user={
	tel:{type:String},
	password:{type:String}
}

var home={
	id:{type:String},
	swipe:{type:Array},
	main:{type:Array},
	path:{type:String},
	h2:{type:String},
	p:{type:String},
}

var xplay={
	id:{type:String},
	list:{type:Array},
	imgPath:{type:String},
	title:{type:String},
	product:{type:Array},
	text:{type:String},
	des:{type:String}
}

var shop={
	swipe:{type:Array},
	id:{type:String},
	imgUrl:{type:String},
	nav:{type:Array},
	floor:{type:Array},
	item:{type:String},
	text:{type:String},
	goods:{type:Array},
	path:{type:String},
	title:{type:String},
	des:{type:String},
	price:{type:String}
}

var contain={
	data:{type:Array},
	one:{type:Array},
	id:{type:String},
	url:{type:String},
	h2:{type:String},
	p:{type:String},
	price:{type:String},
	bg:{type:String}
}

var detail={
	data:{type:Array}
}

var cart={
	id:{type:String},
	tel:{type:String},
	name:{type:String},
	currentprice:{type:String},
	price:{type:String},
	number:{type:Number},
	url:{type:String}
}

mongoose.model("user",new Schema(user));
mongoose.model("home",new Schema(home));
mongoose.model("xplay",new Schema(xplay));
mongoose.model("shop",new Schema(shop));
mongoose.model("contain",new Schema(contain));
mongoose.model("detail",new Schema(detail));
mongoose.model("cart",new Schema(cart));

module.exports={
	user:mongoose.model("user"),
	home:mongoose.model("home"),
	xplay:mongoose.model("xplay"),
	shop:mongoose.model("shop"),
	contain:mongoose.model("contain"),
	detail:mongoose.model("detail"),
	cart:mongoose.model("cart")
}