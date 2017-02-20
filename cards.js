function card_dealer()

{
	var hearts = [h2,h3,h4,h5,h6,h7,h8,h9,h10,hJ,hQ,hK,hA];
	var clubs = [c2,c3,c4,c5,c6,c7,c8,c9,c10,cJ,cQ,cK,cA];
	var diamonds = [d2,d3,d4,d5,d6,d7,d8,d9,d10,dJ,dQ,dK,dA];
	var spades = [s2,s3,s4,s5,s6,s7,s8,s9,s10,sJ,sQ,sK,sA];

	deck = [hearts + clubs + diamonds + spades]

	console.log(deck);

}
card_dealer()